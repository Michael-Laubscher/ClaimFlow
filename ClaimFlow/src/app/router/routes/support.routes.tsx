// app/router/routes/support.routes.tsx

import type { RouteObject } from "react-router-dom";

import { lazyPage, withSuspense } from "../route.utils";

import { ROUTES } from "../routes.constants";
import TermsOfServicePage from "@/features/shared-ui/pages/TermsOfService";
import PrivacyPolicyPage from "@/features/shared-ui/pages/Privacy";

// -----------------------------
// Lazy Pages
// -----------------------------

const FAQPage = lazyPage(() => import("@/features/shared-ui/pages/FAQPage"));
const BranchesPage = lazyPage(() => import("@/features/shared-ui/pages/Branches"));

// -----------------------------
// Routes
// -----------------------------

export const supportRoutes: RouteObject[] = [
  {
    path: ROUTES.FAQ,

    element: withSuspense(<FAQPage />),

    handle: {
      title: "FAQ",
    },
  },
  {
    path: ROUTES.BRANCHES,

    element: withSuspense(<BranchesPage />),

    handle: {
      title: "Branches",
    },
  },
  {
    path: ROUTES.TERMS_OF_SERVICE,

    element: withSuspense(<TermsOfServicePage />),

    handle: {
      title: "Terms of Service",
    },
  },
  {
    path: ROUTES.PRIVACY,

    element: withSuspense(<PrivacyPolicyPage />),

    handle: {
      title: "Privacy Policy",
    },
  },
];
