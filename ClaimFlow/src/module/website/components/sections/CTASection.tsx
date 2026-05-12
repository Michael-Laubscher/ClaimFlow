type CTASectionProps = {
  title: string;
  subtitle?: string;
  buttonText: string;
  buttonLink: string;
};

export default function CTASection({
  title,
  subtitle,
  buttonText,
  buttonLink,
}: CTASectionProps) {
  return (
    <section className="p-12 text-center bg-gray-100">
      <h1 className="text-4xl font-bold">{title}</h1>

      {subtitle && <p className="mt-4">{subtitle}</p>}

      <a
        href={buttonLink}
        className="mt-6 inline-block rounded bg-blue-600 px-6 py-3 text-white"
      >
        {buttonText}
      </a>
    </section>
  );
}