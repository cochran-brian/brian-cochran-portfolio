"use client";

import { useEffect, useRef, useState } from "react";

// Section title whose blue underline draws itself in when scrolled into view.
export default function SectionHeading({
  index,
  title,
}: {
  index: string;
  title: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [on, setOn] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setOn(true);
          io.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className="mb-12 flex items-baseline gap-4">
      <span className="font-mono text-sm text-pen">{index}</span>
      <h2 className="relative text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
        {title}
        <svg
          aria-hidden="true"
          className="absolute -bottom-2.5 left-0 h-2.5 w-full text-pen"
          viewBox="0 0 120 10"
          preserveAspectRatio="none"
        >
          <path
            className={`scribble-path ${on ? "on" : ""}`}
            pathLength={1}
            d="M3 6 C 20 2, 38 9, 58 5 S 96 2, 117 7"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>
      </h2>
      <div className="h-px flex-1 self-center border-t border-dashed border-line" />
    </div>
  );
}
