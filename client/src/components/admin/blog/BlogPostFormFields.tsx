"use client";

import { CATEGORIES, type BlogPost } from "@/types";
import TagSelect from "./TagSelect";
import { useEffect, useState } from "react";
import RichTextEditor from "@/components/RichTextEditor";
import ImageUpload from "../ImageUpload";

interface Props {
  newPost: Omit<BlogPost, "id" | "slug">;
  setNewPost: React.Dispatch<
    React.SetStateAction<Omit<BlogPost, "id" | "slug">>
  >;
  errors: Record<string, string>;
  isUploading: boolean;
  handleImageUpload: (file: File) => void;
}

export default function BlogPostFormFields({
  newPost,
  setNewPost,
  errors,
  isUploading,
  handleImageUpload,
}: Props) {
  const [previewUrl] = useState<string | null>(null);

  // clean up preview object URL when file changes
  useEffect(() => {
    return () => {
      if (previewUrl) URL.revokeObjectURL(previewUrl);
    };
  }, [previewUrl]);

  return (
    <>
      <div className="md:col-span-2">
        <label className="block text-sm font-medium">Title</label>
        <input
          className="w-full border text-slate-900 rounded-lg px-3 py-2"
          value={newPost.title}
          onChange={(e) =>
            setNewPost((prev) => ({ ...prev, title: e.target.value }))
          }
        />
        {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium">Category</label>
        <select
          className="w-full border text-slate-900 rounded-lg px-3 py-2"
          value={newPost.category}
          onChange={(e) =>
            setNewPost((prev) => ({ ...prev, category: e.target.value }))
          }
        >
          {CATEGORIES.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>
        {errors.category && (
          <p className="text-red-500 text-sm">{errors.category}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium">Author</label>
        <input
          className="w-full border text-slate-900 rounded-lg px-3 py-2"
          value={newPost.author}
          onChange={(e) =>
            setNewPost((prev) => ({ ...prev, author: e.target.value }))
          }
        />
        {errors.author && (
          <p className="text-red-500 text-sm">{errors.author}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium">Read Time</label>
        <input
          className="w-full border text-slate-900 rounded-lg px-3 py-2"
          value={newPost.readTime}
          onChange={(e) =>
            setNewPost((prev) => ({ ...prev, readTime: e.target.value }))
          }
        />
        {errors.readTime && (
          <p className="text-red-500 text-sm">{errors.readTime}</p>
        )}
      </div>

      <ImageUpload
        newPost={newPost}
        errors={errors}
        isUploading={isUploading}
        handleImageUpload={handleImageUpload}
      />

      <div className="md:col-span-2">
        <label className="block text-sm font-medium">Tags</label>
        <TagSelect
          value={newPost.tags}
          onChange={(tags) =>
            setNewPost((prev) => ({ ...prev, tags }))
          }
        />
        {errors.tags && <p className="text-red-500 text-sm">{errors.tags}</p>}
      </div>

      <div className="md:col-span-2">
        <label className="block text-sm font-medium">Excerpt</label>
        <textarea
          value={newPost.excerpt}
          onChange={(e) =>
            setNewPost((prev) => ({ ...prev, excerpt: e.target.value }))
          }
          className="mt-1 block w-full p-2 border text-slate-900 rounded-lg shadow-sm"
          rows={4}
        ></textarea>
        {errors.excerpt && (
          <p className="text-red-500 text-sm">{errors.excerpt}</p>
        )}
      </div>

      <div className="md:col-span-2">
        <label className="block text-sm font-medium">Content</label>
        <RichTextEditor
          value={newPost.content}
          onChange={(html) =>
            setNewPost((prev) => ({ ...prev, content: html }))
          }
        />
        {errors.content && (
          <p className="text-red-500 text-sm">{errors.content}</p>
        )}
      </div>
    </>
  );
}
