import { createBrowserRouter } from "react-router-dom";
import ClaimsPage from "../../module/claims/pages/ClaimsPage";
import SuccessPage from "../../module/claims/pages/SuccessPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Home</div>,
  },
  {
    path: "/claims/new",
    element: <ClaimsPage />,
  },
  {
    path: "/claims/success",
    element: <SuccessPage />,
  },
]);
