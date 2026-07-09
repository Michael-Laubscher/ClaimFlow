import { useRef, useEffect, useCallback, useState, useMemo } from "react";
import { useController, useFormContext } from "react-hook-form";
import axios from "axios";
import { FileText, UploadCloud, X } from "lucide-react";

import { FormSection } from "@/shared/components/design-system/forms/FormSection";
import { FormError } from "@/shared/components/forms/components/FormError";

import type { ClaimEvidenceData } from "../../schemas/claim-evidence.schema";

type Attachment = {
  id: string;
  file: File;
  previewUrl?: string;
  status: "pending" | "uploading" | "success" | "error";
  progress: number;
  error?: string;
  serverUrl?: string;
};

export function AttachmentsSection() {
  const {
    control,
    formState: { errors },
  } = useFormContext<ClaimEvidenceData>();

  const inputRef = useRef<HTMLInputElement>(null);

  const [isDragging, setIsDragging] = useState(false);
  const dragCounter = useRef(0);

  const {
    field: { value = [], onChange },
  } = useController({
    name: "attachments",
    control,
    defaultValue: [],
  });

  const attachments = useMemo<Attachment[]>(() => (Array.isArray(value) ? value : []), [value]);

  const MAX_SIZE = 10 * 1024 * 1024;

  const isValidFile = (file: File) => {
    if (!file || typeof file.type !== "string") return "Invalid file";

    if (!["image/jpeg", "image/png", "application/pdf"].includes(file.type)) {
      return "Unsupported file type";
    }

    if (file.size > MAX_SIZE) {
      return "File exceeds 10MB limit";
    }

    return null;
  };

  const updateAttachment = useCallback(
    (id: string, patch: Partial<Attachment>) => {
      const next = attachments.map((f) => (f.id === id ? { ...f, ...patch } : f));
      onChange(next);
    },
    [attachments, onChange]
  );

  const uploadFile = async (attachment: Attachment, onProgress: (id: string, p: number) => void) => {
    const formData = new FormData();
    formData.append("file", attachment.file);

    const res = await axios.post("/api/claims/upload", formData, {
      onUploadProgress: (e) => {
        const progress = Math.round((e.loaded * 100) / (e.total || 1));

        onProgress(attachment.id, progress);
      },
    });

    return res.data.url;
  };

  const uploadAll = useCallback(async () => {
    const snapshot = [...attachments];

    for (const item of snapshot) {
      if (item.status !== "pending") continue;

      updateAttachment(item.id, {
        status: "uploading",
        progress: 0,
      });

      try {
        const url = await uploadFile(item, (id, progress) => {
          updateAttachment(id, { progress });
        });

        updateAttachment(item.id, {
          status: "success",
          progress: 100,
          serverUrl: url,
        });
      } catch {
        updateAttachment(item.id, {
          status: "error",
          error: "Upload failed",
        });
      }
    }
  }, [attachments, updateAttachment]);

  const handleFiles = (files: FileList | null) => {
    if (!files) return;

    const mapped: Attachment[] = Array.from(files).map((file) => {
      const error = isValidFile(file);

      return {
        id: crypto.randomUUID(),
        file,
        previewUrl: file.type.startsWith("image/") ? URL.createObjectURL(file) : undefined,
        status: error ? "error" : "pending",
        progress: 0,
        error: error || undefined,
      };
    });

    onChange([...attachments, ...mapped]);
  };

  const remove = (id: string) => {
    const item = attachments.find((a) => a.id === id);

    if (item?.previewUrl) {
      URL.revokeObjectURL(item.previewUrl);
    }

    onChange(attachments.filter((a) => a.id !== id));
  };

  // ✅ Stable drag handlers
  const handleDragEnter = (e: React.DragEvent) => {
    e.preventDefault();
    dragCounter.current += 1;
    setIsDragging(true);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();

    dragCounter.current -= 1;

    if (dragCounter.current <= 0) {
      setIsDragging(false);
      dragCounter.current = 0;
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    dragCounter.current = 0;
    setIsDragging(false);

    handleFiles(e.dataTransfer.files);
  };

  useEffect(() => {
    return () => {
      attachments.forEach((a) => {
        if (a.previewUrl) URL.revokeObjectURL(a.previewUrl);
      });
    };
  }, [attachments]);

  return (
    <FormSection title="Supporting Documents" description="Upload images, receipts, invoices or PDF evidence related to your claim.">
      <div className="space-y-6">
        {/* ✅ BIG DROPZONE */}
        <div
          onClick={() => inputRef.current?.click()}
          onDragEnter={handleDragEnter}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={`relative flex w-full min-h-[220px] cursor-pointer flex-col items-center justify-center rounded-3xl border-2 border-dashed px-6 py-12 transition
            ${isDragging ? "border-green-500 bg-green-50" : "border-slate-300 bg-slate-50 hover:border-green-500 hover:bg-green-50/40"}`}
        >
          {isDragging && <div className="absolute inset-0 flex items-center justify-center rounded-3xl bg-green-50/80 text-green-700 font-semibold text-lg">Drop files here</div>}

          <UploadCloud className="mb-4 h-10 w-10 text-green-600" />

          <p className="text-base font-semibold text-slate-800">Drag & drop files here or click to upload</p>

          <p className="mt-2 text-sm text-slate-500">PNG, JPG or PDF up to 10MB</p>

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
        </div>

        {attachments.length > 0 && (
          <button type="button" onClick={uploadAll} className="rounded-xl bg-green-600 px-4 py-2 text-white text-sm hover:bg-green-700">
            Upload All
          </button>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {attachments.map((item) => {
            const mime = item.file?.type ?? "";
            const isImage = mime.startsWith("image/");
            const isPdf = mime === "application/pdf";

            return (
              <div key={item.id} className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-4 shadow-sm h-full">
                {/* top section */}
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <button type="button" onClick={() => remove(item.id)} className="ml-auto text-slate-400 hover:text-red-600">
                      <X />
                    </button>
                  </div>

                  <div className="flex items-center gap-3">
                    {isImage && item.previewUrl ? (
                      <img src={item.previewUrl} className="h-12 w-12 rounded-lg object-cover" alt={item.file.name} />
                    ) : isPdf ? (
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg border bg-white">
                        <FileText className="h-5 w-5 text-slate-500" />
                      </div>
                    ) : (
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-100">
                        <FileText className="h-5 w-5 text-slate-500" />
                      </div>
                    )}

                    <div className="min-w-0">
                      <p className="text-sm font-medium truncate">{item.file.name}</p>
                      <p className="text-xs text-slate-500">{(item.file.size / 1024 / 1024).toFixed(2)} MB</p>
                    </div>
                  </div>

                  <p className="text-xs">
                    {item.status === "pending" && "Ready"}
                    {item.status === "uploading" && "Uploading..."}
                    {item.status === "success" && <span className="text-green-600">Uploaded</span>}
                    {item.status === "error" && <span className="text-red-600">{item.error}</span>}
                  </p>
                </div>

                {/* progress */}
                {item.status === "uploading" && (
                  <div className="mt-4 h-2 w-full rounded bg-slate-100">
                    <div className="h-2 rounded bg-green-500" style={{ width: `${item.progress}%` }} />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {errors.attachments?.message && <FormError message={String(errors.attachments.message)} />}
      </div>
    </FormSection>
  );
}
