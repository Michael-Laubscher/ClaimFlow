interface Props {
  overlay?: boolean;

  grid?: boolean;
}

export function BannerBackground({
  overlay = true,

  grid = true,
}: Props) {
  return (
    <>
      {/* Base */}

      <div
        className="
absolute
inset-0

bg-gradient-to-br

from-[#06143d]

via-[#0b2b7a]

to-[#2563eb]

"
      />

      {/* Glow */}

      <div
        className="
absolute

-left-32

top-10

h-[500px]

w-[500px]

rounded-full

bg-blue-400/20

blur-[120px]

"
      />

      <div
        className="
absolute

right-[-100px]

top-[-100px]

h-[600px]

w-[600px]

rounded-full

bg-cyan-300/20

blur-[140px]

"
      />

      {grid && (
        <div
          className="
absolute
inset-0

opacity-[0.08]

"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px),linear-gradient(90deg,rgba(255,255,255,.15) 1px,transparent 1px)",

            backgroundSize: "48px 48px",
          }}
        />
      )}

      {overlay && (
        <div
          className="
absolute
inset-0

bg-gradient-to-b

from-transparent

via-blue-950/10

to-blue-950/50

"
        />
      )}

      {/* Noise */}

      <div
        className="
absolute
inset-0

opacity-[0.04]

mix-blend-overlay

"
        style={{
          backgroundImage:
            'url(\'data:image/svg+xml,%3Csvg viewBox="0 0 180 180" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="n"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="1"/%3E%3C/filter%3E%3Crect width="180" height="180" filter="url(%23n)"/%3E%3C/svg%3E\')',
        }}
      />
    </>
  );
}
