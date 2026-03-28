import { defineCollection, z } from 'astro:content';

const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    author: z.string(),
    readTime: z.number(),
    publishDate: z.string(),
    tags: z.array(z.string()),
    heroImage: z.string(),
    heroImageAlt: z.string(),
    contentImage: z.string(),
    contentImageAlt: z.string(),
    quote: z.string(),
    quoteAttribution: z.string(),
  }),
});

const innovations = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    projectName: z.string(),
    highlight: z.string(),
    heroImage: z.string(),
    heroImageAlt: z.string(),
    specs: z.array(z.object({
      label: z.string(),
      value: z.string(),
      detail: z.string(),
    })),
    diagramImage: z.string(),
    diagramImageAlt: z.string(),
    timelineEvents: z.array(z.object({
      quarter: z.string(),
      title: z.string(),
      description: z.string(),
      isCurrent: z.boolean().optional(),
    })),
  }),
});

const research = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    shortTitle: z.string(),
    description: z.string(),
    category: z.string(),
    whitepaperId: z.string(),
    author: z.string(),
    authorTitle: z.string(),
    publishDate: z.string(),
    readTime: z.number(),
    abstract: z.string(),
    introduction: z.string(),
    introductionImage: z.string(),
    introductionImageAlt: z.string(),
    methodology: z.object({
      title: z.string(),
      description: z.string(),
      specs: z.array(z.object({
        label: z.string(),
        value: z.string(),
      })),
    }),
    empiricalImage: z.string().nullable().optional(),
    empiricalImageAlt: z.string().nullable().optional(),
    references: z.array(z.string()),
    tags: z.array(z.string()),
  }),
});

export const collections = {
  articles,
  innovations,
  research,
};
