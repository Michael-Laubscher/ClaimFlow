import { FormSection } from "@/shared/components/design-system/forms/FormSection";
import { Text } from "@/shared/components/design-system/typography/Text";
import { useController, useFormContext } from "react-hook-form";

type Attachment = {
  id: string;
  file: File;
  previewUrl?: string;
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

  const attachments: Attachment[] = value;

  const handleFiles = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const mapped = Array.from(files).map((file) => ({
      file,
      id: crypto.randomUUID(),
      previewUrl: file.type.startsWith("image/")
        ? URL.createObjectURL(file)
        : undefined,
    }));

    onChange([...attachments, ...mapped]);
    e.target.value = "";
  };

  const remove = (id: string) => {
    onChange(attachments.filter((a) => a.id !== id));
  };

  return (
    <FormSection
      title="Attachments"
      description="Upload supporting documents (images or PDFs)"
    >
      <input type="file" multiple onChange={handleFiles} />

      <ul className="mt-3 space-y-2">
        {attachments.map(({ file, id, previewUrl }) => (
          <li
            key={id}
            className="flex justify-between items-center border p-2 rounded"
          >
            <div className="flex items-center gap-3">
              {previewUrl && (
                <img
                  src={previewUrl}
                  className="w-10 h-10 object-cover rounded"
                />
              )}

              <p className="text-sm font-medium">{file.name}</p>
            </div>

            <button
              type="button"
              onClick={() => remove(id)}
              className="text-red-600 text-sm"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>

      {errors.attachments?.message && (
        <Text className="text-red-500 text-sm">
          {errors.attachments.message as string}
        </Text>
      )}
    </FormSection>
  );
}