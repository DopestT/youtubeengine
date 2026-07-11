import { PlatformName, PlatformProfile } from "../types.js";

export const platformProfiles: Record<PlatformName, PlatformProfile> = {
  youtube: {
    name: "youtube",
    width: 1080,
    height: 1920,
    fps: 30,
    maxDurationSeconds: 60,
    videoCodec: "libx264",
    audioCodec: "aac",
    container: "mp4",
    notes: ["Shorts-first 9:16 export", "Keep under 60 seconds when possible", "Metadata includes title, description, tags"]
  },
  tiktok: {
    name: "tiktok",
    width: 1080,
    height: 1920,
    fps: 30,
    maxDurationSeconds: 180,
    videoCodec: "libx264",
    audioCodec: "aac",
    container: "mp4",
    notes: ["Caption-first export", "Hashtag set tuned for discovery"]
  },
  instagram: {
    name: "instagram",
    width: 1080,
    height: 1920,
    fps: 30,
    maxDurationSeconds: 90,
    videoCodec: "libx264",
    audioCodec: "aac",
    container: "mp4",
    notes: ["Cleaner hashtag set", "Reels-safe 9:16 MP4"]
  },
  x: {
    name: "x",
    width: 1080,
    height: 1920,
    fps: 30,
    videoCodec: "libx264",
    audioCodec: "aac",
    container: "mp4",
    notes: ["Short caption", "Strong hook", "Works as MP4 upload"]
  },
  facebook: {
    name: "facebook",
    width: 1080,
    height: 1920,
    fps: 30,
    videoCodec: "libx264",
    audioCodec: "aac",
    container: "mp4",
    notes: ["Page-friendly language", "Clear context in post copy"]
  }
};

export function getPlatformProfile(platform: PlatformName) {
  return platformProfiles[platform];
}
