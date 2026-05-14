export function Section({ title, children }: { title?: string; children: React.ReactNode }) {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        {title && <h2 className="mb-8 text-3xl font-bold text-slate-900">{title}</h2>}
        {children}
      </div>
    </section>
  );
}