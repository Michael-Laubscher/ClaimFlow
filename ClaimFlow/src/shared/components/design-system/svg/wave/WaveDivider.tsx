import clsx from "clsx";

import { wavePaths } from "./wave.paths";

import type { WaveDividerProps } from "./wave.types";

const waveColors = {
  blue: {
    start: "#2563eb", // blue-600
    end: "#60a5fa", // blue-400
  },

  white: {
    start: "#f8fafc",
    end: "#f8fafc", // slate-50
  },
} as const;

export function WaveDivider({
  variant = "soft",
  flip = false,
  className,
  animated = false,
  customPath,
  color = "blue",
}: WaveDividerProps & { color?: keyof typeof waveColors }) {
  const path = customPath || wavePaths[variant];

  const selected = waveColors[color];

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
            id={`wave-gradient-${color}`}
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop
              offset="0%"
              stopColor={selected.start}
              stopOpacity="1"
            />

            <stop
              offset="100%"
              stopColor={selected.end}
              stopOpacity="1"
            />
          </linearGradient>
        </defs>

        <path
          d={path}
          fill={`url(#wave-gradient-${color})`}
          className={clsx(
            animated &&
              "animate-[waveFloat_8s_ease-in-out_infinite_alternate]"
          )}
        />
      </svg>
    </div>
  );
}