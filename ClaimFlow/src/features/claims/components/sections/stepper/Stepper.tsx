import { cn } from "@/shared/lib/cn";

interface StepperProps {
  step: number;
}

const STEPS = ["Insurance Type", "Your Details", "Coverage"];

export function Stepper({ step }: StepperProps) {
  return (
    <div className="flex items-center justify-between mb-10">
      {STEPS.map((label, index) => {
        const current = index + 1;
        const isActive = step === current;
        const isDone = step > current;

        return (
          <div key={label} className="flex flex-1 items-center">
            {/* Circle */}
            <div className="flex flex-col items-center">
              <div
                className={cn(
                  "flex h-9 w-9 items-center justify-center rounded-full text-sm font-semibold transition",
                  isDone && "bg-slate-900 text-white",
                  isActive && "ring-4 ring-slate-900/20 bg-slate-900 text-white",
                  !isActive && !isDone && "border border-slate-300 text-slate-400"
                )}
              >
                {isDone ? "✓" : current}
              </div>

              <span className={cn("mt-2 text-xs", isActive ? "text-slate-900 font-semibold" : "text-slate-400")}>{label}</span>
            </div>

            {/* Connector line */}
            {index < STEPS.length - 1 && <div className={cn("mx-3 h-[2px] flex-1 transition", step > current ? "bg-slate-900" : "bg-slate-200")} />}
          </div>
        );
      })}
    </div>
  );
}
