import path from "node:path";
import { EngineStatus } from "../types.js";
import { loadAllJobs } from "../jobs/jobStore.js";
import { writeJson } from "../utils/fs.js";
import { paths } from "../utils/paths.js";

export async function computeStatus(): Promise<EngineStatus> {
  const jobs = await loadAllJobs();
  const completedOutputs = jobs
    .filter(({ job }) => job.status === "completed")
    .map(({ job }) => path.join("output", job.jobId));

  return {
    totalJobs: jobs.length,
    pending: jobs.filter(({ job }) => job.status === "pending").length,
    processing: jobs.filter(({ job }) => job.status === "processing").length,
    completed: jobs.filter(({ job }) => job.status === "completed").length,
    failed: jobs.filter(({ job }) => job.status === "failed").length,
    lastRun: new Date().toISOString(),
    completedOutputs
  };
}

export async function writeStatus() {
  const status = await computeStatus();
  await writeJson(path.join(paths.output, "status.json"), status);
  return status;
}
