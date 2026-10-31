#!/usr/bin/env node

import { readdir, readFile } from "node:fs/promises";
import { extname, join } from "node:path";

const configuredBase = (process.env.SITE_BASE ?? "").replace(/^\/+|\/+$/g, "");
const base = configuredBase ? `/${configuredBase}` : "";

const textExtensions = new Set([".html", ".css", ".js"]);
const files = [];

async function collect(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) await collect(path);
    else if (textExtensions.has(extname(entry.name))) files.push(path);
  }
}

await collect("dist");

const failures = [];
const staleReferences = [];
let hasLegacyRedirect = false;
const attributePattern = /(?:href|src)=["'](\/[^"']*)["']/g;
const cssUrlPattern = /url\((?:["']?)(\/[^)"']*)/g;
const legacyProjectPath = "/personal-website";

for (const file of files) {
  const source = await readFile(file, "utf8");
  if (!base) {
    const containsLegacyPath = source.includes(legacyProjectPath)
      || source.includes("github.io/personal-website");
    const isMigrationRedirect = source.includes(legacyProjectPath)
      && source.includes("location.replace");
    if (isMigrationRedirect) hasLegacyRedirect = true;
    else if (containsLegacyPath) staleReferences.push(file);
  }

  if (!base) continue;

  for (const pattern of [attributePattern, cssUrlPattern]) {
    pattern.lastIndex = 0;
    for (const match of source.matchAll(pattern)) {
      const url = match[1];
      if (!url.startsWith("//") && url !== base && !url.startsWith(`${base}/`)) {
        failures.push(`${file}: ${url}`);
      }
    }
  }
}

if (failures.length || staleReferences.length) {
  const messages = [];
  if (failures.length) messages.push(`Found URLs that escape ${base}:\n${failures.join("\n")}`);
  if (staleReferences.length) {
    messages.push(`Found stale ${legacyProjectPath} references:\n${staleReferences.join("\n")}`);
  }
  throw new Error(messages.join("\n\n"));
}

const home = await readFile("dist/index.html", "utf8");
if (!home.includes(`href="${base}/work"`) || !home.includes(`${base}/img/hero-crop.jpeg`)) {
  throw new Error("The home page is missing expected base-prefixed navigation or imagery");
}

const canonical = `https://sundharesan11.github.io${base}/`;
const ogImage = `https://sundharesan11.github.io${base}/og-default.png`;
if (!home.includes(`<link rel="canonical" href="${canonical}"`)
  || !home.includes(`<meta property="og:image" content="${ogImage}"`)) {
  throw new Error("The home page has incorrect canonical or Open Graph metadata");
}

if (!base) {
  if (!hasLegacyRedirect) {
    throw new Error("The 404 page is missing the legacy project-path redirect");
  }
}

const toPage = await readFile("dist/to/index.html", "utf8");
if (!toPage.includes("data-to-thoughts")
  || !toPage.includes("Two thoughts with a little room")
  || !toPage.includes("Season Trust")
  || !toPage.includes(`href="${base}/kalai"`)
  || !toPage.includes(`href="${base}/vilai"`)
  || toPage.indexOf("Two thoughts with a little room") > toPage.indexOf("Season Trust")) {
  throw new Error("To must show contextual thought navigation and prominent links before the ambitions");
}
for (const route of ["about", "to/sports-development", "to/agri-fintech", "to/waste-management"]) {
  const page = await readFile(`dist/${route}/index.html`, "utf8");
  if (page.includes("data-to-thoughts")) throw new Error(`${route}: contextual thought navigation belongs only on the To index`);
}

for (const name of ["kalai", "vilai"]) {
  const page = await readFile(`dist/${name}/index.html`, "utf8");
  const expected = [
    `href="${base}/kalai"`,
    `href="${base}/vilai"`,
    `href="${base}/about"`,
    `href="${base}/icons/${name}.svg"`,
    `href="${base}/${name}" aria-current="page"`,
    `href="mailto:sundharesansk11@gmail.com?subject=A%20thought%20about%20${name[0].toUpperCase() + name.slice(1)}"`,
    `<link rel="canonical" href="https://sundharesan11.github.io${base}/${name}/"`,
  ];
  for (const fragment of expected) {
    if (!page.includes(fragment)) throw new Error(`${name}: missing ${fragment}`);
  }
  const scripts = page.match(/<script\b[^>]*>[\s\S]*?<\/script>/g) ?? [];
  if (scripts.some(script => !/^<script\s+src="https:\/\/web3forms\.com\/client\/script\.js"\s+async\s+defer><\/script>$/.test(script)) || page.includes('id="cube-menu"')) {
    throw new Error(`${name}: only the shared Web3Forms captcha script is allowed; no portfolio chrome`);
  }
  if ((page.match(/<h1\b/g) ?? []).length !== 1 || (page.match(/aria-current="page"/g) ?? []).length !== 1) {
    throw new Error(`${name}: expected one main heading and one current navigation link`);
  }
}

console.log(`GitHub Pages paths verified for ${base || "/"} across ${files.length} generated files, including Kalai and Vilai.`);
