type StatItem = { label: string; value: string };

export default function StatsSection({ items }: { items: StatItem[] }) {
  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto max-w-6xl px-6 grid gap-6 md:grid-cols-3">
        {items.map((item) => (
          <div key={item.label} className="rounded-3xl border bg-white p-6 shadow-sm">
            <p className="text-sm text-slate-500">{item.label}</p>
            <p className="mt-2 text-xl font-semibold text-blue-700">{item.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}