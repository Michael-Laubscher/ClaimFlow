import { Badge } from "@/shared/components/design-system/primitives/Badge";
import { Stack } from "@/shared/components/design-system/layout/Stack";

import { GenericText } from "@/shared/components/design-system/typography/Text";
import { Button } from "@/shared/components/design-system/primitives/buttons/Button";
import { Card } from "@/shared/components/design-system/composite/card/Card";

interface Article {
  id: number;
  category: string;
  readTime: string;
  title: string;
  excerpt: string;
  date: string;
  color: string;
}

interface Props {
  article: Article;
}

export function ArticleCard({ article }: Props) {
  return (
    <Card interactive className="overflow-hidden">
      {/* Image */}
      <div className={`h-48 ${article.color} flex items-center justify-center`}>
        <div className="h-14 w-14 rounded-full bg-white/60" />
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="mb-3">
          <Stack direction="row" justify="between" align="center">
            <Badge variant="default">{article.category}</Badge>

            <span className="text-xs text-slate-400">{article.readTime}</span>
          </Stack>
        </div>
        <h3 className="text-base font-bold text-slate-900 leading-snug">{article.title}</h3>

        <GenericText className="mt-2 text-sm text-slate-500">{article.excerpt}</GenericText>

        <div className="mt-5 border-t border-slate-100 pt-3">
          <Stack direction="row" justify="between">
            <span className="text-xs text-slate-400">{article.date}</span>

            <Button variant="outline" size="sm" iconRight={<span>→</span>}>
              Read more
            </Button>
          </Stack>
        </div>
      </div>
    </Card>
  );
}
