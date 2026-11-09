#!/usr/bin/env node
/**
 * SEO guard: runs after `next build` and stops the deploy if a page lost
 * something that helps it rank. Vercel then keeps the current live site.
 *
 * Every indexable page must have: exactly one <h1>, a <title>, a meta
 * description, a canonical link, and structured data (JSON-LD).
 * Pages in seo-guard-baseline.json must also keep their canonical URL,
 * stay indexable, keep every schema type they had, and keep at least as
 * many FAQ questions.
 *
 * Changing one of those on purpose? Update seo-guard-baseline.json in the
 * same commit (or run `node scripts/seo-guard.mjs --write` after a build).
 */
import { readFileSync, writeFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { join, relative, sep } from "node:path";

const APP_DIR = ".next/server/app";
const BASELINE = "seo-guard-baseline.json";
const SKIP = new Set(["/_not-found", "/_global-error"]);

function htmlFiles(dir) {
  const out = [];
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) out.push(...htmlFiles(p));
    else if (name.endsWith(".html")) out.push(p);
  }
  return out;
}

function routeOf(file) {
  const r = "/" + relative(APP_DIR, file).split(sep).join("/").replace(/\.html$/, "");
  return r === "/index" ? "/" : r;
}

const decode = (s) =>
  s.replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#x27;|&#39;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">").trim();

function attr(tag, name) {
  const m = tag.match(new RegExp(`\\s${name}="([^"]*)"`, "i"));
  return m ? decode(m[1]) : "";
}

function metaContent(html, name) {
  for (const tag of html.match(/<meta\b[^>]*>/gi) || []) {
    if (attr(tag, "name").toLowerCase() === name) return attr(tag, "content");
  }
  return "";
}

function inspect(html) {
  const head = html.split(/<body[\s>]/i)[0];
  const title = decode((head.match(/<title[^>]*>([\s\S]*?)<\/title>/i) || [, ""])[1]);
  const canonicalTag = (html.match(/<link\b[^>]*rel="canonical"[^>]*>/i) || [""])[0];
  const h1s = (html.match(/<h1[\s>]/gi) || []).length;
  const types = new Set();
  let faq = 0;
  let badJson = 0;
  for (const m of html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)) {
    let data;
    try { data = JSON.parse(m[1]); } catch { badJson++; continue; }
    const walk = (x) => {
      if (!x || typeof x !== "object") return;
      if (Array.isArray(x)) return x.forEach(walk);
      for (const t of [].concat(x["@type"] || [])) types.add(t);
      if (x["@type"] === "Question") faq++;
      Object.values(x).forEach(walk);
    };
    walk(data);
  }
  return {
    title,
    description: metaContent(html, "description"),
    robots: metaContent(html, "robots"),
    canonical: canonicalTag ? attr(canonicalTag, "href") : "",
    h1: h1s,
    schemaTypes: [...types].sort(),
    faqQuestions: faq,
    badJson,
  };
}

if (!existsSync(APP_DIR)) {
  console.error(`SEO guard: ${APP_DIR} not found. Run it after next build.`);
  process.exit(1);
}

const pages = {};
for (const f of htmlFiles(APP_DIR)) {
  const route = routeOf(f);
  if (SKIP.has(route)) continue;
  pages[route] = inspect(readFileSync(f, "utf8"));
}
const indexable = (p) => !/noindex/i.test(p.robots);

if (process.argv.includes("--write")) {
  const base = {};
  for (const [route, p] of Object.entries(pages)) {
    if (!indexable(p)) continue;
    base[route] = { canonical: p.canonical, schemaTypes: p.schemaTypes, faqQuestions: p.faqQuestions };
  }
  writeFileSync(BASELINE, JSON.stringify(base, null, 1) + "\n");
  console.log(`SEO guard: wrote ${BASELINE} with ${Object.keys(base).length} pages.`);
  process.exit(0);
}

const baseline = existsSync(BASELINE) ? JSON.parse(readFileSync(BASELINE, "utf8")) : {};
const problems = [];
const add = (route, msg) => problems.push(`${route}: ${msg}`);

for (const [route, p] of Object.entries(pages)) {
  const b = baseline[route];
  if (!indexable(p)) {
    if (b) add(route, `is now hidden from Google (robots "${p.robots}")`);
    continue;
  }
  if (p.h1 !== 1) add(route, `has ${p.h1} H1 headings (needs exactly 1)`);
  if (!p.title) add(route, "has no page title");
  if (!p.description) add(route, "has no meta description");
  if (!p.canonical) add(route, "has no canonical link");
  if (!p.schemaTypes.length) add(route, "has no structured data (JSON-LD)");
  if (p.badJson) add(route, `has ${p.badJson} broken JSON-LD block(s)`);
  if (!b) continue;
  if (b.canonical && p.canonical !== b.canonical) add(route, `canonical changed from ${b.canonical} to ${p.canonical || "(none)"}`);
  const lost = b.schemaTypes.filter((t) => !p.schemaTypes.includes(t));
  if (lost.length) add(route, `lost structured data: ${lost.join(", ")}`);
  if (p.faqQuestions < b.faqQuestions) add(route, `FAQ questions dropped from ${b.faqQuestions} to ${p.faqQuestions}`);
}
for (const route of Object.keys(baseline)) {
  if (!pages[route]) add(route, "page is missing from the build (deleted or renamed?)");
}

const checked = Object.values(pages).filter(indexable).length;
if (problems.length) {
  console.error(`\nSEO guard FAILED: ${problems.length} problem(s). The deploy is stopped so the live site keeps its SEO.\n`);
  for (const p of problems) console.error("  - " + p);
  console.error(`\nIf a change is on purpose, update ${BASELINE} in the same commit.\n`);
  process.exit(1);
}
console.log(`SEO guard passed: ${checked} pages checked (H1, title, description, canonical, schema, FAQ).`);
