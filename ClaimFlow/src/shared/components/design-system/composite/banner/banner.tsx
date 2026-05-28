import type { PageBannerProps } from "@/shared/types/banner.types";
import { Container } from "../../layout/Container";
import { Button } from "../../primitives/buttons/Button";
import { Heading } from "../../typography/Heading";

export function PageBanner({
  title,
  subtitle,
  badge,
  breadcrumbs,
  primaryCta,
  secondaryCta,
  stats,

  size = "md",
  overlay,
  grid,
  className,
}: PageBannerProps) {
  return (
    <section className={["bg-[#071852] text-white py-20", overlay && "relative", grid && "bg-grid", className].filter(Boolean).join(" ")}>
      <Container>
        {/* Breadcrumbs */}
        {breadcrumbs?.length ? (
          <nav className="mb-4 text-sm text-white/60">
            {breadcrumbs.map((b, i) => (
              <span key={i}>
                {b.to ? (
                  <a href={b.to} className="hover:text-white">
                    {b.label}
                  </a>
                ) : (
                  <span>{b.label}</span>
                )}
                {i < breadcrumbs.length - 1 && " / "}
              </span>
            ))}
          </nav>
        ) : null}

        {/* Badge */}
        {badge && <div className="mb-3">{badge}</div>}

        {/* Heading */}
        <Heading size={size === "sm" ? "lg" : size === "lg" ? "hero" : "xl"}>{title}</Heading>

        {/* Subtitle */}
        {subtitle && <p className="mt-4 text-white/70 max-w-2xl">{subtitle}</p>}

        {/* CTAs */}
        {(primaryCta || secondaryCta) && (
          <div className="mt-8 flex gap-3">
            {primaryCta && <Button>{primaryCta.label}</Button>}

            {secondaryCta && <Button variant="outline">{secondaryCta.label}</Button>}
          </div>
        )}

        {/* Stats */}
        {stats?.length ? (
          <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-4">
            {stats.map((s, i) => (
              <div key={i}>
                <div className="text-2xl font-semibold">{s.value}</div>
                <div className="text-white/60 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        ) : null}
      </Container>
    </section>
  );
}
