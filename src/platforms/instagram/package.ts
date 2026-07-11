import { EngineJob } from "../../types.js";

export function buildInstagramPackage(job: EngineJob) {
  return {
    platform: "instagram",
    caption: `${job.title}\n\n${job.hashtags.join(" ")}`,
    notes: "Upload scaffold only. Use generated MP4 and metadata package."
  };
}
