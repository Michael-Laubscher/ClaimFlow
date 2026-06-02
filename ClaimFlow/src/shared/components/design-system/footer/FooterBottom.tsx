import { footerStyles } from "@/shared/styles/footer.styles";
import type { FooterConfig } from "@/shared/types/footer.types";
import { Link } from "react-router-dom";

interface Props {
  legal: FooterConfig["legal"];
}

export function FooterBottom({ legal }: Props) {
  return (
    <div className="mt-10 border-t border-white/10 pt-6">
      <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div>
          <p className={footerStyles.smallText}>{legal.copyright}</p>

          {legal.compliance && <p className="mt-2 text-xs text-white">{legal.compliance}</p>}
        </div>

        <nav aria-label="Legal links" className="flex flex-wrap gap-x-6 gap-y-2">
          {legal.links.map((link) => (
            <Link key={link.to} to={link.to} className={footerStyles.hoverLink}>
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
