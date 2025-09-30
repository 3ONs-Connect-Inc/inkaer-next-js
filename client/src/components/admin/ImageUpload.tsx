"use client";

import { useState } from "react";
import Image from "next/image";

interface ImageUploadProps {
  newPost: { image: string };
  errors: Record<string, string>;
  isUploading: boolean;
  handleImageUpload: (file: File) => void;
}

export default function ImageUpload({
  newPost,
  errors,
  isUploading,
  handleImageUpload,
}: ImageUploadProps) {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  return (
    <div className="md:col-span-2">
      <label className="block text-sm font-medium">Image</label>

      <div className="flex items-center gap-3">
        <input
          type="file"
          accept="image/*"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) {
              handleImageUpload(file); // pass file to parent
              const url = URL.createObjectURL(file);
              setPreviewUrl(url);
            }
          }}
        />

        {isUploading && (
          <span className="text-sm text-gray-500">Uploading...</span>
        )}

        {(previewUrl || newPost.image) && (
          <div className="relative w-16 h-16">
            <Image
              src={previewUrl || newPost.image}
              alt="Preview"
              fill
              className="rounded-md object-cover"
            />
          </div>
        )}
      </div>

      {errors.image && <p className="text-red-500 text-sm">{errors.image}</p>}
    </div>
  );
}
