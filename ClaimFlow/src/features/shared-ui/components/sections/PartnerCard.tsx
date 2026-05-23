import { Stack } from '@/shared/components/design-system/layout/Stack';
import { Card } from '@/shared/components/design-system/surface/Card';
import { IconSurface } from '@/shared/components/design-system/surface/IconSurface';
import { Heading } from '@/shared/components/design-system/typography/Heading';
import { Typography } from '@/shared/components/design-system/typography/Typography';
import { ArrowRight } from 'lucide-react';

interface PartnerCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
}

export function PartnerCard({
  title,
  description,
  icon: Icon,
}: PartnerCardProps) {
  return (
    <Card className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[--color-orange]/20 hover:shadow-2xl">
      <Stack gap="lg">
        <IconSurface>
          <Icon className="h-5 w-5 text-white" />
        </IconSurface>

        <Stack gap="sm">
          <Heading size="lg" className="text-slate-900">
            {title}
          </Heading>

          <Typography className="leading-relaxed text-slate-500">
            {description}
          </Typography>
        </Stack>

        <button className="inline-flex items-center gap-2 text-sm font-semibold text-[--color-orange] transition-all duration-200 group-hover:gap-3">
          Learn More
          <ArrowRight className="h-4 w-4" />
        </button>
      </Stack>
    </Card>
  );
}