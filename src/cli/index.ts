#!/usr/bin/env node
import fs from "node:fs/promises";
import path from "node:path";
import { processQueue } from "../queue/queueProcessor.js";
import { validateJob } from "../jobs/validator.js";
import { loadJob } from "../jobs/jobStore.js";
import { createSampleJobs } from "../core/sample.js";
import { writeStatus } from "../core/status.js";
import { paths } from "../utils/paths.js";
import { ensureDir } from "../utils/fs.js";

function argValue(flag: string) {
  const index = process.argv.indexOf(flag);
  return index >= 0 ? process.argv[index + 1] : undefined;
}

async function clean() {
  await fs.rm(paths.output, { recursive: true, force: true });
  await ensureDir(paths.output);
  await writeStatus();
  console.log("Output cleaned.");
}

async function main() {
  const command = process.argv[2] ?? "status";

  if (command === "process") {
    const jobPath = argValue("--job");
    const dryRun = process.argv.includes("--dry-run");
    const retryFailed = process.argv.includes("--retry-failed");
    const status = await processQueue({ jobPath: jobPath ? path.resolve(jobPath) : undefined, dryRun, retryFailed });
    console.log(JSON.stringify(status, null, 2));
    return;
  }

  if (command === "validate") {
    const jobPath = process.argv[3] ?? argValue("--job");
    if (!jobPath) throw new Error("Usage: youtubeengine validate jobs/sample.json");
    const job = await loadJob(path.resolve(jobPath));
    const result = await validateJob(job, false);
    console.log(JSON.stringify(result, null, 2));
    process.exitCode = result.ok ? 0 : 1;
    return;
  }

  if (command === "sample") {
    await createSampleJobs();
    console.log("Sample jobs created in /jobs. Add input/sample.mp4 before processing.");
    return;
  }

  if (command === "clean") {
    await clean();
    return;
  }

  if (command === "status") {
    const status = await writeStatus();
    console.log(JSON.stringify(status, null, 2));
    return;
  }

  throw new Error(`Unknown command: ${command}`);
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
