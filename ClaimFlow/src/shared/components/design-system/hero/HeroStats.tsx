import { HERO_STATS } from "@/features/shared-ui/configs";

export function HeroStats() {
  return (
    <div
      className="
        mt-12
        grid
        grid-cols-2
        gap-4
        sm:flex
        sm:flex-wrap
      "
    >
      {HERO_STATS.map((stat) => (
        <div
          key={stat.label}
          className="
            group

            rounded-2xl

            border
            border-white/10

            bg-white/5

            px-5
            py-4

            backdrop-blur-xl

            transition-all
            duration-300

            hover:-translate-y-1
            hover:border-white/20
            hover:bg-white/10

            "
        >
          <p
            className="
              text-2xl
              font-bold
              tracking-tight
              text-white
            "
          >
            {stat.value}
          </p>

          <p
            className="
              mt-1
              text-xs
              text-blue-100/60
            "
          >
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}
