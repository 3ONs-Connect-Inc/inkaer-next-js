"use client";
import type { CareerPost } from "@/types";
import { useState } from "react";
import RichTextEditor from '../../RichTextEditor';
import { ListInput } from "@/components/ui/ListInput";


export default function CareerFields({
  initial,
  submitting,
  onSubmit,
  onCancel,
}: {
  initial?: Partial<CareerPost>;
  submitting?: boolean;
  onSubmit: (
    values: Omit<CareerPost, "id" | "createdAt" | "updatedAt">,
    reset: () => void
  ) => void;
  onCancel?: () => void;
}) {
  const [form, setForm] = useState<
    Omit<CareerPost, "id" | "createdAt" | "updatedAt">
  >({
    title: initial?.title ?? "",
    description: initial?.description ?? "",
    tagline: initial?.tagline ?? "",
    department: initial?.department ?? "",
    location: initial?.location ?? "",
    type: initial?.type ?? "Full-time",
    salary: initial?.salary ?? "",
    fullDescription: initial?.fullDescription ?? "",
    responsibilities: initial?.responsibilities ?? [],
    requirements: initial?.requirements ?? [],
    benefits: initial?.benefits ?? [],
  });

  const reset = () =>
    setForm({
      title: "",
      description: "",
      tagline: "",
      department: "",
      location: "",
      type: "Full-time",
      salary: "",
      fullDescription: "",
      responsibilities: [],
      requirements: [],
      benefits:[],
    });

  return (
    <form
      className="grid grid-cols-1 md:grid-cols-2 gap-6"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(form, reset);
      }}
    >
      {/* Title */}
      <div className="md:col-span-2">
        <label className="block text-sm font-medium">Title</label>
        <input
          className="w-full border rounded-lg px-3 py-2"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          required
        />
      </div>

      {/* Short Description */}
   <div className="md:col-span-2">
  <label className="block text-sm font-medium">Short Description</label>
  <textarea
    className="mt-1 p-2 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 text-sm"
    rows={3}
    value={form.description}
    onChange={(e) => setForm({ ...form, description: e.target.value })}
  />
</div>
<div className="md:col-span-2">
  <label className="block text-sm font-medium">Tagline</label>
  <textarea
    className="mt-1 block p-2 w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 text-sm"
    rows={3}
    value={form.tagline}
    onChange={(e) => setForm({ ...form, tagline: e.target.value })}
  />
</div>


      {/* Full Description */}
      <div className="md:col-span-2">
        <label className="block text-sm font-medium">Full Description</label>
        <RichTextEditor
            
          value={form.fullDescription}
          onChange={(html) =>
            setForm({ ...form, fullDescription: html })
          }
        />
      </div>

      {/* Department */}
      <div>
        <label className="block text-sm font-medium">Department</label>
        <input
          className="w-full border rounded-lg px-3 py-2"
          value={form.department}
          onChange={(e) => setForm({ ...form, department: e.target.value })}
          required
        />
      </div>

      {/* Location */}
      <div>
        <label className="block text-sm font-medium">Location</label>
        <input
          className="w-full border rounded-lg px-3 py-2"
          value={form.location}
          onChange={(e) => setForm({ ...form, location: e.target.value })}
          required
        />
      </div>

      {/* Type */}
      <div>
        <label className="block text-sm font-medium">Type</label>
        <select
          className="w-full border rounded-lg px-3 py-2"
          value={form.type}
          onChange={(e) => setForm({ ...form, type: e.target.value })}
        >
          <option>Full-time</option>
          <option>Part-time</option>
          <option>Contract</option>
          <option>Internship</option>
        </select>
      </div>

      {/* Salary */}
      <div>
        <label className="block text-sm font-medium">Salary (optional)</label>
        <input
          className="w-full border rounded-lg px-3 py-2"
          value={form.salary}
          onChange={(e) => setForm({ ...form, salary: e.target.value })}
        />
      </div>

      {/* Responsibilities */}
      <div className="md:col-span-2">
        <label className="block text-sm font-medium">Responsibilities</label>
      <ListInput
  label="Responsibilities"
  values={form.responsibilities}
  onChange={(values) => setForm({ ...form, responsibilities: values })}
/>
      </div>

      {/* Requirements */}
      <div className="md:col-span-2">
        <label className="block text-sm font-medium">Requirements</label>
   <ListInput
  label="Requirements"
  values={form.requirements}
  onChange={(values) => setForm({ ...form, requirements: values })}
/>
      </div>

      {/* Benefits */}
      <div className="md:col-span-2">
        <label className="block text-sm font-medium">Benefits</label>
       <ListInput
  label="Benefits"
  values={form.benefits}
  onChange={(values) => setForm({ ...form, benefits: values })}
/>
      </div>

      {/* Actions */}
      <div className="md:col-span-2 flex justify-end gap-3">
        <button
          type="reset"
          className="px-4 py-2 rounded-lg border"
          onClick={reset}
        >
          Clear
        </button>
        {onCancel && (
          <button
            type="button"
            className="px-4 py-2 rounded-lg border"
            onClick={onCancel}
          >
            Cancel
          </button>
        )}
        <button
          type="submit"
          disabled={submitting}
          className="px-4 py-2 rounded-lg bg-blue-600 text-white"
        >
          {submitting ? "Saving…" : "Create Post"}
        </button>
      </div>
    </form>
  );
}
