import { z } from "zod";

export const FooterConfigSchema = z.object({
  brand: z.object({
    tagline: z.string(),
    description: z.string(),
  }),
  cta: z.object({
    heading: z.string(),
    description: z.string(),
    primary: z.object({
      label: z.string(),
      to: z.string(),
    }),
    secondary: z.object({
      label: z.string(),
      to: z.string(),
    }),
  }),
  sections: z.array(
    z.object({
      heading: z.string(),
      items: z.array(
        z.object({
          label: z.string(),
          to: z.string(),
          badge: z.string().optional(),
        })
      ),
    })
  ),
  socials: z.array(
    z.object({
      label: z.string(),
      href: z.string(),
      icon: z.enum(["linkedin", "twitter", "facebook"]),
    })
  ),
  contact: z.array(
    z.object({
      label: z.string(),
      value: z.string(),
      type: z.enum(["phone", "email", "address"]),
      href: z.string().optional(),
    })
  ),
  trustBadges: z.array(z.string()).optional(),
  legal: z.object({
    copyright: z.string(),
    compliance: z.string().optional(),
    links: z.array(
      z.object({
        label: z.string(),
        to: z.string(),
      })
    ),
  }),
});

export type FooterConfigSchemaType = z.infer<typeof FooterConfigSchema>;
