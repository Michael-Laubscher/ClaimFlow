export function AmbientRings() {
  return (
    <>
      {/* Large outer ring */}
      <div
        className="
        pointer-events-none

        absolute

        right-[-220px]

        top-1/2

        hidden

        h-[900px]

        w-[900px]

        -translate-y-1/2

        rounded-full

        border

        border-blue-200/[0.08]

        lg:block

        animate-pulse-slow
        "
      />

      {/* Middle ring */}
      <div
        className="
        pointer-events-none

        absolute

        right-[-80px]

        top-1/2

        hidden

        h-[650px]

        w-[650px]

        -translate-y-1/2

        rounded-full

        border

        border-white/[0.08]

        lg:block
        "
      />

      {/* Inner ring */}
      <div
        className="
        pointer-events-none

        absolute

        right-[80px]

        top-1/2

        hidden

        h-[420px]

        w-[420px]

        -translate-y-1/2

        rounded-full

        border

        border-orange-400/[0.12]

        lg:block
        "
      />
    </>
  );
}
