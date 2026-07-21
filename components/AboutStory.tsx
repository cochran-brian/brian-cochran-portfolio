"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import SectionHeading from "./SectionHeading";

type Chapter = {
  tab: string;
  title: string;
  aside: string;
  body: string[];
};

const chapters: Chapter[] = [
  {
    tab: "the student",
    title: "the student",
    aside: "3.91 GPA, class of '28",
    body: [
      "I study CS + Economics at Illinois, Class of 2028.",
      "Every semester since freshman year I've been shipping software somewhere real: a startup that got acquired for $100M+, a BPO with 40,000 employees, and now a Fortune 200 bank.",
    ],
  },
  {
    tab: "the builder",
    title: "the builder",
    aside: "requirements → production",
    body: [
      "I like owning things end to end.",
      "At every stop I've taken work from ambiguous requirements to production: a fraud-detection system at a bank, a mobile app used by tens of thousands, and LLM-powered features real users touch every day.",
    ],
  },
  {
    tab: "off the clock",
    title: "off the clock",
    aside: "yes, the water app is real",
    body: [
      "I co-founded a campus outreach initiative that drew 200+ people to its first event, and I serve as VP of my fraternity.",
      "I also build iOS apps with friends, including one that makes you drink water before it unlocks your doomscrolling.",
    ],
  },
];

// Pinned scroll story: the section is 3 viewports tall, the panel sticks,
// and scrolling swaps the active index card. Continuous progress writes go
// straight to the rail node; React state only changes on chapter boundaries.
const subscribeReducedMotion = (cb: () => void) => {
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
};

export default function AboutStory() {
  const sectionRef = useRef<HTMLElement>(null);
  const railRef = useRef<HTMLDivElement>(null);
  const [idx, setIdx] = useState(0);
  const idxRef = useRef(0);
  const staticMode = useSyncExternalStore(
    subscribeReducedMotion,
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    () => false
  );

  useEffect(() => {
    if (staticMode) return;
    let raf = 0;
    const update = () => {
      const el = sectionRef.current;
      if (!el) return;
      const total = el.offsetHeight - window.innerHeight;
      const p =
        total > 0
          ? Math.min(1, Math.max(0, -el.getBoundingClientRect().top / total))
          : 0;
      if (railRef.current) {
        railRef.current.style.transform = `scaleY(${p})`;
      }
      const next = Math.min(
        chapters.length - 1,
        Math.floor(p * chapters.length)
      );
      if (next !== idxRef.current) {
        idxRef.current = next;
        setIdx(next);
      }
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [staticMode]);

  const jumpTo = (i: number) => {
    const el = sectionRef.current;
    if (!el) return;
    const total = el.offsetHeight - window.innerHeight;
    const top =
      el.getBoundingClientRect().top +
      window.scrollY +
      ((i + 0.5) / chapters.length) * total;
    window.scrollTo({ top, behavior: "smooth" });
  };

  const cardStyle = (i: number): React.CSSProperties => {
    const off = i - idx;
    if (off === 0) {
      return { transform: "rotate(0deg)", opacity: 1, zIndex: 3 };
    }
    if (off > 0) {
      // waiting behind the active card
      return {
        transform: `translateY(${off * 14}px) rotate(${off * 2.5}deg) scale(${1 - off * 0.04})`,
        opacity: 0.85,
        zIndex: 3 - off,
      };
    }
    // already read: tossed up and away
    return {
      transform: "translateY(-40px) rotate(-7deg)",
      opacity: 0,
      zIndex: 0,
      pointerEvents: "none",
    };
  };

  if (staticMode) {
    return (
      <section id="about" className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading index="01" title="About" />
        <div className="grid gap-8 lg:grid-cols-3">
          {chapters.map((c) => (
            <Card key={c.title} chapter={c} />
          ))}
        </div>
      </section>
    );
  }

  return (
    <section ref={sectionRef} id="about" className="relative h-[320svh]">
      <div className="sticky top-0 flex h-svh items-center overflow-hidden">
        <div className="mx-auto w-full max-w-6xl px-6">
          <SectionHeading index="01" title="About" />

          <div className="grid items-center gap-10 lg:grid-cols-[260px_1fr]">
            {/* chapter tabs + progress rail */}
            <div className="flex gap-5">
              <div className="relative hidden w-px self-stretch border-l border-dashed border-line lg:block">
                <div
                  ref={railRef}
                  className="absolute inset-0 -left-px w-[3px] origin-top bg-pen"
                  style={{ transform: "scaleY(0)" }}
                />
              </div>
              <ol className="flex flex-row flex-wrap gap-x-6 gap-y-4 lg:flex-col lg:gap-7">
                {chapters.map((c, i) => (
                  <li key={c.tab}>
                    <button
                      type="button"
                      onClick={() => jumpTo(i)}
                      className="group flex items-baseline gap-3 text-left"
                    >
                      <span
                        className={`font-mono text-[13px] transition-colors ${
                          i === idx ? "text-pen" : "text-faint"
                        }`}
                      >
                        0{i + 1}
                      </span>
                      <span
                        className={`font-hand text-2xl leading-none transition-colors ${
                          i === idx
                            ? "marker text-ink"
                            : "text-graphite group-hover:text-ink"
                        }`}
                      >
                        {c.tab}
                      </span>
                    </button>
                  </li>
                ))}
              </ol>
            </div>

            {/* card stack */}
            <div className="relative h-[476px] max-w-2xl sm:h-[392px]">
              {chapters.map((c, i) => (
                <div
                  key={c.title}
                  className="absolute inset-0 transition-all duration-500 [transition-timing-function:cubic-bezier(0.34,1.3,0.64,1)]"
                  style={cardStyle(i)}
                  aria-hidden={i !== idx}
                >
                  <Card chapter={c} counter={`${i + 1} / ${chapters.length}`} />
                </div>
              ))}
            </div>
          </div>

          <p
            className={`mt-8 text-center font-hand text-2xl text-faint transition-opacity duration-500 lg:text-left ${
              idx < chapters.length - 1 ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden="true"
          >
            keep scrolling ↓
          </p>
        </div>
      </div>
    </section>
  );
}

function Card({
  chapter,
  counter,
}: {
  chapter: Chapter;
  counter?: string;
}) {
  // Everything inside the card is a multiple of the 28px rule spacing
  // (padding 28, heading 56 = 2 rows, paragraphs 28, gaps 28) so text
  // lands on the printed lines instead of drifting across them.
  return (
    <article className="sketch ruled-card relative flex h-full flex-col bg-card pt-7 pb-7 pl-16 pr-7 shadow-[5px_6px_0_rgba(38,34,26,0.1)] sm:pl-20 sm:pr-12">
      <span
        aria-hidden="true"
        className="absolute -top-3 left-1/2 h-7 w-24 -translate-x-1/2 -rotate-2 border border-ink/10 bg-[rgba(240,225,170,0.55)] shadow-sm"
      />
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="font-hand text-4xl leading-[56px] text-pen">
          {chapter.title}
        </h3>
        {counter && (
          <span className="font-mono text-[13px] text-faint">{counter}</span>
        )}
      </div>
      <div className="space-y-7">
        {chapter.body.map((p) => (
          <p key={p} className="text-[15px] leading-[28px] text-graphite">
            {p}
          </p>
        ))}
      </div>
      <p className="mt-auto text-right font-hand text-xl leading-[28px] text-faint">
        {chapter.aside}
      </p>
    </article>
  );
}
