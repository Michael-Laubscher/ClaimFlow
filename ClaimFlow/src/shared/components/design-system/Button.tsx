import { Link } from 'react-router-dom';
import clsx from 'clsx';

type ButtonProps = {
  label: string;
  to?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
};

export function Button({ label, to, variant = 'primary', className }: ButtonProps) {
  const styles = clsx(
    'inline-flex rounded-2xl px-6 py-3 font-semibold transition',
    variant === 'primary' && 'bg-blue-700 text-white hover:bg-blue-800',
    variant === 'secondary' && 'bg-orange-600 text-white hover:opacity-90',
    variant === 'outline' && 'border border-blue-700 text-blue-700',
    className,
  );

  return to ? <Link to={to} className={styles}>{label}</Link> : <button className={styles}>{label}</button>;
}