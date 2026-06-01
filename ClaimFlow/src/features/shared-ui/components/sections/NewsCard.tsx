import { Card } from "@/shared/components/design-system/composite/card/Card";
import { Stack } from "@/shared/components/design-system/layout/Stack";
import { Badge } from "@/shared/components/design-system/primitives/Badge";
import { Button } from "@/shared/components/design-system/primitives/buttons/Button";
import { Heading } from "@/shared/components/design-system/typography/Heading";
import { Text } from "@/shared/components/design-system/typography/Text";
import type { Article } from "@/shared/types/news.types";
import { CATEGORY_VARIANT } from "@/shared/types/newsCategories";

export function NewsCard({ article }: { article: Article }) {
  return (
    <Card variant="glass" className="overflow-hidden">
      {/* Image placeholder */}
      <div className={`h-44 ${article.color} flex items-center justify-center`} />

      <div className="p-6">
        <Stack direction="row" justify="between" align="center">
          <Badge variant={CATEGORY_VARIANT[article.category as keyof typeof CATEGORY_VARIANT] ?? "default"}>{article.category}</Badge>

          <Text variant="sm" color="muted">
            {article.readTime}
          </Text>
        </Stack>

        <Stack gap="sm">
          <div className="mt-4">
            <Heading size="lg">{article.title}</Heading>

            <Text color="muted">{article.excerpt}</Text>
          </div>
        </Stack>

        <Stack direction="row" justify="between" align="center">
          <div className="mt-6 pt-4 border-t border-[--color-slate-100]">
            <Text variant="sm" color="muted">
              {article.date}
            </Text>

            <Button variant="secondary" size="sm">
              Read more
            </Button>
          </div>
        </Stack>
      </div>
    </Card>
  );
}
