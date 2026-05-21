import { lazy, Suspense, type ReactNode } from "react";
import { createBrowserRouter, type RouteObject } from "react-router-dom";

import PublicLayout from "@/features/marketing/components/MainLayout";
import ErrorPage from "@/features/marketing/components/ErrorPage";
import Spinner from "@/features/shared-ui/components/sections/Spinner";

// -----------------------------
// Lazy-loaded pages
// -----------------------------

const DynamicPage = lazy(() => import("@/features/shared-ui/pages/DynamicPage"));
const HomePage = lazy(() => import("@/features/shared-ui/pages/Home"));

const ClaimsPage = lazy(() => import("@/features/claims/pages/ClaimsPage"));
const SuccessPage = lazy(() => import("@/features/claims/pages/SuccessPage"));

// -----------------------------
// Configs
// -----------------------------

import {
  aboutConfig,
  productsConfig,
  partnershipsConfig,
  newsConfig,
  contactConfig,
  getInsuranceConfig,
} from "@/features/shared-ui/configs";

// -----------------------------
// Route constants (optional but consistent)
// -----------------------------

export const ROUTES = {
  HOME: "/",
  ABOUT: "about",
  PRODUCTS: "products",
  PARTNERSHIPS: "partnerships",
  NEWS: "news",
  CONTACT: "contact",
  GET_INSURANCE: "get-insurance",
  CLAIMS: "claims",
} as const;

// -----------------------------
// Suspense helper (removes repetition)
// -----------------------------

const withSuspense = (node: ReactNode) => (
  <Suspense fallback={<Spinner />}>{node}</Suspense>
);

// -----------------------------
// Route factories
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
// Dynamic marketing routes
// -----------------------------

const dynamicRoutes: RouteObject[] = [
  createDynamicRoute({
    path: ROUTES.ABOUT,
    config: aboutConfig,
    title: "About Us",
  }),
  createDynamicRoute({
    path: ROUTES.PRODUCTS,
    config: productsConfig,
    title: "Products",
  }),
  createDynamicRoute({
    path: ROUTES.PARTNERSHIPS,
    config: partnershipsConfig,
    title: "Partnerships",
  }),
  createDynamicRoute({
    path: ROUTES.NEWS,
    config: newsConfig,
    title: "News",
  }),
  createDynamicRoute({
    path: ROUTES.CONTACT,
    config: contactConfig,
    title: "Contact",
  }),
  createDynamicRoute({
    path: ROUTES.GET_INSURANCE,
    config: getInsuranceConfig,
    title: "Get Insurance",
  }),
];

// -----------------------------
// Claims routes (renamed for clarity)
// -----------------------------

const claimsRouteChildren: RouteObject[] = [
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
];

// -----------------------------
// Router
// -----------------------------

export const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <PublicLayout />,
    errorElement: <ErrorPage />,

    children: [
      {
        index: true,
        element: withSuspense(<HomePage />),
        handle: {
          title: "Home",
        },
      },

      // Marketing pages
      ...dynamicRoutes,

      // Claims
      {
        path: ROUTES.CLAIMS,
        children: claimsRouteChildren,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);