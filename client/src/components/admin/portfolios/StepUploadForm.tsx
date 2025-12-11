"use client";

import { useState, useEffect } from "react";
import { toast } from "sonner";
import { Card, CardContent } from "@/components/ui/card";
import UploadBlock from "./UploadBlock";
import { FileCog } from "lucide-react";
import { Button } from "@/components/ui/button";

import { uploadFileToR2 } from "@/utils/actions/r2Upload";
import { updatePortfolio, listenToPortfolio, ensurePortfolioExists, deletePreviousFile } from "@/firebase/admin/portfolioService";

export default function StepUploadForm({ portfolioId, onClose }: any) {
  const [file, setFile] = useState<File | null>(null);
  const [currentStep, setCurrentStep] = useState<string | null>(null);
  const [portfolio, setPortfolio] = useState<any>(null);

  // 🟢 Real-time listen to this portfolio
  useEffect(() => {
    const unsub = listenToPortfolio(portfolioId, (data) => {
      setPortfolio(data);
      setCurrentStep(data?.stepUrl || null);
    });

    return () => unsub();
  }, [portfolioId]);



async function submit() {
  if (!file) return toast.error("Select a Step file first");

  await ensurePortfolioExists(portfolioId);

  // DELETE OLD STEP FILE if exists
  if (portfolio?.stepUrl) {
    await deletePreviousFile(portfolio.stepUrl);
  }

  // UPLOAD NEW FILE
  const stepUrl = await uploadFileToR2(file, () => {});

  await updatePortfolio(portfolioId, {
    stepUrl,
    stepComplete: true,
  });

  toast.success("STEP file replaced successfully!");
  onClose();
}



  return (
    <Card>
      <CardContent className="space-y-4 p-6">
        <h2 className="text-lg font-semibold">Upload STEP File</h2>

        <UploadBlock
          label="STEP File"
          icon={<FileCog />}
          previewType="step"
          onSelectFile={(f: File) => setFile(f)}
          url={file ? file.name : currentStep}
        />

        <Button className="w-full" onClick={submit}>
          Upload STEP File
        </Button>
      </CardContent>
    </Card>
  );
}
