// app/router/routes/marketing.routes.tsx

import type { RouteObject } from "react-router-dom";

import { lazyPage, withSuspense } from "../route.utils";

import { ROUTES } from "../routes.constants";

// -----------------------------
// Lazy Pages
// -----------------------------

const AboutPage = lazyPage(() => import("@/features/shared-ui/pages/About"));

const ProductsPage = lazyPage(() => import("@/features/shared-ui/pages/Products"));

const ProductDetailsPage = lazyPage(() => import("@/features/shared-ui/pages/ProductDetails"));

const PartnersPage = lazyPage(() => import("@/features/shared-ui/pages/Partners"));

const NewsPage = lazyPage(() => import("@/features/shared-ui/pages/News"));

const ContactPage = lazyPage(() => import("@/features/shared-ui/pages/Contact"));

// -----------------------------
// Routes
// -----------------------------

export const marketingRoutes: RouteObject[] = [
  {
    path: ROUTES.ABOUT,

    element: withSuspense(<AboutPage />),

    handle: {
      title: "About Us",
    },
  },

  {
    path: ROUTES.PRODUCTS,

    element: withSuspense(<ProductsPage />),

    handle: {
      title: "Products",
    },
  },

  {
    path: ROUTES.PRODUCT_DETAILS,

    element: withSuspense(<ProductDetailsPage />),

    handle: {
      title: "Product Details",
    },
  },

  {
    path: ROUTES.PARTNERSHIPS,

    element: withSuspense(<PartnersPage />),

    handle: {
      title: "Partnerships",
    },
  },

  {
    path: ROUTES.NEWS,

    element: withSuspense(<NewsPage />),

    handle: {
      title: "News",
    },
  },

  {
    path: ROUTES.CONTACT,

    element: withSuspense(<ContactPage />),

    handle: {
      title: "Contact",
    },
  },

  {
    path: ROUTES.GET_INSURANCE,

    element: withSuspense(<AboutPage />),

    handle: {
      title: "Get Insurance",
    },
  },
];
