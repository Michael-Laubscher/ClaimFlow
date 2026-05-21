import { useEffect, useState } from "react";

import "@/features/shared-ui/components/css/AskariHero.css";

import { HERO_CONTENT, HERO_STATS } from "../../config/hero.config";

import {
  WaveDivider,
  CheckIcon,
  ArrowRightIcon,
  ShieldCheckIcon,
} from "@/shared/components/design-system/svg";

export function HeroSection() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden font-sans antialiased">
      <section
        className="
          hero-bg
          relative
          flex
          min-h-screen
          flex-col
        "
        style={{
          fontFamily: "'Sora', sans-serif",
        }}
      >
        {/* MAIN HERO */}

        <div
          className="
            relative
            z-10
            flex
            flex-1
            items-center
          "
        >
          <div
            className="
              mx-auto
              w-full
              max-w-full
              px-5
              py-14
              sm:px-6
              md:py-16
              lg:px-40
              lg:py-24
            "
          >
            <div
              className="
                flex
                flex-col
                gap-16
                lg:flex-row
                lg:items-center
              "
            >
              {/* LEFT COLUMN */}

              <div
                className="
                  flex-1
                  text-center
                  text-white
                  lg:text-left
                "
              >
                {/* TRUST BADGE */}

                <div
                  className={`
                    pre-animate
                    ${loaded ? "animate-up delay-1" : ""}
                    trusted-badge
                    mb-8
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    px-4
                    py-2
                    text-xs
                    text-white/90
                    sm:text-sm
                  `}
                >
                  <div
                    className="
                      flex
                      h-5
                      w-5
                      items-center
                      justify-center
                      rounded-full
                      bg-orange-500
                    "
                  >
                    <CheckIcon size={12} className="text-white" />
                  </div>

                  {HERO_CONTENT.badge}
                </div>

                {/* HEADLINE */}

                <h1
                  className={`
                    pre-animate
                    ${loaded ? "animate-left delay-2" : ""}
                    mb-6
                    text-4xl
                    font-extrabold
                    leading-tight
                    sm:text-5xl
                    lg:text-6xl
                    xl:text-7xl
                  `}
                >
                  {HERO_CONTENT.title.line1}
                  <br />
                  {HERO_CONTENT.title.line2}
                  <br />
                  <span className="gradient-text">
                    {HERO_CONTENT.title.highlight}
                  </span>{" "}
                  <span>{HERO_CONTENT.title.line3}</span>
                  <br />
                  {HERO_CONTENT.title.line4}
                </h1>

                {/* DESCRIPTION */}

                <p
                  className={`
                    pre-animate
                    ${loaded ? "animate-up delay-3" : ""}
                    mx-auto
                    mb-10
                    max-w-xl
                    text-base
                    leading-relaxed
                    text-blue-100/80
                    sm:text-lg
                    lg:mx-0
                  `}
                >
                  {HERO_CONTENT.description}
                </p>

                {/* CTA BUTTONS */}

                <div
                  className={`
                    pre-animate
                    ${loaded ? "animate-up delay-4" : ""}
                    mb-14
                    flex
                    flex-col
                    gap-4
                    sm:flex-row
                    sm:flex-wrap
                    lg:justify-start
                  `}
                >
                  <button
                    type="button"
                    className="
                      btn-primary
                      btn-quote
                      flex
                      w-full
                      items-center
                      justify-center
                      gap-2
                      rounded-xl
                      px-8
                      py-4
                      text-base
                      font-semibold
                      text-white
                      sm:w-auto
                    "
                  >
                    Get Instant Quote
                    <ArrowRightIcon
                      size={20}
                      className="
                        transition-transform
                        group-hover:translate-x-1
                      "
                    />
                  </button>

                  <button
                    type="button"
                    className="
                      btn-outline
                      w-full
                      rounded-xl
                      px-8
                      py-4
                      text-base
                      font-semibold
                      text-white
                      sm:w-auto
                    "
                  >
                    View Products
                  </button>
                </div>

                {/* STATS */}

                <div
                  className="
                    flex
                    flex-wrap
                    items-center
                    justify-center
                    gap-8
                    lg:justify-start
                  "
                >
                  {HERO_STATS.map((stat, i) => (
                    <div
                      key={stat.label}
                      className={`
                          pre-animate
                          ${loaded ? `animate-stat ${stat.delay}` : ""}
                          flex
                          items-center
                          gap-6
                        `}
                    >
                      {i > 0 && (
                        <div
                          className="
                              hidden
                              h-10
                              w-px
                              bg-white/10
                              sm:block
                            "
                        />
                      )}

                      <div>
                        <div
                          className="
                              text-2xl
                              font-extrabold
                              text-white
                              sm:text-3xl
                            "
                        >
                          {stat.value}
                        </div>

                        <div
                          className="
                              mt-0.5
                              text-xs
                              text-blue-200/70
                              sm:text-sm
                            "
                        >
                          {stat.label}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* RIGHT COLUMN */}

              <div
                className={`
                  pre-animate
                  ${loaded ? "animate-right delay-3" : ""}
                  relative
                  flex
                  flex-1
                  justify-center
                `}
              >
                <div
                  className="
                    relative
                    w-full
                    max-w-md
                    sm:max-w-lg
                  "
                >
                  {/* CLAIMS BADGE */}

                  <div
                    className="
                      float-card
                      absolute
                      -right-1
                      -top-4
                      z-20
                      sm:-top-6
                      sm:right-4
                    "
                  >
                    <div
                      className="
                        claims-badge
                        px-4
                        py-3
                        text-center
                        text-white
                        shadow-2xl
                        sm:px-5
                      "
                    >
                      <div
                        className="
                          text-xl
                          font-extrabold
                          sm:text-2xl
                        "
                      >
                        {HERO_CONTENT.claimsPaid}
                      </div>

                      <div
                        className="
                          mt-0.5
                          text-xs
                          text-orange-100
                        "
                      >
                        Claims Paid
                      </div>
                    </div>
                  </div>

                  {/* TRUCK CARD */}

                  <div
                    className="
                      truck-card
                      relative
                      aspect-[4/3]
                      w-full
                    "
                  >
                    <div
                      className="
                        truck-img-placeholder
                        h-full
                        min-h-[260px]
                        w-full
                        sm:min-h-[320px]
                        lg:min-h-[380px]
                      "
                    >
                      {/* Truck SVG/Image */}
                    </div>
                  </div>

                  {/* SATISFACTION CARD */}

                  <div
                    className="
                      float-card-2
                      absolute
                      -bottom-4
                      left-0
                      z-20
                      sm:-bottom-6
                      sm:-left-6
                    "
                  >
                    <div
                      className="
                        glass-card
                        flex
                        min-w-[220px]
                        items-center
                        gap-3
                        px-4
                        py-3
                        sm:px-5
                        sm:py-4
                      "
                    >
                      <div
                        className="
                          flex
                          h-10
                          w-10
                          flex-shrink-0
                          items-center
                          justify-center
                          rounded-full
                        "
                        style={{
                          background:
                            "linear-gradient(135deg, #22c55e, #16a34a)",
                        }}
                      >
                        <ShieldCheckIcon size={20} className="text-white" />
                      </div>

                      <div>
                        <div
                          className="
                            text-xl
                            font-extrabold
                            text-gray-900
                            sm:text-2xl
                          "
                          style={{
                            fontFamily: "'Sora', sans-serif",
                          }}
                        >
                          {HERO_CONTENT.satisfactionRate}
                        </div>

                        <div
                          className="
                            text-xs
                            text-gray-400
                          "
                        >
                          Satisfaction Rate
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* DECORATIVE RINGS */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      -bottom-10
                      -right-10
                      hidden
                      h-40
                      w-40
                      rounded-full
                      border
                      border-white/10
                      lg:block
                    "
                  />

                  <div
                    className="
                      pointer-events-none
                      absolute
                      -bottom-20
                      -right-20
                      hidden
                      h-72
                      w-72
                      rounded-full
                      border
                      border-white/5
                      lg:block
                    "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* WAVE DIVIDER */}

        <WaveDivider
          variant="layered"
          fill="white"
          animated
          className="h-16 sm:h-24"
        />
      </section>
    </div>
  );
}
