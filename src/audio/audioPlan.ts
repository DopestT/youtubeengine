import { EngineJob } from "../types.js";

export function buildAudioPlan(job: EngineJob) {
  return {
    normalize: job.render?.normalizeAudio ?? true,
    backgroundMusic: job.music?.file ? { file: job.music.file, volume: job.music.volume ?? 0.18 } : undefined,
    voiceover: job.voiceover?.file ? { file: job.voiceover.file, volume: job.voiceover.volume ?? 1 } : undefined
  };
}
