import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const writing = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/writing" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().default(false),
    lens: z.enum(["economics", "technical", "theatrical"]),
    status: z.enum(["published", "writing"]).default("published"),
    featured: z.boolean().default(false),
    cover: z.string().optional(),
    link: z.string().optional(),
  }),
});

const reading = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/reading" }),
  schema: z.object({
    title: z.string(),
    author: z.string(),
    note: z.string(),
    question: z.string().optional(),
    status: z.enum(["read", "on-deck"]),
    opened: z.string(),
    cover: z.string().optional(),
    link: z.string().optional(),
    order: z.number().default(0),
  }),
});

const initiatives = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/initiatives" }),
  schema: z.object({
    title: z.string(),
    tamilTitle: z.string(),
    palette: z.enum(["kalai", "vilai"]),
    meaning: z.string(),
    subject: z.string(),
    description: z.string(),
    opening: z.string(),
    introduction: z.string(),
    annotation: z.string(),
    bodyHeading: z.string(),
    ideas: z.array(z.object({ title: z.string(), text: z.string() })).length(3),
    question: z.string(),
    invitation: z.string(),
  }),
});

export const collections = { writing, reading, initiatives };
