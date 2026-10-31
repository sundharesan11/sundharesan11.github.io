import { mkdtempSync, mkdirSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { validateWeb3FormsBuild } from "../scripts/check-web3forms-build.mjs";

const configuredForm = (subject: string) => `
  <link rel="canonical" href="https://sundharesan11.github.io/contact/">
  <form action="https://api.web3forms.com/submit">
    <input name="access_key" value="configured-key">
    <input name="subject" value="${subject}">
    <input name="redirect" value="https://sundharesan11.github.io/thanks/">
    <input name="botcheck">
    <div class="h-captcha" data-captcha="true"></div>
  </form>
  <script src="https://web3forms.com/client/script.js"></script>`;

function fixture(contactHtml = configuredForm("Website contact")) {
  const root = mkdtempSync(join(tmpdir(), "web3forms-build-"));
  for (const route of ["contact", "iyal", "reading", "kalai", "vilai", "thanks"]) {
    mkdirSync(join(root, route), { recursive: true });
  }
  writeFileSync(join(root, "contact/index.html"), contactHtml);
  writeFileSync(join(root, "iyal/index.html"), configuredForm("iyal field note"));
  writeFileSync(join(root, "reading/index.html"), configuredForm("Private book recommendation"));
  for (const name of ["kalai", "vilai"]) {
    writeFileSync(join(root, `${name}/index.html`), configuredForm(`A thought about ${name}`));
  }
  writeFileSync(join(root, "thanks/index.html"), '<meta name="robots" content="noindex, nofollow"><h1>Message sent</h1>');
  return root;
}

describe("production Web3Forms build validation", () => {
  it("accepts configured forms and a local success page", () => {
    expect(() => validateWeb3FormsBuild(fixture())).not.toThrow();
  });

  it("rejects a build that silently rendered the mail fallback", () => {
    expect(() => validateWeb3FormsBuild(fixture("<a href=\"mailto:test@example.com\">Email</a>")))
      .toThrow(/contact.*Web3Forms form/i);
  });

  it("rejects empty access keys", () => {
    const html = configuredForm("Website contact").replace('value="configured-key"', 'value=""');
    expect(() => validateWeb3FormsBuild(fixture(html))).toThrow(/contact.*access key/i);
  });

  it.each(["kalai", "vilai"])("requires the %s form in production", (name) => {
    const root = fixture();
    writeFileSync(join(root, `${name}/index.html`), '<a href="mailto:test@example.com">Email</a>');
    expect(() => validateWeb3FormsBuild(root)).toThrow(new RegExp(`${name}.*Web3Forms form`, "i"));
  });

  it("rejects redirects away from the same-site success page", () => {
    const html = configuredForm("Website contact").replace(
      "https://sundharesan11.github.io/thanks/",
      "https://example.com/thanks/",
    );
    expect(() => validateWeb3FormsBuild(fixture(html))).toThrow(/contact.*redirect/i);
  });

  it("rejects missing hCaptcha markup or client script", () => {
    const withoutWidget = configuredForm("Website contact").replace('<div class="h-captcha" data-captcha="true"></div>', "");
    expect(() => validateWeb3FormsBuild(fixture(withoutWidget))).toThrow(/contact.*spam protection/i);

    const withoutScript = configuredForm("Website contact").replace('<script src="https://web3forms.com/client/script.js"></script>', "");
    expect(() => validateWeb3FormsBuild(fixture(withoutScript))).toThrow(/contact.*client/i);
  });
});
