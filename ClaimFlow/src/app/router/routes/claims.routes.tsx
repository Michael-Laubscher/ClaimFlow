import type { RouteObject } from "react-router-dom";

import ClaimDocumentsPage from "@/features/claims/pages/ClaimDocuments";
import ClaimIncidentPage from "@/features/claims/pages/ClaimIncident";
import { lazyPage, withSuspense } from "../route.utils";

// Lazy Pages
// -----------------------------

const ClaimsPage = lazyPage(() => import("@/features/claims/pages/ClaimsPage"));

const SuccessPage = lazyPage(() =>
  import("@/features/claims/pages/SuccessPage")
);

const GetQuotePage = lazyPage(() =>
  import("@/features/claims/pages/GetQuote")
);

// Routes
export const claimsRoutes: RouteObject[] = [
  {
    index: true,
    element: withSuspense(<ClaimsPage />),
  },

  {
    path: "incident",
    element: withSuspense(<ClaimIncidentPage />),
  },

  {
    path: "documents",
    element: withSuspense(
      <ClaimStepGuard step="documents">
        <ClaimDocumentsPage />
      </ClaimStepGuard>
    ),
  },

  {
    path: "success",
    element: withSuspense(
      <ClaimStepGuard step="success">
        <SuccessPage />
      </ClaimStepGuard>
    ),
  },

  {
    path: "get-quote",
    element: withSuspense(<GetQuotePage />),
  },
];