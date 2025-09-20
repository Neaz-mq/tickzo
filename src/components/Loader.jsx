// Loader.jsx
import { useEffect } from "react";

export default function Loader({ setLoading }) {
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, [setLoading]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <div
        className="loader w-[120px] h-[60px] rounded-t-[200px] rounded-tl-[200px] rounded-tr-[200px]"
        style={{
          maskImage: `repeating-radial-gradient(farthest-side at bottom, #0000 0, #000 1px 12%, #0000 calc(12% + 1px) 20%)`,
          WebkitMaskImage: `repeating-radial-gradient(farthest-side at bottom, #0000 0, #000 1px 12%, #0000 calc(12% + 1px) 20%)`,
          background: `radial-gradient(farthest-side at bottom, #514b82 0 95%, #0000 0) bottom / 0% 0% no-repeat #ddd`,
          animation: "l10 2s infinite steps(6)",
        }}
      ></div>

      <style>
        {`
          @keyframes l10 {
            100% { background-size: 120% 120%; }
          }
        `}
      </style>
    </div>
  );
}