import { StatusBadge } from "@/shared/components/design-system/data-display/status-badge";
import { Drawer, useDrawer } from "@/shared/components/design-system/feedback/drawer";
import { Modal } from "@/shared/components/design-system/feedback/modal/Modal";
import { Skeleton, SkeletonText } from "@/shared/components/design-system/feedback/skeleton";
import { Tooltip } from "@/shared/components/design-system/feedback/tooltip";
import { Button } from "@/shared/components/design-system/primitives/buttons/Button";
import { ClaimSearch } from "@/shared/components/design-system/primitives/Input/Search";
import { PlaceholderIcon } from "@/shared/components/design-system/svg/icons";
import { CheckIcon, EyeIcon } from "@/shared/components/design-system/svg/icons/lucide";
import { useToast } from "@/shared/hooks/use-toast";

import { AlertCircleIcon, ClockIcon, FileIcon } from "lucide-react";
import { useState } from "react";

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
   Step Icon (safe + fallback protected)
───────────────────────────────────────────── */

function StepIcon({ done }: { done: boolean }) {
  return done ? <CheckIcon size={16} /> : <ClockIcon size={16} />;
}

interface TimelineStepProps extends Step {
  isLast: boolean;
}

function StepItem({ label, date, done, isLast }: TimelineStepProps) {
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

interface ResultStateProps {
  value: string;
  onChange: (value: string) => void;
  onTrack: () => void;
  loading?: boolean;
}

export function ResultState({ value, onChange, onTrack, claim, loading = false }: ResultStateProps) {
  const toast = useToast();
  const [open, setOpen] = useState(false);

  const onClose = () => setOpen(false);
  const { open: openDrawer, onOpen, onClose: onCloseDrawer } = useDrawer();

  return (
    <div className="px-6 py-10">
      <div className="mx-auto max-w-2xl space-y-6">
        {/* Search */}
        <ClaimSearch value={value} onChange={onChange} onTrack={onTrack} />

        {/* Claim Card */}
        <div className="overflow-hidden p-0 border rounded-lg bg-white">
          {/* Header */}
          <div className="border-b border-slate-100 p-5">
            {loading ? (
              <>
                <Skeleton className="h-6 w-32 mb-2" />
                <Skeleton className="h-4 w-24" />
              </>
            ) : (
              <div className="flex justify-between">
                <div>
                  <h2 className="text-xl font-bold text-slate-800">{claim!.id}</h2>
                  <p className="text-sm text-slate-500">{claim!.type}</p>
                </div>

                <div className="flex items-center gap-1 rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-600">
                  <AlertCircleIcon size={14} />
                  {claim!.status}
                </div>
              </div>
            )}

            <div className="mt-5 grid grid-cols-3 gap-4 text-sm">
              {loading ? (
                <>
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                </>
              ) : (
                <>
                  <div>
                    <p className="text-xs text-slate-400">Submitted</p>
                    <p className="font-semibold">{claim!.submitted}</p>
                  </div>

                  <div>
                    <p className="text-xs text-slate-400">Est. Amount</p>
                    <p className="font-semibold">{claim!.estimatedAmount}</p>
                  </div>

                  <div>
                    <p className="text-xs text-slate-400">Assigned</p>
                    <p className="font-semibold">{claim!.assignedTo}</p>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Timeline */}
          <div className="p-5">
            <h3 className="mb-4 text-sm font-semibold text-slate-800">Claim Progress</h3>

            {loading ? <SkeletonText lines={5} /> : claim!.steps.map((step, i) => <StepItem key={step.label} {...step} isLast={i === claim!.steps.length - 1} />)}
          </div>

          {/* Actions */}
          <div className="border-t border-slate-100 p-5 grid grid-cols-2 gap-3">
            {loading ? (
              <>
                <Skeleton className="h-12 w-full rounded-lg" />
                <Skeleton className="h-12 w-full rounded-lg" />
              </>
            ) : (
              <>
                <button
                  className="flex items-center gap-2 rounded-lg border p-3 text-left hover:bg-slate-50"
                  onClick={() =>
                    toast.info({
                      title: "Upload started",
                      description: "Select files to attach to your claim.",
                    })
                  }
                >
                  <FileIcon size={16} />
                  <div>
                    <p className="text-sm font-medium">Upload Documents</p>

                    <p className="text-xs text-slate-400">Add files</p>
                  </div>
                </button>
                <Tooltip content="View details">
                  <button className="p-2 text-white/70 hover:text-white">
                    <EyeIcon />
                  </button>
                </Tooltip>

                <StatusBadge status="active" />
                <button
                  onClick={() => {
                    setOpen(true);
                    toast.info({
                      title: "Contacting adjuster",
                      description: "Opening message window...",
                    });
                  }}
                  className="flex items-center gap-2 rounded-lg border p-3 text-left hover:bg-slate-50"
                >
                  <PlaceholderIcon size={16} />
                  <div>
                    <p className="text-sm font-medium">Contact Adjuster</p>
                    <p className="text-xs text-slate-400">Send message</p>
                  </div>
                </button>
              </>
            )}
          </div>
        </div>

        <Button onClick={onOpen} disabled={loading}>
          Open Policy
        </Button>

        <Drawer opened={openDrawer} onClosed={onCloseDrawer} title="Policy Details">
          {loading ? <Skeleton className="h-6 w-full" /> : <p className="text-white/70">Full policy information here.</p>}
        </Drawer>

        {/* Modal */}
        <Modal open={open} onClose={onClose} title="Delete Policy" description="This action cannot be undone.">
          <div className="flex justify-end gap-3">
            <Button variant="primary" onClick={onClose}>
              Cancel
            </Button>

            <Button
              variant="primary"
              onClick={() => {
                toast.success({
                  title: "Deleted",
                  description: "Policy has been removed.",
                });

                onClose();
              }}
            >
              Delete
            </Button>
          </div>
        </Modal>
      </div>
    </div>
  );
}
