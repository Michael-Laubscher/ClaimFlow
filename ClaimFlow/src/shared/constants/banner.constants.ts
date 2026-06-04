export const bannerSizeStyles = {
  sm: {
    section: "py-16 lg:py-20",
    title: "text-4xl lg:text-5xl",
    subtitle: "text-base lg:text-lg",
  },

  md: {
    section: "py-20 lg:py-28",
    title: "text-5xl lg:text-6xl",
    subtitle: "text-lg lg:text-xl",
  },

  lg: {
    section: "py-24 lg:py-36",
    title: "text-5xl lg:text-7xl",
    subtitle: "text-xl lg:text-2xl",
  },
} as const;

export const HEADING_SIZES = {
  sm: "lg",
  md: "xl",
  lg: "hero",
} as const;

export type BannerSize = keyof typeof bannerSizeStyles;
