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

justify-center

items-center

min-h-[720px]

${loaded ? "animate-right delay-3" : ""}
`}
    >
      <div
        className="
absolute

h-[600px]

w-[600px]

rounded-full

bg-orange-500/20

blur-[150px]
"
      />

      <div
        className="
absolute

right-0

top-20

h-[500px]

w-[500px]

rounded-full

bg-sky-500/15

blur-[180px]
"
      />

      <div className="relative z-20">
        <img
          src={ContainerImage}
          alt="Container Truck"
          className="
w-[620px]

drop-shadow-[0_40px_100px_rgba(0,0,0,.45)]

transition-transform

duration-700

hover:scale-[1.02]
"
        />

        <div
          className="
absolute

left-10

right-10

bottom-[-55px]

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

h-[700px]

w-[700px]

rounded-full

border

border-white/5
"
      />

      <div
        className="
absolute

h-[520px]

w-[520px]

rounded-full

border

border-white/5
"
      />
    </div>
  );
}
