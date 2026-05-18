import { Link } from 'react-router-dom';

import type { FooterSection } from './footer.types';

interface Props {
  section: FooterSection;
}

export function FooterColumn({
  section,
}: Props) {
  return (
    <div>
      <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-white/40">
        {section.heading}
      </h3>

      <ul className="space-y-2.5">
        {section.items.map((item) => (
          <li key={item.to}>
            <Link
              to={item.to}
              className="text-sm text-white/60 transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}