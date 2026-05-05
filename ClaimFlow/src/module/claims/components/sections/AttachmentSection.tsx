import { useFormContext, useWatch } from "react-hook-form";

export default function AttachmentsSection() {
  const {
    setValue,
    formState: { errors },
    control,
  } = useFormContext();

  const attachments: File[] = useWatch({
    control,
    name: "attachments",
    defaultValue: [],
  });

  const handleFiles = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const fileArray = Array.from(files);

    const allowedTypes = ["image/jpeg", "image/png", "application/pdf"];
    const maxSize = 5 * 1024 * 1024; // 5MB

    const validFiles = fileArray.filter(
      (file) =>
        allowedTypes.includes(file.type) && file.size <= maxSize
    );

    setValue("attachments", [...attachments, ...validFiles]);
  };

  const removeFile = (index: number) => {
    const updated = attachments.filter((_, i) => i !== index);
    setValue("attachments", updated);
  };

  const formatSize = (size: number) => {
    if (size < 1024) return `${size} B`;
    if (size < 1024 * 1024) return `${(size / 1024).toFixed(1)} KB`;
    return `${(size / (1024 * 1024)).toFixed(1)} MB`;
  };

  return (
    <div className="border p-4 rounded">
      <h2 className="font-bold text-lg">Attachments</h2>

      <input type="file" multiple onChange={handleFiles} />

      {/* File List */}
      <ul className="mt-3 space-y-2">
        {attachments?.map((file, index) => (
          <li
            key={`${file.name}-${index}`}
            className="flex justify-between items-center border p-2 rounded"
          >
            <div>
              <p className="text-sm font-medium">{file.name}</p>
              <p className="text-xs text-gray-500">
                {formatSize(file.size)}
              </p>
            </div>

            <button
              type="button"
              onClick={() => removeFile(index)}
              className="text-red-500 text-sm"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>

      {/* Error display (supports array or single message) */}
      <ul className="text-red-500 mt-2 text-sm">
        {Array.isArray(errors.attachments)
          ? errors.attachments.map((err: any, i: number) => (
              <li key={i}>{err?.message}</li>
            ))
          : errors.attachments?.message && (
              <li>{errors.attachments.message as string}</li>
            )}
      </ul>
    </div>
  );
}