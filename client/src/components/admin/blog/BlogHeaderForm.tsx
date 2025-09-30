"use client";
import { useState } from "react";
import { Settings, Plus } from "lucide-react";
import { AdminTable, type Column } from "@/components/admin/AdminTable";
import type { BlogHeader } from "@/types";

export default function BlogHeaderForm({
  header,
  setHeader,
  onSave,
}: {
  header: BlogHeader;
  setHeader: (h: BlogHeader) => void;
  onSave: (h: BlogHeader) => Promise<void>; // change type
}) {
  const [headerDraft, setHeaderDraft] = useState<BlogHeader>(header);
  const [showForm, setShowForm] = useState(false);

  type HeaderRow = BlogHeader;
  const headerCols: Column<HeaderRow>[] = [
    { header: "Hero Title", accessor: "heroTitle", className: "w-[180px] truncate" },
    { header: "Hero Subtitle", accessor: "heroSubtitle", className: "w-[200px] max-w-[300px]  truncate" },
    { header: "Footer Title", accessor: "footerTitle", className: "w-[180px]" },
    { header: "Footer Subtitle", accessor: "footerSubtitle", className: "w-[200px] max-w-[300px]  truncate" },
  ];

  return (
    <div className="card mb-8">
      <div className="card-header flex items-center justify-between">
        <p className="card-title flex items-center gap-2">
          <Settings className="w-4 h-4" /> Header / Sections
        </p>
        <button
          type="button"
          onClick={() => setShowForm(!showForm)}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
        >
          <Plus className="w-4 h-4" />
          {showForm ? "Close Form" : "Edit Header"}
        </button>
      </div>

      {/* AdminTable always visible */}
      <div className="card-body">
        <AdminTable title="Blog Header" data={[header]} columns={headerCols} />
      </div>

      {/* Collapsible Form */}
      {showForm && (
        <div className="card-body border-t pt-6">
          <form
            onSubmit={async (e) => {
              e.preventDefault();
                  await onSave(headerDraft); 
              setHeader(headerDraft);
              setShowForm(false);
            }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >

            <div className="md:col-span-2">
              <label className="block text-sm font-medium">Hero Title</label>
              <input
                className="w-full border text-slate-900 transition-colors  rounded-lg px-3 py-2"
                value={headerDraft.heroTitle}
                onChange={(e) =>
                  setHeaderDraft({ ...headerDraft, heroTitle: e.target.value })
                }
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium">Hero Subtitle</label>
              <textarea
                className="w-full border text-slate-900  rounded-lg px-3 py-2"
                rows={2}
                value={headerDraft.heroSubtitle}
                onChange={(e) =>
                  setHeaderDraft({ ...headerDraft, heroSubtitle: e.target.value })
                }
              />
            </div>
        <div className="md:col-span-2">
              <label className="block text-sm font-medium">Footer Title</label>
              <input
                className="w-full text-slate-900  border rounded-lg px-3 py-2"
                value={headerDraft.footerTitle}
                onChange={(e) =>
                  setHeaderDraft({ ...headerDraft, footerTitle: e.target.value })
                }
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium">Footer Subtitle</label>
              <textarea
                className="w-full border text-slate-900  rounded-lg px-3 py-2"
                rows={2}
                value={headerDraft.footerSubtitle}
                onChange={(e) =>
                  setHeaderDraft({ ...headerDraft, footerSubtitle: e.target.value })
                }
              />
            </div>
            <div className="md:col-span-2 flex justify-end gap-3">
              <button
                type="button"
                className="px-4 py-2 rounded-lg border"
                onClick={() => setHeaderDraft(header)}
              >
                Reset
              </button>
              <button
                type="submit"
                className="px-4 py-2 rounded-lg bg-blue-600 text-white"
              >
                Save Header
              </button>
            </div>
          </form>  
        </div>
      )}
    </div>
  );
}
