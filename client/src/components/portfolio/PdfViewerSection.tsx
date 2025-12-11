"use client";

import { Download, FileText } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { downloadFile } from "@/lib/downloadFile";

export default function PdfViewerSection({ pdfUrl }: { pdfUrl: string }) {
  
  const handleDownload = () => {
    if (pdfUrl) downloadFile(pdfUrl, "document.pdf");
  };

  return (
    <section className="mb-12">
      {/* Header */}
      <div className="flex flex-col sm:flex-row gap-6 items-center justify-between mb-6">
        <h2 className="text-bold-3xl">Portfolio Document (PDF)</h2>

        <Button variant="outline" onClick={handleDownload} disabled={!pdfUrl}>
          <Download className="w-4 h-4 mr-2" /> Download PDF
        </Button>
      </div>

      {/* Viewer */}
      <Card>
        <CardContent className="p-6">
          {pdfUrl ? (
            <iframe
              src={pdfUrl}
              className="w-full h-[600px] rounded-lg border"
            />
          ) : (
            <div className="bg-muted rounded-lg border-2 border-dashed h-96 flex items-center justify-center">
              <div className="text-center">
                <FileText className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">PDF Viewer</h3>
                <p className="text-muted-foreground">
                  PDF will appear here once uploaded.
                </p>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </section>
  );
}
