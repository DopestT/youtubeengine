import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
export const ROOT = path.resolve(here, "..", "..");

export const paths = {
  root: ROOT,
  input: path.join(ROOT, "input"),
  output: path.join(ROOT, "output"),
  jobs: path.join(ROOT, "jobs"),
  assets: path.join(ROOT, "assets"),
  brands: path.join(ROOT, "assets", "brands"),
  logs: path.join(ROOT, "logs"),
  templates: path.join(ROOT, "templates")
};

export function fromRoot(...parts: string[]) {
  return path.join(ROOT, ...parts);
}
