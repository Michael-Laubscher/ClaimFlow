import { Eye } from "lucide-react";

import { Card } from "@/shared/components/design-system/composite/card/Card";
import { Button } from "@/shared/components/design-system/primitives/buttons/Button";
import { CLAIMS } from "../../configs/claims.config";

const statusStyles = {
  "Under Review": "bg-orange-50 text-orange-600 border-orange-200",

  Approved: "bg-green-50 text-green-600 border-green-200",

  Paid: "bg-green-50 text-green-600 border-green-200",

  Rejected: "bg-red-50 text-red-600 border-red-200",
};

interface Props {
  onNewClaim: () => void;
}

export function ClaimHistory({ onNewClaim }: Props) {
  return (
    <Card className="overflow-hidden p-0">
      <div className="flex items-center justify-between border-b p-5">
        <h2 className="font-bold">Claims History</h2>

        <Button onClick={onNewClaim}>File New Claim</Button>
      </div>

      <table className="w-full">
        <thead>
          <tr className="border-b bg-slate-50">
            <th className="px-5 py-3 text-left text-xs">Claim #</th>
            <th className="px-5 py-3 text-left text-xs">Type</th>
            <th className="px-5 py-3 text-left text-xs">Date</th>
            <th className="px-5 py-3 text-left text-xs">Amount</th>
            <th className="px-5 py-3 text-left text-xs">Status</th>
            <th className="px-5 py-3 text-left text-xs">Actions</th>
          </tr>
        </thead>

        <tbody>
          {CLAIMS.map((claim) => (
            <tr key={claim.id} className="border-b">
              <td className="px-5 py-4 font-mono">{claim.id}</td>

              <td className="px-5 py-4">{claim.type}</td>

              <td className="px-5 py-4">{claim.date}</td>

              <td className="px-5 py-4 font-semibold">{claim.amount}</td>

              <td className="px-5 py-4">
                <span className={`rounded-full border px-3 py-1 text-xs font-semibold ${statusStyles[claim.status]}`}>{claim.status}</span>
              </td>

              <td className="px-5 py-4">
                <button className="flex items-center gap-2 text-sm text-slate-500 hover:text-[--color-navy]">
                  <Eye size={16} />
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
}
