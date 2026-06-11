export function FormSuccess({ message }: { message?: string }) {
  if (!message) return null;
  return <p className="text-xs text-green-600">{message}</p>;
}
