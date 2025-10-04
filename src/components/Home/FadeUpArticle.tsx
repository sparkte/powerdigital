"use client";
import { useEffect, useRef, useState, ReactNode } from "react";

type FadeUpArticleProps = {
  className?: string;
  visibleClassName?: string;    // custom class when visible
  hiddenClassName?: string;     // custom class when hidden
  children: ReactNode;
};

export default function FadeUpArticle({
  className = "",
  visibleClassName = "animate-fadeup-in",    // you choose class
  hiddenClassName = "animate-fadeup-init",   // you choose class
  children,
  ...props
}: FadeUpArticleProps) {
  const ref = useRef<HTMLElement | null>(null);
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

  return (
    <article
      ref={ref}
      className={`${className} ${visible ? visibleClassName : hiddenClassName}`}
      {...props}
    >
      {children}
    </article>
  );
}
