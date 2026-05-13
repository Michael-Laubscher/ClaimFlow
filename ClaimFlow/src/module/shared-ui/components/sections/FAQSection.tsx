type FAQItem = { question: string; answer: string };

export default function FAQSection({ title, items }: { title: string; items: FAQItem[] }) {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="text-center text-3xl font-bold">{title}</h2>
        <div className="mt-10 space-y-4">
          {items.map((item) => (
            <details key={item.question} className="rounded-2xl border p-5 group">
              <summary className="cursor-pointer font-semibold list-none">{item.question}</summary>
              <p className="mt-3 text-slate-600 leading-7">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}