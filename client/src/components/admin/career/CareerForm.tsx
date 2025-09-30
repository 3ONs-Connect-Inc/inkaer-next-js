"use client";
import { Plus } from "lucide-react";
import { useState } from "react";

import { toast } from "sonner";
import CareerFields from "./CareerFields";
import CareerTable from "./CareerTable";
import { useCreateCareer } from "@/hooks/main/useCareers";

export default function CareerForm() {
  const [showForm, setShowForm] = useState(false);
  const { mutateAsync: createCareer, isPending } = useCreateCareer();

  return (
    <div className="card mb-8">
      <div className="card-header flex justify-between">
        <p className="card-title flex items-center gap-2">
          <Plus className="w-4 h-4" /> Career Posts
        </p>
        <button
          type="button"
          onClick={() => setShowForm((s) => !s)}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
        >
          <Plus className="w-4 h-4" />
          {showForm ? "Close Form" : "Add New"}
        </button>
      </div>

      <div className="card-body">
        <CareerTable />
      </div>

      {showForm && (
        <div className="card-body border-t">
          <CareerFields
            onSubmit={async (values, reset) => {
              try {
                await createCareer(values);
                toast.success("Career post created");
                reset();
                setShowForm(false);
              } catch (e: any) {
                toast.error(e?.message ?? "Failed to create");
              }
            }}
            submitting={isPending}
          />
        </div>
      )}
    </div>
  );
}
