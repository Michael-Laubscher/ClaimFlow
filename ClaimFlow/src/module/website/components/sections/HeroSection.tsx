import type { HeroSection as HeroSectionType } from "../../../../shared/types/page.types";

import { Link } from "react-router-dom";

export default function Hero({
  title,
  subtitle,
  buttonText,
  buttonLink,
  secondaryButtonText,
  secondaryButtonLink,
  image,
}: HeroSectionType) {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 lg:grid-cols-2">
        <div className="text-center lg:text-left">
          <h1 className="text-4xl font-bold md:text-5xl">{title}</h1>

          <p className="mt-6 text-lg text-slate-600">{subtitle}</p>

          <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
            {buttonText && buttonLink && (
              <Link
                to={buttonLink}
                className="rounded-xl bg-blue-700 px-6 py-3 font-semibold text-white"
              >
                {buttonText}
              </Link>
            )}

            {secondaryButtonText && secondaryButtonLink && (
              <Link
                to={secondaryButtonLink}
                className="rounded-xl border border-blue-700 px-6 py-3 font-semibold text-blue-700"
              >
                {secondaryButtonText}
              </Link>
            )}
          </div>
        </div>

        {image && (
          <img
            src={image}
            alt={title}
            className="w-full rounded-3xl object-cover shadow-xl"
          />
        )}
      </div>
    </section>
  );
}
