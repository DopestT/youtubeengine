import fs from "node:fs/promises";
import path from "node:path";
import { paths } from "./paths.js";
import { ensureDir } from "./fs.js";

export class Logger {
  constructor(private scope: string) {}

  private async write(level: "info" | "warn" | "error", message: string, meta?: unknown) {
    await ensureDir(paths.logs);
    const line = JSON.stringify({
      ts: new Date().toISOString(),
      scope: this.scope,
      level,
      message,
      meta
    });
    await fs.appendFile(path.join(paths.logs, "engine.log"), line + "\n", "utf8");
    const printable = meta ? `${message} ${JSON.stringify(meta)}` : message;
    console[level === "error" ? "error" : level === "warn" ? "warn" : "log"](`[${level}] ${this.scope}: ${printable}`);
  }

  info(message: string, meta?: unknown) { return this.write("info", message, meta); }
  warn(message: string, meta?: unknown) { return this.write("warn", message, meta); }
  error(message: string, meta?: unknown) { return this.write("error", message, meta); }
}
