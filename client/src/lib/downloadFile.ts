export async function downloadFile(
  url: string,
  fallbackName = "file"
) {
  if (!url) return;

  try {
    // Case 1: Data URL (base64)
    if (url.startsWith("data:")) {
      const a = document.createElement("a");
      a.href = url;
      a.download = fallbackName;
      a.click();
      return;
    }

    // Case 2: Extract filename from URL if present
    const cleanName =
      url.split("/").pop()?.split("?")[0] || fallbackName;

    // Fetch file
    const res = await fetch(url);
    if (!res.ok) throw new Error("File download failed");

    const blob = await res.blob();
    const blobUrl = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = blobUrl;
    a.download = cleanName;
    a.click();

    setTimeout(() => URL.revokeObjectURL(blobUrl), 5000);
  } catch (err) {
    console.error("Download error:", err);
  }
}
