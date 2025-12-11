"use client";

import { Suspense, useEffect, useState, useCallback } from "react";
import { Download } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Center, ContactShadows } from "@react-three/drei";

import { EmptyViewerPlaceholder } from "./EmptyViewerPlaceholder";
import StepModel from "./StepModel";
import { CameraLight, FillLights } from "./Settings";
import Loader from "./Loader";
import { downloadFile } from "@/lib/downloadFile";

export default function ModelViewerSection({ stepUrl }: { stepUrl: string }) {
  const [ready, setReady] = useState(false);

  // Reset loader on URL change
  useEffect(() => {
    setReady(false);
  }, [stepUrl]);

  // Clean download handler
  const handleDownload = useCallback(() => {
    if (stepUrl) downloadFile(stepUrl, "model.step");
  }, [stepUrl]);

  return (
    <section className="mb-12">
      {/* Header */}
      <div className="flex flex-col sm:flex-row gap-6 items-center justify-between mb-6">
        <h2 className="text-bold-3xl">3D Model Viewer</h2>

        <Button variant="outline" onClick={handleDownload} disabled={!stepUrl}>
          <Download className="w-4 h-4 mr-2" /> Download STEP
        </Button>
      </div>

      {/* Viewer Container */}
      <Card>
        <CardContent className="p-6 h-[600px] relative">
          {!stepUrl ? (
            <EmptyViewerPlaceholder />
          ) : (
            <Canvas camera={{ position: [3, 3, 3], fov: 45 }} shadows>
              <Suspense fallback={<Loader />}>
                <OrbitControls 
                makeDefault enableDamping dampingFactor={0.1}
                  enabled={ready}
                />

                <CameraLight />
                <FillLights />

                <Center>
                  <StepModel stepUrl={stepUrl} onLoad={() => setReady(true)} />
                </Center>

                <ContactShadows
                  position={[0, -0.8, 0]}
                  opacity={0.5}
                  scale={10}
                  blur={1.5}
                  far={10}
                />
              </Suspense>
            </Canvas>
          )}
        </CardContent>
      </Card>
    </section>
  );
}
