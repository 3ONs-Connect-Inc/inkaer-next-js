"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { useThree } from "@react-three/fiber";
import { OrbitControls as DreiOrbitControls } from "three-stdlib";
import { LoadStep } from "@/lib/stepLoaderView";

type Props = {
  stepUrl: string;
  onLoad?: (model: THREE.Object3D) => void;
};

export default function StepModel({ stepUrl, onLoad }: Props) {
  const [model, setModel] = useState<THREE.Object3D | null>(null);
  const groupRef = useRef<THREE.Group>(null);
  const { camera, scene, controls } = useThree();

  useEffect(() => {
    let disposed = false; 
    let loadedModel: THREE.Object3D | null = null;

    async function loadModel() {
      try {
        if (!stepUrl) return;

        // Convert data URL → Blob → URL
        let srcUrl = stepUrl;
        if (stepUrl.startsWith("data:")) {
          const base64 = stepUrl.split(",")[1];
          const binary = atob(base64);
          const byteArray = new Uint8Array(binary.length);

          for (let i = 0; i < binary.length; i++) {
            byteArray[i] = binary.charCodeAt(i);
          }

          const blob = new Blob([byteArray], { type: "application/step" });
          srcUrl = URL.createObjectURL(blob);
        }

        // Load STEP → THREE.Object3D
        const object = await LoadStep(srcUrl);
        if (disposed) return;

        loadedModel = object;

        // CENTER + SCALE MODEL
        const box = new THREE.Box3().setFromObject(object);
        const center = box.getCenter(new THREE.Vector3());
        const size = box.getSize(new THREE.Vector3());
        object.position.sub(center);

        // CAMERA FIT LOGIC
        const maxDim = Math.max(size.x, size.y, size.z);
        const distance = maxDim * 2.2;

        camera.position.set(distance, distance, distance);
        camera.near = 0.1;
        camera.far = distance * 10;
        camera.lookAt(0, 0, 0);
        camera.updateProjectionMatrix();

        // ORBIT CONTROLS UPDATE
        if (controls && (controls as DreiOrbitControls).target) {
          const orbit = controls as DreiOrbitControls;
          orbit.target.set(0, 0, 0);
          orbit.update();
        }

        // React state update
        setModel(object);

        // VERY IMPORTANT → fire onLoad AFTER it is mounted
        onLoad?.(object);
      } catch (err) {
        console.error("STEP model load error:", err);
      }
    }

    loadModel();

    return () => {
      disposed = true;

      if (loadedModel) {
        scene.remove(loadedModel);

        loadedModel.traverse((child: any) => {
          if (child.geometry) child.geometry.dispose();
          if (child.material) {
            if (Array.isArray(child.material)) {
              child.material.forEach((m:any) => m.dispose());
            } else {
              child.material.dispose();
            }
          }
        });
      }
    };
  }, [stepUrl, scene, camera, controls, onLoad]);


  // Suspense requires null when "not ready"
  if (!model) return null;

  return (
    <group ref={groupRef}>
      <primitive object={model} />
    </group>
  );
}
