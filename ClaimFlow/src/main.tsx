// src/main.tsx

import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import { router } from "@/app/router";

import "@/index.css";
import "@/shared/css/globals.css";
import "@/shared/css/tokens.css";

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
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
