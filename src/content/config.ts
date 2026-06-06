import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    githubUrl: z.string().url(),
    liveUrl: z.string().url().optional(),
    tags: z.array(z.string()),
    category: z.enum(['GenAI', 'Data Engineering', 'Infrastructure']),
  }),
});

export const collections = {
  'projects': projectsCollection,
};