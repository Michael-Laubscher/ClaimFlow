import { useState } from "react";
import { CATEGORY_VARIANT } from "@/shared/types/newsCategories";
import { ARTICLES } from "../../configs/news.config";
import { ContentCard } from "../cards/ContentCard";
import type { ContentCardData } from "../cards/ContentCard";
import { Modal } from "@/shared/components/design-system/feedback/modal/Modal";

export function NewsGrid() {
  const [selectedArticle, setSelectedArticle] = useState<ContentCardData | null>(null);

  return (
    <>
      <div
        className="
          grid
          grid-cols-1
          gap-8
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
            imageHeight="h-48"
            ctaVariant="secondary"
            onClick={() => setSelectedArticle(article)}
          />
        ))}
      </div>

      <Modal open={!!selectedArticle} onClose={() => setSelectedArticle(null)} size="lg" title={selectedArticle?.title} description={selectedArticle?.category}>
        {selectedArticle && (
          <div className="space-y-6">
            <div
              className={`
      h-56
      rounded-2xl
      ${selectedArticle.color}
      flex
      items-center
      justify-center
      shadow-inner
    `}
            >
              <div
                className="
        h-16
        w-16
        rounded-full
        bg-white/80
        shadow-lg
      "
              />
            </div>

            <p
              className="
      text-base
      leading-relaxed
      text-slate-700
    "
            >
              {selectedArticle.excerpt}
            </p>

            <div
              className="
      rounded-xl
      bg-slate-50
      px-4
      py-3
      text-sm
      text-slate-500
    "
            >
              Published {selectedArticle.date}
              {" • "}
              {selectedArticle.readTime}
            </div>
          </div>
        )}
      </Modal>
    </>
  );
}
