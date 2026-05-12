import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-between p-4 bg-white shadow">
      <div className="font-bold">Askari Insure</div>

      <div className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/products">Products</Link>
        <Link to="/partnerships">Partnerships</Link>
        <Link to="/news">News</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/get-insurance">Get Insurance</Link>
        <Link to="/claims/new" className="text-blue-600 font-bold">
          Claims
        </Link>
      </div>
    </nav>
  );
}