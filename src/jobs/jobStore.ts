import path from "node:path";
import { EngineJob } from "../types.js";
import { listJsonFiles, readJson, writeJson } from "../utils/fs.js";
import { paths } from "../utils/paths.js";

export async function loadJob(filePath: string): Promise<EngineJob> {
  return readJson<EngineJob>(filePath);
}

export async function saveJob(filePath: string, job: EngineJob) {
  job.updatedAt = new Date().toISOString();
  await writeJson(filePath, job);
}

export async function loadAllJobs(): Promise<Array<{ filePath: string; job: EngineJob }>> {
  const files = await listJsonFiles(paths.jobs);
  const loaded = await Promise.all(files.map(async (filePath) => ({ filePath, job: await loadJob(filePath) })));
  return loaded.sort((a, b) => a.job.createdAt.localeCompare(b.job.createdAt));
}

export async function writeSampleJob(name: string, job: EngineJob) {
  await writeJson(path.join(paths.jobs, `${name}.json`), job);
}
