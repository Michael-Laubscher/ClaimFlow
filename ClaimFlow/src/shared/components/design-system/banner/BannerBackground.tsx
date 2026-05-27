interface BannerBackgroundProps {
  overlay?: boolean;
  grid?: boolean;
}

export function BannerBackground({ overlay = true, grid = true }: BannerBackgroundProps) {
  return (
    <>
      {/* Base Gradient */}
      <div
        className="
          absolute
          inset-0
          bg-[linear-gradient(135deg,#071852_0%,#0c2578_45%,#1a4fd6_100%)]
        "
      />

      {/* Grid */}
      {grid && (
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />
      )}

      {/* Glow */}
      {overlay && (
        <>
          <div
            className="
              absolute
              -right-40
              -top-40
              h-[500px]
              w-[500px]
              rounded-full
              bg-blue-500/20
              blur-3xl
            "
          />

          <div
            className="
              absolute
              bottom-0
              left-0
              h-[400px]
              w-[400px]
              rounded-full
              bg-cyan-400/10
              blur-3xl
            "
          />
        </>
      )}
    </>
  );
}
