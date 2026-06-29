export function FormError({ message }: { message?: string }) {
  if (!message) return null;

  return (
    <p
      className="
        mt-2
        flex
        items-center
        gap-2

        text-xs
        font-medium
        text-red-500

        animate-in
        fade-in
        slide-in-from-top-1
        duration-200
      "
    >
      <span
        className="
          h-1.5
          w-1.5
          rounded-full
          bg-red-500
        "
      />

      {message}
    </p>
  );
}
