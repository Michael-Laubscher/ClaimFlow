import type { HeroSection as HeroSectionType } from "@/shared/types/page.types";
import { Link } from "react-router-dom";

export default function HeroSection({
  title,
  subtitle,
  eyebrow,
  buttonText,
  buttonLink,
  secondaryButtonText,
  secondaryButtonLink,
  stats = [],
  image,
}: HeroSectionType) {
  return (
    <section className="bg-linear-to-r from-blue-900 to-blue-700 py-24 text-white">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
        {/* Left Content */}
        <div>
          {eyebrow && (
            <p className="text-sm uppercase tracking-[0.2em] text-blue-200">
              {eyebrow}
            </p>
          )}

          <h1 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">
            {title}
          </h1>

          {subtitle && (
            <p className="mt-6 max-w-xl text-lg leading-8 text-blue-100">
              {subtitle}
            </p>
          )}

          <div className="mt-8 flex flex-wrap gap-4">
            {buttonText && buttonLink && (
              <Link
                to={buttonLink}
                className="rounded-2xl bg-white px-6 py-3 font-semibold text-blue-700 transition hover:bg-blue-50"
              >
                {buttonText}
              </Link>
            )}

            {secondaryButtonText && secondaryButtonLink && (
              <Link
                to={secondaryButtonLink}
                className="rounded-2xl border border-white px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-blue-700"
              >
                {secondaryButtonText}
              </Link>
            )}
          </div>
        </div>

        {/* Right Content */}
        <div>
          {image ? (
            <img
              src={image}
              alt={title}
              className="w-full rounded-3xl object-cover shadow-2xl"
            />
          ) : stats.length > 0 ? (
            <div className="grid gap-4 md:grid-cols-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-3xl bg-white p-6 text-slate-900 shadow-md"
                >
                  <p className="text-sm text-slate-500">{stat.label}</p>
                  <p className="mt-2 text-xl font-semibold">{stat.value}</p>
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}