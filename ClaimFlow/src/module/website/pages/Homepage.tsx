export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="p-10 bg-gray-100 text-center">
        <h1 className="text-4xl font-bold">
          Insurance Made Simple
        </h1>
        <p className="mt-4">
          Fast, reliable cover with seamless claims.
        </p>
      </section>

      {/* Products */}
      <section className="p-10">
        <h2 className="text-2xl font-bold">Our Products</h2>
        <p>Motor, Travel, Commercial...</p>
      </section>

      {/* CTA */}
      <section className="p-10 text-center">
        <a
          href="/get-insurance"
          className="bg-blue-600 text-white px-6 py-3 rounded"
        >
          Get a Quote
        </a>
      </section>
    </div>
  );
}