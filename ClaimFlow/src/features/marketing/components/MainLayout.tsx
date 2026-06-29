import { footerConfig } from "@/features/shared-ui/configs/footer.config";
import { Outlet, ScrollRestoration } from "react-router-dom";
import { Footer } from "./footer/Footer";
import { Navbar } from "./navigation/Navbar";

export default function PublicLayout() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <ScrollRestoration />

      <Navbar />

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer config={footerConfig} />
    </div>
  );
}