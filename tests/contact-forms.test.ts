import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

const read = (path: string) => readFileSync(new URL(path, import.meta.url), "utf8");

describe("Web3Forms contact surfaces", () => {
  const sharedFields = read("../src/components/Web3FormFields.astro");

  it("shares production redirect and spam protection across forms", () => {
    expect(sharedFields).toContain('name="access_key"');
    expect(sharedFields).toContain('name="redirect"');
    expect(sharedFields).toContain('withBase("/thanks/")');
    expect(sharedFields).toContain('name="botcheck"');
    expect(sharedFields).toContain('class="h-captcha"');
    expect(sharedFields).toContain('data-captcha="true"');
    expect(sharedFields).toContain('captchaTheme = "auto"');
    expect(sharedFields).toContain('data-theme={captchaTheme}');
    expect(sharedFields).toContain("overflow-x-auto");
    expect(sharedFields).toContain('src="https://web3forms.com/client/script.js"');
  });

  it("keeps the iyal form specific to field research", () => {
    const iyal = read("../src/pages/iyal.astro");

    expect(iyal).toContain('action="https://api.web3forms.com/submit"');
    expect(iyal).toContain('subject="iyal field note"');
    expect(iyal).toContain("Your role in the season");
    expect(iyal).toContain("Farmer, lender, buyer, transporter, policy, researcher, operator...");
    expect(iyal).toContain("Where are you working from?");
    expect(iyal).toContain("Village, district, state, country, or the market you know best");
    expect(iyal).toContain("What are you seeing on the ground?");
    expect(iyal).toContain("Tell me what breaks, what works, who is trusted, or what I am probably missing.");
    expect(iyal).toContain("Can I follow up?");
    expect(iyal).toContain("I read these as field notes, not leads in a funnel.");
    expect(iyal).toContain("Email field note");
    expect(iyal).toContain("Send field note");
  });

  it("adds a general contact page with broad inquiry fields", () => {
    const contact = read("../src/pages/contact.astro");

    expect(contact).toContain('action="https://api.web3forms.com/submit"');
    expect(contact).toContain('subject="Website contact"');
    expect(contact).toContain("What is this about?");
    expect(contact).toContain("Work / AI build");
    expect(contact).toContain("Give me the useful version: context, ask, timeline, and what would make this worth discussing.");
    expect(contact).toContain("I usually reply by email if there is a real thread to pull.");
    expect(contact).toContain("Email Sundharesan");
    expect(contact).toContain("Send note");
  });

  it("has a same-site success destination", () => {
    const thanks = read("../src/pages/thanks.astro");

    expect(thanks).toContain("Message sent");
    expect(thanks).toContain("noindex");
    expect(thanks).toContain('href={withBase("/")}');
    expect(thanks).toContain('href={withBase("/contact")}');
  });

  it("routes the footer headline to the contact page", () => {
    const footer = read("../src/components/Footer.astro");

    expect(footer).toContain('href={withBase("/contact")}');
    expect(footer).toContain("Get in touch");
  });
});
