import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { clsx } from "clsx";

import AskariLogo from "@/assets/logos/AskariLogo.png";

import { Button } from "@/shared/components/design-system/buttons/Button";

import { NAV_LINKS } from "../../../shared-ui/configs/nav.config";

import { DesktopNavItem } from "./DesktopNavItem";
import { MobileNavItem } from "./MobileNavItem";

import {
  ClipboardIcon,
  MenuIcon,
  XIcon,
} from "@/shared/components/design-system/svg/icons";

export function Navbar() {
  const location = useLocation();

  const [scrolled, setScrolled] = useState(false);

  const [mobileOpen, setMobileOpen] = useState(false);

  const [desktopDropdown, setDesktopDropdown] = useState<string | null>(null);

  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setDesktopDropdown(null);
    setMobileDropdown(null);
  }, [location.pathname]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setDesktopDropdown(null);
        setMobileDropdown(null);
      }
    };

    document.addEventListener("keydown", onKey);

    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      {/* Top Bar */}

      <div
        className="
    bg-gradient-to-r
    from-blue-900
    to-blue-950
    px-4
    py-3
    text-xs
    font-[--font-body]
    text-white/80
    sm:px-6
  "
      >
        <div
          className="
      mx-auto
      flex
      max-w-7xl
      flex-col
      gap-3
      sm:gap-4
      lg:flex-row
      lg:items-center
      lg:justify-between
    "
        >
          <div
            className="
        flex
        flex-wrap
        items-center
        gap-4
        sm:gap-5
      "
          >
            <Link
              to="/claims/new"
              className="
          flex
          items-center
          gap-1.5
          transition-colors
          hover:text-white
        "
            >
              <ClipboardIcon className="h-3.5 w-3.5 shrink-0" />

              <span>File a Claim</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Navbar */}

      <header
        className={clsx(
          "sticky top-0 z-50 w-full border-b transition-[background,box-shadow,border-color] duration-300 font-[--font-display]",
          scrolled
            ? "border-[--color-slate-100] bg-white/80 shadow-[0_2px_24px_rgba(10,30,100,0.10)] backdrop-blur-xl"
            : "border-[--color-slate-100] bg-white",
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          {/* Logo */}

          <Link to="/" className="flex items-center gap-3">
            <img
              src={AskariLogo}
              alt="Askari Insurance"
              className="h-10 w-auto object-contain"
            />

            <div className="hidden flex-col leading-none sm:flex">
              <span className="text-xs tracking-wide text-[--color-slate-500]">
                Protecting African Trade
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}

          <nav className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((item) => (
              <DesktopNavItem
                key={item.label}
                item={item}
                pathname={location.pathname}
                openDropdown={desktopDropdown}
                setOpenDropdown={setDesktopDropdown}
              />
            ))}
          </nav>

          {/* Desktop CTA */}

          <div className="hidden items-center gap-3 lg:flex">
            <Button label="Get Quote" variant="secondary" to="/get-quote" />
          </div>

          {/* Mobile Trigger */}

          <button
            className="rounded-xl p-2 text-[--color-slate-600] transition hover:bg-[--color-slate-50] lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <XIcon className="h-6 w-6" />
            ) : (
              <MenuIcon className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}

        {mobileOpen && (
          <div className="border-t border-[--color-slate-100] bg-white px-6 pb-6 pt-4 font-[--font-body] lg:hidden">
            <nav className="flex flex-col gap-1">
              {NAV_LINKS.map((item) => (
                <MobileNavItem
                  key={item.label}
                  item={item}
                  pathname={location.pathname}
                  openDropdown={mobileDropdown}
                  setOpenDropdown={setMobileDropdown}
                />
              ))}
            </nav>

            <div className="mt-5 flex flex-col gap-3">
              <Button
                label="Get Instant Quote"
                variant="secondary"
                to="/get-quote"
              />
            </div>
          </div>
        )}
      </header>
    </>
  );
}
