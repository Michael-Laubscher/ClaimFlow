import { Link, NavLink } from "react-router-dom";

const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Products", path: "/products" },
  { name: "Partnerships", path: "/partnerships" },
  { name: "News", path: "/news" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="text-xl font-bold text-blue-700">
          Askari Insure
        </Link>

        <nav className="hidden gap-6 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                isActive
                  ? "font-semibold text-blue-700"
                  : "text-slate-600 hover:text-blue-600"
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        <Link
          to="/claims/new"
          className="rounded-xl bg-blue-700 px-5 py-2 text-sm font-semibold text-white hover:bg-blue-800"
        >
          Submit Claim
        </Link>
      </div>
    </header>
  );
}