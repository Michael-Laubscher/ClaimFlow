import JSZip from "jszip";

export async function generateClaimZip(
  data: any,
  attachments: Array<File | { file: File }>
): Promise<Blob> {
  const zip = new JSZip();

  // Save form data
  zip.file("claim.json", JSON.stringify(data, null, 2));

  // Add attachments safely
  attachments.forEach((item, index) => {
    const file = item instanceof File ? item : item?.file;

    if (!file || !(file instanceof File)) {
      console.warn("Skipping invalid attachment at index:", index, item);
      return;
    }

    const safeName = file.name || `file-${index}`;
    zip.file(`attachments/${safeName}`, file);
  });

  return zip.generateAsync({ type: "blob" });
}