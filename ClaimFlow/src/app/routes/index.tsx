import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../shared/components/layout/MainLayout";

import HomePage from "../../module/website/pages/Homepage";
import AboutPage from "../../module/website/pages/AboutPage";
import ProductsPage from "../../module/website/pages/ProductsPage";
import PartnershipsPage from "../../module/website/pages/PartnershipsPage";
import NewsPage from "../../module/website/pages/NewsPage";
import ContactPage from "../../module/website/pages/ContactPage";
import GetInsurancePage from "../../module/website/pages/GetInsurancePage";

import ClaimsPage from "../../module/claims/pages/ClaimsPage";
import SuccessPage from "../../module/claims/pages/SuccessPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      { path: "products", element: <ProductsPage /> },
      { path: "partnerships", element: <PartnershipsPage /> },
      { path: "news", element: <NewsPage /> },
      { path: "contact", element: <ContactPage /> },
      { path: "get-insurance", element: <GetInsurancePage /> },

      // Claims stays as a feature
      { path: "claims/new", element: <ClaimsPage /> },
      { path: "claims/success", element: <SuccessPage /> },
    ],
  },
]);