"use client";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface CountUpProps {
  end: number;
  duration?: number;
  suffix?: string; // For % or other unit
  prefix?: string;
}

const CountUp: React.FC<CountUpProps> = ({ end, duration = 1, prefix = "", suffix = "" }) => {
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obj = { val: 0 };

    const tween = gsap.to(obj, {
      val: end,
      duration,
      ease: "power1.out",
      scrollTrigger: {
        trigger: el,
        start: "top 90%",
        end: "top 60%",
        toggleActions: "restart none restart none",
      },
      onUpdate: () => {
        if (el) {
          el.innerText = `${prefix}${Math.round(obj.val)}${suffix}`;
        }
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
      if (el) el.innerText = `${prefix}${end}${suffix}`; // ensure final state on cleanup
    };
  }, [end, duration, prefix, suffix]);

  return <h3 ref={ref}>0</h3>;
};

export default CountUp;
