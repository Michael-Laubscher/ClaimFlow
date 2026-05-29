import type { BannerStat } from "@/shared/types/banner.types";

interface Props {
  items: BannerStat[];
}

export function BannerStats({ items }: Props) {
  return (
    <div
      className="
        mt-14
        grid
        gap-8
        border-t border-white/10
        pt-8
        sm:grid-cols-2
        lg:grid-cols-4
      "
    >
      {items.map((stat) => (
        <div key={stat.label}>
          <p className="text-3xl font-black text-white">
            {stat.value}
          </p>

          <p className="mt-1 text-sm text-blue-100/60">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}