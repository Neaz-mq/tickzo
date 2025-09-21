import React, { useEffect, useState, useRef } from "react";
import "./CursorMagnet.css";

const CursorMagnet = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isTextHover, setIsTextHover] = useState(false);
  const zoomRef = useRef(null);

  const zoomFactor = 1.6; // Adjust this value to change the zoom level

  useEffect(() => {
    const moveCursor = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      setPosition({ x, y });

      const tag = e.target.tagName.toLowerCase();
      // More robust check for text and interactive elements
      const isHoveringText = ["p", "h1", "h2", "h3", "h4", "span", "a", "button", "li"].includes(tag) || e.target.closest('a, button, h1, h2, h3, h4, p, span, li') !== null;
      setIsTextHover(isHoveringText);
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div
      className={`cursor-lens ${isTextHover ? "cursor-lens--active" : ""}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      {isTextHover && (
        <div
          ref={zoomRef}
          className="cursor-lens-zoom"
          style={{
            // Correctly calculate the background position for the zoom effect
            backgroundPosition: `${-position.x * (zoomFactor - 1)}px ${-position.y * (zoomFactor - 1)}px`,
            backgroundSize: `${window.innerWidth * zoomFactor}px ${window.innerHeight * zoomFactor}px`,
          }}
        />
      )}
    </div>
  );
};

export default CursorMagnet;