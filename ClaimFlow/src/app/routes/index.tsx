import { lazy, Suspense, type ReactNode } from "react";
import { createBrowserRouter, type RouteObject } from "react-router-dom";

import PublicLayout from "@/features/marketing/components/MainLayout";
import ErrorPage from "@/features/marketing/components/ErrorPage";
import Spinner from "@/features/shared-ui/components/sections/Spinner";

// -----------------------------
// Lazy-loaded pages
// -----------------------------

const HomePage = lazy(() => import("@/features/shared-ui/pages/Home"));
const DynamicPage = lazy(
  () => import("@/features/shared-ui/pages/DynamicPage")
);

// CUSTOM PAGES
const AboutPage = lazy(() => import("@/features/shared-ui/pages/About"));

const ClaimsPage = lazy(() => import("@/features/claims/pages/ClaimsPage"));
const SuccessPage = lazy(() => import("@/features/claims/pages/SuccessPage"));

// -----------------------------
// Page configs
// -----------------------------

import * as sharedUiConfigs from "@/features/shared-ui/configs";

const getInsuranceConfig =
  (sharedUiConfigs as any).getInsuranceConfig ??
  (sharedUiConfigs as any).getInsurancePageConfig ??
  (sharedUiConfigs as any).insuranceConfig;

const contactConfig =
  (sharedUiConfigs as any).contactConfig ??
  (sharedUiConfigs as any).contactPageConfig ??
  (sharedUiConfigs as any).contactUsConfig;

const newsConfig = (sharedUiConfigs as any).newsConfig;

// -----------------------------
// Routes
// -----------------------------

export const ROUTES = {
  HOME: "/",
  ABOUT: "/about",
  PARTNERSHIPS: "/partnerships",
  NEWS: "/news",
  CONTACT: "/contact",
  GET_INSURANCE: "/get-insurance",
  CLAIMS: "/claims",
} as const;

// -----------------------------
// Suspense wrapper
// -----------------------------

const withSuspense = (node: ReactNode) => (
  <Suspense fallback={<Spinner />}>{node}</Suspense>
);

// -----------------------------
// Dynamic route factory
// -----------------------------

const createDynamicRoute = ({
  path,
  config,
  title,
}: {
  path: string;
  config: any;
  title: string;
}): RouteObject => ({
  path,
  element: withSuspense(<DynamicPage config={config} />),
  handle: { title },
});

// -----------------------------
// Marketing routes
// -----------------------------

const marketingRoutes: RouteObject[] = [
  // ABOUT PAGE (custom page)
  {
    path: ROUTES.ABOUT,
    element: withSuspense(<AboutPage />),
    handle: { title: "About Us" },
  },

  // NEWS PAGE
  createDynamicRoute({
    path: ROUTES.NEWS,
    config: newsConfig,
    title: "News",
  }),

  // CONTACT PAGE
  createDynamicRoute({
    path: ROUTES.CONTACT,
    config: contactConfig,
    title: "Contact",
  }),

  // GET INSURANCE PAGE
  createDynamicRoute({
    path: ROUTES.GET_INSURANCE,
    config: getInsuranceConfig,
    title: "Get Insurance",
  }),
];

// -----------------------------
// Claims routes
// -----------------------------

const claimsRouteChildren: RouteObject[] = [
  {
    path: "new",
    element: withSuspense(<ClaimsPage />),
    handle: { title: "Submit Claim" },
  },
  {
    path: "success",
    element: withSuspense(<SuccessPage />),
    handle: { title: "Claim Submitted" },
  },
];

// -----------------------------
// Router
// -----------------------------

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    errorElement: <ErrorPage />,

    children: [
      // HOME
      {
        index: true,
        element: withSuspense(<HomePage />),
        handle: { title: "Home" },
      },

      // MARKETING PAGES
      ...marketingRoutes,

      // CLAIMS
      {
        path: ROUTES.CLAIMS,
        children: claimsRouteChildren,
      },

      // 404
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);