// src/main.tsx

import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import { router } from "@/app/router";

import "@/index.css";
import "@/shared/css/animations.css";
import "@/shared/css/globals.css";
import "@/shared/css/tokens.css";
import { ToastProvider } from "./shared/components/design-system/feedback/Toast";

// -----------------------------
// Root
// -----------------------------

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element #root not found");
}

// -----------------------------
// Render
// -----------------------------

ReactDOM.createRoot(rootElement).render(
  <ToastProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </ToastProvider>
);
