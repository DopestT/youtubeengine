import path from "node:path";
import { BrandProfile } from "../types.js";
import { readJson } from "../utils/fs.js";
import { paths } from "../utils/paths.js";

export async function loadBrandProfile(brand: string): Promise<BrandProfile> {
  const slug = brand.toLowerCase().replaceAll(" ", "-").replaceAll("&", "and");
  return readJson<BrandProfile>(path.join(paths.brands, `${slug}.json`));
}
