import { EngineJob } from "../../types.js";

export function buildTikTokPackage(job: EngineJob) {
  return {
    platform: "tiktok",
    caption: `${job.title}\n\n${job.hashtags.join(" ")}`,
    notes: "Upload scaffold only. Use generated MP4 and metadata package."
  };
}
