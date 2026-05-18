import { Link } from 'react-router-dom';

import AskariLogo from '@/assets/logos/AskariLogo.png';

import {
  FOOTER_LINKS,
  SOCIAL_LINKS,
} from './footer.config';

import { FOOTER_LEGAL_LINKS } from './footer.constants';

import { FooterColumn } from './FooterColumn';

import { FooterSocials } from './FooterSocials';

import {
  MailIcon,
  PhoneIcon,
  PinIcon,
} from '@/shared/components/design-system/svg/icons';

export function Footer() {
  return (
    <footer
      className="bg-gradient-to-r from-blue-900 to-blue-700 font-[--font-body]"
      aria-label="Site footer"
    >
      {/* CTA */}

      <div className="mx-auto max-w-7xl px-6 pt-16">
        <div className="flex flex-col items-center justify-between gap-8 rounded-3xl bg-gradient-to-br from-[--color-orange] to-[--color-orange-dark] px-8 py-12 md:flex-row md:px-14">
          <div>
            <h2 className="font-[--font-display] text-3xl text-white">
              Ready to protect your cargo?
            </h2>

            <p className="mt-2 text-lg text-orange-100">
              Get an instant quote in under 2
              minutes.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link
              to="/get-quote"
              className="rounded-xl bg-white px-7 py-3.5 text-sm font-semibold text-[--color-orange-dark] shadow-lg transition-colors hover:bg-orange-50"
            >
              Get Instant Quote →
            </Link>

            <Link
              to="/claims/new"
              className="rounded-xl border-2 border-white/40 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              File a Claim
            </Link>
          </div>
        </div>
      </div>

      {/* Main Grid */}

      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-[2fr_1fr_1fr_1fr]">
          {/* Brand */}

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

            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/50">
              Comprehensive insurance
              solutions for transporters,
              fleet operators, and
              cross-border businesses
              throughout Africa.
            </p>

            <FooterSocials
              socials={SOCIAL_LINKS}
            />

            <div className="mt-6 space-y-1.5 text-sm text-white/50">
              <p className="flex items-center gap-2">
                <PhoneIcon className="h-3.5 w-3.5 shrink-0" />
                +254 700 000 000
              </p>

              <p className="flex items-center gap-2">
                <MailIcon className="h-3.5 w-3.5 shrink-0" />
                info@askariinsure.com
              </p>

              <p className="flex items-center gap-2">
                <PinIcon className="h-3.5 w-3.5 shrink-0" />
                Nairobi, Kenya ·
                Pan-African
              </p>
            </div>
          </div>

          {/* Columns */}

          {FOOTER_LINKS.map(
            (section) => (
              <FooterColumn
                key={section.heading}
                section={section}
              />
            ),
          )}
        </div>

        {/* Bottom Bar */}

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/30 md:flex-row">
          <p>
            © {new Date().getFullYear()}{' '}
            Askari Insure. All rights
            reserved.
          </p>

          <div className="flex gap-6">
            {FOOTER_LEGAL_LINKS.map(
              (link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="transition-colors hover:text-white/60"
                >
                  {link.label}
                </Link>
              ),
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}