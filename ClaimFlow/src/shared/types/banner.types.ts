import type { ReactNode } from 'react';

export interface BannerBreadcrumb {
  label: string;
  to?: string;
}

export interface BannerCTA {
  label: string;
  to: string;
}

export interface BannerStat {
  label: string;
  value: string;
}

export interface PageBannerProps {
  title: ReactNode;
  subtitle?: ReactNode;

  badge?: ReactNode;

  breadcrumbs?: BannerBreadcrumb[];

  primaryCta?: BannerCTA;
  secondaryCta?: BannerCTA;

  stats?: BannerStat[];

  align?: 'left' | 'center';

  size?: 'sm' | 'md' | 'lg';

  overlay?: boolean;
  grid?: boolean;

  className?: string;
}