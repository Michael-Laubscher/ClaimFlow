import { Link, isRouteErrorResponse, useRouteError } from "react-router-dom";
import { motion } from "framer-motion";
import { AlertTriangle, Home, RefreshCw, ShieldAlert, WifiOff } from "lucide-react";
import type { JSX } from "react";

type ErrorConfig = {
  code: string;
  title: string;
  message: string;
  icon: JSX.Element;
};

function getErrorConfig(error: unknown): ErrorConfig {
  if (isRouteErrorResponse(error)) {
    switch (error.status) {
      case 404:
        return {
          code: "404",
          title: "Page not found",
          message: "The page you’re trying to access may have been moved or no longer exists.",
          icon: <AlertTriangle className="h-10 w-10 text-red-600" />,
        };

      case 403:
        return {
          code: "403",
          title: "Access denied",
          message: "You do not have permission to access this resource.",
          icon: <ShieldAlert className="h-10 w-10 text-red-600" />,
        };

      case 500:
        return {
          code: "500",
          title: "Server error",
          message: "The server encountered an unexpected issue while processing your request.",
          icon: <AlertTriangle className="h-10 w-10 text-red-600" />,
        };

      default:
        return {
          code: String(error.status),
          title: "Unexpected error",
          message: error.statusText || "An unknown application error occurred.",
          icon: <AlertTriangle className="h-10 w-10 text-red-600" />,
        };
    }
  }

  if (error instanceof Error && error.message.toLowerCase().includes("network")) {
    return {
      code: "NET",
      title: "Connection lost",
      message: "Unable to reach the server. Please check your internet connection and try again.",
      icon: <WifiOff className="h-10 w-10 text-red-600" />,
    };
  }

  return {
    code: "500",
    title: "Application error",
    message: "Something went wrong while loading the page.",
    icon: <AlertTriangle className="h-10 w-10 text-red-600" />,
  };
}

export default function ErrorPage() {
  const error = useRouteError();
  const config = getErrorConfig(error);

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#F7F9FC] px-4 py-6 sm:px-6 lg:px-8">
      {/* ambient blue */}
      <motion.div
        className="absolute left-[-8rem] top-[-6rem] h-[20rem] w-[20rem] rounded-full blur-3xl sm:h-[28rem] sm:w-[28rem]"
        style={{ background: "rgba(15,79,175,0.10)" }}
        animate={{ x: [0, 30, 0], y: [0, -15, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      {/* ambient accent */}
      <motion.div
        className="absolute right-[-5rem] bottom-[-5rem] h-[18rem] w-[18rem] rounded-full blur-3xl sm:h-[24rem] sm:w-[24rem]"
        style={{ background: "rgba(217,101,59,0.10)" }}
        animate={{ x: [0, -20, 0], y: [0, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      {/* grid background */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(15,79,175,0.06) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(15,79,175,0.06) 1px, transparent 1px)
          `,
          backgroundSize: "42px 42px",
        }}
      />

      {/* card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        className="relative z-10 w-full max-w-md overflow-hidden rounded-[1.8rem] border border-white/70 bg-white/80 p-6 shadow-[0_20px_60px_rgba(15,79,175,0.08)] backdrop-blur-xl sm:max-w-xl sm:p-8 lg:max-w-2xl lg:p-12"
      >
        {/* top accent line */}
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#0F4FAF] via-[#245DDB] to-[#D9653B]" />

        {/* icon */}
        <motion.div
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 2.6, repeat: Infinity }}
          className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-red-50 ring-1 ring-red-100 sm:h-24 sm:w-24"
        >
          {config.icon}
        </motion.div>

        {/* status section */}
        <div className="mt-6 text-center sm:mt-8">
          <h1 className="text-6xl font-black tracking-tight text-[#0F4FAF] sm:text-7xl lg:text-8xl">{config.code}</h1>

          <h2 className="mt-3 text-2xl font-semibold text-[#10243E] sm:text-3xl">{config.title}</h2>

          <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-[#6B7A90] sm:text-base">{config.message}</p>
        </div>

        {/* divider */}
        <div className="mx-auto mt-8 h-px w-28 bg-gradient-to-r from-transparent via-[#E2E8F0] to-transparent sm:w-40" />

        {/* buttons */}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0F4FAF] px-6 py-3 text-sm font-medium text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0C3D8B] sm:px-7 sm:text-base"
          >
            <Home size={18} />
            Return home
          </Link>

          <button
            onClick={() => window.location.reload()}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-[#E2E8F0] bg-white px-6 py-3 text-sm font-medium text-[#10243E] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md sm:px-7 sm:text-base"
          >
            <RefreshCw size={18} className="transition group-hover:rotate-180" />
            Reload page
          </button>
        </div>

        {/* footer */}
        <p className="mt-8 text-center text-xs text-[#6B7A90] sm:text-sm">If the issue continues, please contact the Askari support team.</p>
      </motion.div>
    </div>
  );
}
