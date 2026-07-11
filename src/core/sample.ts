import { EngineJob } from "../types.js";
import { writeSampleJob } from "../jobs/jobStore.js";

function base(id: string, brand: string, projectName: string, title: string): EngineJob {
  const now = new Date().toISOString();
  return {
    jobId: id,
    projectName,
    brand,
    sourceType: "video",
    sourceFiles: ["input/sample.mp4"],
    targetPlatforms: ["youtube", "tiktok", "instagram", "x", "facebook"],
    title,
    description: "Replace this with the final caption and context for the finished short.",
    hashtags: ["#Shorts"],
    tags: ["shorts", "social video"],
    category: "Entertainment",
    visibility: "private",
    endCard: { enabled: true, text: "Follow for more.", position: "bottom" },
    watermark: { enabled: true, text: brand, position: "top-right" },
    captions: { text: title, style: "bold-creator", burnIn: true },
    thumbnailFrame: 1,
    hookText: title,
    callToAction: "Follow for the next file.",
    render: { fps: 30, width: 1080, height: 1920, cropMode: "smart-center", normalizeAudio: true },
    status: "pending",
    retryCount: 0,
    createdAt: now,
    updatedAt: now
  };
}

export async function createSampleJobs() {
  await writeSampleJob("sample-legacyworks", {
    ...base("sample-legacyworks", "legacy-works-ventures", "Legacy Works Ventures", "The file opens here"),
    captions: { text: "The file opens here.", style: "documentary", burnIn: true },
    callToAction: "Follow for the next file."
  });

  await writeSampleJob("sample-archangels", {
    ...base("sample-archangels", "archangels-club", "Archangels Club", "Enter the Room"),
    captions: { text: "Enter the Room.", style: "luxury-archangels", burnIn: true },
    callToAction: "Private by Design."
  });

  await writeSampleJob("sample-terms-and-conditions", {
    ...base("sample-terms-and-conditions", "terms-and-conditions", "Terms & Conditions", "Read the fine print"),
    captions: { text: "Read the fine print.", style: "vintage-cartoon-title-card", burnIn: true },
    callToAction: "Read the fine print."
  });

  await writeSampleJob("sample-pikerway", {
    ...base("sample-pikerway", "the-piker-way", "The Piker Way", "Watch the full context"),
    captions: { text: "Unofficial fan-made clip. Watch the full context.", style: "political-satire", burnIn: true },
    callToAction: "Watch the full context."
  });

  await writeSampleJob("sample-newmajority", {
    ...base("sample-newmajority", "new-majority", "New Majority", "Follow the movement"),
    captions: { text: "Follow the movement.", style: "urgent-news", burnIn: true },
    callToAction: "Follow the movement."
  });
}
