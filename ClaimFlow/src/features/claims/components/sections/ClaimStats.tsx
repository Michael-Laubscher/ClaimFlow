import { Card } from "@/shared/components/design-system/composite/card/Card";

const stats = [
  {
    value: "5",
    label: "Total Claims",
    color: "text-[--color-navy]",
  },
  {
    value: "1",
    label: "In Progress",
    color: "text-orange-500",
  },
  {
    value: "3",
    label: "Settled",
    color: "text-green-500",
  },
  {
    value: "$47,600",
    label: "Total Paid",
    color: "text-[--color-navy]",
  },
];

export function ClaimStats() {
  return (
    <div className="grid gap-4 md:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.label} className="p-6 text-center">
          <p className={`text-3xl font-bold ${stat.color}`}>{stat.value}</p>

          <p className="mt-1 text-sm text-slate-500">{stat.label}</p>
        </Card>
      ))}
    </div>
  );
}
