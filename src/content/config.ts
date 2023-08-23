import { defineCollection, z } from 'astro:content'

const projects = defineCollection({
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			name: z.string(),
			description: z.string(),
			cover: image(),
			link: z.string().optional(),
			github: z.string().optional(),
			isDraft: z.boolean().default(false),
			sortOrder: z.number().optional(),
			tools: z.array(z.string()).optional()
		})
})

const devicons = defineCollection({
	schema: ({ image }) =>
		z.object({
			name: z.string(),
			backgroundColor: z.string(),
			icon: image()
		})
})

export const collections = { projects, devicons }
