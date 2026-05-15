export default function TextSection({ title, content }: { title: string; content: string }) {
  return (
    <section className="p-12 text-center bg-gray-100">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="mt-4">{content}</p>
    </section>
  );
}