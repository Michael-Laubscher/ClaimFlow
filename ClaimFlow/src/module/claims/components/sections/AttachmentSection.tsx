import { useFormContext } from "react-hook-form";

export default function AttachmentsSection() {
  const {
    setValue,
    formState: { errors },
  } = useFormContext();

  const handleFiles = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const fileArray = Array.from(files);

    // Basic validation
    const validFiles = fileArray.filter((file) => {
      const allowedTypes = ["image/jpeg", "image/png", "application/pdf"];
      const maxSize = 5 * 1024 * 1024; // 5MB

      return allowedTypes.includes(file.type) && file.size <= maxSize;
    });

    setValue("attachments", validFiles);
  };

  return (
    <div className="border p-4 rounded">
      <h2 className="font-bold text-lg">Attachments</h2>

      <input type="file" multiple onChange={handleFiles} />

      <p className="text-red-500">
        {errors.attachments?.message as string}
      </p>
    </div>
  );
}