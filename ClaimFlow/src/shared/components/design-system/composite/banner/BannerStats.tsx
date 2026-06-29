import type { BannerStat } from "@/shared/types/banner.types";

interface Props {
  items: BannerStat[];
}

export function BannerStats({ items }: Props) {
  return (
    <div
      className="
mt-16

grid

gap-4

sm:grid-cols-2

lg:grid-cols-4

"
    >
      {items.map((stat) => (
        <div
          key={stat.label}
          className="
rounded-3xl

border

border-white/10

bg-white/10

p-6

backdrop-blur-xl

transition

hover:-translate-y-1

hover:bg-white/15

"
        >
          <p
            className="
text-4xl

font-bold

tracking-tight

text-white

"
          >
            {stat.value}
          </p>

          <p
            className="
mt-2

text-sm

text-blue-100/70

"
          >
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}
