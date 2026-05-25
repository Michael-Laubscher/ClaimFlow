import { ARTICLES } from "../../configs/news.config";
import { NewsCard } from "./NewsCard";

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
        <NewsCard key={article.id} article={article} />
      ))}
    </div>
  );
}