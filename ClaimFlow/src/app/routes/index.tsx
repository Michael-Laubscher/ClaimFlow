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
  () => import("@/features/shared-ui/pages/DynamicPage"),
);

// CUSTOM PAGES
const AboutPage = lazy(() => import("@/features/shared-ui/pages/About"));
const ProductsPage = lazy(() => import("@/features/shared-ui/pages/Products"));

const ProductDetailsPage = lazy(
  () => import("@/features/shared-ui/pages/ProductDetails"),
);
const NewsPage = lazy(() => import("@/features/shared-ui/pages/News"));
const ContactPage = lazy(() => import("@/features/shared-ui/pages/Contact"));
const FAQPage = lazy(() => import("@/features/shared-ui/pages/FAQPage"));

const ClaimsPage = lazy(() => import("@/features/claims/pages/ClaimsPage"));
const SuccessPage = lazy(() => import("@/features/claims/pages/SuccessPage"));


// -----------------------------
// Page configs
// -----------------------------

import * as sharedUiConfigs from "@/features/shared-ui/configs";
import PartnersPage from "@/features/shared-ui/pages/Partners";

const getInsuranceConfig =
  (sharedUiConfigs as any).getInsuranceConfig ??
  (sharedUiConfigs as any).getInsurancePageConfig ??
  (sharedUiConfigs as any).insuranceConfig;

// -----------------------------
// Routes
// -----------------------------

export const ROUTES = {
  HOME: "/",
  ABOUT: "/about",
  PRODUCTS: "/products",
  PARTNERSHIPS: "/partnerships",
  NEWS: "/news",
  CONTACT: "/contact",
  GET_INSURANCE: "/get-insurance",
  CLAIMS: "/claims",
  FAQ: "/faq",
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

  // PRODUCTS PAGE
  {
    path: ROUTES.PRODUCTS,

    element: withSuspense(<ProductsPage />),

    handle: {
      title: "Products",
    },
  },

  // PRODUCT DETAILS PAGE
  {
    path: `${ROUTES.PRODUCTS}/:productId`,

    element: withSuspense(<ProductDetailsPage />),

    handle: {
      title: "Product Details",
    },
  },

  // PARTNERSHIPS PAGE
  {
    path: ROUTES.PARTNERSHIPS,
    element: withSuspense(<PartnersPage />),
    handle: {
      title: "Partnerships",
    },
  },

  // NEWS PAGE
  {
    path: ROUTES.NEWS,
    element: withSuspense(<NewsPage />),
    handle: {
      title: "News",
    },
  },

  // CONTACT PAGE
  {
    path: ROUTES.CONTACT,
    element: withSuspense(<ContactPage />),
    handle: {
      title: "Contact",
    },
  },

  // GET INSURANCE PAGE
  createDynamicRoute({
    path: ROUTES.GET_INSURANCE,
    config: getInsuranceConfig,
    title: "Get Insurance",
  }),
];

const supportRoutes: RouteObject[] = [
  {
    path: ROUTES.FAQ,
    element: withSuspense(<FAQPage />),
    handle: { title: "FAQ" },
  },
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
      ...supportRoutes,

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
