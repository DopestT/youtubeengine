export type SourceType = "video" | "image-sequence" | "prompt-video" | "stream-clip" | "audio-reactive";
export type JobStatus = "pending" | "processing" | "completed" | "failed";
export type Visibility = "private" | "unlisted" | "public";
export type CropMode = "center" | "smart-center" | "top-focus" | "face-safe" | "custom";
export type CaptionStyle = "bold-creator" | "documentary" | "political-satire" | "vintage-cartoon-title-card" | "luxury-archangels" | "urgent-news";
export type PlatformName = "youtube" | "tiktok" | "instagram" | "x" | "facebook";

export interface CaptionConfig {
  file?: string;
  text?: string;
  style?: CaptionStyle;
  burnIn?: boolean;
}

export interface MediaOverlay {
  enabled?: boolean;
  file?: string;
  text?: string;
  position?: "top" | "center" | "bottom" | "top-left" | "top-right" | "bottom-left" | "bottom-right";
}

export interface RenderOptions {
  fps?: 30 | 60;
  width?: number;
  height?: number;
  trimStart?: number;
  trimEnd?: number;
  cropMode?: CropMode;
  customCrop?: { x: number; y: number; w: number; h: number };
  blurBackground?: boolean;
  normalizeAudio?: boolean;
}

export interface EngineJob {
  jobId: string;
  projectName: string;
  brand: string;
  sourceType: SourceType;
  sourceFiles: string[];
  targetPlatforms: PlatformName[];
  title: string;
  description: string;
  hashtags: string[];
  tags: string[];
  category?: string;
  visibility?: Visibility;
  scheduledTime?: string;
  endCard?: MediaOverlay;
  watermark?: MediaOverlay;
  captions?: CaptionConfig;
  music?: { file?: string; volume?: number };
  voiceover?: { file?: string; volume?: number };
  thumbnailFrame?: number;
  hookText?: string;
  callToAction?: string;
  render?: RenderOptions;
  status: JobStatus;
  retryCount: number;
  createdAt: string;
  updatedAt: string;
  error?: string;
  dryRun?: boolean;
}

export interface BrandProfile {
  id: string;
  displayName: string;
  tone: string[];
  visualStyle: string;
  defaultWatermark: string;
  defaultCTA: string;
  defaultCaptionStyle: CaptionStyle;
  defaultHashtags: string[];
  titleRules: string[];
  safetyNotes: string[];
}

export interface PlatformProfile {
  name: PlatformName;
  width: number;
  height: number;
  fps: 30 | 60;
  maxDurationSeconds?: number;
  videoCodec: string;
  audioCodec: string;
  container: "mp4";
  notes: string[];
}

export interface EngineStatus {
  totalJobs: number;
  pending: number;
  processing: number;
  completed: number;
  failed: number;
  lastRun: string;
  completedOutputs: string[];
}
