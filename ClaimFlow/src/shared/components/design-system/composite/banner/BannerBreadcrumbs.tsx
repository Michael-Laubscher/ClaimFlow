import { Link } from "react-router-dom";

import type { BannerBreadcrumb } from "@/shared/types/banner.types";

interface Props {
  items: BannerBreadcrumb[];
}

export function BannerBreadcrumbs({ items }: Props) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="
        mb-6
        flex flex-wrap items-center gap-2
        text-sm text-white/60
      "
    >
      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <div key={`${item.label}-${index}`} className="flex items-center gap-2">
            {index > 0 && <span className="text-white/30">/</span>}

            {item.to && !isLast ? (
              <Link to={item.to} className="transition-colors hover:text-white">
                {item.label}
              </Link>
            ) : (
              <span className="text-white">{item.label}</span>
            )}
          </div>
        );
      })}
    </nav>
  );
}
