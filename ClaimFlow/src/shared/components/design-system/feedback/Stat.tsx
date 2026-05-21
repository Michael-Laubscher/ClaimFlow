interface StatProps {
  value: string;
  label: string;
}

export function Stat({ value, label }: StatProps) {
  return (
    <div>
      <div className="text-2xl font-extrabold text-white sm:text-3xl">
        {value}
      </div>

      <div className="mt-0.5 text-xs text-blue-200/70 sm:text-sm">
        {label}
      </div>
    </div>
  );
}