"use client";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

interface FadeUpProps {
  children: React.ReactNode;
  yDistance?: number; // How much to move vertically (px)
  duration?: number;  // Animation time in seconds
}

const FadeUp: React.FC<FadeUpProps> = ({
  children,
  yDistance = 60,
  duration = 1,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const tween = gsap.fromTo(
      el,
      { opacity: 1, y: yDistance },
      {
        opacity: 1,
        y: 0,
        duration,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          end: "top 60%",
          toggleActions: "restart none restart none", // Fade up every time section enters
          // markers: true, // enable this for debugging GSAP triggers
        },
      }
    );

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [yDistance, duration]);

  return (
    <div ref={ref} style={{ opacity: 1 }}>
      {children}
    </div>
  );
};

export default FadeUp;
