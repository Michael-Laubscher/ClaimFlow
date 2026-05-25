import { GlassCard } from "@/shared/components/design-system/surface/GlassCard";
import { Stack } from "@/shared/components/design-system/layout/Stack";
import { Typography } from "@/shared/components/design-system/typography/Typography";
import { Heading } from "@/shared/components/design-system/typography/Heading";
import { Button } from "@/shared/components/design-system/buttons/Button";
import { Badge } from "@/shared/components/design-system/feedback/Badge";
import type { Article } from "@/shared/types/news.types";



const CATEGORY_COLORS: Record<string, string> = {
  "Company News": "bg-[--color-blue-100] text-[--color-blue-700]",
  "Product Update": "bg-[--color-teal-100] text-[--color-teal-700]",
  "Industry Insights": "bg-[--color-orange-100] text-[--color-orange-700]",
  "Partnerships": "bg-[--color-indigo-100] text-[--color-indigo-700]",
  "Reports": "bg-[--color-green-100] text-[--color-green-700]",
  "Tips & Advice": "bg-[--color-purple-100] text-[--color-purple-700]",
};

export function NewsCard({ article }: { article: Article }) {
  return (
    <GlassCard className="overflow-hidden">
      {/* Image placeholder */}
      <div className={`h-44 ${article.color} flex items-center justify-center`} />

      <div className="p-6">
        <Stack direction="row" justify="between" align="center">
          <Badge className={CATEGORY_COLORS[article.category]}>
            {article.category}
          </Badge>

          <Typography variant="label-sm" color="muted">
            {article.readTime}
          </Typography>
        </Stack>

        <Stack gap="sm" className="mt-4">
          <Heading size="lg">{article.title}</Heading>

          <Typography color="muted">{article.excerpt}</Typography>
        </Stack>

        <Stack
          direction="row"
          justify="between"
          align="center"
          className="mt-6 pt-4 border-t border-[--color-slate-100]"
        >
          <Typography variant="label-sm" color="muted">
            {article.date}
          </Typography>

          <Button variant="secondary" size="sm">
            Read more
          </Button>
        </Stack>
      </div>
    </GlassCard>
  );
}