import { useController, useFormContext } from "react-hook-form";
import { FormSection } from "@/shared/components/design-system/forms/FormSection";
import { Typography } from "@/shared/components/design-system/typography/Typography";

type Attachment = {
  id: string;
  file: File;
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

    const allowed = ["image/jpeg", "image/png", "application/pdf"];
    const max = 5 * 1024 * 1024;

    const valid = Array.from(files)
      .filter((f) => allowed.includes(f.type) && f.size <= max)
      .map((file) => ({ file, id: crypto.randomUUID() }));

    onChange([...attachments, ...valid]);
    e.target.value = "";
  };

  const remove = (id: string) => onChange(attachments.filter((a) => a.id !== id));

  return (
    <FormSection title="Attachments">
      <input type="file" multiple onChange={handleFiles} />

      <ul className="mt-3 space-y-2">
        {attachments.map(({ file, id }) => (
          <li key={id} className="flex justify-between border p-2 rounded">
            <div>
              <p className="text-sm font-medium">{file.name}</p>
            </div>

            <button type="button" onClick={() => remove(id)}>
              Remove
            </button>
          </li>
        ))}
      </ul>

      {errors.attachments?.message && <Typography className="text-red-500 text-sm">{errors.attachments.message as string}</Typography>}
    </FormSection>
  );
}
