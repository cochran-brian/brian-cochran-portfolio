// Decorative hand-drawn margin doodles scattered behind the whole page.
// Pure SVG, no interactivity. Placements favor the outer margins so they
// stay visible beside the opaque content cards.

const stroke = {
  fill: "none" as const,
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function Star() {
  return (
    <svg viewBox="0 0 40 40" className="h-full w-full">
      <path {...stroke} d="M20 4 L20 36 M4 20 L36 20 M9 9 L31 31 M31 9 L9 31" />
    </svg>
  );
}

function Spiral() {
  return (
    <svg viewBox="0 0 48 48" className="h-full w-full">
      <path
        {...stroke}
        d="M24 24 C24 20 28 20 28 24 C28 30 20 30 20 24 C20 16 32 16 32 24 C32 34 16 34 16 24 C16 12 36 12 36 24"
      />
    </svg>
  );
}

function Squiggle() {
  return (
    <svg viewBox="0 0 70 20" className="h-full w-full">
      <path {...stroke} d="M3 10 C10 2 16 18 23 10 S37 2 44 10 S58 18 67 10" />
    </svg>
  );
}

function Arrow() {
  return (
    <svg viewBox="0 0 60 40" className="h-full w-full">
      <path {...stroke} d="M4 30 C20 30 34 24 52 8" />
      <path {...stroke} d="M40 8 L52 8 L50 20" />
    </svg>
  );
}

function Triangle() {
  return (
    <svg viewBox="0 0 40 40" className="h-full w-full">
      <path {...stroke} d="M20 5 L35 33 L5 33 Z" />
    </svg>
  );
}

function Bolt() {
  return (
    <svg viewBox="0 0 30 44" className="h-full w-full">
      <path {...stroke} d="M18 3 L6 24 L15 24 L12 41 L24 18 L15 18 Z" />
    </svg>
  );
}

function Brackets() {
  return (
    <svg viewBox="0 0 60 40" className="h-full w-full">
      <path {...stroke} d="M18 8 L6 20 L18 32" />
      <path {...stroke} d="M42 8 L54 20 L42 32" />
      <path {...stroke} d="M34 6 L26 34" />
    </svg>
  );
}

function Cup() {
  return (
    <svg viewBox="0 0 44 44" className="h-full w-full">
      <path {...stroke} d="M8 16 L34 16 L32 36 L10 36 Z" />
      <path {...stroke} d="M34 20 C42 20 42 30 34 30" />
      <path {...stroke} d="M16 5 C13 9 19 11 16 15" />
      <path {...stroke} d="M24 5 C21 9 27 11 24 15" />
    </svg>
  );
}

function Heart() {
  return (
    <svg viewBox="0 0 44 40" className="h-full w-full">
      <path
        {...stroke}
        d="M22 34 C6 22 8 8 18 10 C21 10 22 14 22 15 C22 14 23 10 26 10 C36 8 38 22 22 34 Z"
      />
    </svg>
  );
}

function Plus() {
  return (
    <svg viewBox="0 0 30 30" className="h-full w-full">
      <path {...stroke} d="M15 5 L15 25 M5 15 L25 15" />
    </svg>
  );
}

function Smiley() {
  return (
    <svg viewBox="0 0 44 44" className="h-full w-full">
      <path
        {...stroke}
        d="M22 4 C34 4 40 12 40 22 C40 34 32 40 22 40 C10 40 4 32 4 22 C4 10 12 4 22 4 Z"
      />
      <path {...stroke} d="M15 17 L15 20 M29 17 L29 20" />
      <path {...stroke} d="M13 27 C17 33 27 33 31 27" />
    </svg>
  );
}

function ScribbleCircle() {
  return (
    <svg viewBox="0 0 48 34" className="h-full w-full">
      <path
        {...stroke}
        d="M24 6 C38 4 46 10 45 17 C44 26 32 30 22 29 C10 28 2 22 4 15 C6 7 18 4 30 6"
      />
    </svg>
  );
}

function PaperPlane() {
  return (
    <svg viewBox="0 0 48 40" className="h-full w-full">
      <path {...stroke} d="M4 20 L44 4 L30 36 L22 24 Z" />
      <path {...stroke} d="M22 24 L44 4" />
    </svg>
  );
}

function Xmark() {
  return (
    <svg viewBox="0 0 26 26" className="h-full w-full">
      <path {...stroke} d="M5 6 C10 11 16 18 21 21 M21 5 C16 10 9 17 5 21" />
    </svg>
  );
}

function Zigzag() {
  return (
    <svg viewBox="0 0 64 22" className="h-full w-full">
      <path {...stroke} d="M3 18 L13 5 L23 18 L33 5 L43 18 L53 5 L61 15" />
    </svg>
  );
}

function Diamond() {
  return (
    <svg viewBox="0 0 34 42" className="h-full w-full">
      <path {...stroke} d="M17 3 L31 21 L17 39 L3 21 Z" />
      <path {...stroke} d="M10 12 L24 30" />
    </svg>
  );
}

type Item = {
  Cmp: () => React.ReactElement;
  className: string;
  anim?: string;
  r?: string;
  delay?: string;
  pen?: boolean;
};

// scattered down the page; percentages keep them spread on any height
const items: Item[] = [
  // top stretch (hero / about)
  { Cmp: Star, className: "left-[3%] top-[3%] h-8 w-8", anim: "doodle-twinkle" },
  { Cmp: Spiral, className: "right-[4%] top-[5%] h-12 w-12", anim: "doodle-float", r: "8deg" },
  { Cmp: Xmark, className: "left-[7%] top-[8%] h-5 w-5", anim: "doodle-twinkle", delay: "0.9s", pen: true },
  { Cmp: Squiggle, className: "left-[3%] top-[13%] h-6 w-20", anim: "doodle-float", r: "-6deg", delay: "0.6s" },
  { Cmp: PaperPlane, className: "right-[3%] top-[12%] h-10 w-12", anim: "doodle-float", r: "-8deg", delay: "0.3s", pen: true },
  { Cmp: Plus, className: "right-[8%] top-[17%] h-5 w-5", anim: "doodle-twinkle", delay: "1.4s" },
  { Cmp: Brackets, className: "right-[3%] top-[22%] h-10 w-16", anim: "doodle-wiggle" },
  { Cmp: Smiley, className: "left-[4%] top-[20%] h-10 w-10", anim: "doodle-float", r: "6deg", delay: "1.1s" },
  { Cmp: ScribbleCircle, className: "left-[8%] top-[26%] h-8 w-12", anim: "doodle-float", r: "-4deg", delay: "0.4s", pen: true },
  { Cmp: Zigzag, className: "right-[6%] top-[29%] h-6 w-16", anim: "doodle-float", r: "5deg", delay: "0.8s" },
  // middle stretch (experience / projects)
  { Cmp: Bolt, className: "left-[3%] top-[34%] h-11 w-8", anim: "doodle-float", r: "6deg", delay: "1s" },
  { Cmp: Star, className: "right-[4%] top-[37%] h-6 w-6", anim: "doodle-twinkle", delay: "0.5s", pen: true },
  { Cmp: Diamond, className: "left-[6%] top-[41%] h-9 w-8", anim: "doodle-wiggle", delay: "0.2s" },
  { Cmp: Triangle, className: "right-[7%] top-[44%] h-8 w-8", anim: "doodle-wiggle", delay: "0.4s" },
  { Cmp: Cup, className: "left-[3%] top-[48%] h-11 w-11", anim: "doodle-float", r: "-5deg", delay: "0.2s" },
  { Cmp: Arrow, className: "right-[3%] top-[51%] h-10 w-14", anim: "doodle-wiggle", delay: "0.7s", pen: true },
  { Cmp: Squiggle, className: "right-[8%] top-[56%] h-5 w-16", anim: "doodle-float", r: "10deg" },
  { Cmp: Xmark, className: "left-[8%] top-[55%] h-5 w-5", anim: "doodle-twinkle", delay: "1.6s" },
  { Cmp: Spiral, className: "left-[4%] top-[61%] h-9 w-9", anim: "doodle-float", r: "-9deg", delay: "1.3s", pen: true },
  { Cmp: Plus, className: "right-[5%] top-[63%] h-6 w-6", anim: "doodle-twinkle", delay: "1.2s" },
  { Cmp: Smiley, className: "right-[3%] top-[68%] h-8 w-8", anim: "doodle-wiggle", delay: "0.9s" },
  { Cmp: PaperPlane, className: "left-[3%] top-[70%] h-9 w-11", anim: "doodle-float", r: "7deg", delay: "0.5s" },
  // bottom stretch (leadership / contact)
  { Cmp: Heart, className: "left-[6%] top-[76%] h-9 w-9", anim: "doodle-float", r: "7deg", delay: "0.8s", pen: true },
  { Cmp: Zigzag, className: "right-[4%] top-[78%] h-6 w-14", anim: "doodle-float", r: "-6deg", delay: "0.3s" },
  { Cmp: Star, className: "left-[3%] top-[83%] h-7 w-7", anim: "doodle-twinkle", delay: "1.5s" },
  { Cmp: ScribbleCircle, className: "right-[7%] top-[85%] h-7 w-11", anim: "doodle-float", r: "5deg", delay: "1s" },
  { Cmp: Brackets, className: "left-[7%] top-[89%] h-8 w-12", anim: "doodle-wiggle", delay: "0.6s" },
  { Cmp: Bolt, className: "right-[3%] top-[91%] h-10 w-7", anim: "doodle-float", r: "-7deg", delay: "1.2s", pen: true },
  { Cmp: Arrow, className: "left-[4%] top-[95%] h-9 w-12", anim: "doodle-wiggle", delay: "0.4s" },
  { Cmp: Triangle, className: "right-[6%] top-[96%] h-6 w-6", anim: "doodle-twinkle", delay: "0.8s" },
];

export default function Doodles() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 hidden overflow-hidden sm:block"
    >
      {items.map(({ Cmp, className, anim, r, delay, pen }, i) => (
        <div
          key={i}
          className={`absolute ${className} ${anim ?? ""} ${
            pen ? "text-pen/25" : "text-ink/[0.13]"
          }`}
          style={{ "--r": r ?? "0deg", animationDelay: delay } as React.CSSProperties}
        >
          <Cmp />
        </div>
      ))}
    </div>
  );
}
