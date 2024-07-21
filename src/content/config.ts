import { defineCollection, z } from "astro:content";

const setupCollection = defineCollection({
  type: "content",
  schema: z.object({
    map: z.string(),
    agent: z.string(),
    isAttacking: z.boolean(),
    site: z.enum(["A", "B", "C"]),
    isUlt: z.boolean(),
    video: z.string().url(),
    images: z.array(z.string().url()).default([]),
    title: z.string(),
  }),
});

export const collections = {
  setup: setupCollection,
};
