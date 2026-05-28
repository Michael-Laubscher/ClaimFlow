type Testimonial = { name: string; role?: string; quote: string };

export default function TestimonialSection({ title, items }: { title: string; items: Testimonial[] }) {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-3xl font-bold">{title}</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {items.map((item) => (
            <div key={item.name + item.quote} className="rounded-3xl bg-white p-6 shadow-sm border">
              <p className="italic text-slate-600">“{item.quote}”</p>
              <p className="mt-5 font-semibold">{item.name}</p>
              {item.role && <p className="text-sm text-slate-500">{item.role}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
