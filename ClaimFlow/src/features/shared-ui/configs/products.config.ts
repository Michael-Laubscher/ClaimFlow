import { FileText, Globe, Package, Truck } from "lucide-react";

import type { Product } from "@/shared/types/product.types";

export const products: Product[] = [
  {
    id: "cargo",

    name: "Cargo Insurance",

    tagline: "Comprehensive protection for goods in transit.",

    icon: Package,

    coverageLabel: "Coverage Range",

    coverageDesc: "Coverage from $1,000 to $10,000,000 per shipment.",

    features: ["All-risk coverage", "Door-to-door protection", "Air, sea, and land coverage", "Immediate certificate issuance"],
  },

  {
    id: "commercial-vehicle",

    name: "Commercial Vehicle Insurance",

    tagline: "Fleet and vehicle coverage for logistics operations.",

    icon: Truck,

    coverageLabel: "Coverage Range",

    coverageDesc: "Single vehicles to fleets of 500+.",

    features: ["Comprehensive or third-party cover", "Fleet discounts", "Cross-border coverage", "24/7 roadside assistance"],
  },

  {
    id: "yellow-card",

    name: "Yellow Card Insurance",

    tagline: "COMESA cross-border motor insurance.",

    icon: Globe,

    coverageLabel: "Coverage Range",

    coverageDesc: "Required for travel across COMESA regions.",

    features: ["Valid across 19 COMESA countries", "Third-party liability", "Instant digital certificates", "Accepted at all COMESA borders"],
  },

  {
    id: "liability",

    name: "Liability Coverage",

    tagline: "Third-party liability protection.",

    icon: FileText,

    coverageLabel: "Coverage Range",

    coverageDesc: "Coverage up to $5,000,000 per incident.",

    features: ["Public liability", "Professional indemnity", "Employer's liability", "Legal defense costs included"],
  },
];
