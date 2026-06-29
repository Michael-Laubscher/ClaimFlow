import type { InsuranceType } from "@/features/claims/types/insuranceTypes";

import { FALLBACK_INSURANCE_ICON, INSURANCE_TYPES } from "@/features/claims/types/insuranceTypes";

import { Stack } from "@/shared/components/design-system/layout/Stack";

import { Button } from "@/shared/components/design-system/primitives/buttons/Button";

import { Heading } from "@/shared/components/design-system/typography/Heading";

import { Text } from "@/shared/components/design-system/typography/Text";

import { cn } from "@/shared/lib/cn";

interface Props {
  value: InsuranceType | "";

  onChange: (value: InsuranceType) => void;

  onNext: () => void;
}

export function Step1({ value, onChange, onNext }: Props) {
  return (
    <Stack gap="lg" className="justify-end">
      <div>
        <Heading
          size="xl"
          className="
tracking-tight
"
        >
          Protect your business
        </Heading>

        <Text
          className="
mt-3
max-w-xl
text-slate-500
"
        >
          Select the insurance solution that best matches your organisation.
        </Text>
      </div>

      <div
        className="
grid
gap-5
sm:grid-cols-2
"
      >
        {INSURANCE_TYPES.map((item) => {
          const Icon = item.Icon ?? FALLBACK_INSURANCE_ICON;

          const active = value === item.id;

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => onChange(item.id)}
              className={cn(
                "group rounded-3xl border p-7 text-left transition-all duration-300",

                active ? "border-slate-900 bg-slate-900 text-white shadow-xl" : "border-slate-200 bg-white hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg"
              )}
            >
              <div
                className={cn(
                  "h-14 w-14 rounded-2xl flex items-center justify-center",

                  active ? "bg-white/10" : "bg-slate-100"
                )}
              >
                <Icon
                  className="
h-7
w-7
"
                />
              </div>

              <h3
                className="
mt-6
text-lg
font-semibold
"
              >
                {item.label}
              </h3>

              <p
                className={cn(
                  "mt-2 text-sm",

                  active ? "text-slate-300" : "text-slate-500"
                )}
              >
                {item.sub}
              </p>

              <div
                className="
mt-8
flex
items-center
justify-between
text-sm
"
              >
                <span>Learn more</span>

                <span>→</span>
              </div>
            </button>
          );
        })}
      </div>

      <Button
        size="lg"
        disabled={!value}
        onClick={onNext}
        className=" ml-auto inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 focus:outline-none disabled:pointer-events-none disabled:opacity-50 bg-[var(--color-primary)] text-white hover:opacity-90 h-12 px-6 text-base rounded-xl min-w-[180px]
"
      >
        Continue →
      </Button>
    </Stack>
  );
}
