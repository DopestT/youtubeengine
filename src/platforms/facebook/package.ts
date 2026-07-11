import { EngineJob } from "../../types.js";

export function buildFacebookPackage(job: EngineJob) {
  return {
    platform: "facebook",
    caption: `${job.title}\n\n${job.hashtags.join(" ")}`,
    notes: "Upload scaffold only. Use generated MP4 and metadata package."
  };
}
