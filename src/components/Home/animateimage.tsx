"use client";
import { useEffect, useRef, useState } from "react";
import Image, { ImageProps } from "next/image"; // If using Next.js <Image>

// Type for props (extend with any extra ImageProps from next/image)
type AnimatedImageProps = ImageProps & {
  className?: string;
};

// Component
export default function FadeUpAnimatedImage({
  className = "",
  ...props
}: AnimatedImageProps) {
  const ref = useRef<HTMLImageElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting), { threshold: 0.1 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  // For Next.js <Image>: pass ref to wrapper
  return (
    <span
      ref={ref as React.RefObject<HTMLSpanElement>}
      style={{ display: "inline-block" }}
      className={`fade-in${visible ? " fade-in-visible" : ""} ${className}`}
    >
      <Image {...props} />
    </span>
  );
}
