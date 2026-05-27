import type { NavItem } from "../../../shared/types/nav.types";

export const PRODUCTS_ITEMS: NavItem["children"] = [
  {
    label: "Marine Cargo Insurance",
    to: "/products/cargo",
    desc: "Protect goods in transit by sea",
  },
  {
    label: "Fleet & Motor Insurance",
    to: "/products/commercial-vehicle",
    desc: "Comprehensive fleet cover",
  },
  {
    label: "Transit Cover",
    to: "/products/yellow-card",
    desc: "Road & multimodal protection",
  },
  {
    label: "Cross-Border Solutions",
    to: "/products/liability",
    desc: "Pan-African trade cover",
  },
];

export const NAV_LINKS: NavItem[] = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  {
    label: "Products",
    to: "/products",
    children: PRODUCTS_ITEMS,
  },
  { label: "Partnerships", to: "/partnerships" },
  { label: "News", to: "/news" },
  { label: "Contact", to: "/contact" },
];
