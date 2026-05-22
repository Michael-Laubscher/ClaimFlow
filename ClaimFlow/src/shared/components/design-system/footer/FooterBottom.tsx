import { Link } from 'react-router-dom';

import type {
  FooterConfig,
} from '@/shared/types/footer.types';

interface Props {
  legal: FooterConfig['legal'];
}

export function FooterBottom({
  legal,
}: Props) {
  return (
    <div
      className="
        mt-10
        border-t
        border-white/10
        pt-6
      "
    >
      <div
        className="
          flex
          flex-col
          gap-5
          md:flex-row
          md:items-center
          md:justify-between
        "
      >
        <div>
          <p
            className="
              text-xs
              text-white
            "
          >
            {legal.copyright}
          </p>

          <p
            className="
              mt-2
              text-xs
              text-white
            "
          >
            {legal.compliance}
          </p>
        </div>

        <div
          className="
            flex
            flex-wrap
            justify-center
            gap-x-6
            gap-y-2
            md:justify-end
          "
        >
          {legal.links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="
                text-xs
                text-white
                transition-colors
                hover:text-slate-200
              "
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}