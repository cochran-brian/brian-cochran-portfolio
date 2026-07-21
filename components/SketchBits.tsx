// Shared hand-drawn interior elements for cards: checkmark bullets,
// tilted chips, and a pen-circled metric. Keeps Projects/Experience
// content in the same sketch language as their containers.

const NUM_RE = /([~+$]?\d[\d,.]*(?:[MKB]\+?|%|\+|x)?)/g;

// Numbers are the proof on a resume site; ink them darker so they pop.
// Skip digits inside words (Neo4j, S3) by checking what precedes them.
export function Emph({ text }: { text: string }) {
  const parts = text.split(NUM_RE);
  return (
    <>
      {parts.map((part, i) => {
        const prev = i > 0 ? parts[i - 1] : "";
        const isNum = /^[~+$]?\d/.test(part) && !/[A-Za-z]$/.test(prev);
        return isNum ? (
          <span key={i} className="font-medium text-ink">
            {part}
          </span>
        ) : (
          <span key={i}>{part}</span>
        );
      })}
    </>
  );
}

export function CheckItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3 text-[15px] leading-relaxed text-graphite">
      <svg
        aria-hidden="true"
        viewBox="0 0 16 16"
        className="mt-[5px] h-3.5 w-3.5 shrink-0 text-pen"
      >
        <path
          d="M2.5 9.5 C4 10.5 5 11.5 6 12.5 C8 9 10.5 6 13.5 3.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span>
        <Emph text={text} />
      </span>
    </li>
  );
}

const TILTS = [
  "rotate-[0.8deg]",
  "-rotate-[0.7deg]",
  "rotate-[0.3deg]",
  "-rotate-[1.1deg]",
  "rotate-[1deg]",
  "-rotate-[0.4deg]",
];

export function Chip({ label, i = 0 }: { label: string; i?: number }) {
  return (
    <li
      className={`sketch-chip bg-paper/70 px-2.5 py-0.5 font-mono text-xs text-graphite ${TILTS[i % TILTS.length]}`}
    >
      {label}
    </li>
  );
}

export function CircledMetric({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="flex items-center gap-5">
      <span className="relative inline-block shrink-0 px-6 py-2.5">
        <svg
          aria-hidden="true"
          className="absolute inset-0 h-full w-full text-pen"
          viewBox="0 0 140 64"
          preserveAspectRatio="none"
          fill="none"
        >
          <path
            d="M12 32 C10 12 45 5 72 6 C104 7 130 14 129 32 C128 50 100 59 68 58 C36 59 14 50 12 32 Z"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d="M18 40 C13 22 38 10 70 9"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.45"
          />
        </svg>
        <span className="relative text-3xl font-semibold tracking-tight text-ink">
          {value}
        </span>
      </span>
      <span className="min-w-0 flex-1 font-mono text-[13px] leading-relaxed text-graphite sm:max-w-[36ch]">
        {label}
      </span>
    </div>
  );
}
