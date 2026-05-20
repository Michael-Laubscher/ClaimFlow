import type { ProductCard } from "@/shared/types/home";

export const homeProducts: ProductCard[] = [
  {
    id: 'cargo',
    icon: 'truck',
    theme: 'primary',
    name: 'Cargo Insurance',
    shortDesc: 'Comprehensive coverage for goods in transit across borders',
    to: '/products?type=cargo',
  },
  {
    id: 'yellow-card',
    icon: 'mapPin',
    theme: 'success',
    name: 'Yellow Card',
    shortDesc: 'COMESA cross-border motor insurance for regional travel',
    to: '/products?type=yellow-card',
  },
  {
    id: 'fleet',
    icon: 'shield',
    theme: 'purple',
    name: 'Fleet Coverage',
    shortDesc: 'Protect your entire commercial vehicle fleet',
    to: '/products?type=vehicle',
  },
  {
    id: 'liability',
    icon: 'document',
    theme: 'warning',
    name: 'Liability',
    shortDesc: 'Third-party liability protection for peace of mind',
    to: '/products?type=liability',
  },
]