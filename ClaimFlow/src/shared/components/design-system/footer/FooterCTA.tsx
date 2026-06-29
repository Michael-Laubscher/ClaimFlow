import { ArrowRight, Headphones } from "lucide-react";

import type { FooterCTAConfig } from "@/shared/types/footer.types";

import { Button } from "../primitives/buttons/Button";

interface Props {
  cta: FooterCTAConfig;
}

export function FooterCTA({ cta }: Props) {
  return (
    <section
      className="
relative
overflow-hidden

border-b
border-white/10

footer-bg

"
    >
      {/* Background effects */}

      <div
        className="
absolute

left-1/2
top-0

h-96
w-96

-translate-x-1/2

rounded-full

bg-blue-500/20

blur-[120px]

"
      />

      <div
        className="
absolute

right-0
bottom-0

h-72
w-72

rounded-full

bg-orange-500/10

blur-[100px]

"
      />

      <div
        className="
relative

mx-auto

max-w-7xl

px-5

py-20

text-center

sm:px-6

lg:px-8

"
      >
        {/* Icon */}

        <div
          className="
mx-auto

mb-8

flex

h-16
w-16

items-center
justify-center

rounded-3xl

border

border-white/10

bg-white/10

shadow-xl

backdrop-blur-xl

"
        >
          <Headphones
            className="
h-8
w-8

text-white

"
          />
        </div>

        {/* Content */}

        <div
          className="
mx-auto

max-w-3xl

"
        >
          <h2
            className="
text-3xl

font-bold

tracking-tight

text-white

sm:text-4xl

lg:text-5xl

"
          >
            {cta.heading}
          </h2>

          <p
            className="
mx-auto

mt-5

max-w-2xl

text-base

leading-7

text-slate-300

sm:text-lg

"
          >
            {cta.description}
          </p>
        </div>

        {/* Actions */}

        <div
          className="
mt-10

flex

flex-col

justify-center

gap-4

sm:flex-row

"
        >
          <Button
            size="lg"
            to={cta.primary.to}
            className="
group

rounded-full

px-8

shadow-xl

shadow-blue-950/30

"
            iconRight={
              <ArrowRight
                className="
transition-transform

duration-300

group-hover:translate-x-1

"
              />
            }
          >
            {cta.primary.label}
          </Button>

          <Button
            size="lg"
            variant="outline"
            to={cta.secondary.to}
            className="
rounded-full

border-white/20

bg-white/5

px-8

text-white

backdrop-blur-md

hover:bg-white/10

"
          >
            {cta.secondary.label}
          </Button>
        </div>
      </div>
    </section>
  );
}
