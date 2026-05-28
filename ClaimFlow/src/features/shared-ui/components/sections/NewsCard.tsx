import { Stack } from "@/shared/components/design-system/layout/Stack";
import { Typography } from "@/shared/components/design-system/typography/Typography";
import { Heading } from "@/shared/components/design-system/typography/Heading";
import { Badge } from "@/shared/components/design-system/primitives/Badge";
import type { Article } from "@/shared/types/news.types";
import { Button } from "@/shared/components/design-system/primitives/buttons/Button";
import { CATEGORY_VARIANT } from "@/shared/types/newsCategories";
import { Card } from "@/shared/components/design-system/composite/card/Card";


export function NewsCard({ article }: { article: Article }) {
  return (
    <Card variant="glass" className="overflow-hidden">
      {/* Image placeholder */}
      <div className={`h-44 ${article.color} flex items-center justify-center`} />

      <div className="p-6">
        <Stack direction="row" justify="between" align="center">
          <Badge variant={CATEGORY_VARIANT[article.category as keyof typeof CATEGORY_VARIANT] ?? "default"}>{article.category}</Badge>

          <Typography variant="label-sm" color="muted">
            {article.readTime}
          </Typography>
        </Stack>

        <Stack gap="sm">
          <div className="mt-4">
            <Heading size="lg">{article.title}</Heading>

            <Typography color="muted">{article.excerpt}</Typography>
          </div>
        </Stack>

        <Stack direction="row" justify="between" align="center">
          <div className="mt-6 pt-4 border-t border-[--color-slate-100]">
            <Typography variant="label-sm" color="muted">
              {article.date}
            </Typography>

            <Button variant="secondary" size="sm">
              Read more
            </Button>
          </div>
        </Stack>
      </div>
    </Card>
  );
}
