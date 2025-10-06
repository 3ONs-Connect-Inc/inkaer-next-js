"use client";
import React, { useState } from "react";
import { format } from "date-fns";
import { Eye, Trash2 } from "lucide-react";
import { AdminTable, type Column } from "@/components/admin/AdminTable";
import { db } from "@/firebase/config";
import { doc, deleteDoc } from "firebase/firestore";
import { toast } from "sonner";
import Modal from "@/components/admin/ui/Modal";
import ConfirmDialog from "@/components/admin/ui/ConfirmDialog";
import { Application, useApplications } from "@/hooks/admin/useApplications";
import { deleteFileFromR2 } from "@/utils/actions/r2Delete";


const CareerList: React.FC = () => {
  const { data = [], isLoading, isError } = useApplications();
  const [selectedApp, setSelectedApp] = useState<Application | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [appToDelete, setAppToDelete] = useState<Application | null>(null);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);

  const handleView = (app: Application) => {
    setSelectedApp(app);
    setIsModalOpen(true);
  };

  const confirmDelete = (app: Application) => {
    setAppToDelete(app);
    setIsConfirmOpen(true);
  };

  const handleDelete = async () => {
    if (!appToDelete) return;
    try {
      // 1. Delete file from R2
      if (appToDelete.resumeUrl) {
        await deleteFileFromR2(appToDelete.resumeUrl);
      }

      // 2. Delete Firestore document
      await deleteDoc(doc(db, "applications", appToDelete.id));

      toast.success("Application deleted successfully");
    } catch (err: any) {
      console.error("Delete failed:", err);
      toast.error(err.message || "Failed to delete application");
    } finally {
      setIsConfirmOpen(false);
      setAppToDelete(null);
    }
  };

  const columns: Column<Application>[] = [
    { header: "First Name", accessor: "firstName", className: "w-[200px] truncate" },
    { header: "Last Name", accessor: "lastName", className: "w-[200px] truncate" },
    { header: "Email", accessor: "email", className: "w-[200px] truncate" },
    { header: "Phone", accessor: "phone", className: "w-[200px] truncate" },
    {
      header: "Resume",
      className: "w-[180px] truncate",
      render: (app) => (
        <a
          href={app.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          View
        </a>
      ),
    },
    {
      header: "Applied On",
      className: "w-[200px] truncate",
      render: (app) => (app.createdAt ? format(app.createdAt, "PPpp") : "—"),
    },
    {
      header: "Actions",
      className: "w-[120px] text-center",
      render: (app) => (
        <div className="flex gap-3 justify-center">
          <button
            onClick={() => handleView(app)}
            className="text-blue-600 hover:text-blue-800"
            title="View"
          >
            <Eye size={18} />
          </button>
          <button
            onClick={() => confirmDelete(app)}
            className="text-red-600 hover:text-red-800"
            title="Delete"
          >
            <Trash2 size={18} />
          </button>
        </div>
      ),
    },
  ];

  if (isLoading) return <p>Loading applications...</p>;
  if (isError) return <p className="text-red-500">Failed to load applications.</p>;

  return (
    <div className="p-6">
      <AdminTable
        title="Job Applications"
        data={data}
        columns={columns}
        rowKey={(app) => app.id}
      />

      {/* Modal for viewing full details */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Application Details"
      >
        {selectedApp && (
          <div className="space-y-2">
            <p><strong>First Name:</strong> {selectedApp.firstName}</p>
            <p><strong>Last Name:</strong> {selectedApp.lastName}</p>
            <p><strong>Email:</strong> {selectedApp.email}</p>
            <p><strong>Phone:</strong> {selectedApp.phone || "—"}</p>
            <p><strong>Cover Letter:</strong></p>
            <div className="p-2 border rounded bg-gray-50 whitespace-pre-line">
              {selectedApp.coverLetter || "No cover letter provided"}
            </div>
            <p>
              <strong>Resume:</strong>{" "}
              <a
                href={selectedApp.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                Download
              </a>
            </p>
            <p><strong>Applied On:</strong> {selectedApp.createdAt ? format(selectedApp.createdAt, "PPpp") : "—"}</p>
          </div>
        )}
      </Modal>

      {/* Confirm delete dialog */}
      <ConfirmDialog
        isOpen={isConfirmOpen}
        title="Delete Application"
        message={`Are you sure you want to delete application from ${appToDelete?.firstName} ${appToDelete?.lastName}?`}
        confirmText="Delete"
        cancelText="Cancel"
        onConfirm={handleDelete}
        onCancel={() => {
          setIsConfirmOpen(false);
          setAppToDelete(null);
        }}
      />
    </div>
  );
};

export default CareerList;
