import type { ProcessStep } from '@/shared/types/partners.types';
import {
  Globe,
  ShieldCheck,
  Truck,
  Users,
} from 'lucide-react';

export const partnerTypes = [
  {
    title: 'Transport & Logistics Companies',
    description:
      'Provide your clients with seamless insurance solutions across Africa while growing recurring revenue streams.',
    icon: Truck,
  },
  {
    title: 'Insurance Brokers',
    description:
      'Expand your product offering with comprehensive transport insurance products built for African trade.',
    icon: ShieldCheck,
  },
  {
    title: 'Business Associations',
    description:
      'Deliver exclusive insurance benefits to members through strategic partnership programs.',
    icon: Users,
  },
  {
    title: 'Trade Organisations',
    description:
      'Support cross-border commerce with flexible and scalable insurance solutions.',
    icon: Globe,
  },
];

export const benefits = [
  'Competitive commission structures',
  'Dedicated partner relationship managers',
  'Fast digital policy issuance',
  'Claims support across African regions',
  'Training and onboarding support',
  'Marketing and co-branded resources',
  'Flexible payment solutions',
  'Performance incentives and growth programs',
];

export const process: ProcessStep[] = [
  {
    step: '01',
    title: 'Submit Partnership Request',
    description:
      'Tell us about your organisation, operations, and customer base.',
  },
  {
    step: '02',
    title: 'Consultation & Review',
    description:
      'Our partnership team evaluates opportunities and aligns solutions to your business.',
  },
  {
    step: '03',
    title: 'Onboarding & Training',
    description:
      'Receive onboarding resources, training, and partner enablement support.',
  },
  {
    step: '04',
    title: 'Launch Partnership',
    description:
      'Begin offering insurance solutions and scaling your partnership network.',
  },
];

export const testimonials = [
  {
    company: 'East Africa Logistics Group',
    quote:
      'Askari helped us streamline insurance processes for cross-border operations while improving claims turnaround times.',
  },
  {
    company: 'Continental Freight Solutions',
    quote:
      'The partnership support and digital onboarding experience were exceptional from day one.',
  },
];