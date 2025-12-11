"use client";

import { useState } from "react";
import { Eye, Edit3, Trash2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import moment from "moment";
import { AdminTable, type Column } from "@/components/admin/AdminTable";
import type { BlogPost } from "@/types/types";
import ConfirmDialog from "../ui/ConfirmDialog";

export default function BlogPostTable({
  posts,
  onEdit,
  onDeletePost,
}: {
  posts: BlogPost[];
  onEdit: (p: BlogPost) => void;
  onDeletePost: (p: BlogPost) => void;
}) {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const postCols: Column<BlogPost>[] = [
    {
      header: "Image",
      render: (p) =>
        p.image ? (
          <div className="relative h-12 w-12 overflow-hidden rounded-md border">
            <Image
              src={p.image}
              alt={p.title}
              fill
              className="object-cover"
              sizes="48px"
            />
          </div>
        ) : (
          <span className="text-gray-400 text-sm">No image</span>
        ),
      className: "w-[80px]",
    },
    {
      header: "Title",
      accessor: "title",
      className: "w-[200px] max-w-[300px] truncate",
    },
    {
      header: "Author",
      accessor: "author",
      className: "w-[180px] truncate",
    },
    {
      header: "Date",
      render: (p) => moment(p.timestamp).fromNow(),
      className: "w-[180px] truncate",
    },
    {
      header: "Actions",
      render: (p) => (
        <div className="flex gap-3">
          {/* View */}
          <Link
            href={`/blog/${p.id}/${p.slug}`}
            className="text-blue-600 hover:underline flex items-center gap-1"
          >
            <Eye className="w-4 h-4" />
          </Link>

          {/* Edit */}
          <button
            type="button"
            className="text-amber-600 flex items-center gap-1"
            onClick={() => onEdit(p)}
          >
            <Edit3 className="w-4 h-4" />
          </button>

          {/* Delete */}
          <button
            type="button"
            className="text-rose-600 flex items-center gap-1"
            onClick={() => setSelectedPost(p)}
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      ),
    },
  ];

  return (
    <>
      <AdminTable
        title="All Blog Posts"
        data={posts}
        columns={postCols}
        rowKey={(p) => p.id}
      />

      {/* Confirmation Dialog */}
      {selectedPost && (
        <ConfirmDialog
          isOpen={!!selectedPost}
          title="Delete Post"
          message={`Are you sure you want to delete "${selectedPost.title}"?`}
          confirmText="Delete"
          cancelText="Cancel"
          onConfirm={() => {
            onDeletePost(selectedPost);
            setSelectedPost(null);
          }}
          onCancel={() => setSelectedPost(null)}
        />
      )}
    </>
  );
}
