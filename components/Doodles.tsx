// Decorative hand-drawn margin doodles scattered behind the whole page.
// Pure SVG, no interactivity. Kept very low-opacity so text stays readable.

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
      <path
        {...stroke}
        d="M3 10 C10 2 16 18 23 10 S37 2 44 10 S58 18 67 10"
      />
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

type Item = {
  Cmp: () => React.ReactElement;
  className: string;
  anim?: string;
  r?: string;
  delay?: string;
};

// scattered around the page; percentages keep them spread on any height
const items: Item[] = [
  { Cmp: Star, className: "left-[6%] top-[12%] h-8 w-8", anim: "doodle-twinkle" },
  { Cmp: Spiral, className: "right-[8%] top-[22%] h-12 w-12", anim: "doodle-float", r: "8deg" },
  { Cmp: Squiggle, className: "left-[14%] top-[34%] h-6 w-20", anim: "doodle-float", r: "-6deg", delay: "0.6s" },
  { Cmp: Brackets, className: "right-[12%] top-[42%] h-10 w-16", anim: "doodle-wiggle" },
  { Cmp: Bolt, className: "left-[8%] top-[52%] h-11 w-8", anim: "doodle-float", r: "6deg", delay: "1s" },
  { Cmp: Triangle, className: "right-[7%] top-[58%] h-8 w-8", anim: "doodle-wiggle", delay: "0.4s" },
  { Cmp: Cup, className: "left-[10%] top-[68%] h-11 w-11", anim: "doodle-float", r: "-5deg", delay: "0.2s" },
  { Cmp: Plus, className: "right-[16%] top-[70%] h-6 w-6", anim: "doodle-twinkle", delay: "1.2s" },
  { Cmp: Heart, className: "left-[16%] top-[82%] h-9 w-9", anim: "doodle-float", r: "7deg", delay: "0.8s" },
  { Cmp: Arrow, className: "right-[10%] top-[86%] h-10 w-14", anim: "doodle-wiggle", delay: "0.5s" },
  { Cmp: Star, className: "right-[20%] top-[8%] h-5 w-5", anim: "doodle-twinkle", delay: "1.5s" },
  { Cmp: Squiggle, className: "right-[6%] top-[76%] h-5 w-16", anim: "doodle-float", r: "10deg" },
];

export default function Doodles() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 hidden overflow-hidden text-ink/[0.09] sm:block"
    >
      {items.map(({ Cmp, className, anim, r, delay }, i) => (
        <div
          key={i}
          className={`absolute ${className} ${anim ?? ""}`}
          style={{ "--r": r ?? "0deg", animationDelay: delay } as React.CSSProperties}
        >
          <Cmp />
        </div>
      ))}
    </div>
  );
}
