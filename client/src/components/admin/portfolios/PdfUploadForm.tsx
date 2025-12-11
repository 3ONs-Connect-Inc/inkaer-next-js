"use client";

import { useState, useEffect } from "react";
import { toast } from "sonner";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import UploadBlock from "./UploadBlock";
import { File } from "lucide-react";
import { uploadFileToR2 } from "@/utils/actions/r2Upload";
import {
  updatePortfolio,
  listenToPortfolio,
  ensurePortfolioExists,
  deletePreviousFile,
} from "@/firebase/admin/portfolioService";

export default function PdfUploadForm({ portfolioId, onClose }: any) {
  const [file, setFile] = useState<File | null>(null);
  const [currentPdf, setCurrentPdf] = useState<string | null>(null);
  const [portfolio, setPortfolio] = useState<any>(null);

  useEffect(() => {
    if (!portfolioId) return;
    const unsub = listenToPortfolio(portfolioId, (data) => {
      setPortfolio(data);
      setCurrentPdf(data?.pdfUrl || null);
    });
    return () => unsub();
  }, [portfolioId]);

async function submit() {
  if (!file) return toast.error("Select a PDF first");

  await ensurePortfolioExists(portfolioId);

  // DELETE OLD PDF FIRST
  if (portfolio?.pdfUrl) {
    await deletePreviousFile(portfolio.pdfUrl);
  }

  const pdfUrl = await uploadFileToR2(file, () => {});

  await updatePortfolio(portfolioId, {
    pdfUrl,
    pdfComplete: true,
  });

  toast.success("PDF replaced successfully!");
  onClose();
}


  return (
    <Card>
      <CardContent className="space-y-4 p-6">
        <h2 className="text-lg font-semibold">Upload PDF</h2>

        <UploadBlock
          label="PDF File"
          icon={<File />}
          previewType="pdf"
          onSelectFile={(f: File) => setFile(f)}
          url={file ? URL.createObjectURL(file) : currentPdf}
        />

        <Button className="w-full" onClick={submit}>
          Upload PDF
        </Button>
      </CardContent>
    </Card>
  );
}
