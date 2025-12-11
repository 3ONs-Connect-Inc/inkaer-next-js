"use client";

import { useState, useEffect } from "react";
import { toast } from "sonner";
import { Card, CardContent } from "@/components/ui/card";
import UploadBlock from "./UploadBlock";
import { Video } from "lucide-react";
import { Button } from "@/components/ui/button";

import { uploadFileToR2 } from "@/utils/actions/r2Upload";
import { updatePortfolio, listenToPortfolio, ensurePortfolioExists, deletePreviousFile } from "@/firebase/admin/portfolioService";

export default function VideoUploadForm({ portfolioId, onClose }: any) {
  const [file, setFile] = useState<File | null>(null);
  const [currentVideo, setCurrentVideo] = useState<string | null>(null);
  const [portfolio, setPortfolio] = useState<any>(null);

  // Real-time listen
  useEffect(() => {
    const unsub = listenToPortfolio(portfolioId, (data) => {
      setPortfolio(data);
      setCurrentVideo(data?.videoUrl || null);
    });

    return () => unsub();
  }, [portfolioId]);


async function submit() {
  if (!file) return toast.error("Select a video first");

  await ensurePortfolioExists(portfolioId);

  // DELETE OLD VIDEO FIRST
  if (portfolio?.videoUrl) {
    await deletePreviousFile(portfolio.videoUrl);
  }

  const videoUrl = await uploadFileToR2(file, () => {});

  await updatePortfolio(portfolioId, {
    videoUrl,
    videoComplete: true,
  });

  toast.success("Video replaced successfully!");
  onClose();
}


  return (
    <Card>
      <CardContent className="space-y-4 p-6">
        <h2 className="text-lg font-semibold">Upload Interview Video</h2>

        <UploadBlock
          label="Video"
          icon={<Video />}
          previewType="video"
          onSelectFile={(f: File) => setFile(f)}
          url={file ? URL.createObjectURL(file) : currentVideo}
        />

        <Button className="w-full" onClick={submit}>
          Upload Video
        </Button>
      </CardContent>
    </Card>
  );
}
