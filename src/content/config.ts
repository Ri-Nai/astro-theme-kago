import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    tags: z.array(z.string()).default([]),
    category: z.string().optional(),
    author: z.string().default('Your Name'),

    featured: z.boolean().default(false),
    // 支持从 Hugo 迁移过来的字段
    categories: z.array(z.string()).optional(),
    image: z.string().optional(),
    slug: z.string().optional(),
    hidden: z.boolean().default(false),
    math: z.boolean().default(false),
    license: z.string().optional(),
  }),
});

export const collections = { blog };
