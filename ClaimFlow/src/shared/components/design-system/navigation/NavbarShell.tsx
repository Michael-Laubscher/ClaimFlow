import { clsx } from "clsx";

interface Props {
  children: React.ReactNode;
  scrolled?: boolean;
}

export function NavbarShell({
  children,
  scrolled,
}: Props) {
  return (
    <header
      className={clsx(
        "sticky top-0 z-50 w-full border-b transition-all duration-300",
        scrolled
          ? "border-[--color-slate-100] bg-white/80 shadow-[0_2px_24px_rgba(10,30,100,0.10)] backdrop-blur-xl"
          : "border-[--color-slate-100] bg-white",
      )}
    >
      {children}
    </header>
  );
}