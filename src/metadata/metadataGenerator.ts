import path from "node:path";
import { BrandProfile, EngineJob, PlatformName } from "../types.js";
import { writeJson } from "../utils/fs.js";

function uniq(items: string[]) {
  return [...new Set(items.filter(Boolean))];
}

export function buildMetadata(job: EngineJob, brand: BrandProfile, platform: PlatformName, videoPath: string, thumbnailPath: string) {
  const hashtags = uniq([...(job.hashtags ?? []), ...brand.defaultHashtags]).map((h) => h.startsWith("#") ? h : `#${h}`);
  const baseTitle = job.title.length > 90 ? job.title.slice(0, 87) + "..." : job.title;
  return {
    jobId: job.jobId,
    projectName: job.projectName,
    brand: brand.displayName,
    platform,
    videoPath,
    thumbnailPath,
    youtube: {
      title: `${baseTitle} ${hashtags.includes("#Shorts") ? "" : "#Shorts"}`.trim(),
      description: `${job.description}\n\n${hashtags.join(" ")}\n\n${job.callToAction ?? brand.defaultCTA}`,
      tags: uniq([...(job.tags ?? []), brand.displayName, "shorts", "video"]),
      visibility: job.visibility ?? "private",
      scheduledTime: job.scheduledTime
    },
    pinnedComment: job.callToAction ?? brand.defaultCTA,
    crossPost: {
      x: `${job.hookText ?? baseTitle}\n\n${hashtags.slice(0, 4).join(" ")}`,
      facebook: `${baseTitle}\n\n${job.description}\n\n${hashtags.slice(0, 6).join(" ")}`,
      tiktok: `${baseTitle} ${hashtags.slice(0, 8).join(" ")}`,
      instagram: `${baseTitle}\n\n${hashtags.slice(0, 10).join(" ")}`
    },
    titleVariants: [
      baseTitle,
      `${job.hookText ?? baseTitle} #Shorts`,
      `${brand.displayName}: ${baseTitle}`
    ],
    descriptionVariants: [
      job.description,
      `${job.description}\n\n${job.callToAction ?? brand.defaultCTA}`,
      `${job.description}\n\nFollow for more from ${brand.displayName}.`
    ],
    createdAt: new Date().toISOString()
  };
}

export async function writeMetadataPackage(outputDir: string, metadata: ReturnType<typeof buildMetadata>) {
  await writeJson(path.join(outputDir, "metadata.json"), metadata);
  await BunSafe.writeText(path.join(outputDir, "upload.txt"), `${metadata.youtube.title}\n\n${metadata.youtube.description}\n`);
  await BunSafe.writeText(path.join(outputDir, "hashtags.txt"), metadata.youtube.description.split(/\s+/).filter((x) => x.startsWith("#")).join(" ") + "\n");
  await BunSafe.writeText(path.join(outputDir, "title_variants.txt"), metadata.titleVariants.join("\n") + "\n");
  await BunSafe.writeText(path.join(outputDir, "description_variants.txt"), metadata.descriptionVariants.join("\n\n---\n\n") + "\n");
}

class BunSafe {
  static async writeText(filePath: string, content: string) {
    const fs = await import("node:fs/promises");
    await fs.writeFile(filePath, content, "utf8");
  }
}
