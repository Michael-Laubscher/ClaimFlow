import type { RouteObject } from "react-router-dom";

import { lazyPage, withSuspense } from "../route.utils";

// -----------------------------
// Lazy Pages
// -----------------------------

const ClaimsPage = lazyPage(() => import("@/features/claims/pages/ClaimsPage"));

const SuccessPage = lazyPage(() => import("@/features/claims/pages/SuccessPage"));

const GetQuotePage = lazyPage(() => import("@/features/claims/pages/GetQuote"));

const TrackClaimPage = lazyPage(() => import("@/features/claims/pages/TrackClaimPage"));

// -----------------------------
// Routes
// -----------------------------

export const claimsRoutes: RouteObject[] = [
  {
    path: "new",
    element: withSuspense(<ClaimsPage />),
    handle: {
      title: "Submit Claim",
    },
  },

  {
    path: "success",
    element: withSuspense(<SuccessPage />),
    handle: {
      title: "Claim Submitted",
    },
  },

  {
    path: "track",
    element: withSuspense(<TrackClaimPage />),
    handle: {
      title: "Track Claim",
    },
  },

  {
    path: "get-quote",
    element: withSuspense(<GetQuotePage />),
    handle: {
      title: "Get Insurance Quote",
    },
  },
];
