import { useEffect, useState } from "react";

import "@/features/shared-ui/components/css/AskariHero.css";

import { HERO_CONTENT, HERO_STATS, PARTNERS } from "./hero.config";

import {
  WaveDivider,
  CheckIcon,
  ArrowRightIcon,
  ShieldCheckIcon,
} from "@/shared/components/design-system/svg";

export default function AskariHero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="min-h-screen font-sans antialiased overflow-x-hidden">
      <section
        className="hero-bg min-h-screen relative flex flex-col"
        style={{ fontFamily: "'Sora', sans-serif" }}
      >
        {/* Main Hero Content */}
        <div className="relative z-10 flex-1 flex items-center">
          <div className="max-w-full mx-auto px-40 py-16 lg:py-24 w-full">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
              {/* LEFT COLUMN */}
              <div className="flex-1 text-white">
                {/* Trusted Badge */}
                <div
                  className={`pre-animate ${
                    loaded ? "animate-up delay-1" : ""
                  } inline-flex items-center gap-2 trusted-badge rounded-full px-4 py-2 text-sm font-dm text-white/90 mb-8`}
                >
                  <div className="w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center">
                    <CheckIcon size={12} className="text-white" />
                  </div>

                  {HERO_CONTENT.badge}
                </div>

                {/* Headline */}
                <h1
                  className={`pre-animate ${
                    loaded ? "animate-left delay-2" : ""
                  } text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight mb-6`}
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

                {/* Description */}
                <p
                  className={`pre-animate ${
                    loaded ? "animate-up delay-3" : ""
                  } font-dm text-blue-100/80 text-lg leading-relaxed mb-10 max-w-lg`}
                >
                  {HERO_CONTENT.description}
                </p>

                {/* CTA Buttons */}
                <div
                  className={`pre-animate ${
                    loaded ? "animate-up delay-4" : ""
                  } flex flex-wrap gap-4 mb-14`}
                >
                  <button
                    type="button"
                    className="btn-primary flex items-center gap-2 text-white font-semibold px-8 py-4 rounded-xl text-base btn-quote"
                  >
                    Get Instant Quote
                    <ArrowRightIcon
                      size={20}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </button>

                  <button
                    type="button"
                    className="btn-outline text-white font-semibold px-8 py-4 rounded-xl text-base"
                  >
                    View Products
                  </button>
                </div>

                {/* Stats */}
                <div className="flex items-center gap-8 flex-wrap">
                  {HERO_STATS.map((stat, i) => (
                    <div
                      key={stat.label}
                      className={`pre-animate ${
                        loaded ? `animate-stat ${stat.delay}` : ""
                      } flex items-center gap-6`}
                    >
                      {i > 0 && <div className="stat-divider" />}

                      <div>
                        <div className="text-3xl font-extrabold text-white">
                          {stat.value}
                        </div>

                        <div className="font-dm text-blue-200/70 text-sm mt-0.5">
                          {stat.label}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* RIGHT COLUMN */}
              <div
                className={`pre-animate ${
                  loaded ? "animate-right delay-3" : ""
                } flex-1 relative flex justify-center lg:justify-end`}
              >
                <div className="relative w-full max-w-lg">
                  {/* Claims Badge */}
                  <div className="float-card absolute -top-6 -right-2 lg:right-4 z-20">
                    <div className="claims-badge text-white px-5 py-3 text-center shadow-2xl">
                      <div className="text-2xl font-extrabold">
                        {HERO_CONTENT.claimsPaid}
                      </div>

                      <div className="font-dm text-orange-100 text-xs mt-0.5">
                        Claims Paid
                      </div>
                    </div>
                  </div>

                  {/* Truck Card */}
                  <div className="truck-card w-full aspect-[4/3] relative">
                    <div className="truck-img-placeholder w-full h-full min-h-64">
                      {/* Truck SVG remains here */}
                    </div>
                  </div>

                  {/* Satisfaction Card */}
                  <div className="float-card-2 absolute -bottom-6 -left-2 lg:-left-8 z-20">
                    <div className="glass-card flex items-center gap-3 px-5 py-4 min-w-48">
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{
                          background:
                            "linear-gradient(135deg, #22c55e, #16a34a)",
                        }}
                      >
                        <ShieldCheckIcon size={20} className="text-white" />
                      </div>

                      <div>
                        <div
                          className="text-2xl font-extrabold text-gray-900"
                          style={{ fontFamily: "'Sora', sans-serif" }}
                        >
                          {HERO_CONTENT.satisfactionRate}
                        </div>

                        <div className="font-dm text-gray-400 text-xs">
                          Satisfaction Rate
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Decorative Rings */}
                  <div className="absolute -bottom-12 -right-12 w-48 h-48 rounded-full border border-white/10 pointer-events-none" />

                  <div className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full border border-white/5 pointer-events-none" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Wave */}
        <WaveDivider variant="layered" fill="white" animated className="h-24" />
      </section>

      {/* Partner Section */}
      <section className="bg-white py-20 font-dm">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-400 text-sm uppercase tracking-widest mb-6">
            Trusted partners across Africa
          </p>

          <div className="flex items-center justify-center gap-10 flex-wrap opacity-30 grayscale">
            {PARTNERS.map((partner) => (
              <div
                key={partner.name}
                className="text-xl font-bold text-gray-500 tracking-widest"
              >
                {partner.name}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
