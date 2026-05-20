import { Link } from 'react-router-dom';

import type {
  FooterSection,
} from './footer.types';

interface Props {
  section: FooterSection;
}

export function FooterColumn({
  section,
}: Props) {
  return (
    <div>
      <h3
        className="
          mb-5
          text-sm
          font-semibold
          text-white
        "
      >
        {section.heading}
      </h3>

      <ul className="space-y-3">
        {section.items.map((item) => (
          <li key={item.to}>
            <Link
              to={item.to}
              className="
                group
                inline-flex
                items-center
                gap-2
                text-sm
                text-slate-300
                transition-colors
                hover:text-white
              "
            >
              <span>{item.label}</span>

              {item.badge && (
                <span
                  className="
                    rounded-full
                    bg-[--color-orange]
                    px-2
                    py-0.5
                    text-[10px]
                    font-semibold
                    text-white
                  "
                >
                  {item.badge}
                </span>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}