import type { BannerStat } from "@/shared/types/banner.types";

interface Props {
  items: BannerStat[];
}

export function BannerStats({ items }: Props) {
  return (
    <div
      className="
        mt-14
        flex
        flex-wrap
        gap-10
        border-t
        border-white/10
        pt-8
      "
    >
      {items.map((stat) => (
        <div key={stat.label}>
          <div
            className="
              text-3xl
              font-black
              text-white
            "
          >
            {stat.value}
          </div>

          <div
            className="
              mt-1
              text-sm
              text-blue-100/60
            "
          >
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}
