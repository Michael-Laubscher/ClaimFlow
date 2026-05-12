import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../shared/components/layout/MainLayout";
import DynamicPage from "../../module/website/pages/DynamicPage";

import { homeConfig } from "../../module/website/config/home.config";
import { aboutConfig } from "../../module/website/config/about.config";
import { productsConfig } from "../../module/website/config/products.config";
import { partnershipsConfig } from "../../module/website/config/partnerships.config";
import { newsConfig } from "../../module/website/config/news.config";
import { contactConfig } from "../../module/website/config/contact.config";
import { getInsuranceConfig } from "../../module/website/config/getInsurance.config";
import ErrorPage from "../../module/website/components/layout/ErrorPage";
import ClaimsPage from "../../module/claims/pages/ClaimsPage";
import SuccessPage from "../../module/claims/pages/SuccessPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,

    children: [
      { index: true, element: <DynamicPage config={homeConfig} /> },
      { path: "about", element: <DynamicPage config={aboutConfig} /> },
      { path: "products", element: <DynamicPage config={productsConfig} /> },
      {
        path: "partnerships",
        element: <DynamicPage config={partnershipsConfig} />,
      },
      { path: "news", element: <DynamicPage config={newsConfig} /> },
      { path: "contact", element: <DynamicPage config={contactConfig} /> },
      {
        path: "get-insurance",
        element: <DynamicPage config={getInsuranceConfig} />,
      },
      { path: "claims/new", element: <ClaimsPage /> },
      { path: "claims/new", element: <ClaimsPage /> },
      { path: "claims/success", element: <SuccessPage /> },
    ],
  },
]);
