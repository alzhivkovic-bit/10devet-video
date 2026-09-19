import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const videoSchema = z.object({
	title: z.string(),
	description: z.string(),
	thumbnail: z.string().optional(),
	ogImage: z.string().optional(),
	youtube: z.string().optional(),
	duration: z.string(),
	type: z.enum(['short', 'long']).optional(),
	date: z.coerce.date(),
});

const price = defineCollection({
	loader: glob({
		pattern: '**/*.md',
		base: './src/content/price',
	}),
	schema: videoSchema,
});

export const collections = {
	price,
};