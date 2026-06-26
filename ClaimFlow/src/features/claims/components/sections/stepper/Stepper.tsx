import { cn } from "@/shared/lib/cn";

interface StepperProps {
  step: number;
}

const STEPS = ["Insurance Type", "Your Details", "Coverage"];

export function Stepper({ step }: StepperProps) {
  return (
    <div className="mb-10">
      <div className="flex items-center">
        {STEPS.map((label, index) => {
          const current = index + 1;
          const isActive = step === current;
          const isDone = step > current;

          return (
            <div key={label} className="contents">
              {/* Step */}
              <div className="flex flex-1 flex-col items-center">
                <div
                  className={cn(
                    "flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold transition-all",
                    isDone && "bg-slate-900 text-white",
                    isActive && "bg-slate-900 text-white ring-4 ring-slate-900/20",
                    !isDone &&
                      !isActive &&
                      "border border-slate-300 bg-white text-slate-400"
                  )}
                >
                  {isDone ? "✓" : current}
                </div>

                <span
                  className={cn(
                    "mt-3 text-center text-xs sm:text-sm",
                    isActive
                      ? "font-semibold text-slate-900"
                      : "text-slate-400"
                  )}
                >
                  {label}
                </span>
              </div>

              {/* Connector */}
              {index < STEPS.length - 1 && (
                <div className="flex flex-1 items-center px-2 sm:px-4">
                  <div
                    className={cn(
                      "h-[2px] w-full transition-colors",
                      isDone ? "bg-slate-900" : "bg-slate-200"
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