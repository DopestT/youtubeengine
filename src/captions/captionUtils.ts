import fs from "node:fs/promises";
import path from "node:path";
import { CaptionConfig } from "../types.js";
import { fromRoot } from "../utils/paths.js";

export function captionStyleToFfmpeg(style = "bold-creator") {
  const base = "FontName=Arial,FontSize=58,Outline=3,Shadow=2,Alignment=2,MarginV=190";
  const styles: Record<string, string> = {
    "bold-creator": `${base},Bold=1,PrimaryColour=&H00FFFFFF`,
    documentary: `${base},FontSize=46,PrimaryColour=&H00F5F5F5`,
    "political-satire": `${base},Bold=1,PrimaryColour=&H00FFFFFF,BackColour=&H66000000`,
    "vintage-cartoon-title-card": `${base},FontName=Georgia,Bold=1,PrimaryColour=&H00FFFFFF`,
    "luxury-archangels": `${base},Bold=1,PrimaryColour=&H0000D7FF`,
    "urgent-news": `${base},Bold=1,PrimaryColour=&H0000FFFF`
  };
  return styles[style] ?? styles["bold-creator"];
}

export async function materializePlainTextCaption(jobId: string, captions?: CaptionConfig) {
  if (!captions?.text) return undefined;
  const out = fromRoot("assets", "captions", `${jobId}.srt`);
  const srt = `1\n00:00:00,000 --> 00:00:04,000\n${captions.text}\n`;
  await fs.mkdir(path.dirname(out), { recursive: true });
  await fs.writeFile(out, srt, "utf8");
  return out;
}

export function resolveCaptionPath(captions?: CaptionConfig, fallback?: string) {
  if (captions?.file) return path.isAbsolute(captions.file) ? captions.file : fromRoot(captions.file);
  return fallback;
}
