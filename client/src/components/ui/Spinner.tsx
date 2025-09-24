import { cn } from "@/utils/clsx";


interface SpinnerProps {
  className?: string;
  size?: number; 
    colorClass?: string; 
}

export const Spinner = ({
  className,
  size = 48,
  colorClass = "text-inkaer-blue",
}: SpinnerProps) => {
  return (
    <div className={cn("flex items-center justify-center w-full h-full", className)}>
      <svg
        className={cn("animate-spin", colorClass)}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        style={{ width: size, height: size }}
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
        />
      </svg>
    </div>
  );
};

// Full-page loading (e.g. page app load)
export const Loader = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-white">
      <Spinner size={85} />
    </div>
  );
};

export const BtnLoader = () => {
  return (
    <div className=" flex items-center justify-center">
      <Spinner size={25} colorClass="text-white"/>
    </div>
  );
};

export const PageLoader = () => {
  return (
    <div className="flex items-center justify-center mt-4 mb-4">
      <Spinner size={45} />
    </div>
  );
};

	// Blocking UI overlay (e.g. during API calls: UI interactions)
//   <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-500/80">
export const SpinnerFull = () => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80">
    <Spinner size={60} />
  </div>
);
