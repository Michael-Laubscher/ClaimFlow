interface Props {
  children?: React.ReactNode;
}

export function FormMessage({ children }: Props) {
  if (!children) return null;

  return <p className="mt-1 text-sm text-red-500">{children}</p>;
}
