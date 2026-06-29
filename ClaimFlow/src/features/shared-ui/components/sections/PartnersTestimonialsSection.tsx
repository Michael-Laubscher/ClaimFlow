import { Container } from "@/shared/components/design-system/layout/Container";
import { Section } from "@/shared/components/design-system/layout/Section";
import { Card } from "@/shared/components/design-system/composite/card/Card";

import { Building2, Quote } from "lucide-react";

interface Testimonial {
  company: string;
  role: string;
  quote: string;
}

interface Props {
  title: string;
  items: Testimonial[];
}

export function PartnersTestimonialsSection({ title, items }: Props) {
  return (
    <Section
      className="
      relative
      overflow-hidden
      bg-slate-50
      py-28
      "
    >
      {/* subtle background glow */}
      <div
        className="
        absolute
        -right-40
        top-0
        h-[500px]
        w-[500px]
        rounded-full
        bg-blue-500/10
        blur-3xl
        "
      />

      <div
        className="
        absolute
        -left-40
        bottom-0
        h-[400px]
        w-[400px]
        rounded-full
        bg-orange-500/10
        blur-3xl
        "
      />

      <Container>
        <div className="relative">
          <div className="mx-auto max-w-3xl text-center">
            <span
              className="
              inline-flex
              rounded-full
              bg-blue-100
              px-4
              py-2
              text-xs
              font-semibold
              uppercase
              tracking-[0.25em]
              text-[#123C8C]
              "
            >
              Partner Success
            </span>

            <h2
              className="
              mt-6
              text-4xl
              font-black
              tracking-tight
              text-[#071A3D]
              lg:text-5xl
              "
            >
              {title}
            </h2>

            <p
              className="
              mt-5
              text-lg
              text-slate-600
              "
            >
              Trusted relationships built through reliability, innovation and operational excellence.
            </p>
          </div>

          <div
            className="
            mt-14
            grid
            gap-8
            lg:grid-cols-2
            "
          >
            {items.map((item) => (
              <Card
                key={item.company}
                className="
                group
                relative
                overflow-hidden
                rounded-[2rem]
                border
                border-slate-200
                bg-white
                p-10
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-2
                hover:shadow-2xl
                "
              >
                {/* quote watermark */}
                <Quote
                  className="
                  absolute
                  right-8
                  top-8
                  h-24
                  w-24
                  text-slate-100
                  "
                />

                <div
                  className="
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-2xl
                  bg-[#071A3D]
                  "
                >
                  <Building2
                    className="
                    h-6
                    w-6
                    text-orange-400
                    "
                  />
                </div>

                <p
                  className="
                  relative
                  mt-8
                  text-xl
                  leading-relaxed
                  text-slate-700
                  "
                >
                  <p
                    className="
  relative
  mt-8
  text-xl
  leading-relaxed
  text-slate-700
  "
                  >
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </p>

                <div
                  className="
                  mt-10
                  border-t
                  border-slate-100
                  pt-6
                  "
                >
                  <p
                    className="
                    font-bold
                    text-[#071A3D]
                    "
                  >
                    {item.company}
                  </p>

                  <p
                    className="
                    mt-1
                    text-sm
                    text-slate-500
                    "
                  >
                    {item.role}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
