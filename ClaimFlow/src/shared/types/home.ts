export interface HeroStat {
  value: string
  label: string
}

export interface TrustPillar {
  id: string
  icon: string
  label: string
  subtext: string
}

export interface ProductCard {
  id: string
  icon: string
  theme: 'primary' | 'success' | 'warning' | 'purple'
  name: string
  shortDesc: string
  to: string
}

export interface FeatureItem {
  id: string
  label: string
}