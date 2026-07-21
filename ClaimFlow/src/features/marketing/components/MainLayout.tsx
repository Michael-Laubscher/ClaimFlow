import { Outlet, ScrollRestoration } from "react-router-dom";
import { Navbar } from "./navigation/Navbar";
import { Footer } from "./footer/Footer";
import { footerConfig } from "@/features/shared-ui/configs/footer.config";

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
