import { Link } from 'react-router-dom';

export function Navbar() {
  const items = [
    ['Home', '/'], ['Products', '/products'], ['Claims', '/claims/new'], ['Contact', '/contact']
  ];
  return (
    <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="text-xl font-bold text-blue-800">Askari Insure</Link>
        <nav className="hidden gap-6 md:flex">
          {items.map(([label, to]) => <Link key={to} to={to} className="text-sm font-medium text-slate-700 hover:text-blue-700">{label}</Link>)}
        </nav>
      </div>
    </header>
  );
}