import { useEffect, useRef, useState, type ReactNode } from "react";

import { cn } from "@/lib/utils";

type Direction = "up" | "left" | "right" | "none";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  distance?: number;
  direction?: Direction;
  as?: "div" | "section" | "li" | "article";
}

function offsetFor(direction: Direction, distance: number) {
  switch (direction) {
    case "left":
      return `translate3d(-${distance}px, 0, 0)`;
    case "right":
      return `translate3d(${distance}px, 0, 0)`;
    case "none":
      return "none";
    default:
      return `translate3d(0, ${distance}px, 0)`;
  }
}

export function Reveal({
  children,
  className,
  delay = 0,
  distance = 22,
  direction = "up",
  as = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const Tag = as as "div";

  return (
    <Tag
      ref={ref as React.Ref<HTMLDivElement>}
      data-visible={visible}
      className={cn("reveal", className)}
      style={{
        transitionDelay: `${delay}ms`,
        transform: visible ? undefined : offsetFor(direction, distance),
      }}
    >
      {children}
    </Tag>
  );
}
