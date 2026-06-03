interface ClaimStepperProps {
  current: number;
}

export function ClaimStepper({ current }: ClaimStepperProps) {
  const steps = ["Policy Info", "Incident Details", "Documents"];

  return (
    <div className="flex items-center justify-center mb-12">
      {steps.map((step, index) => {
        const number = index + 1;
        const active = number <= current;

        return (
          <div key={step} className="flex items-center">
            <div className="flex flex-col items-center">
              <div
                className={`
                  flex h-10 w-10 items-center justify-center
                  rounded-full text-sm font-semibold
                  transition-all
                  ${active ? "bg-[#0f2044] text-white" : "border border-slate-300 bg-white text-slate-400"}
                `}
              >
                {number}
              </div>

              <span className={`mt-2 text-xs font-medium ${active ? "text-[#0f2044]" : "text-slate-400"}`}>{step}</span>
            </div>

            {index < steps.length - 1 && <div className={`mx-4 mb-5 h-[2px] w-24 ${number < current ? "bg-[#0f2044]" : "bg-slate-200"}`} />}
          </div>
        );
      })}
    </div>
  );
}
