import { CATEGORY_VARIANT } from "@/shared/types/newsCategories";
import { ARTICLES } from "../../configs/news.config";
import { ContentCard } from "../cards/ContentCard";

export function NewsGrid() {
  return (
    <div
      className="
        grid
        grid-cols-1
        gap-6
        md:grid-cols-2
        lg:grid-cols-3
      "
    >
      {ARTICLES.map((article) => (
        <ContentCard
          key={article.id}
          content={article}
          cardVariant="glass"
          badgeVariant={CATEGORY_VARIANT[article.category as keyof typeof CATEGORY_VARIANT] ?? "default"}
          imageHeight="h-44"
          ctaVariant="secondary"
        />
      ))}
    </div>
  );
}
