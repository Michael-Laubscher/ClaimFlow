import { Link } from "react-router-dom";
import type { FooterConfig } from "@/shared/types/footer.types";

interface Props {
  sections: FooterConfig["sections"];
}

export function FooterSections({ sections }: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-14">
      {sections.map((section) => (
        <div key={section.heading}>
          <h4 className="text-sm font-semibold text-white mb-4">
            {section.heading}
          </h4>

          <ul className="space-y-3">
            {section.items.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="text-sm text-slate-200 hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}