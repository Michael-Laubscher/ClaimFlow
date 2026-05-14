export type BaseSection = {
  type: string;
};

export type StatItem = {
  label: string;
  value: string;
};

export type HeroSection = BaseSection & {
  type: "hero";
  eyebrow?: string;
  title: string;
  subtitle: string;
  buttonText?: string;
  buttonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  image?: string;
  stats?: StatItem[];
};

export type TextSection = BaseSection & {
  type: "text";
  title: string;
  content: string;
};

export type CardItem = {
  title: string;
  description: string;
  icon?: string;
};

export type CardSection = BaseSection & {
  type: "cards";
  title: string;
  items: CardItem[];
};

export type CTASection = BaseSection & {
  type: "cta";
  title: string;
  subtitle?: string;
  buttonText: string;
  buttonLink: string;
};

export type StatsSection = BaseSection & {
  type: "stats";
  items: StatItem[];
};

export type FeatureSection = BaseSection & {
  type: "feature";
  title: string;
  description?: string;
  items: string[];
};

export type ImageSection = BaseSection & {
  type: "image";
  title: string;
  content: string;
  image: string;
};

export type TestimonialItem = {
  name: string;
  role?: string;
  quote: string;
};

export type TestimonialsSection = BaseSection & {
  type: "testimonials";
  title: string;
  items: TestimonialItem[];
};

export type FAQItem = {
  question: string;
  answer: string;
};

export type FAQSection = BaseSection & {
  type: "faq";
  title: string;
  items: FAQItem[];
};

export type PageSection =
  | HeroSection
  | TextSection
  | CardSection
  | CTASection
  | StatsSection
  | FeatureSection
  | ImageSection
  | TestimonialsSection
  | FAQSection;

export type PageConfig = {
  sections: PageSection[];
};