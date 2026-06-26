import type { PageBannerProps } from "@/shared/types/banner.types";

import { cn } from "@/shared/lib/cn";

import { HEADING_SIZES } from "@/shared/constants/banner.constants";

import { Container } from "../../layout/Container";

import { Heading } from "../../typography/Heading";

import { BannerBackground } from "./BannerBackground";
import { BannerBreadcrumbs } from "./BannerBreadcrumbs";
import { BannerActions } from "./BannerActions";
import { BannerStats } from "./BannerStats";

import { bannerStyles } from "@/shared/styles/banner.styles";

export function PageBanner(props: PageBannerProps) {
  const { title, subtitle, badge, breadcrumbs = [], primaryCta, secondaryCta, stats = [], size = "md", overlay = true, grid = true, className } = props;

  return (
    <section
      className={cn(
        `
relative
overflow-hidden

py-20
sm:py-28

text-white

`,
        bannerStyles.root,

        className
      )}
    >
      <BannerBackground overlay={overlay} grid={grid} />

      <Container className="relative z-10">
        <div
          className="
max-w-4xl
"
        >
          {breadcrumbs.length > 0 && <BannerBreadcrumbs items={breadcrumbs} />}

          {badge && (
            <div
              className="
mb-6
inline-flex

rounded-full

border
border-white/20

bg-white/10

px-4
py-1.5

text-sm

text-white/90

backdrop-blur-md

"
            >
              {badge}
            </div>
          )}

          <Heading
            size={HEADING_SIZES[size]}
            className="
max-w-3xl

text-balance

tracking-tight

text-white

"
          >
            {title}
          </Heading>

          {subtitle && (
            <p
              className="
mt-6

max-w-2xl

text-lg

leading-8

text-blue-100/80

"
            >
              {subtitle}
            </p>
          )}

          <BannerActions primary={primaryCta} secondary={secondaryCta} />
        </div>

        {stats.length > 0 && <BannerStats items={stats} />}
      </Container>
    </section>
  );
}
