type CardItem = {
  title: string;
  description: string;
};

type CardGridProps = {
  title: string;
  items: CardItem[];
};

export default function CardGrid({ title, items }: CardGridProps) {
  return (
    <section className="p-10">
      <h2 className="text-2xl font-bold mb-6">{title}</h2>

      <div className="grid gap-6 md:grid-cols-3">
        {items.map((item, i) => (
          <div key={i} className="rounded-2xl border p-6 shadow-sm">
            <h3 className="font-semibold text-lg">{item.title}</h3>
            <p className="mt-2 text-slate-600">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}