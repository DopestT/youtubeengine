export interface YouTubeUploadInput {
  videoPath: string;
  thumbnailPath?: string;
  title: string;
  description: string;
  tags: string[];
  privacyStatus: "private" | "unlisted" | "public";
  scheduledPublishAt?: string;
}

export class YouTubeUploader {
  constructor() {
    // Phase 2 scaffold. Wire OAuth client, refresh token, and googleapis here.
  }

  async upload(_input: YouTubeUploadInput) {
    throw new Error("YouTube upload is scaffolded for Phase 2. This local engine currently only packages upload-ready files.");
  }

  static requiredEnv() {
    return [
      "YOUTUBE_CLIENT_ID",
      "YOUTUBE_CLIENT_SECRET",
      "YOUTUBE_REDIRECT_URI",
      "YOUTUBE_REFRESH_TOKEN",
      "YOUTUBE_CHANNEL_ID"
    ];
  }
}
