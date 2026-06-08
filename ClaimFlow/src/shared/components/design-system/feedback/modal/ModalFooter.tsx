export function ModalFooter({ children }: { children?: React.ReactNode }) {
  return (
    <div
      className="
  flex items-center justify-end gap-3
  border-t border-[var(--color-border)]
  bg-[rgba(255,255,255,0.02)]
  px-6 py-4
"
    >
      {children}
    </div>
  );
}
