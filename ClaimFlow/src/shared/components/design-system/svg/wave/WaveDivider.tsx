import clsx from "clsx";

import { wavePaths } from "./wave.paths";

import type { WaveDividerProps } from "./wave.types";

export function WaveDivider({
  variant = "soft",
  fill = "currentColor",
  flip = false,
  className,
  animated = false,
  customPath,
}: WaveDividerProps) {
  const path = customPath || wavePaths[variant];

  return (
    <div
      aria-hidden="true"
      className={clsx(
        "absolute bottom-0 left-0 w-full overflow-hidden leading-none pointer-events-none",
        className
      )}
      style={{
        transform: flip ? "rotate(180deg)" : undefined,
      }}
    >
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className="w-full h-full"
      >
        <defs>
          <linearGradient
            id="wave-gradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor={fill} stopOpacity="1" />

            <stop offset="100%" stopColor={fill} stopOpacity="0.92" />
          </linearGradient>
        </defs>

        <path
          d={path}
          fill="url(#wave-gradient)"
          className={clsx(
            animated &&
              "animate-[waveFloat_8s_ease-in-out_infinite_alternate]"
          )}
        />
      </svg>
    </div>
  );
}