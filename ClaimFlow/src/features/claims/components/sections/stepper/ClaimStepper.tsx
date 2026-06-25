interface ClaimStepperProps {
  current: number;
}

const STEPS = [
  "Policy",
  "Incident",
  "Driver",
  "Vehicle",
  "3rd Party",
  "Evidence",
  "Assessment",
  "Declaration",
];

export function ClaimStepper({ current }: ClaimStepperProps) {
  return (
    <div className="mb-12 flex items-center justify-center overflow-x-auto">
      {STEPS.map((step, index) => {
        const number = index + 1;

        const active = current === number;

        const complete = current > number;

        return (
          <div key={step} className="flex items-center">
            <div className="flex flex-col items-center">
              <div
                className={`
                  flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold
                  ${
                    complete
                      ? "bg-orange-500 text-white"
                      : active
                      ? "bg-slate-900 text-white"
                      : "border border-slate-300 bg-white text-slate-400"
                  }
                `}
              >
                {complete ? "✓" : number}
              </div>

              <span
                className={`mt-2 text-xs ${
                  active ? "font-medium text-slate-900" : "text-slate-400"
                }`}
              >
                {step}
              </span>
            </div>

            {index < STEPS.length - 1 && (
              <div
                className={`mx-3 mb-5 h-[2px] w-6 ${
                  complete ? "bg-orange-500" : "bg-slate-200"
                }`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}