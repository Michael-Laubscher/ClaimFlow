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
    <section className={cn(bannerStyles.root, className)}>
      <BannerBackground overlay={overlay} grid={grid} />

      <Container className="relative z-10">
        <BannerBreadcrumbs items={breadcrumbs} />

        {badge && <div className="mb-4">{badge}</div>}

        <Heading size={HEADING_SIZES[size]}>{title}</Heading>

        {subtitle && <p className={bannerStyles.subtitle}>{subtitle}</p>}

        <BannerActions primary={primaryCta} secondary={secondaryCta} />

        <BannerStats items={stats} />
      </Container>
    </section>
  );
}
