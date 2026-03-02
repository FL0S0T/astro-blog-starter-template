import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const insights = defineCollection({
	loader: glob({ base: "./src/content/insights", pattern: "**/*.{md,mdx}" }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		category: z.enum([
			"systems-strategy",
			"build-execution",
			"applied-technologies",
			"enterprise-implications",
			"capital-structure",
			"current-news",
		]),
		tags: z.array(z.string()).default([]),
		tldr: z.array(z.string()).default([]),
		readingTime: z.string(),
		heroImage: z.string().optional(),
		seoDescription: z.string().optional(),
	}),
});

export const collections = { insights };
