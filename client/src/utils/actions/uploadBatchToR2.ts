import { toast } from "sonner";

export async function uploadBatchToR2(
  pdf: File,
  video: File,
  step: File
): Promise<{ pdfUrl: string; videoUrl: string; stepUrl: string }> {

  const toastId = toast.loading("Uploading files… Please wait");

  const formData = new FormData();
  formData.append("pdf", pdf);
  formData.append("video", video);
  formData.append("step", step);

  let res;

  try {
    res = await fetch(
      `${process.env.NEXT_PUBLIC_CLOUDFLARE_WORKER_URL}/uploadBatch`,
      {
        method: "POST",
        body: formData,
      }
    );
  } catch (err) {
    toast.dismiss(toastId);
    toast.error("Upload failed — network error");
    throw err;
  }

  if (!res.ok) {
    toast.dismiss(toastId);
    toast.error("Upload failed");
    throw new Error("Batch upload failed");
  }

  toast.dismiss(toastId);
  toast.success("Files uploaded successfully!");

  return await res.json();
}
