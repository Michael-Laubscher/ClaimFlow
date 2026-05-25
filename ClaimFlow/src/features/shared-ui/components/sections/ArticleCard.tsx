import { Badge } from "@/shared/components/design-system/feedback/Badge";
import { Stack } from "@/shared/components/design-system/layout/Stack";
import { Card } from "@/shared/components/design-system/surface/Card";
import { Button } from "@/shared/components/design-system/buttons/Button";
import { GenericText } from "@/shared/components/design-system/typography/Text";

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
    <Card className="overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* Image */}
      <div className={`h-48 ${article.color} flex items-center justify-center`}>
        <div className="h-14 w-14 rounded-full bg-white/60" />
      </div>

      {/* Content */}
      <div className="p-5">
        <Stack direction="row" justify="between" align="center" className="mb-3">
          <Badge className="bg-white/10 text-xs">
            {article.category}
          </Badge>

          <span className="text-xs text-slate-400">
            {article.readTime}
          </span>
        </Stack>

        <h3 className="text-base font-bold text-slate-900 leading-snug">
          {article.title}
        </h3>

        <GenericText className="mt-2 text-sm text-slate-500">
          {article.excerpt}
        </GenericText>

        <Stack direction="row" justify="between" className="mt-5 border-t border-slate-100 pt-3">
          <span className="text-xs text-slate-400">{article.date}</span>

          <Button
            variant="outline"
            size="sm"
            iconRight={<span>→</span>}
          >
            Read more
          </Button>
        </Stack>
      </div>
    </Card>
  );
}