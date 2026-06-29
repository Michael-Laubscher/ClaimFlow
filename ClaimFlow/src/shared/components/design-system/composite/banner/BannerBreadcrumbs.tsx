import { Link } from "react-router-dom";

import type { BannerBreadcrumb } from "@/shared/types/banner.types";

export function BannerBreadcrumbs({ items }: { items: BannerBreadcrumb[] }) {
  return (
    <nav
      className="
mb-8

flex
items-center
gap-2

text-sm

text-white/60

"
    >
      {items.map((item, index) => {
        const last = index === items.length - 1;

        return (
          <div key={item.label} className="flex items-center gap-2">
            {index > 0 && <span className="text-white/30">/</span>}

            {item.to && !last ? (
              <Link
                to={item.to}
                className="
transition

hover:text-white

"
              >
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
