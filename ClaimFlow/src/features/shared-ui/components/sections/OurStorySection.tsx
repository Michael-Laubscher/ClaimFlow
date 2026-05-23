import { Container } from "@/shared/components/design-system/layout/Container";
import { Section } from "@/shared/components/design-system/layout/Section";
import { SectionHeader } from "@/shared/components/design-system/typography/SectionHeader";

interface Props {
  paragraphs: string[];
}

export function OurStorySection({
  paragraphs,
}: Props) {
  return (
    <Section className="py-24 bg-white">
      <Container>
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <SectionHeader
              title="Our Story"
            />

            <div className="mt-8 space-y-5">
              {paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="
                    leading-relaxed
                    text-slate-600
                  "
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <div className="relative">
            <div
              className="
                overflow-hidden
                rounded-3xl
                border
                border-slate-100
                shadow-2xl
              "
            >
              <div
                className="
                  relative
                  aspect-[4/3]
                  bg-gradient-to-br
                  from-slate-100
                  to-slate-200
                "
              >
                <div
                  className="
                    absolute
                    bottom-0
                    right-0
                    h-2/5
                    w-full
                    bg-gradient-to-r
                    from-[#c9562a]
                    to-[#e8723a]
                  "
                  style={{
                    clipPath:
                      'polygon(0 100%, 100% 38%, 100% 100%)',
                  }}
                />

                <DriverIllustration />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

function DriverIllustration() {
  return (
    <div
      className="
        absolute
        inset-0
        flex
        items-center
        justify-center
      "
    >
      <div
        className="
          h-48
          w-48
          rounded-full
          bg-slate-300
        "
      />
    </div>
  );
}