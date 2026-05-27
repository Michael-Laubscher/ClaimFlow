export default function ImageSection({ title, content, image }: { title: string; content: string; image: string }) {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-6xl px-6 grid gap-10 lg:grid-cols-2 items-center">
        <img src={image} alt={title} className="w-full rounded-3xl object-cover shadow-lg" />
        <div>
          <h2 className="text-3xl font-bold">{title}</h2>
          <p className="mt-4 text-slate-600 leading-7">{content}</p>
        </div>
      </div>
    </section>
  );
}
