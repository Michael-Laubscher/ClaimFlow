import { clsx } from "clsx";

interface Props {
  children: React.ReactNode;

  scrolled?: boolean;
}

export function NavbarShell({ children, scrolled = false }: Props) {
  return (
    <header
      className={clsx(
        `
sticky
top-0
z-50
w-full
transition-all
duration-500
`,

        scrolled
          ? `
border-b
border-slate-200/60
bg-white/75
shadow-[0_8px_40px_rgba(15,23,42,0.08)]
backdrop-blur-xl
`
          : `
bg-white
border-b
border-transparent
`
      )}
    >
      {children}
    </header>
  );
}
