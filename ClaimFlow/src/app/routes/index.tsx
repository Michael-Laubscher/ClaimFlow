import { createBrowserRouter } from "react-router-dom";

import PublicLayout from "@/module/marketing/components/MainLayout";
import PortalLayout from "@/module/portal/pages/PortalLayout";

import DynamicPage from "@/module/shared-ui/pages/DynamicPage";

import { homeConfig } from "@/module/shared-ui/config/home.config";
import { aboutConfig } from "@/module/shared-ui/config/about.config";
import { productsConfig } from "@/module/shared-ui/config/products.config";
import { partnershipsConfig } from "@/module/shared-ui/config/partnerships.config";
import { newsConfig } from "@/module/shared-ui/config/news.config";
import { contactConfig } from "@/module/shared-ui/config/contact.config";
import { getInsuranceConfig } from "@/module/shared-ui/config/getInsurance.config";

import ClaimsPage from "@/module/claims/pages/ClaimsPage";
import SuccessPage from "@/module/claims/pages/SuccessPage";

import DashboardPage from "@/module/portal/pages/DashboardPage";

import ErrorPage from "@/module/marketing/components/ErrorPage";

export const router = createBrowserRouter([
  /**
   * PUBLIC ROUTES
   */
  {
    path: "/",
    element: <PublicLayout />,
    errorElement: <ErrorPage />,

    children: [
      { index: true, element: <DynamicPage config={homeConfig} /> },

      { path: "about", element: <DynamicPage config={aboutConfig} /> },

      {
        path: "products",
        element: <DynamicPage config={productsConfig} />,
      },

      {
        path: "partnerships",
        element: <DynamicPage config={partnershipsConfig} />,
      },

      { path: "news", element: <DynamicPage config={newsConfig} /> },

      {
        path: "contact",
        element: <DynamicPage config={contactConfig} />,
      },

      {
        path: "get-insurance",
        element: <DynamicPage config={getInsuranceConfig} />,
      },

      { path: "claims/new", element: <ClaimsPage /> },

      { path: "claims/success", element: <SuccessPage /> },
    ],
  },

  /**
   * PORTAL ROUTES
   */
  {
    path: "/portal",
    element: <PortalLayout />,

    children: [
      {
        path: "dashboard",
        element: <DashboardPage />,
      },
    ],
  },
]);
