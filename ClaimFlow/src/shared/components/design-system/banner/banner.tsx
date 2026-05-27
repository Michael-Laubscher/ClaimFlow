import { clsx } from "clsx";
import { Link } from "react-router-dom";
import { BannerBackground } from "./BannerBackground";
import { BannerBreadcrumbs } from "./BannerBreadcrumbs";
import { BannerStats } from "./BannerStats";
import type { PageBannerProps } from "@/shared/types/banner.types";
import { bannerSizeStyles } from "@/shared/constants/banner.constants";

import { Button } from "../buttons/Button";
import { Container } from "../layout/Container";

export function PageBanner({
  title,
  subtitle,

  badge,

  breadcrumbs,

  primaryCta,
  secondaryCta,

  stats,

  align = "left",
  size = "md",

  overlay = true,
  grid = true,

  className,
}: PageBannerProps) {
  return (
    <section className={clsx("relative isolate overflow-hidden bg-[#071852]", className)}>
      <BannerBackground overlay={overlay} grid={grid} />

      <Container className="relative z-10">
        <div
          className={clsx(
            "flex flex-col",
            bannerSizeStyles[size].wrapper,

            align === "center" ? "items-center text-center" : "items-start text-left"
          )}
        >
          {breadcrumbs && <BannerBreadcrumbs items={breadcrumbs} />}

          {badge && (
            <div
              className="
                mb-6
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-white/10
                bg-white/10
                px-4
                py-2
                text-xs
                font-semibold
                uppercase
                tracking-[0.18em]
                text-white/80
                backdrop-blur-md
              "
            >
              <span
                className="
                  h-2
                  w-2
                  rounded-full
                  bg-orange-400
                "
              />

              {badge}
            </div>
          )}

          <h1
            className={clsx(
              `
                max-w-5xl
                font-black
                leading-[0.95]
                tracking-tight
                text-white
              `,
              bannerSizeStyles[size].title
            )}
          >
            {title}
          </h1>

          {subtitle && (
            <p
              className={clsx(
                `
                  mt-6
                  max-w-3xl
                  leading-relaxed
                  text-blue-100/75
                `,
                bannerSizeStyles[size].subtitle
              )}
            >
              {subtitle}
            </p>
          )}

          {(primaryCta || secondaryCta) && (
            <div
              className="
                mt-10
                flex
                flex-wrap
                gap-4
              "
            >
              {primaryCta && (
                <Button asChild size="lg">
                  <Link to={primaryCta.to}>{primaryCta.label}</Link>
                </Button>
              )}

              {secondaryCta && (
                <Button asChild size="lg" variant="outline">
                  <Link to={secondaryCta.to}>{secondaryCta.label}</Link>
                </Button>
              )}
            </div>
          )}

          {stats && <BannerStats items={stats} />}
        </div>
      </Container>
    </section>
  );
}
