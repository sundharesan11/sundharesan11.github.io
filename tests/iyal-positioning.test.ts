import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

const read = (path: string) => readFileSync(new URL(path, import.meta.url), "utf8");

describe("iyal sister masthead", () => {
  it("labels iyal as masthead-level research in the header", () => {
    const header = read("../src/components/Header.astro");

    expect(header).toContain('aria-label="iyal, Sundharesan\'s research into the rural economy"');
    expect(header).toContain('title="iyal, research into the rural economy"');
    expect(header).toContain('class="mm-iyal font-script text-statement font-bold leading-none text-accent transition-colors hover:text-accent-hover"');
  });

  it("keeps iyal out of the To desk listing", () => {
    const futureDesk = read("../src/components/FutureDesk.astro");

    expect(futureDesk).not.toContain('href: "/iyal"');
    expect(futureDesk).not.toContain('tag: "Active research"');
    expect(futureDesk).not.toContain('title: "iyal"');
  });

  it("defers the home header until the hero photo is hidden", () => {
    const header = read("../src/components/Header.astro");

    expect(header).toContain('const deferUntilHomeImageHidden = path === "/"');
    expect(header).toContain("data-deferred-header");
    expect(header).toContain("[data-home-photo-frame]");
    expect(header).toContain("photo.getBoundingClientRect().bottom <= 0");
  });

  it("keeps the active primary nav link blue and underlined", () => {
    const header = read("../src/components/Header.astro");
    const css = read("../src/styles/global.css");

    expect(header).toContain('isActive(l.href) ? "text-accent hover:text-accent-hover"');
    expect(css).toContain('.u-draw[aria-current="page"]::after');
    expect(css).toContain(".u-draw:hover::after, .u-draw:focus-visible::after, .u-draw[aria-current=\"page\"]::after");
  });

  it("grounds the iyal page in field-note language", () => {
    const iyal = read("../src/pages/iyal.astro");

    expect(iyal).toContain("Understanding the rural economy, one farming season at a time.");
    expect(iyal).toContain("The week before sowing");
    expect(iyal).toContain("which truck can actually show up");
    expect(iyal).toContain("I am intentionally not building a large platform yet.");
    expect(iyal).not.toContain("stakeholders");
    expect(iyal).not.toContain("ecosystem_role");
  });

  it("uses the full-season systems map to explain iyal's shared operating loop", () => {
    const iyal = read("../src/pages/iyal.astro");

    expect(iyal).toContain('src={withBase("/img/iyal-season-map.png")}');
    expect(iyal).toContain('class="mt-20 relative left-1/2 w-screen -translate-x-1/2"');
    expect(iyal).toContain('class="h-auto w-full"');
    expect(iyal).not.toContain("A working map of the people, handoffs, and timings that move one farming season.");
  });
});
