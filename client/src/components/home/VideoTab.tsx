"use client";
import  { useEffect, useRef, useState } from "react";
import { Play } from "lucide-react";
import Image from "next/image";

export function VideoTab() {
  const captureTime = 8; 
const [poster, setPoster] = useState<string | null>(null); 
  const [isPlaying, setIsPlaying] = useState(false);
const [hasStarted, setHasStarted] = useState(false);

  const hiddenVideoRef = useRef<HTMLVideoElement | null>(null);
  const visibleVideoRef = useRef<HTMLVideoElement | null>(null);
  const programmaticPlayRef = useRef(false);

  // helper: wait for metadata then seek and wait for seeked
  const seekTo = (video: HTMLVideoElement, time: number) =>
    new Promise<void>((resolve) => {
      if (!video) return resolve();

      const ensureMeta = () => {
        if (!isNaN(video.duration) && video.duration > 0) {
          doSeek();
        } else {
          const onMeta = () => {
            video.removeEventListener("loadedmetadata", onMeta);
            doSeek();
          };
          video.addEventListener("loadedmetadata", onMeta);
        }
      };

      const doSeek = () => {
        const onSeeked = () => {
          video.removeEventListener("seeked", onSeeked);
          resolve();
        };
        video.addEventListener("seeked", onSeeked);

        try {
          video.currentTime = Math.min(time, Math.max(0, video.duration || time));
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (e) {
          // some browsers might throw — resolve anyway after short timeout
          video.removeEventListener("seeked", onSeeked);
          setTimeout(resolve, 300);
        }

        // safety timeout in case "seeked" never fires
        setTimeout(() => {
          video.removeEventListener("seeked", onSeeked);
          resolve();
        }, 1500);
      };

      ensureMeta();
    });

  //  Load poster from localStorage only on the client
  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("videoPoster");
      if (stored) setPoster(stored);
    }
  }, []);
  
  // generate poster (uses hidden video)
  useEffect(() => {
    if (poster) return; // already generated

    const video = hiddenVideoRef.current;
    if (!video) return;

    const generatePosterFromHidden = async () => {
      // wait for metadata then seek to captureTime
      await seekTo(video, captureTime);

      // draw current frame
      const canvas = document.createElement("canvas");
      canvas.width = video.videoWidth || 640;
      canvas.height = video.videoHeight || 360;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      const dataUrl = canvas.toDataURL("image/jpeg", 0.85);

      setPoster(dataUrl);
      localStorage.setItem("videoPoster", dataUrl);
    };

    // ensure the hidden video is loaded
    video.load();

    // try to play briefly (some browsers require decoding)
    video
      .play()
      .then(() => {
        video.pause();
        generatePosterFromHidden();
      })
      .catch(() => {
        // if autoplay blocked, still try to generate after metadata/seek
        generatePosterFromHidden();
      });
  }, [poster, captureTime]);

  // handlers for visible video
  const handleMouseEnter = async () => {
    const v = visibleVideoRef.current;
    if (!v) return;

    // ensure we start from 0 on hover-in
    await seekTo(v, 0);
    programmaticPlayRef.current = true;
    v.play().catch(() => {
      /* ignore autoplay-block errors */
    });
  };

  const handleMouseLeave = async () => {
    const v = visibleVideoRef.current;
    if (!v) return;

    v.pause();
    setIsPlaying(false);

    // snap back to poster/capture time
    await seekTo(v, captureTime);

    // ensure poster image is visible (we also overlay <img> so not strictly necessary)
    if (poster) {
      v.setAttribute("poster", poster);
    }
  };

  const handlePlay = async () => {
    const v = visibleVideoRef.current;
    if (!v) return;

    // if this play was triggered programmatically from hover, don't reset again
    if (programmaticPlayRef.current) {
      programmaticPlayRef.current = false;
      setIsPlaying(true);
      return;
    }

    if (!hasStarted) {
    // first user-initiated play → reset to 0
    await seekTo(v, 0);
    setHasStarted(true);
  }

  v.play().catch(() => {});
  setIsPlaying(true);
};

  const handlePause = () => {
    setIsPlaying(false);
  };

  
  const handleEnded = async () => {
  const v = visibleVideoRef.current;
  if (!v) return;

  setIsPlaying(false);
  setHasStarted(false); // reset state so next play goes from 0 again

  await seekTo(v, captureTime);
  v.pause();
  if (poster) v.setAttribute("poster", poster);
};


  return (
    <div className="bg-white rounded-xl shadow-lg p-4 sm:p-8 max-w-2xl mx-auto">
      <div className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden group mb-4">
        {/* Visible Video */}
        <video
          ref={visibleVideoRef}
          src="/vids/vid1.mp4"
          poster={poster || undefined}
          className="w-full h-full object-cover rounded-lg"
          controls 
          preload="metadata"
          playsInline
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onPlay={handlePlay}
          onPause={handlePause}
          onEnded={handleEnded}
        />

        {/* Poster overlay image (non-blocking) — shows when not playing */}


{poster && !isPlaying && (
  <div className="absolute inset-0 w-full h-full">
    <Image
      src={poster}
      alt="video poster"
      fill
      priority
      className="object-cover rounded-lg pointer-events-none"
    />
  </div>
)}


        {/* Hidden video used only for generating the poster */}
        {!poster && (
          <video
            ref={hiddenVideoRef}
            src="/vids/vid1.mp4"
            style={{ display: "none" }}
            preload="auto"
            muted
            playsInline
          />
        )}

        {/* Overlay Play Icon */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity duration-300 group-hover:opacity-0 pointer-events-none">
          <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
            <Play className="w-8 h-8 text-white" />
          </div>
        </div>
      </div>

      <p className="desc mb-2 text-center">
        Mechanical Engineering Proctored Interview
      </p>
      <p className="text-small text-center">Duration: 10 minutes</p>
      <p className="mt-4 desc text-center">
        10-minute condensed recording of the candidate answering
        portfolio-based technical questions.
      </p>
    </div>
  );
}
