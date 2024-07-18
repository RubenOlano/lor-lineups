import { defineCollection, z } from "astro:content";

const lineUpCollection = defineCollection({
  schema: z.object({
    map: z.string(),
    agent: z.string(),
    isAttacking: z.boolean(),
    site: z.enum(["A", "B", "C"]),
    isUlt: z.boolean().optional(),
  }),
});

export const collections = {
  lineUp: lineUpCollection,
};
