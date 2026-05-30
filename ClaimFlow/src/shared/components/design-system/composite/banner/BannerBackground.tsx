interface BannerBackgroundProps {
  overlay?: boolean;
  grid?: boolean;
}

const glowStyles = `
  absolute rounded-full blur-3xl
`;

export function BannerBackground({ overlay = true, grid = true }: BannerBackgroundProps) {
  return (
    <>
      <div
        className="
          absolute inset-0
          bg-[linear-gradient(135deg,#071852_0%,#0c2578_45%,#1a4fd6_100%)]
        "
      />

      {grid && (
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />
      )}

      {overlay && (
        <>
          <div
            className={`
              ${glowStyles}
              -right-40 -top-40
              h-[500px] w-[500px]
              bg-blue-500/20
            `}
          />

          <div
            className={`
              ${glowStyles}
              bottom-0 left-0
              h-[400px] w-[400px]
              bg-cyan-400/10
            `}
          />
        </>
      )}
    </>
  );
}
