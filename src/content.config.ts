import { defineCollection, z } from 'astro:content';

const ecosystemCollection = defineCollection({
  type: 'data',
  schema: z.object({
    icon: z.string(),
    title: z.string(),
    desc: z.string(),
    color: z.string().default('primary'),
  }),
});

export const collections = {
  'ecosystem': ecosystemCollection,
};
