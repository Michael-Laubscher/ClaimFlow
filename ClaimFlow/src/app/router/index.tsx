// app/router/index.tsx

import { createBrowserRouter } from "react-router-dom";

import PublicLayout from "@/features/marketing/components/MainLayout";

import ErrorPage from "@/features/marketing/components/ErrorPage";

import { lazyPage, withSuspense } from "./route.utils";

import { ROUTES } from "./routes.constants";

import { marketingRoutes } from "./routes/marketing.routes";

import { supportRoutes } from "./routes/support.routes";

import { claimsRoutes } from "./routes/claims.routes";

// -----------------------------
// Lazy Pages
// -----------------------------

const HomePage = lazyPage(() => import("@/features/shared-ui/pages/Home"));

// -----------------------------
// Router
// -----------------------------

export const router = createBrowserRouter([
  {
    path: ROUTES.HOME,

    element: <PublicLayout />,

    errorElement: <ErrorPage />,

    children: [
      // HOME
      {
        index: true,

        element: withSuspense(<HomePage />),

        handle: {
          title: "Home",
        },
      },

      // MARKETING
      ...marketingRoutes,

      // SUPPORT
      ...supportRoutes,

      // CLAIMS
      {
        path: ROUTES.CLAIMS,

        children: claimsRoutes,
      },

      // 404
      {
        path: "*",

        element: <ErrorPage />,
      },
    ],
  },
]);
