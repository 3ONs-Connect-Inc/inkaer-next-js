"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { AdminTable } from "@/components/admin/AdminTable";
import {
  deletePortfolioAndFiles,
  listenToAllPortfolios
} from "@/firebase/admin/portfolioService";
import ConfirmDialog from "@/components/admin/ui/ConfirmDialog";
import GeneralInfoForm from "@/components/admin/portfolios/GeneralInfoForm";
import PdfUploadForm from "@/components/admin/portfolios/PdfUploadForm";
import StepUploadForm from "@/components/admin/portfolios/StepUploadForm";
import VideoUploadForm from "@/components/admin/portfolios/VideoUploadForm";

export default function PortfolioAdminPage() {
  const [portfolios, setPortfolios] = useState<any[]>([]);
  const [selected, setSelected] = useState<any>(null);
  const [showForms, setShowForms] = useState(false);

  const [confirm, setConfirm] = useState<{ open: boolean; id?: string }>({
    open: false,
  });

  useEffect(() => {
    const unsub = listenToAllPortfolios((data) => setPortfolios(data));
    return () => unsub();
  }, []);

  function toggleCreate() {
    if (!showForms) {
      const id = crypto.randomUUID();
      setSelected({ id }); 
      setShowForms(true);
      return;
    }
    setShowForms(false);
  }

  function beginEdit(item: any) {
    setSelected(item);
    setShowForms(true);
  }

  async function confirmDelete() {
    if (!confirm.id) return;

    await deletePortfolioAndFiles(confirm.id);
    setConfirm({ open: false });
  }
  
  return (
    <div className="p-8 max-w-6xl mx-auto space-y-10">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Portfolio Management</h1>

        <Button onClick={toggleCreate}>
          {showForms ? "Hide Forms" : "+ Create Portfolio"}
        </Button>
      </div>

      <AdminTable
        title="All Portfolios"
        data={portfolios}
        columns={[
          { header: "Name", accessor: "name" },
          { header: "Title", accessor: "title" },
          { header: "Email", accessor: "email" },
          { header: "Project", accessor: "projectNumber" },
          {
            header: "Actions",
            render: (item) => (
              <div className="flex gap-2">
                <Button onClick={() => beginEdit(item)}>Edit</Button>

                <Button
                  variant="destructive"
                  onClick={() => setConfirm({ open: true, id: item.id })}
                >
                  Delete
                </Button>
              </div>
            ),
          },
        ]}
      />

      {showForms && selected?.id && (
        <div className="space-y-10 animate-fadeIn">

          <GeneralInfoForm data={selected} onClose={() => setShowForms(false)} />

          <PdfUploadForm portfolioId={selected.id} onClose={() => setShowForms(false)} />
          <StepUploadForm portfolioId={selected.id} onClose={() => setShowForms(false)} />
          <VideoUploadForm portfolioId={selected.id} onClose={() => setShowForms(false)} />

        </div>
      )}

      <ConfirmDialog
        isOpen={confirm.open}
        message="Are you sure you want to delete this portfolio and all associated files?"
        confirmText="Delete"
        onConfirm={confirmDelete}
        onCancel={() => setConfirm({ open: false })}
      />
    </div>
  );
}
