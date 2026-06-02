export interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ElementType;

  to?: string;
  badge?: string;
  ctaLabel?: string;
  iconClassName?: string;
}
