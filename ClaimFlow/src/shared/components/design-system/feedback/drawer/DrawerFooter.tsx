export function DrawerFooter({ children }: { children?: React.ReactNode }) {
  return <div className="flex justify-end gap-3 border-t border-white/10 p-5">{children}</div>;
}
