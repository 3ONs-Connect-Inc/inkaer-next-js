"use client";
import { Html, useProgress } from "@react-three/drei";
import Image from "next/image";

export default function Loader() {
  const { progress } = useProgress(); 
  
  return (
    <Html center>
      <div className="flex flex-col items-center justify-center bg-black/50 p-4 rounded-xl">
        <Image
         src="/loader.gif"
          className="w-8 h-8 mb-3"
           alt="loader"
            />
        <p className="text-white font-semibold text-sm">
          Loading {Math.floor(progress)}%
        </p>
      </div>
    </Html>
  );
}
