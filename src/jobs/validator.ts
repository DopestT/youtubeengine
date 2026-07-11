import path from "node:path";
import { EngineJob, PlatformName, SourceType } from "../types.js";
import { exists } from "../utils/fs.js";
import { fromRoot } from "../utils/paths.js";

const sourceTypes: SourceType[] = ["video", "image-sequence", "prompt-video", "stream-clip", "audio-reactive"];
const platforms: PlatformName[] = ["youtube", "tiktok", "instagram", "x", "facebook"];

export interface ValidationResult {
  ok: boolean;
  errors: string[];
  warnings: string[];
}

export async function validateJob(job: EngineJob, checkFiles = true): Promise<ValidationResult> {
  const errors: string[] = [];
  const warnings: string[] = [];

  if (!job.jobId) errors.push("jobId is required");
  if (!job.projectName) errors.push("projectName is required");
  if (!job.brand) errors.push("brand is required");
  if (!sourceTypes.includes(job.sourceType)) errors.push(`sourceType must be one of: ${sourceTypes.join(", ")}`);
  if (!Array.isArray(job.sourceFiles) || job.sourceFiles.length === 0) errors.push("sourceFiles must contain at least one file");
  if (!Array.isArray(job.targetPlatforms) || job.targetPlatforms.length === 0) errors.push("targetPlatforms must contain at least one platform");
  for (const platform of job.targetPlatforms ?? []) {
    if (!platforms.includes(platform)) errors.push(`Unsupported platform: ${platform}`);
  }
  if (!job.title) errors.push("title is required");
  if (!job.description) warnings.push("description is empty");
  if (!["pending", "processing", "completed", "failed"].includes(job.status)) errors.push("status must be pending, processing, completed, or failed");
  if (typeof job.retryCount !== "number") errors.push("retryCount must be a number");

  if (checkFiles && job.sourceFiles) {
    for (const source of job.sourceFiles) {
      const fullPath = path.isAbsolute(source) ? source : fromRoot(source);
      if (!(await exists(fullPath))) errors.push(`Missing source file: ${source}`);
    }
  }

  return { ok: errors.length === 0, errors, warnings };
}
