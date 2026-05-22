import { Link } from 'react-router-dom';
import { buttonVariants } from './button.variants';
import { cn } from '@/shared/utilis/cn';

interface ButtonLinkProps {
  to: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function ButtonLink({
  to,
  children,
  variant,
  size,
  className,
}: ButtonLinkProps) {
  return (
    <Link
      to={to}
      className={cn(
        buttonVariants({ variant, size }),
        className
      )}
    >
      <span className="inline-flex items-center gap-2">
        {children}
      </span>
    </Link>
  );
}