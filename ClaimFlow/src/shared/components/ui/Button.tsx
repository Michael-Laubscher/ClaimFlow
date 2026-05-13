import { Link } from "react-router-dom";

type Props = {
  label: string;
  to?: string;
  onClick?: () => void;
};

export default function Button({ label, to, onClick }: Props) {
  if (to) {
    return (
      <Link
        to={to}
        className="rounded-xl bg-blue-700 px-6 py-3 font-semibold text-white"
      >
        {label}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      className="rounded-xl bg-blue-700 px-6 py-3 font-semibold text-white"
    >
      {label}
    </button>
  );
}