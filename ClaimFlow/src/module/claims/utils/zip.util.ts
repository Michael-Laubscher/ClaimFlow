import JSZip from "jszip";

export const generateClaimZip = async (
  data: any,
  files: File[]
): Promise<Blob> => {
  const zip = new JSZip();

  // Add JSON data
  zip.file("claim.json", JSON.stringify(data, null, 2));

  // Add files
  const folder = zip.folder("attachments");

  files.forEach((file) => {
    folder?.file(file.name, file);
  });

  return zip.generateAsync({ type: "blob" });
};