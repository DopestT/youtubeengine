import { EngineJob, BrandProfile } from "../types.js";

export function generateHook(job: EngineJob, brand: BrandProfile) {
  return job.hookText ?? `${brand.displayName}: ${job.title}`;
}

export function generateTitleVariants(job: EngineJob) {
  return [job.title, `${job.title} #Shorts`, `You need to see this: ${job.title}`];
}

export function generateDescription(job: EngineJob, brand: BrandProfile) {
  return `${job.description}\n\n${job.callToAction ?? brand.defaultCTA}`;
}

export function generateCaptionText(job: EngineJob) {
  return job.captions?.text ?? job.hookText ?? job.title;
}

export function generateThumbnailPrompt(job: EngineJob, brand: BrandProfile) {
  return `Create a vertical thumbnail for ${brand.displayName}: ${job.title}`;
}

export function scoreClipVirality() {
  return { score: 0.5, notes: ["Placeholder score. Connect model later."] };
}

export function scoreBrandSafety() {
  return { score: 0.8, notes: ["Placeholder brand safety score. Connect policy/rules later."] };
}

export function detectDuplicate() {
  return { duplicate: false, notes: ["Placeholder duplicate check. Add perceptual hash later."] };
}

export function contentRightsNotes(job: EngineJob) {
  return {
    notes: [
      "Confirm ownership or license for source media, music, voiceover, and images.",
      `Project: ${job.projectName}`,
      `Brand: ${job.brand}`
    ]
  };
}
