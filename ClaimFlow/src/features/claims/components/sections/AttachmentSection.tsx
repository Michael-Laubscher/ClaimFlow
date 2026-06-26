import { FormSection } from "@/shared/components/design-system/forms/FormSection";
import { Text } from "@/shared/components/design-system/typography/Text";
import { useController, useFormContext } from "react-hook-form";
import { FileText, UploadCloud, X } from "lucide-react";
import { useRef } from "react";

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

  const inputRef = useRef<HTMLInputElement>(null);

  const {
    field: { value = [], onChange },
  } = useController({
    name: "attachments",
    control,
    defaultValue: [],
  });

  const attachments: Attachment[] = value;

  const handleFiles = (files: FileList | null) => {
    if (!files) return;

    const mapped = Array.from(files).map((file) => ({
      file,
      id: crypto.randomUUID(),
      previewUrl: file.type.startsWith("image/")
        ? URL.createObjectURL(file)
        : undefined,
    }));

    onChange([...attachments, ...mapped]);
  };

  const remove = (id: string) => {
    onChange(
      attachments.filter((attachment) => attachment.id !== id)
    );
  };

  return (
    <FormSection
      title="Supporting Documents"
      description="Upload images, receipts, invoices or PDF evidence related to your claim."
    >
      <div className="space-y-6">

        {/* Upload Area */}
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          className="
            group
            flex
            w-full
            flex-col
            items-center
            justify-center
            rounded-3xl
            border-2
            border-dashed
            border-slate-300
            bg-slate-50
            px-6
            py-12
            transition
            hover:border-green-500
            hover:bg-green-50/40
          "
        >
          <div
            className="
              mb-4
              flex
              h-16
              w-16
              items-center
              justify-center
              rounded-2xl
              bg-white
              shadow-sm
              ring-1
              ring-slate-200
              transition
              group-hover:scale-105
            "
          >
            <UploadCloud className="h-8 w-8 text-green-600" />
          </div>

          <p className="text-base font-semibold text-slate-800">
            Click to upload documents
          </p>

          <p className="mt-2 text-sm text-slate-500">
            PNG, JPG or PDF files up to 10MB
          </p>

          <input
            ref={inputRef}
            hidden
            type="file"
            multiple
            accept="image/*,.pdf"
            onChange={(e) => {
              handleFiles(e.target.files);
              e.target.value = "";
            }}
          />
        </button>


        {/* Uploaded Files */}
        {attachments.length > 0 && (
          <div className="space-y-3">

            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold text-slate-700">
                Uploaded Files
              </h3>

              <span
                className="
                  rounded-full
                  bg-slate-100
                  px-3
                  py-1
                  text-xs
                  font-medium
                  text-slate-600
                "
              >
                {attachments.length} file
                {attachments.length > 1 && "s"}
              </span>
            </div>


            <div className="grid gap-3">
              {attachments.map(({ file, id, previewUrl }) => (
                <div
                  key={id}
                  className="
                    flex
                    items-center
                    justify-between
                    rounded-2xl
                    border
                    border-slate-200
                    bg-white
                    p-4
                    shadow-sm
                    transition
                    hover:shadow-md
                  "
                >

                  <div className="flex items-center gap-4">

                    {previewUrl ? (
                      <img
                        src={previewUrl}
                        className="
                          h-14
                          w-14
                          rounded-xl
                          object-cover
                          ring-1
                          ring-slate-200
                        "
                      />
                    ) : (
                      <div
                        className="
                          flex
                          h-14
                          w-14
                          items-center
                          justify-center
                          rounded-xl
                          bg-slate-100
                        "
                      >
                        <FileText className="h-6 w-6 text-slate-500" />
                      </div>
                    )}


                    <div>
                      <p
                        className="
                          max-w-xs
                          truncate
                          text-sm
                          font-medium
                          text-slate-800
                        "
                      >
                        {file.name}
                      </p>

                      <p className="mt-1 text-xs text-slate-500">
                        {(file.size / 1024 / 1024).toFixed(2)} MB
                      </p>
                    </div>

                  </div>


                  <button
                    type="button"
                    onClick={() => remove(id)}
                    className="
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-full
                      text-slate-400
                      transition
                      hover:bg-red-50
                      hover:text-red-600
                    "
                  >
                    <X className="h-5 w-5" />
                  </button>

                </div>
              ))}
            </div>

          </div>
        )}


        {errors.attachments?.message && (
          <Text className="text-sm text-red-500">
            {errors.attachments.message as string}
          </Text>
        )}

      </div>
    </FormSection>
  );
}