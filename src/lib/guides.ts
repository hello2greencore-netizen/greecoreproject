import fs from "node:fs";
import path from "node:path";

const DIR = path.join(process.cwd(), "src", "content", "guides");

export type GuideContent = { html: string; css: string; js: string };

/** Reads a guide's page content (HTML, shared scoped CSS and optional script) at build time. */
export function getGuideContent(slug: string, style: string): GuideContent {
  const read = (name: string, ext: string) => {
    const file = path.join(DIR, `${name}.${ext}`);
    return fs.existsSync(file) ? fs.readFileSync(file, "utf8") : "";
  };
  return { html: read(slug, "html"), css: read(style, "css"), js: read(slug, "js") };
}
