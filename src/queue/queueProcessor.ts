import path from "node:path";
import { loadAllJobs, loadJob, saveJob } from "../jobs/jobStore.js";
import { validateJob } from "../jobs/validator.js";
import { loadBrandProfile } from "../brands/brandLoader.js";
import { renderPlatformVideo } from "../video/ffmpeg.js";
import { buildMetadata, writeMetadataPackage } from "../metadata/metadataGenerator.js";
import { ensureDir } from "../utils/fs.js";
import { paths } from "../utils/paths.js";
import { Logger } from "../utils/logger.js";
import { writeStatus } from "../core/status.js";

const logger = new Logger("queue");

export interface ProcessOptions {
  jobPath?: string;
  dryRun?: boolean;
  retryFailed?: boolean;
}

export async function processQueue(options: ProcessOptions = {}) {
  const candidates = options.jobPath
    ? [{ filePath: options.jobPath, job: await loadJob(options.jobPath) }]
    : await loadAllJobs();

  for (const entry of candidates) {
    const { filePath } = entry;
    let job = entry.job;

    if (job.status === "completed") continue;
    if (job.status === "failed" && !options.retryFailed) continue;
    if (job.status === "processing") {
      await logger.warn("Skipping job already marked processing", { jobId: job.jobId });
      continue;
    }

    const validation = await validateJob(job, !options.dryRun);
    if (!validation.ok) {
      job.status = "failed";
      job.error = validation.errors.join("; ");
      job.retryCount += 1;
      await saveJob(filePath, job);
      await logger.error("Job validation failed", { jobId: job.jobId, errors: validation.errors });
      continue;
    }

    if (options.dryRun || job.dryRun) {
      await logger.info("Dry run passed", { jobId: job.jobId, warnings: validation.warnings });
      continue;
    }

    try {
      job.status = "processing";
      job.error = undefined;
      await saveJob(filePath, job);
      await logger.info("Processing job", { jobId: job.jobId });

      const brand = await loadBrandProfile(job.brand);
      const jobOutput = path.join(paths.output, job.jobId);
      await ensureDir(jobOutput);

      for (const platform of job.targetPlatforms) {
        const platformOut = path.join(jobOutput, platform);
        await ensureDir(platformOut);
        const rendered = await renderPlatformVideo(job, platform, platformOut);
        const metadata = buildMetadata(job, brand, platform, rendered.videoPath, rendered.thumbnailPath);
        await writeMetadataPackage(platformOut, metadata);
      }

      job.status = "completed";
      await saveJob(filePath, job);
      await logger.info("Completed job", { jobId: job.jobId });
    } catch (error) {
      job.status = "failed";
      job.retryCount += 1;
      job.error = error instanceof Error ? error.message : String(error);
      await saveJob(filePath, job);
      await logger.error("Job failed", { jobId: job.jobId, error: job.error });
    }
  }

  return writeStatus();
}
