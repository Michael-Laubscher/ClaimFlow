import { cn } from "@/shared/lib/cn";

interface StepperProps {
  step: number;
}

const STEPS = [
  {
    title: "Insurance",
    description: "Choose policy",
  },

  {
    title: "Business",
    description: "Your details",
  },

  {
    title: "Coverage",
    description: "Review",
  },
];

export function Stepper({ step }: StepperProps) {
  return (
    <div className="mb-8">
      <div className="flex items-center">
        {STEPS.map((item, index) => {
          const current = index + 1;

          const active = step === current;

          const done = step > current;

          return (
            <div key={item.title} className="contents">
              <div
                className="
flex
flex-1
flex-col
items-center
"
              >
                <div
                  className={cn(
                    "h-12 w-12 rounded-full flex items-center justify-center font-semibold transition-all duration-500",

                    done && "bg-slate-900 text-white shadow-lg",

                    active && "scale-110 bg-slate-900 text-white ring-8 ring-slate-900/10",

                    !done && !active && "border bg-white text-slate-400"
                  )}
                >
                  {done ? "✓" : current}
                </div>

                <div className="mt-4 text-center">
                  <p
                    className={cn(
                      "text-sm font-semibold",

                      active ? "text-slate-900" : "text-slate-400"
                    )}
                  >
                    {item.title}
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
                    {item.description}
                  </p>
                </div>
              </div>

              {index < STEPS.length - 1 && (
                <div className="flex-1 px-4">
                  <div
                    className={cn(
                      "h-[3px] rounded-full transition-all duration-700",

                      done ? "bg-slate-900" : "bg-slate-200"
                    )}
                  ></div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
