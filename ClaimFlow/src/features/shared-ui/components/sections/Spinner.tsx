type SpinnerProps = {
  size?: number;
  label?: string;
};

export default function Spinner({ size = 64, label = "Loading..." }: SpinnerProps) {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <div
        className="relative flex items-center justify-center"
        style={{
          width: size,
          height: size,
        }}
      >
        <div
          className="absolute rounded-full blur-xl opacity-30 animate-pulse"
          style={{
            width: size,
            height: size,
            background: "#233C7B",
          }}
        />

        <div
          className="absolute rounded-full border-[3px] border-transparent"
          style={{
            width: size,
            height: size,
            borderTopColor: "#233C7B",
            borderRightColor: "#233C7B",
            animation: "spin 1.2s linear infinite",
          }}
        />

        <div
          className="absolute rounded-full border border-white/20"
          style={{
            width: size * 0.72,
            height: size * 0.72,
            backdropFilter: "blur(4px)",
          }}
        />

        <div
          className="rounded-full animate-pulse shadow-lg"
          style={{
            width: size * 0.18,
            height: size * 0.18,
            background: "#233C7B",
            boxShadow: "0 0 20px rgba(35, 60, 123, 0.45)",
          }}
        />
      </div>

      <p
        className="mt-5 text-sm tracking-[0.25em] uppercase font-medium"
        style={{
          color: "#233C7B",
        }}
      >
        {label}
      </p>
    </div>
  );
}
