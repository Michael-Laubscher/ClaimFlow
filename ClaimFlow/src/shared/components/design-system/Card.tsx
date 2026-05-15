type Props = {
  children: React.ReactNode;
};

export default function Card({ children }: Props) {
  return (
    <div className="bg-background text-text">
      <section className="py-section">
        <div className="container">
          <div className="rounded-2xl bg-surface shadow-card border border-border p-6">
            {children}
          </div>
        </div>
      </section>
    </div>
  );
}
