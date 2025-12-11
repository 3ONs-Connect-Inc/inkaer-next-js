"use client";

export default function UploadBlock({ label, icon, previewType, url, onSelectFile }: any) {
  return (
    <div className="space-y-3">
      <label className="font-medium flex items-center gap-2">
        {icon} {label}
      </label>

      <input
        type="file"
        className="hidden"
        id={label}
        onChange={(e) => onSelectFile(e.target.files![0])}
      />

      <label
        htmlFor={label}
        className="cursor-pointer bg-blue-600 text-white px-4 py-2 rounded-md inline-flex items-center gap-2"
      >
        Upload File
      </label>

      {url && (
        <div className="mt-2 border p-3 rounded-md bg-white shadow-sm">
          {previewType === "video" && <video src={url} controls />}
          {previewType === "pdf" && <iframe src={url} className="w-full h-64" />}
          {previewType === "step" && <p>STEP file selected</p>}
        </div>
      )}
    </div>
  );
}
