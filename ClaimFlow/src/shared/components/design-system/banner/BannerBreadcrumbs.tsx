import { Link } from 'react-router-dom';

import type { BannerBreadcrumb } from '@/shared/types/banner.types';

interface Props {
  items: BannerBreadcrumb[];
}

export function BannerBreadcrumbs({
  items,
}: Props) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="
        mb-6
        flex
        flex-wrap
        items-center
        gap-2
        text-sm
        text-white/60
      "
    >
      {items.map((crumb, index) => (
        <div
          key={crumb.label}
          className="flex items-center gap-2"
        >
          {index > 0 && (
            <span className="text-white/30">
              /
            </span>
          )}

          {crumb.to ? (
            <Link
              to={crumb.to}
              className="
                transition-colors
                hover:text-white
              "
            >
              {crumb.label}
            </Link>
          ) : (
            <span className="text-white">
              {crumb.label}
            </span>
          )}
        </div>
      ))}
    </nav>
  );
}