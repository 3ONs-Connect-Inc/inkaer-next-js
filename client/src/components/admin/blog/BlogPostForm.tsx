"use client";
import { useState } from "react";
import { Plus } from "lucide-react";
import { CATEGORIES, generateSlug, type BlogPost } from "@/types";
import { deleteFileFromR2 } from "@/utils/actions/r2Delete";
import { uploadFileToR2 } from "@/utils/actions/r2Upload";
import { updateBlogPost } from "@/firebase/main/blogService";
import BlogPostTable from "./BlogPostTable";
import BlogPostFormFields from "./BlogPostFormFields";
import { BlogPostSchema } from "@/schemas/BlogPostSchema";


export default function BlogPostForm({  
  posts,
  onAddPost,
  onDeletePost,
}: {
  posts: BlogPost[];
  onAddPost: (p: BlogPost) => void;
  onDeletePost: (p: BlogPost) => void;
}) {
  const [showForm, setShowForm] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);

  // local file object (not uploaded yet)
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const [newPost, setNewPost] = useState<Omit<BlogPost, "id" | "slug">>({
    title: "",
    category: CATEGORIES[0],
    tags: "",
    excerpt: "",
    content: "",
    author: "",
    //readTime: "5 min read",
    image: "", // will be filled after upload
    timestamp: Date.now(),
  });

  const resetForm = () => {
    setNewPost({
      title: "",
      category: CATEGORIES[0],
      tags: "",
      excerpt: "",
      content: "",
      author: "",
     // readTime: "5 min read",
      image: "",
      timestamp: Date.now(),
    });
    setEditingPost(null);
    setErrors({});
    setSelectedFile(null);
  };


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});


    const validation = BlogPostSchema.safeParse(newPost);
    if (!validation.success) {
      const fieldErrors: Record<string, string> = {};
     validation.error.issues.forEach((issue) => {
  const field = issue.path[0] as string;
  fieldErrors[field] = issue.message;
});

      setErrors(fieldErrors);
      return;
    }

    let imageUrl = newPost.image;

    // upload file *only now* if selected
    if (selectedFile) {
      if (editingPost?.image) {
        await deleteFileFromR2(editingPost.image);
      }
      imageUrl = await uploadFileToR2(selectedFile, setIsUploading);
    }

    if (editingPost) {
      await updateBlogPost(editingPost.id, {
        ...newPost,
        image: imageUrl,
        slug: generateSlug(newPost.title || editingPost.id),
        timestamp: Date.now(),
      });
    } else {
      const id = Date.now().toString();
      const slug = generateSlug(newPost.title || id);

      const post: BlogPost = {
        id,
        slug,
        ...newPost,
        image: imageUrl,
        timestamp: Date.now(),
      };
      onAddPost(post);
    }

    resetForm();
    setShowForm(false);
  };

  // just store the file, don’t upload
  const handleImageSelect = (file: File) => {
    setSelectedFile(file);
    setNewPost({ ...newPost, image: "" }); // clear until uploaded
  };

  return (
    <div className="card mb-8">
      <div className="card-header flex justify-between">
        <p className="card-title flex items-center gap-2">
          <Plus className="w-4 h-4" /> Blog Posts
        </p>
        <button
          type="button"
          onClick={() => {
            resetForm();
            setShowForm(!showForm);
          }}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
        >
          <Plus className="w-4 h-4" />
          {showForm ? "Close Form" : "Add New"}
        </button>
      </div>

      <div className="card-body">
        <BlogPostTable
          posts={posts}
          onEdit={(post) => {
            setEditingPost(post);
            setNewPost({ ...post });
            setShowForm(true);
          }}
          onDeletePost={onDeletePost}
        />
      </div>

      {showForm && (
        <div className="card-body">
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <BlogPostFormFields
              newPost={newPost}
              setNewPost={setNewPost}
              errors={errors}
              isUploading={isUploading}
              handleImageUpload={handleImageSelect} // <- store file only
            />

            <div className="md:col-span-2 flex justify-end gap-3">
              <button
                type="reset"
                className="px-4 py-2 rounded-lg border"
                onClick={resetForm}
              >
                Clear
              </button>
              <button
                type="submit"
                className="px-4 py-2 rounded-lg bg-blue-600 text-white"
              >
                {editingPost ? "Update Post" : "Add Post"}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
