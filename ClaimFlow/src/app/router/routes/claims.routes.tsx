import type { RouteObject } from "react-router-dom";

import ClaimDocumentsPage from "@/features/claims/pages/ClaimDocuments";
import ClaimIncidentPage from "@/features/claims/pages/ClaimIncident";
import NewClaimPage from "@/features/claims/pages/NewClaim";
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
    index: true,
    element: withSuspense(<ClaimsPage />),
  },

  {
    path: "new",
    element: withSuspense(<NewClaimPage />),
  },

  {
    path: "new/incident",
    element: withSuspense(<ClaimIncidentPage />),
  },

  {
    path: "new/documents",
    element: withSuspense(<ClaimDocumentsPage />),
  },

  {
    path: "success",
    element: withSuspense(<SuccessPage />),
  },

  {
    path: "track",
    element: withSuspense(<TrackClaimPage />),
  },

  {
    path: "get-quote",
    element: withSuspense(<GetQuotePage />),
  },
];
