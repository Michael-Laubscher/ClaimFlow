import { HERO_STATS } from '@/features/shared-ui/configs';

import { Stat } from '@/shared/components/design-system/feedback/Stat';

interface HeroStatsProps {
  loaded: boolean;
}

export function HeroStats({ loaded }: HeroStatsProps) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-8 lg:justify-start">
      {HERO_STATS.map((stat, i) => (
        <div
          key={stat.label}
          className={`
            pre-animate
            ${loaded ? `animate-stat ${stat.delay}` : ''}
            flex items-center gap-6
          `}
        >
          {i > 0 && (
            <div className="hidden h-10 w-px bg-white/10 sm:block" />
          )}

          <Stat value={stat.value} label={stat.label} />
        </div>
      ))}
    </div>
  );
}