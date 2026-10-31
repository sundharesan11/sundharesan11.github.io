import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";

const routes = ["contact", "iyal", "reading", "kalai", "vilai"];

function attribute(tag, name) {
  return tag.match(new RegExp(`\\b${name}=["']([^"']*)["']`, "i"))?.[1] ?? null;
}

function inputValue(html, name) {
  const tag = html.match(new RegExp(`<input\\b[^>]*\\bname=["']${name}["'][^>]*>`, "i"))?.[0];
  return tag ? attribute(tag, "value") : null;
}

export function validateWeb3FormsBuild(distDirectory = resolve("dist")) {
  for (const route of routes) {
    const html = readFileSync(resolve(distDirectory, route, "index.html"), "utf8");
    if (!html.includes('action="https://api.web3forms.com/submit"')) {
      throw new Error(`${route}: Web3Forms form was not generated. Check PUBLIC_WEB3FORMS_ACCESS_KEY.`);
    }

    const accessKey = inputValue(html, "access_key")?.trim();
    if (!accessKey || accessKey === "your_web3forms_access_key") {
      throw new Error(`${route}: Web3Forms access key is empty or still a placeholder.`);
    }

    const canonical = html.match(/<link\b[^>]*rel="canonical"[^>]*href="([^"]+)"/i)?.[1];
    const redirect = inputValue(html, "redirect");
    const canonicalUrl = canonical ? new URL(canonical) : null;
    const redirectUrl = redirect ? new URL(redirect) : null;
    const hasSameSiteSuccessRedirect = canonicalUrl && redirectUrl
      && redirectUrl.origin === canonicalUrl.origin
      && redirectUrl.pathname.endsWith("/thanks/");
    if (!hasSameSiteSuccessRedirect) {
      throw new Error(`${route}: Web3Forms redirect is not the canonical same-site /thanks/ URL.`);
    }

    if (!html.includes('name="botcheck"') || !html.includes('class="h-captcha"') || !html.includes('data-captcha="true"')) {
      throw new Error(`${route}: Web3Forms spam protection markup is incomplete.`);
    }
    if (!html.includes('src="https://web3forms.com/client/script.js"')) {
      throw new Error(`${route}: Web3Forms hCaptcha client is missing.`);
    }
  }

  const thanks = readFileSync(resolve(distDirectory, "thanks", "index.html"), "utf8");
  if (!thanks.includes("Message sent")) {
    throw new Error("thanks: success page was not generated.");
  }
  if (!thanks.includes('name="robots" content="noindex, nofollow"')) {
    throw new Error("thanks: success page must stay out of search indexes.");
  }
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  validateWeb3FormsBuild();
  console.log("Web3Forms production output is configured.");
}
