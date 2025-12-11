"use client";

import { Card, CardContent } from "@/components/ui/card";

export default function RequestInterviewSection({
  videoUrl,
}: {
  videoUrl: string;
}) {
  return (
    <section className="mb-12">
      <Card className="bg-gradient-to-r from-blue-50 to-orange-50 border-blue-200">
        <CardContent className="p-8 text-center">
          <h2 className="text-bold-3xl text-foreground mb-4">
            Watch Interview Video
          </h2>

          {videoUrl ? (
            <video
              src={videoUrl}
              controls
              className="w-full max-w-3xl mx-auto rounded-lg shadow-lg"
            />
          ) : (
            <p className="text-muted-foreground">No video uploaded.</p>
          )}
        </CardContent>
      </Card>
    </section>
  );
}
