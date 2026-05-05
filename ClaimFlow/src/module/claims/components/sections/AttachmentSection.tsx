import { useController, useFormContext } from "react-hook-form";

type FileWithId = {
  file: File;
  id: string;
};

export default function AttachmentsSection() {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const {
    field: { value = [], onChange },
  } = useController({
    name: "attachments",
    control,
    defaultValue: [],
  });

  const attachments: FileWithId[] = value;

  const handleFiles = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const allowedTypes = ["image/jpeg", "image/png", "application/pdf"];
    const maxSize = 5 * 1024 * 1024; // 5MB

    const validFiles: FileWithId[] = Array.from(files)
      .filter(
        (file) => allowedTypes.includes(file.type) && file.size <= maxSize,
      )
      .map((file) => ({
        file,
        id: crypto.randomUUID(),
      }));

    onChange([...attachments, ...validFiles]);

    e.target.value = "";
  };

  const removeFile = (id: string) => {
    const updated = attachments.filter((f) => f.id !== id);
    onChange(updated);
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
        {attachments.map(({ file, id }) => (
          <li
            key={id}
            className="flex justify-between items-center border p-2 rounded"
          >
            <div>
              <p className="text-sm font-medium">{file.name}</p>
              <p className="text-xs text-gray-500">{formatSize(file.size)}</p>
            </div>

            <button
              type="button"
              onClick={() => removeFile(id)}
              className="text-red-500 text-sm"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>

      {/* Error display */}
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
