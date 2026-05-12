import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError() as any;

  return (
    <div className="flex min-h-screen items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-red-600">Oops</h1>

        <p className="mt-4 text-lg text-slate-600">
          {error?.statusText || "Something went wrong"}
        </p>

        <Link
          to="/"
          className="mt-8 inline-block rounded-xl bg-blue-700 px-6 py-3 text-white"
        >
          Back Home
        </Link>
      </div>
    </div>
  );
}