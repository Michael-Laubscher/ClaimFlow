import { cn } from "@/shared/lib/cn";

interface ClaimStepperProps {
  current: number;
}

const STEPS = [
  {
    title: "Policy",
    description: "Insurance details",
  },
  {
    title: "Incident",
    description: "What happened",
  },
  {
    title: "Driver",
    description: "Driver info",
  },
  {
    title: "Vehicle",
    description: "Vehicle details",
  },
  {
    title: "3rd Party",
    description: "Other parties",
  },
  {
    title: "Evidence",
    description: "Upload proof",
  },
  {
    title: "Assessment",
    description: "Review claim",
  },
  {
    title: "Declaration",
    description: "Confirm",
  },
];

export function ClaimStepper({ current }: ClaimStepperProps) {
  return (
    <div
      className="
      mb-8
      w-full
      overflow-x-auto
      pb-4
      
    "
    >
      <div
        className="
        flex
        min-w-max
        items-center
        justify-center
        mt-4
      "
      >
        {STEPS.map((step, index) => {
          const number = index + 1;

          const active = current === number;

          const complete = current > number;

          return (
            <div key={step.title} className="flex items-center">
              {/* Step */}

              <div
                className="
                  flex
                  flex-col
                  items-center
                "
              >
                <div
                  className={cn(
                    `
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-full
                      text-sm
                      font-semibold
                      transition-all
                      duration-500
                      `,

                    complete &&
                      `
                      bg-orange-500
                      text-white
                      shadow-lg
                      shadow-orange-500/20
                      `,

                    active &&
                      `
                      scale-110
                      bg-slate-900
                      text-white
                      ring-8
                      ring-slate-900/10
                      shadow-xl
                      `,

                    !complete &&
                      !active &&
                      `
                      border
                      border-slate-300
                      bg-white
                      text-slate-400
                      `
                  )}
                >
                  {complete ? "✓" : number}
                </div>

                <div
                  className="
                    mt-4
                    text-center
                  "
                >
                  <p
                    className={cn(
                      `
                        text-sm
                        font-semibold
                        transition-colors
                        `,

                      active ? "text-slate-900" : complete ? "text-orange-600" : "text-slate-400"
                    )}
                  >
                    {step.title}
                  </p>

                  <p
                    className="
                      mt-1
                      hidden
                      text-xs
                      text-slate-400
                      sm:block
                    "
                  >
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Connector */}

              {index < STEPS.length - 1 && (
                <div
                  className="
                      mx-3
                      mb-12
                      w-6
                    "
                >
                  <div
                    className={cn(
                      `
                          h-[3px]
                          rounded-full
                          transition-all
                          duration-700
                          `,

                      current > number ? "bg-orange-500" : "bg-slate-200"
                    )}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
