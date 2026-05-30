import { Link } from "react-router-dom";
import AskariLogo from "@/assets/logos/AskariLogo.png";
import { FooterText } from "../typography/FooterText";
import type { FooterConfig } from "@/shared/types/footer.types";

interface Props {
  brand: FooterConfig["brand"];
  trustBadges?: string[];
}

export function FooterBrand({ brand, trustBadges }: Props) {
  return (
    <div>
      <Link to="/" className="flex items-center gap-4">
        <img src={AskariLogo} alt="Askari Insurance" className="h-10 w-auto object-contain brightness-0 invert" />
        <span className="text-sm tracking-wide text-slate-100">{brand.tagline}</span>
      </Link>

      <FooterText className="mt-6 max-w-sm">{brand.description}</FooterText>

      <div className="mt-7 flex flex-wrap gap-3">
        {trustBadges?.map((badge) => (
          <span key={badge} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-slate-300">
            {badge}
          </span>
        ))}
      </div>
    </div>
  );
}
