import { Link } from 'react-router-dom';
import AskariLogo from '@/assets/logos/AskariLogo.png';

const LINKS = {
  Products: [
    { label: 'Marine Cargo',        to: '/products/marine' },
    { label: 'Fleet Insurance',     to: '/products/fleet' },
    { label: 'Transit Cover',       to: '/products/transit' },
    { label: 'Cross-Border Cover',  to: '/products/crossborder' },
  ],
  Company: [
    { label: 'About Us',     to: '/about' },
    { label: 'Partnerships', to: '/partnerships' },
    { label: 'News',         to: '/news' },
    { label: 'Contact',      to: '/contact' },
  ],
  Support: [
    { label: 'File a Claim',    to: '/claims/new' },
    { label: 'Track a Claim',   to: '/claims/track' },
    { label: 'Customer Portal', to: '/portal' },
    { label: 'FAQ',             to: '/faq' },
  ],
};

const SOCIALS = [
  { label: 'LinkedIn', href: '#', icon: 'linkedin' },
  { label: 'Twitter',  href: '#', icon: 'twitter' },
  { label: 'Facebook', href: '#', icon: 'facebook' },
];

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-900 to-blue-700 font-[--font-body]" aria-label="Site footer">
      {/* CTA Banner */}
      <div className="mx-auto max-w-7xl px-6 pt-16">
        <div className="rounded-3xl bg-gradient-to-br from-[--color-orange] to-[--color-orange-dark] px-8 py-12 md:px-14 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="font-[--font-display] text-3xl text-white">
              Ready to protect your cargo?
            </h2>
            <p className="mt-2 text-orange-100 text-lg">
              Get an instant quote in under 2 minutes.
            </p>
          </div>
          <div className="flex gap-4 flex-wrap">
            <Link
              to="/get-quote"
              className="rounded-xl bg-white px-7 py-3.5 font-semibold text-[--color-orange-dark] text-sm hover:bg-orange-50 transition-colors shadow-lg"
            >
              Get Instant Quote →
            </Link>
            <Link
              to="/claims/new"
              className="rounded-xl border-2 border-white/40 px-7 py-3.5 font-semibold text-white text-sm hover:bg-white/10 transition-colors"
            >
              File a Claim
            </Link>
          </div>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-[2fr_1fr_1fr_1fr]">
          {/* Brand col */}
          <div>
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
            <p className="mt-5 text-sm leading-relaxed text-white/50 max-w-xs">
              Comprehensive insurance solutions for transporters, fleet operators, and
              cross-border businesses throughout Africa.
            </p>
            <div className="mt-6 flex gap-3">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/15 text-white/50 hover:border-[--color-orange] hover:text-[--color-orange] transition-colors"
                >
                  <SocialIcon type={s.icon} />
                </a>
              ))}
            </div>
            <div className="mt-6 space-y-1.5 text-sm text-white/50">
              <p className="flex items-center gap-2"><PhoneIcon /> +254 700 000 000</p>
              <p className="flex items-center gap-2"><MailIcon /> info@askariinsure.com</p>
              <p className="flex items-center gap-2"><PinIcon /> Nairobi, Kenya · Pan-African</p>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(LINKS).map(([heading, items]) => (
            <div key={heading}>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">{heading}</h3>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      className="text-sm text-white/60 hover:text-white transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/30">
          <p>© {new Date().getFullYear()} Askari Insure. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy"  className="hover:text-white/60 transition-colors">Privacy Policy</Link>
            <Link to="/terms"    className="hover:text-white/60 transition-colors">Terms of Service</Link>
            <Link to="/cookies"  className="hover:text-white/60 transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* Tiny icon helpers */
const PhoneIcon = () => (
  <svg className="h-3.5 w-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);
const MailIcon = () => (
  <svg className="h-3.5 w-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);
const PinIcon = () => (
  <svg className="h-3.5 w-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);
const SocialIcon = ({ type }: { type: string }) => {
  if (type === 'linkedin') return (
    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
  if (type === 'twitter') return (
    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  );
  return (
    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  );
};