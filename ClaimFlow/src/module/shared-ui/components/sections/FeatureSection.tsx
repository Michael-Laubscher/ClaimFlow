export default function FeatureSection({ title, content, bullets = [] }: { title: string; content: string; bullets?: string[] }) {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-6 grid gap-10 lg:grid-cols-2 items-start">
        <div>
          <h2 className="text-3xl font-bold">{title}</h2>
          <p className="mt-4 text-slate-600 leading-7">{content}</p>
        </div>
        <div className="rounded-3xl border p-8 shadow-sm">
          <ul className="space-y-4 text-slate-700">
            {bullets.map((bullet) => <li key={bullet}>• {bullet}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}