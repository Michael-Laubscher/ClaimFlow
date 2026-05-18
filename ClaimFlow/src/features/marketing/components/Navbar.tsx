import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { clsx } from 'clsx';

import AskariLogo from '@/assets/logos/AskariLogo.png';

import { Button } from '@/shared/components/design-system/Button';

const PRODUCTS_ITEMS = [
  {
    label: 'Marine Cargo Insurance',
    to: '/products/marine',
    desc: 'Protect goods in transit by sea',
  },
  {
    label: 'Fleet & Motor Insurance',
    to: '/products/fleet',
    desc: 'Comprehensive fleet cover',
  },
  {
    label: 'Transit Cover',
    to: '/products/transit',
    desc: 'Road & multimodal protection',
  },
  {
    label: 'Cross-Border Solutions',
    to: '/products/crossborder',
    desc: 'Pan-African trade cover',
  },
];

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Products', to: '/products', children: PRODUCTS_ITEMS },
  { label: 'Partnerships', to: '/partnerships' },
  { label: 'News', to: '/news' },
  { label: 'Contact', to: '/contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  const [mobileOpen, setMobileOpen] = useState(false);

  const [desktopDropOpen, setDesktopDropOpen] = useState(false);

  const [mobileDropOpen, setMobileDropOpen] = useState(false);

  const location = useLocation();

  const dropRef = useRef<HTMLDivElement>(null);

  /* ─────────────────────────────
     Scroll state
  ───────────────────────────── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* ─────────────────────────────
     Outside click close
  ───────────────────────────── */
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        dropRef.current &&
        !dropRef.current.contains(e.target as Node)
      ) {
        setDesktopDropOpen(false);
      }
    };

    document.addEventListener('mousedown', handler);

    return () =>
      document.removeEventListener('mousedown', handler);
  }, []);

  /* ─────────────────────────────
     Escape key close
  ───────────────────────────── */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setDesktopDropOpen(false);
        setMobileDropOpen(false);
      }
    };

    document.addEventListener('keydown', onKey);

    return () =>
      document.removeEventListener('keydown', onKey);
  }, []);

  /* ─────────────────────────────
     Close menus on route change
  ───────────────────────────── */
  useEffect(() => {
    setMobileOpen(false);
    setDesktopDropOpen(false);
    setMobileDropOpen(false);
  }, [location]);

  return (
    <>
      {/* ─────────────────────────────
          Top Info Bar
      ───────────────────────────── */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 px-6 py-2 text-xs font-[--font-body] text-white/80">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center gap-6">
            <a
              href="tel:+254700000000"
              className="flex items-center gap-1.5 transition-colors hover:text-white"
            >
              <PhoneIcon />
              +254 700 000 000
            </a>

            <a
              href="mailto:info@askariinsure.com"
              className="flex items-center gap-1.5 transition-colors hover:text-white"
            >
              <MailIcon />
              info@askariinsure.com
            </a>
          </div>

          <div className="flex items-center gap-5">
            <Link
              to="/claims/new"
              className="flex items-center gap-1.5 transition-colors hover:text-white"
            >
              <ClipboardIcon />
              File a Claim
            </Link>

            <Link
              to="/portal"
              className="transition-colors hover:text-white"
            >
              Dashboard
            </Link>
          </div>
        </div>
      </div>

      {/* ─────────────────────────────
          Main Navbar
      ───────────────────────────── */}
      <header
        className={clsx(
          'sticky top-0 z-50 w-full border-b transition-[background,box-shadow,border-color] duration-300 font-[--font-display]',
          scrolled
            ? 'border-[--color-slate-100] bg-white/80 backdrop-blur-xl shadow-[0_2px_24px_rgba(10,30,100,0.10)]'
            : 'border-[--color-slate-100] bg-white',
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          {/* ─────────────────────────────
              Logo
          ───────────────────────────── */}
          <Link
            to="/"
            className="flex items-center gap-3"
          >
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

          {/* ─────────────────────────────
              Desktop Navigation
          ───────────────────────────── */}
          <nav className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) =>
              link.children ? (
                <div
                  key={link.label}
                  className="relative"
                  ref={dropRef}
                >
                  <button
                    onClick={() =>
                      setDesktopDropOpen(!desktopDropOpen)
                    }
                    aria-expanded={desktopDropOpen}
                    aria-haspopup="menu"
                    className={clsx(
                      'flex items-center gap-1 rounded-xl px-4 py-2 text-sm font-semibold transition-colors',
                      desktopDropOpen
                        ? 'bg-[--color-slate-50] text-[--color-navy]'
                        : 'text-[--color-slate-600] hover:bg-[--color-slate-50] hover:text-[--color-navy]',
                    )}
                  >
                    {link.label}

                    <ChevronDown
                      className={clsx(
                        'h-4 w-4 transition-transform',
                        desktopDropOpen && 'rotate-180',
                      )}
                    />
                  </button>

                  {desktopDropOpen && (
                    <div className="absolute left-0 top-full z-50 mt-2 w-72 origin-top-left animate-in rounded-xl border border-[--color-slate-100] bg-white py-2 shadow-[--shadow-float] fade-in zoom-in-95 duration-200 slide-in-from-top-2">
                      {link.children.map((child) => (
                        <Link
                          key={child.to}
                          to={child.to}
                          className="mx-2 flex flex-col rounded-xl px-5 py-3 transition-colors hover:bg-[--color-slate-50]"
                        >
                          <span className="text-sm font-semibold text-[--color-navy]">
                            {child.label}
                          </span>

                          <span className="mt-0.5 text-xs text-[--color-slate-400]">
                            {child.desc}
                          </span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.label}
                  to={link.to}
                  className={clsx(
                    'rounded-xl px-4 py-2 text-sm font-semibold transition-colors',
                    location.pathname === link.to ||
                      (link.to !== '/' &&
                        location.pathname.startsWith(link.to))
                      ? 'bg-[--color-slate-50] text-[--color-navy]'
                      : 'text-[--color-slate-600] hover:bg-[--color-slate-50] hover:text-[--color-navy]',
                  )}
                >
                  {link.label}
                </Link>
              ),
            )}
          </nav>

          {/* ─────────────────────────────
              Desktop CTA
          ───────────────────────────── */}
          <div className="hidden items-center gap-3 lg:flex">
            <Button
              label="Get Quote"
              variant="secondary"
              to="/get-quote"
            />
          </div>

          {/* ─────────────────────────────
              Mobile Hamburger
          ───────────────────────────── */}
          <button
            className="rounded-xl p-2 text-[--color-slate-600] transition hover:bg-[--color-slate-50] lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <XIcon /> : <MenuIcon />}
          </button>
        </div>

        {/* ─────────────────────────────
            Mobile Menu
        ───────────────────────────── */}
        {mobileOpen && (
          <div className="border-t border-[--color-slate-100] bg-white px-6 pb-6 pt-4 font-[--font-body] lg:hidden">
            <nav className="flex flex-col gap-1">
              {NAV_LINKS.map((link) =>
                link.children ? (
                  <div
                    key={link.label}
                    className="space-y-1"
                  >
                    <button
                      onClick={() =>
                        setMobileDropOpen(!mobileDropOpen)
                      }
                      className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-medium text-[--color-slate-700] transition-colors hover:bg-[--color-slate-50]"
                    >
                      {link.label}

                      <ChevronDown
                        className={clsx(
                          'h-4 w-4 transition-transform',
                          mobileDropOpen && 'rotate-180',
                        )}
                      />
                    </button>

                    {mobileDropOpen && (
                      <div className="ml-3 flex flex-col border-l border-[--color-slate-100] pl-3">
                        {link.children.map((child) => (
                          <Link
                            key={child.to}
                            to={child.to}
                            className="rounded-lg px-3 py-2 text-sm text-[--color-slate-600] transition-colors hover:bg-[--color-slate-50]"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.label}
                    to={link.to}
                    className={clsx(
                      'rounded-xl px-4 py-3 text-sm font-medium transition-colors',
                      location.pathname === link.to ||
                        (link.to !== '/' &&
                          location.pathname.startsWith(link.to))
                        ? 'bg-[--color-slate-50] text-[--color-navy]'
                        : 'text-[--color-slate-700] hover:bg-[--color-slate-50] hover:text-[--color-navy]',
                    )}
                  >
                    {link.label}
                  </Link>
                ),
              )}
            </nav>

            <div className="mt-5 flex flex-col gap-3">
              <Button
                label="Get Instant Quote"
                variant="secondary"
                to="/get-quote"
              />

              <Button
                label="Dashboard"
                variant="outline"
                to="/portal"
              />
            </div>
          </div>
        )}
      </header>
    </>
  );
}

/* ─────────────────────────────
   Icons
───────────────────────────── */

const PhoneIcon = () => (
  <svg
    className="h-3.5 w-3.5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
    />
  </svg>
);

const MailIcon = () => (
  <svg
    className="h-3.5 w-3.5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
);

const ClipboardIcon = () => (
  <svg
    className="h-3.5 w-3.5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
    />
  </svg>
);

const ChevronDown = ({
  className,
}: {
  className?: string;
}) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 9l-7 7-7-7"
    />
  </svg>
);

const MenuIcon = () => (
  <svg
    className="h-6 w-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
);

const XIcon = () => (
  <svg
    className="h-6 w-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);