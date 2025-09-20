import { useEffect } from "react";

export default function Loader({ setLoading }) {
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, [setLoading]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      {/* Loader container */}
      <div className="loader w-12 aspect-square grid relative">
        {/* Loader pseudo-elements translated into divs */}
        <div className="absolute inset-0 before:content-[''] after:content-[''] before:grid-area-1/1 after:grid-area-1/1"></div>
      </div>

      {/* Inline styles for animation */}
      <style>
        {`
          .loader::before,
          .loader::after {
            content: "";
            grid-area: 1/1;
            --c: no-repeat radial-gradient(farthest-side,#25b09b 92%,#0000);
            background: var(--c) 50% 0, var(--c) 50% 100%, var(--c) 100% 50%, var(--c) 0 50%;
            background-size: 12px 12px;
            animation: l12 1s infinite;
          }
          .loader::before {
            margin: 4px;
            filter: hue-rotate(45deg);
            background-size: 8px 8px;
            animation-timing-function: linear;
          }
          @keyframes l12 { 
            100% { transform: rotate(.5turn); }
          }
        `}
      </style>
    </div>
  );
}
