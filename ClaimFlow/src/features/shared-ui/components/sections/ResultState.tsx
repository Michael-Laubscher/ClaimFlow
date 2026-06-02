import { Card } from "@/shared/components/design-system/composite/card/Card";
import { Button } from "@/shared/components/design-system/primitives/buttons/Button";
import { PlaceholderIcon } from "@/shared/components/design-system/svg/icons";
import { CheckIcon } from "@/shared/components/design-system/svg/icons/lucide";

import { AlertCircleIcon, ClockIcon, FileIcon } from "lucide-react";

/* ─────────────────────────────────────────────
   Types
───────────────────────────────────────────── */

interface Step {
  label: string;
  date: string;
  done: boolean;
}

interface Claim {
  id: string;
  type: string;
  status: string;
  submitted: string;
  estimatedAmount: string;
  assignedTo: string;
  steps: Step[];
}

interface ResultStateProps {
  value: string;
  onChange: (value: string) => void;
  onTrack: () => void;
  claim: Claim;
}

/* ─────────────────────────────────────────────
   Safe Icon Wrapper (CORE FIX)
───────────────────────────────────────────── */

function SafeIcon({ Icon, size = 16 }: { Icon?: React.ElementType; size?: number }) {
  const Component = Icon ?? PlaceholderIcon;
  return <Component size={size} />;
}

/* ─────────────────────────────────────────────
   Step Icon (safe + fallback protected)
───────────────────────────────────────────── */

function StepIcon({ done }: { done: boolean }) {
  const Icon = done ? CheckIcon : ClockIcon;
  return Icon ? <Icon size={16} /> : <PlaceholderIcon />;
}

/* ─────────────────────────────────────────────
   Step Item
───────────────────────────────────────────── */

function StepItem({ label, date, done, isLast }: { label: string; date: string; done: boolean; isLast: boolean }) {
  return (
    <div className="flex gap-4">
      {/* Icon */}
      <div className="flex flex-col items-center">
        <div className={`flex h-9 w-9 items-center justify-center rounded-full ${done ? "bg-emerald-600 text-white" : "border border-slate-200 bg-slate-100 text-slate-400"}`}>
          <StepIcon done={done} />
        </div>

        {!isLast && <div className={`mt-1 w-0.5 flex-1 ${done ? "bg-emerald-400" : "bg-slate-200"}`} />}
      </div>

      {/* Text */}
      <div className="pb-6">
        <p className={`text-sm font-semibold ${done ? "text-slate-800" : "text-slate-400"}`}>{label}</p>

        <p className={`mt-0.5 text-xs ${done ? "text-slate-500" : "text-slate-400"}`}>{date}</p>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Main Component
───────────────────────────────────────────── */

export function ResultState({ value, onChange, onTrack, claim }: ResultStateProps) {
  return (
    <div className="px-6 py-10">
      <div className="mx-auto max-w-2xl space-y-6">
        {/* Search */}
        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">Claim Number</label>

          <div className="flex">
            <input
              value={value}
              onChange={(e) => onChange(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && onTrack()}
              className="flex-1 rounded-l-md border px-4 py-2.5 text-sm"
              placeholder="CLM-2026-XXXXX"
            />

            <Button className="rounded-l-none" onClick={onTrack}>
              Track
            </Button>
          </div>
        </div>

        {/* Claim Card */}
        <Card className="overflow-hidden p-0">
          {/* Header */}
          <div className="border-b border-slate-100 p-5">
            <div className="flex justify-between">
              <div>
                <h2 className="text-xl font-bold text-slate-800">{claim.id}</h2>
                <p className="text-sm text-slate-500">{claim.type}</p>
              </div>

              <div className="flex items-center gap-1 rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-600">
                <SafeIcon Icon={AlertCircleIcon} size={14} />
                {claim.status}
              </div>
            </div>

            <div className="mt-5 grid grid-cols-3 gap-4 text-sm">
              <div>
                <p className="text-xs text-slate-400">Submitted</p>
                <p className="font-semibold">{claim.submitted}</p>
              </div>

              <div>
                <p className="text-xs text-slate-400">Est. Amount</p>
                <p className="font-semibold">{claim.estimatedAmount}</p>
              </div>

              <div>
                <p className="text-xs text-slate-400">Assigned</p>
                <p className="font-semibold">{claim.assignedTo}</p>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="p-5">
            <h3 className="mb-4 text-sm font-semibold text-slate-800">Claim Progress</h3>

            {claim.steps.map((step, i) => (
              <StepItem key={step.label} {...step} isLast={i === claim.steps.length - 1} />
            ))}
          </div>

          {/* Actions */}
          <div className="border-t border-slate-100 p-5">
            <div className="grid grid-cols-2 gap-3">
              <button className="flex items-center gap-2 rounded-lg border p-3 text-left hover:bg-slate-50">
                <SafeIcon Icon={FileIcon} size={16} />
                <div>
                  <p className="text-sm font-medium">Upload Documents</p>
                  <p className="text-xs text-slate-400">Add files</p>
                </div>
              </button>

              <button className="flex items-center gap-2 rounded-lg border p-3 text-left hover:bg-slate-50">
                <SafeIcon Icon={PlaceholderIcon} size={16} />
                <div>
                  <p className="text-sm font-medium">Contact Adjuster</p>
                  <p className="text-xs text-slate-400">Send message</p>
                </div>
              </button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
