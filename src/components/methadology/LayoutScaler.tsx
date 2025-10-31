"use client";
import { useEffect, useState } from "react";

interface LayoutScalerProps {
  children: React.ReactNode;
}

/**
 * Dynamically sets --scale based on viewport width/height,
 * for absolute-positioned layouts exported from fixed-size designs.
 */
export default function LayoutScaler({ children }: LayoutScalerProps) {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const updateScale = () => {
      const baseWidth = 1420;  // your design width
      const baseHeight = 1420; // your design height (same)
      
      // Choose whether to fit by width only or both width/height
      const newScale = Math.min(
        window.innerWidth / baseWidth,
        window.innerHeight / baseHeight
      );

      // Keep it within a reasonable range
      const clamped = Math.max(0.4, Math.min(newScale, 1.5));

      setScale(clamped);
    };

    updateScale(); // run immediately
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  return (
    <div
      id="hs-web-interactives-floating-container"
      style={{ "--scale": scale } as React.CSSProperties}
    >
      {children}
    </div>
  );
}
