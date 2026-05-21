import { Link } from 'react-router-dom';

import { cn } from '@/shared/utilis/cn';

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
}

export function NavLink({
  to,
  children,
  className,
}: NavLinkProps) {
  return (
    <Link
      to={to}
      className={cn(
        [
          'transition-colors',
          'text-slate-300',
          'hover:text-white',
        ],
        className
      )}
    >
      {children}
    </Link>
  );
}