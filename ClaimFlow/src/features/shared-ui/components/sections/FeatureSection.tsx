import type { FeatureSection as FeatureSectionType } from "@/shared/types/page.types";

export default function FeatureSection({ title, description, items = [] }: FeatureSectionType) {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto grid max-w-6xl items-start gap-10 px-6 lg:grid-cols-2">
        {/* Left */}
        <div>
          <h2 className="text-3xl font-bold text-slate-900">{title}</h2>

          {description && <p className="mt-6 leading-8 text-slate-600">{description}</p>}
        </div>

        {/* Right */}
        <div className="rounded-3xl border bg-white p-8 shadow-sm">
          <ul className="space-y-4">
            {items.map((item) => (
              <li key={item} className="flex items-start gap-3 text-slate-700">
                <span className="mt-1 text-blue-700">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
