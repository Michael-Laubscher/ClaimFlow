import { Link } from "react-router-dom";

import AskariLogo from "@/assets/logos/AskariLogo.png";

import { footerConfig } from "./footer.config";

import { FooterColumn } from "./FooterColumn";

import { FooterSocials } from "./FooterSocials";

import { Headphones } from "lucide-react";

import {
  MailIcon,
  PhoneIcon,
  PinIcon,
} from "@/shared/components/design-system/svg/icons";

const CONTACT_ICONS = {
  phone: PhoneIcon,
  email: MailIcon,
  address: PinIcon,
};

export function Footer() {
  const {
    brand,
    cta,
    sections,
    socials,
    trustBadges,
    contact,
    legal,
  } = footerConfig;

  return (
    <footer
      className="
        overflow-x-hidden
        bg-[#071A52]
        font-[--font-body]
      "
      aria-label="Site footer"
    >
      {/* CTA SECTION */}

      <section
        className="
          border-b
          border-white/10
          footer-bg
        "
      >
        {/* Decorative Icon */}

        <div
          className="
            mx-auto
            mt-10
            flex
            justify-center
          "
        >
          <div
            className="
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-xl
              bg-white/10
            "
          >
            <Headphones
              className="h-7 w-7 text-white"
            />
          </div>
        </div>

        {/* CTA Content */}

        <div
          className="
            mx-auto
            max-w-7xl
            px-5
            py-14
            text-center
            sm:px-6
            sm:py-16
            lg:px-8
          "
        >
          <div
            className="
              mx-auto
              mb-10
              max-w-2xl
            "
          >
            <h2
              className="
                text-2xl
                font-semibold
                leading-tight
                text-white
                sm:text-3xl
                lg:text-4xl
              "
            >
              {cta.heading}
            </h2>

            <p
              className="
                mt-4
                text-sm
                leading-relaxed
                text-slate-300
                sm:text-base
              "
            >
              {cta.description}
            </p>
          </div>

          {/* CTA Buttons */}

          <div
            className="
              flex
              w-full
              flex-col
              gap-3
              sm:flex-row
              sm:flex-wrap
              sm:justify-center
            "
          >
            <Link
              to={cta.primary.to}
              className="
                w-full
                rounded-xl
                border
                border-white/15
                bg-white
                px-7
                py-3.5
                text-center
                text-sm
                font-semibold
                text-primary-dark
                transition-colors
                hover:bg-white/80
                sm:w-auto
              "
            >
              {cta.primary.label}
            </Link>

            <Link
              to={cta.secondary.to}
              className="
                w-full
                rounded-xl
                border
                border-white/15
                bg-white/5
                px-7
                py-3.5
                text-center
                text-sm
                font-semibold
                text-white
                transition-colors
                hover:bg-white/10
                sm:w-auto
              "
            >
              {cta.secondary.label}
            </Link>
          </div>
        </div>
      </section>

      {/* MAIN FOOTER */}

      <div
        className="
          mx-auto
          max-w-7xl
          px-5
          py-16
          sm:px-6
          lg:px-8
        "
      >
        <div
          className="
            grid
            grid-cols-1
            gap-14
            sm:grid-cols-2
            xl:grid-cols-[1.8fr_1fr_1fr_1.2fr]
          "
        >
          {/* BRAND */}

          <div>
            <Link
              to="/"
              className="
                flex
                items-center
                gap-3
                sm:gap-4
              "
            >
              <img
                src={AskariLogo}
                alt="Askari Insurance"
                className="
                  h-10
                  w-auto
                  object-contain
                  brightness-0
                  invert
                "
              />

              <div
                className="
                  flex
                  flex-col
                  leading-none
                "
              >
                <span
                  className="
                    text-sm
                    tracking-wide
                    text-slate-100
                  "
                >
                  {brand.tagline}
                </span>
              </div>
            </Link>

            <p
              className="
                mt-6
                max-w-sm
                text-sm
                leading-relaxed
                text-slate-300
              "
            >
              {brand.description}
            </p>

            {/* TRUST BADGES */}

            <div
              className="
                mt-7
                flex
                flex-wrap
                gap-2
                sm:gap-3
              "
            >
              {trustBadges.map((badge) => (
                <span
                  key={badge}
                  className="
                    rounded-full
                    border
                    border-white/10
                    bg-white/5
                    px-2.5
                    py-1
                    text-xs
                    text-slate-300
                    sm:px-3
                    sm:py-1.5
                  "
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* NAVIGATION */}

          {sections.map((section) => (
            <FooterColumn
              key={section.heading}
              section={section}
            />
          ))}
        </div>

        {/* CONTACT CARD */}

        <div className="mt-14">
          <h3
            className="
              mb-4
              text-sm
              font-semibold
              text-white
            "
          >
            Contact
          </h3>

          <div
            className="
              rounded-2xl
              border
              border-white/10
              bg-white/5
              p-5
            "
          >
            <div
              className="
                grid
                grid-cols-1
                gap-6
                sm:grid-cols-2
                xl:grid-cols-3
              "
            >
              {contact.map((item) => {
                const Icon =
                  CONTACT_ICONS[item.type];

                const content = (
                  <>
                    <div
                      className="
                        flex
                        h-10
                        w-10
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        bg-white/10
                      "
                    >
                      <Icon
                        className="
                          h-4
                          w-4
                          text-white
                        "
                      />
                    </div>

                    <div className="min-w-0">
                      <p
                        className="
                          text-xs
                          uppercase
                          tracking-wide
                          text-white
                        "
                      >
                        {item.label}
                      </p>

                      <p
                        className="
                          mt-1
                          break-words
                          text-sm
                          leading-relaxed
                          text-slate-200
                        "
                      >
                        {item.value}
                      </p>
                    </div>
                  </>
                );

                return item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    className="
                      flex
                      min-w-0
                      items-start
                      gap-3
                      text-white
                      transition-colors
                      hover:text-white/80
                    "
                  >
                    {content}
                  </a>
                ) : (
                  <div
                    key={item.label}
                    className="
                      flex
                      min-w-0
                      items-start
                      gap-3
                      text-white
                    "
                  >
                    {content}
                  </div>
                );
              })}
            </div>
          </div>

          {/* SOCIALS */}

          <div
            className="
              mt-10
              flex
              justify-center
              sm:justify-end
            "
          >
            <FooterSocials socials={socials} />
          </div>
        </div>

        {/* BOTTOM BAR */}

        <div
          className="
            mt-10
            border-t
            border-white/10
            pt-6
          "
        >
          <div
            className="
              flex
              flex-col
              gap-5
              md:flex-row
              md:items-center
              md:justify-between
            "
          >
            <div>
              <p
                className="
                  text-xs
                  text-white
                "
              >
                {legal.copyright}
              </p>

              <p
                className="
                  mt-2
                  text-xs
                  text-white
                "
              >
                {legal.compliance}
              </p>
            </div>

            <div
              className="
                flex
                flex-wrap
                justify-center
                gap-x-6
                gap-y-2
                md:justify-end
              "
            >
              {legal.links.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="
                    text-xs
                    text-white
                    transition-colors
                    hover:text-slate-200
                  "
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}