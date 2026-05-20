import { createBrowserRouter } from "react-router-dom";

import PublicLayout from "@/features/marketing/components/MainLayout";
import DynamicPage from "@/features/shared-ui/pages/DynamicPage";

import { aboutConfig } from "@/features/shared-ui/config/about.config";
import { productsConfig } from "@/features/shared-ui/config/products.config";
import { partnershipsConfig } from "@/features/shared-ui/config/partnerships.config";
import { newsConfig } from "@/features/shared-ui/config/news.config";
import { contactConfig } from "@/features/shared-ui/config/contact.config";
import { getInsuranceConfig } from "@/features/shared-ui/config/getInsurance.config";

import ClaimsPage from "@/features/claims/pages/ClaimsPage";
import SuccessPage from "@/features/claims/pages/SuccessPage";

import ErrorPage from "@/features/marketing/components/ErrorPage";
import HomePage from "@/features/shared-ui/pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    errorElement: <ErrorPage />,

    children: [
      { index: true, element: <HomePage /> },

      { path: "about", element: <DynamicPage config={aboutConfig} /> },
      { path: "products", element: <DynamicPage config={productsConfig} /> },
      { path: "partnerships", element: <DynamicPage config={partnershipsConfig} /> },
      { path: "news", element: <DynamicPage config={newsConfig} /> },
      { path: "contact", element: <DynamicPage config={contactConfig} /> },
      { path: "get-insurance", element: <DynamicPage config={getInsuranceConfig} /> },

      { path: "claims/new", element: <ClaimsPage /> },
      { path: "claims/success", element: <SuccessPage /> },

      // ✅ IMPORTANT: catch-all 404 route
      { path: "*", element: <ErrorPage /> },
    ],
  },
]);