import { Link } from "react-router-dom";
import { ArrowRightIcon, Headphones } from "lucide-react";

import type { FooterConfig } from "@/shared/types/footer.types";
import { Button } from "../primitives/buttons/Button";

interface Props {
  cta: FooterConfig["cta"];
}

export function FooterCTA({ cta }: Props) {
  return (
    <section
      className="
        border-b
        border-white/10
        footer-bg
      "
    >
      <div
        className="
          mx-auto
          mt-10
          flex
          justify-center
          relative
        "
      >
        <div
          className="
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-xl
            bg-white/10
            
          "
        />
        <Headphones className="h-7 w-7 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
      </div>
      <div
        className="
          mx-auto
          max-w-7xl
          px-5
          py-14
          text-center
          sm:px-6
          sm:py-16
          lg:px-8
        "
      >
        <div
          className="
            mx-auto
            mb-10
            max-w-2xl
          "
        >
          <h2
            className="
              text-2xl
              font-semibold
              leading-tight
              text-white
              sm:text-3xl
              lg:text-4xl
            "
          >
            {cta.heading}
          </h2>

          <p
            className="
              mt-4
              text-sm
              leading-relaxed
              text-slate-300
              sm:text-base
            "
          >
            {cta.description}
          </p>
        </div>

        <div
          className="
            flex
            w-full
            flex-col
            gap-3
            sm:flex-row
            sm:flex-wrap
            sm:justify-center
          "
        > 
          <Button variant="secondary" size="lg" className="w-full sm:w-auto rounded-md transition-transform duration-300 hover:scale-105 hover:shadow-lg" iconRight={<ArrowRightIcon size={20} />}>
            <Link to={cta.primary.to}>{cta.primary.label}</Link>
          </Button>

          <Button variant="outline" size="lg" className="w-full sm:w-auto rounded-md transition hover:bg-white/20">
            <Link to={cta.secondary.to}>{cta.secondary.label}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
