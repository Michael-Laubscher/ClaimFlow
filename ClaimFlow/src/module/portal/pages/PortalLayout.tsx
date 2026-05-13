import { Outlet } from "react-router-dom";

export default function PortalLayout() {
  return (
    <div className="min-h-screen grid lg:grid-cols-[260px_1fr]">
      <aside className="border-r bg-white p-6">Sidebar</aside>

      <main className="bg-slate-50">
        <Outlet />
      </main>
    </div>
  );
}