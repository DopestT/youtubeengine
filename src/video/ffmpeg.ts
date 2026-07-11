import { spawn } from "node:child_process";
import path from "node:path";
import { EngineJob, PlatformName } from "../types.js";
import { getPlatformProfile } from "../platforms/profiles.js";
import { ensureDir } from "../utils/fs.js";
import { fromRoot } from "../utils/paths.js";
import { captionStyleToFfmpeg, materializePlainTextCaption, resolveCaptionPath } from "../captions/captionUtils.js";

function run(command: string, args: string[]) {
  return new Promise<void>((resolve, reject) => {
    const child = spawn(command, args, { stdio: "inherit" });
    child.on("error", reject);
    child.on("exit", (code) => code === 0 ? resolve() : reject(new Error(`${command} exited with code ${code}`)));
  });
}

function escapeFilterPath(filePath: string) {
  return filePath.replace(/\\/g, "/").replace(/:/g, "\\:");
}

function drawText(text: string, y: string) {
  const safe = text.replace(/'/g, "\\'");
  return `drawtext=text='${safe}':fontcolor=white:fontsize=72:box=1:boxcolor=black@0.45:boxborderw=24:x=(w-text_w)/2:y=${y}`;
}

export async function renderPlatformVideo(job: EngineJob, platform: PlatformName, outputDir: string) {
  const profile = getPlatformProfile(platform);
  await ensureDir(outputDir);

  const input = path.isAbsolute(job.sourceFiles[0] ?? "") ? job.sourceFiles[0]! : fromRoot(job.sourceFiles[0] ?? "");
  const output = path.join(outputDir, `${job.jobId}-${platform}.mp4`);
  const thumbnail = path.join(outputDir, `${job.jobId}-${platform}-thumbnail.jpg`);
  const ffmpeg = process.env.FFMPEG_PATH || "ffmpeg";

  const width = job.render?.width ?? profile.width;
  const height = job.render?.height ?? profile.height;
  const fps = job.render?.fps ?? profile.fps;
  const cropMode = job.render?.cropMode ?? "smart-center";

  const filters: string[] = [];
  const scalePad = cropMode === "top-focus"
    ? `scale=${width}:${height}:force_original_aspect_ratio=increase,crop=${width}:${height}:0:0`
    : `scale=${width}:${height}:force_original_aspect_ratio=decrease,pad=${width}:${height}:(ow-iw)/2:(oh-ih)/2,setsar=1`;

  filters.push(scalePad);
  filters.push(`fps=${fps}`);

  if (job.hookText) filters.push(drawText(job.hookText, "140"));
  if (job.callToAction) filters.push(drawText(job.callToAction, "h-260"));

  const captionFallback = await materializePlainTextCaption(job.jobId, job.captions);
  const captionFile = resolveCaptionPath(job.captions, captionFallback);
  if (job.captions?.burnIn !== false && captionFile) {
    filters.push(`subtitles='${escapeFilterPath(captionFile)}':force_style='${captionStyleToFfmpeg(job.captions?.style)}'`);
  }

  const args: string[] = ["-y"];
  if (typeof job.render?.trimStart === "number") args.push("-ss", String(job.render.trimStart));
  args.push("-i", input);
  if (typeof job.render?.trimEnd === "number") args.push("-to", String(job.render.trimEnd));

  args.push(
    "-vf", filters.join(","),
    "-c:v", profile.videoCodec,
    "-preset", "medium",
    "-crf", "20",
    "-c:a", profile.audioCodec,
    "-b:a", "192k",
    "-movflags", "+faststart",
    output
  );

  await run(ffmpeg, args);

  await run(ffmpeg, [
    "-y",
    "-ss", String(job.thumbnailFrame ?? 1),
    "-i", output,
    "-frames:v", "1",
    "-q:v", "2",
    thumbnail
  ]);

  return { videoPath: output, thumbnailPath: thumbnail };
}
