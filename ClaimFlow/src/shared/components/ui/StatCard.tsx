export function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-3xl border bg-white p-6 shadow-sm">
      <p className="text-sm text-slate-500">{label}</p>
      <p className="mt-2 text-xl font-bold text-blue-700">{value}</p>
    </div>
  );
}