import type { FAQData } from "@/shared/types/faq.types";

export function filterFAQs(
  data: FAQData,
  search: string,
  activeCategory: string
): FAQData {
  const query = search.toLowerCase();

  return Object.entries(data).reduce((acc, [cat, items]) => {
    if (activeCategory !== "All" && cat !== activeCategory) return acc;

    const filtered = items.filter(
      (i) =>
        !query ||
        i.q.toLowerCase().includes(query) ||
        i.a.toLowerCase().includes(query)
    );

    if (filtered.length) acc[cat] = filtered;

    return acc;
  }, {} as FAQData);
}

export function getTotalFAQs(data: FAQData) {
  return Object.values(data).reduce((acc, items) => acc + items.length, 0);
}