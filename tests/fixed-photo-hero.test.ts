import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

const read = (path: string) => readFileSync(new URL(path, import.meta.url), "utf8");

describe("FixedPhotoHero", () => {
  it("keeps the portrait constrained to the hero frame", () => {
    const source = read("../src/components/FixedPhotoHero.astro");

    expect(source).toContain("md:bg-fixed");
    expect(source).toContain("background-image");
    expect(source).toContain("md:grid-cols-[38vw_62vw]");
    expect(source).toContain("md:min-h-[96vh]");
    expect(source).toContain("h-[70vh]");
    expect(source).toContain("overflow-hidden");
    expect(source).toContain("bg-bg");
    expect(source).toContain("background-size");
    expect(source).toContain("background-position");
    expect(source).toContain("data-home-photo-frame");
    expect(source).toContain('<slot name="top-left" />');
    expect(source).not.toContain("fixed inset-x-0 top-0");
  });

  it("is used by the home page with the portrait crop", () => {
    const home = read("../src/pages/index.astro");

    expect(home).toContain('import FixedPhotoHero from "../components/FixedPhotoHero.astro"');
    expect(home).toContain('image="/img/hero-crop.jpeg"');
    expect(home).toContain('fit="contain"');
    expect(home).toContain('backgroundSize="auto calc(100% - 28px)"');
    expect(home).toContain('objectPosition="right 18px"');
  });

  it("gives iyal the Home opening and uses the forward-deployed identity", () => {
    const home = read("../src/pages/index.astro");

    expect(home).toContain('description="What matters must be lived. A personal website by Sundharesan Kumaresan."');
    expect(home).toContain('aria-label="iyal, Sundharesan\'s research into the rural economy"');
    expect(home).toContain('href={withBase("/iyal")}');
    expect(home).toContain('slot="top-left"');
    expect(home).toContain('class="absolute top-12 left-6 font-script text-statement font-bold leading-none text-accent transition-colors hover:text-accent-hover sm:left-10 md:left-[max(1.5rem,8vw)]"');
    expect(home).toContain('>iyal</a>');
    expect(home).toContain('hero-title-block inline-block w-fit max-w-full');
    expect(home).toContain('hero-role mt-16 flex items-baseline justify-between gap-3 whitespace-nowrap font-sans text-kicker-compact uppercase tracking-dateline text-accent md:mt-0');
    expect(home).toContain('<span>Forward Deployed Engineer</span>');
    expect(home).toContain('<span>Oogway Labs</span>');
    expect(home).toContain('<section class="py-10">');
    expect(home).toContain('class="group block border-b border-border py-4"');
    expect(home).toContain('swap-italic font-serif text-list-title');
    expect(home).toContain('class="mt-1 max-w-[62ch] text-sm text-text-muted"');
    expect(home).not.toContain('AI engineer &middot; writer &middot; Oogway Labs');
  });

  it("keeps About on a dedicated inline portrait frame", () => {
    const about = read("../src/pages/about.astro");

    expect(about).not.toContain('import FixedPhotoHero from "../components/FixedPhotoHero.astro"');
    expect(about).toContain("md:order-first");
    expect(about).toContain("md:sticky md:top-32");
    expect(about).toContain("md:min-h-[calc(100vh-8rem)]");
    expect(about).toContain("aspect-[2/3]");
    expect(about).toContain("md:max-w-[520px]");
    expect(about).toContain('src={withBase("/img/about.jpg")}');
    expect(about).toContain('width="2656"');
    expect(about).toContain('height="3984"');
    expect(about).toContain("object-cover object-center");
    expect(about).toContain("showFooter={false}");
  });
});
