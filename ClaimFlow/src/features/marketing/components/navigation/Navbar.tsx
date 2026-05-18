import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { clsx } from "clsx";

import AskariLogo from "@/assets/logos/AskariLogo.png";

import { Button } from "@/shared/components/design-system/Button";

import { NAV_LINKS } from "./nav.config";

import { DesktopNavItem } from "./DesktopNavItem";
import { MobileNavItem } from "./MobileNavItem";

import {
  ClipboardIcon,
  MailIcon,
  MenuIcon,
  PhoneIcon,
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

      <div className="bg-gradient-to-r from-blue-900 to-blue-700 px-6 py-2 text-xs font-[--font-body] text-white/80">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center gap-6">
            <a
              href="tel:+254700000000"
              className="flex items-center gap-1.5 transition-colors hover:text-white"
            >
              <PhoneIcon className="h-3.5 w-3.5" />
              +254 700 000 000
            </a>

            <a
              href="mailto:info@askariinsure.com"
              className="flex items-center gap-1.5 transition-colors hover:text-white"
            >
              <MailIcon className="h-3.5 w-3.5" />
              info@askariinsure.com
            </a>
          </div>

          <div className="flex items-center gap-5">
            <Link
              to="/claims/new"
              className="flex items-center gap-1.5 transition-colors hover:text-white"
            >
              <ClipboardIcon className="h-3.5 w-3.5" />
              File a Claim
            </Link>

            <Link to="/portal" className="transition-colors hover:text-white">
              Dashboard
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

              <Button label="Dashboard" variant="outline" to="/portal" />
            </div>
          </div>
        )}
      </header>
    </>
  );
}
