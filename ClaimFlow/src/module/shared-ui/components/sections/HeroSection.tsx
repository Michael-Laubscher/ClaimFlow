import { useEffect, useState } from "react";
import "../css/AskariHero.css";

export default function AskariHero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="min-h-screen font-sans antialiased overflow-x-hidden">
      {/* HERO SECTION */}
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
                    <svg
                      className="w-3 h-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9 12.5l-3.5-3.5 1.41-1.42L9 9.67l5.09-5.08 1.41 1.41z" />
                    </svg>
                  </div>

                  Trusted by 10,000+ transporters across Africa
                </div>

                {/* Headline */}
                <h1
                  className={`pre-animate ${
                    loaded ? "animate-left delay-2" : ""
                  } text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight mb-6`}
                >
                  Protecting
                  <br />
                  African Trade,
                  <br />
                  <span className="gradient-text">One Journey</span>{" "}
                  <span>at a</span>
                  <br />
                  Time
                </h1>

                {/* Sub */}
                <p
                  className={`pre-animate ${
                    loaded ? "animate-up delay-3" : ""
                  } font-dm text-blue-100/80 text-lg leading-relaxed mb-10 max-w-lg`}
                >
                  Comprehensive insurance solutions for transporters, fleet
                  operators, and cross-border businesses throughout Africa.
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

                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
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
                  {[
                    {
                      value: "10K+",
                      label: "Active Policies",
                      delay: "delay-5",
                    },
                    {
                      value: "15",
                      label: "Countries",
                      delay: "delay-6",
                    },
                    {
                      value: "24/7",
                      label: "Support",
                      delay: "delay-7",
                    },
                  ].map((stat, i) => (
                    <div
                      key={i}
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
                      <div className="text-2xl font-extrabold">$500M+</div>

                      <div className="font-dm text-orange-100 text-xs mt-0.5">
                        Claims Paid
                      </div>
                    </div>
                  </div>

                  {/* Main Truck Card */}
                  <div className="truck-card w-full aspect-[4/3] relative">
                    <div className="truck-img-placeholder w-full h-full min-h-64">
                      {/* Accent */}
                      <div
                        className="absolute top-0 right-0 w-1/2 h-full"
                        style={{
                          background:
                            "linear-gradient(135deg, #e8723a, #c9562a)",
                          clipPath:
                            "polygon(35% 0%, 100% 0%, 100% 100%, 0% 100%)",
                        }}
                      />

                      {/* Truck SVG */}
                      <svg
                        className="relative z-10 w-56 h-auto drop-shadow-2xl"
                        viewBox="0 0 200 100"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {/* Trailer */}
                        <rect
                          x="0"
                          y="25"
                          width="135"
                          height="60"
                          rx="4"
                          fill="#334155"
                        />

                        <rect
                          x="2"
                          y="27"
                          width="131"
                          height="56"
                          rx="3"
                          fill="#475569"
                        />

                        {/* Cab */}
                        <rect
                          x="135"
                          y="35"
                          width="55"
                          height="50"
                          rx="5"
                          fill="#1e293b"
                        />

                        <rect
                          x="140"
                          y="40"
                          width="40"
                          height="22"
                          rx="3"
                          fill="#7dd3fc"
                          opacity="0.8"
                        />

                        {/* Grill */}
                        <rect
                          x="186"
                          y="52"
                          width="8"
                          height="28"
                          rx="2"
                          fill="#334155"
                        />

                        {/* Wheels */}
                        <circle cx="30" cy="88" r="12" fill="#1e293b" />
                        <circle cx="30" cy="88" r="7" fill="#475569" />

                        <circle cx="100" cy="88" r="12" fill="#1e293b" />
                        <circle cx="100" cy="88" r="7" fill="#475569" />

                        <circle cx="163" cy="88" r="12" fill="#1e293b" />
                        <circle cx="163" cy="88" r="7" fill="#475569" />

                        {/* Logo */}
                        <text
                          x="60"
                          y="58"
                          textAnchor="middle"
                          fill="white"
                          opacity="0.3"
                          fontSize="12"
                          fontWeight="bold"
                          fontFamily="sans-serif"
                        >
                          ASKARI
                        </text>
                      </svg>
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
                        <svg
                          className="w-5 h-5 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>

                      <div>
                        <div
                          className="text-2xl font-extrabold text-gray-900"
                          style={{ fontFamily: "'Sora', sans-serif" }}
                        >
                          98%
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
        <div className="hero-wave pointer-events-none">
          <svg
            viewBox="0 0 1440 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            className="w-full h-full"
          >
            <path
              d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* Partner Section */}
      <section className="bg-white py-20 font-dm">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-400 text-sm uppercase tracking-widest mb-6">
            Trusted partners across Africa
          </p>

          <div className="flex items-center justify-center gap-10 flex-wrap opacity-30 grayscale">
            {[
              "Partner A",
              "Partner B",
              "Partner C",
              "Partner D",
              "Partner E",
            ].map((partner) => (
              <div
                key={partner}
                className="text-xl font-bold text-gray-500 tracking-widest"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}