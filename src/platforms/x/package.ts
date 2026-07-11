import { EngineJob } from "../../types.js";

export function buildXPackage(job: EngineJob) {
  return {
    platform: "x",
    caption: `${job.title}\n\n${job.hashtags.join(" ")}`,
    notes: "Upload scaffold only. Use generated MP4 and metadata package."
  };
}
