const PARTICLES = [
  {
    size: "h-2 w-2",
    position: "left-[15%] top-[25%]",
    delay: "0s",
  },
  {
    size: "h-1.5 w-1.5",
    position: "left-[35%] top-[70%]",
    delay: "2s",
  },
  {
    size: "h-2.5 w-2.5",
    position: "right-[25%] top-[30%]",
    delay: "4s",
  },
  {
    size: "h-1 w-1",
    position: "right-[12%] bottom-[30%]",
    delay: "6s",
  },
  {
    size: "h-1.5 w-1.5",
    position: "left-[60%] top-[18%]",
    delay: "8s",
  },
];

export function FloatingParticles() {
  return (
    <>
      {PARTICLES.map((particle, index) => (
        <span
          key={index}
          style={{
            animationDelay: particle.delay,
          }}
          className={`
          pointer-events-none

          absolute

          ${particle.position}

          ${particle.size}

          rounded-full

          bg-blue-200/50

          blur-[1px]

          animate-particle-float
          `}
        />
      ))}
    </>
  );
}
