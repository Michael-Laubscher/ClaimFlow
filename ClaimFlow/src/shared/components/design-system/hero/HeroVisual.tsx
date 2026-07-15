import ContainerImage from "@/shared/components/design-system/svg/images/Container.svg";
import { ClaimsCard } from "../composite/card/ClaimsCard";
import { LiveQuoteCard } from "../composite/card/LiveQuoteCard";
import { AIRiskCard } from "../composite/card/AIRiskCard";

interface Props {
  loaded: boolean;
}

export function HeroVisual({ loaded }: Props) {
  return (
    <div
      className={`
        relative
        flex
        items-center
        justify-center
        w-full
        min-h-[500px]
        md:min-h-[620px]
        lg:min-h-[720px]
        ${loaded ? "animate-right delay-3" : ""}
      `}
    >
      {/* Orange Glow */}
      <div
        className="
          absolute
          h-[420px]
          w-[420px]
          md:h-[500px]
          md:w-[500px]
          lg:h-[600px]
          lg:w-[600px]
          rounded-full
          bg-orange-500/20
          blur-[120px]
          lg:blur-[150px]
        "
      />

      {/* Blue Glow */}
      <div
        className="
          absolute
          right-0
          top-12
          lg:top-20
          h-[320px]
          w-[320px]
          md:h-[420px]
          md:w-[420px]
          lg:h-[500px]
          lg:w-[500px]
          rounded-full
          bg-sky-500/15
          blur-[120px]
          lg:blur-[180px]
        "
      />

      {/* Truck */}
      <div className="relative z-20 flex justify-center">
        <img
          src={ContainerImage}
          alt="Container Truck"
          className="
            w-full
            max-w-[420px]
            md:max-w-[520px]
            lg:max-w-[620px]
            xl:max-w-[680px]
            drop-shadow-[0_40px_100px_rgba(0,0,0,.45)]
            transition-transform
            duration-700
            hover:scale-[1.02]
          "
        />

        <div
          className="
            absolute
            left-8
            right-8
            bottom-[-45px]
            lg:bottom-[-55px]
            h-20
            bg-gradient-to-b
            from-white/10
            to-transparent
            blur-3xl
            opacity-20
          "
        />
      </div>

      {/* Floating Cards */}
      <ClaimsCard />
      <LiveQuoteCard />
      <AIRiskCard />

      {/* Ambient Rings */}
      <div
        className="
          absolute
          h-[520px]
          w-[520px]
          md:h-[620px]
          md:w-[620px]
          lg:h-[700px]
          lg:w-[700px]
          rounded-full
          border
          border-white/5
        "
      />

      <div
        className="
          absolute
          h-[380px]
          w-[380px]
          md:h-[450px]
          md:w-[450px]
          lg:h-[520px]
          lg:w-[520px]
          rounded-full
          border
          border-white/5
        "
      />
    </div>
  );
}
