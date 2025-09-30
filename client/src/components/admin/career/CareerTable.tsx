"use client";
import { useState } from "react";
import { Edit3, Trash2 } from "lucide-react";
import { AdminTable, type Column } from "@/components/admin/AdminTable";
import ConfirmDialog from "@/components/admin/ui/ConfirmDialog";
import type { CareerPost } from "@/types";
import { toast } from "sonner";
import CareerFields from "./CareerFields";
import { useCareerPosts, useDeleteCareer, useUpdateCareer } from "@/hooks/main/useCareers";

export default function CareerTable() {
  const { data = [] } = useCareerPosts();
  const { mutateAsync: remove } = useDeleteCareer();
  const { mutateAsync: update } = useUpdateCareer();

  const [selected, setSelected] = useState<CareerPost | null>(null);
  const [editing, setEditing] = useState<CareerPost | null>(null);

  const postCols: Column<CareerPost>[] = [
    { header: "Title", accessor: "title", className: "w-[240px] max-w-[320px] truncate" },
    { header: "Department", accessor: "department", className: "w-[160px] truncate" },
    { header: "Location", accessor: "location", className: "w-[160px]" },
    { header: "Type", accessor: "type", className: "w-[120px]" },
    { header: "Salary", accessor: "salary", className: "w-[140px]" },
    {
      header: "Actions",
      render: (p) => (
        <div className="flex gap-3">
          <button
            className="text-amber-600 flex items-center gap-1"
            onClick={() => setEditing(p)}
          >
            <Edit3 className="w-4 h-4" />
          </button>
          <button
            className="text-rose-600 flex items-center gap-1"
            onClick={() => setSelected(p)}
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="card mb-8">
      <div className="card-header">
        <p className="card-title">All Career Posts</p>
      </div>

      <div className="card-body">
        <AdminTable title="" data={data} columns={postCols} rowKey={(p) => p.id} />
      </div>

      {/* Inline delete confirmation */}
      {selected && (
        <ConfirmDialog
          isOpen={!!selected}
          title="Delete Post"
          message={`Are you sure you want to delete “${selected.title}”?`}
          confirmText="Delete"
          cancelText="Cancel"
          onConfirm={async () => {
            try {
              await remove(selected.id);
              toast.success("Deleted");
            } catch (e: any) {
              toast.error(e?.message ?? "Failed to delete");
            } finally {
              setSelected(null);
            }
          }}
          onCancel={() => setSelected(null)}
        />
      )}

      {/* Inline edit form instead of modal */}
      {editing && (
        <div className="card-body border-t">
          <h3 className="text-lg font-semibold mb-4">Edit Career Post</h3>
          <CareerFields
            initial={editing}
            submitting={false}
            onSubmit={async (values) => {
              try {
                await update({ id: editing.id, data: values });
                toast.success("Updated");
                setEditing(null);
              } catch (e: any) {
                toast.error(e?.message ?? "Failed to update");
              }
            }}
            onCancel={() => setEditing(null)}
          />
        </div>
      )}
    </div>
  );
}
