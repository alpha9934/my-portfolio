import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    category: z.string().optional(),
    // Add this line to handle the repository link safely
    githubUrl: z.string().url().optional(), 
  }),
});

export const collections = {
  'projects': projectsCollection,
};