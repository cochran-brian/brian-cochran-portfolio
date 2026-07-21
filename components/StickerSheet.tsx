import Reveal from "./Reveal";
import { skills } from "@/data/resume";

// Deterministic pseudo-random tilt so server and client render identically.
const tilt = (group: number, item: number) =>
  ((group * 53 + item * 137) % 13) - 6;

export default function StickerSheet() {
  return (
    <div className="mx-auto max-w-6xl px-6 pb-24">
      <Reveal>
        <p className="font-hand text-3xl text-graphite">
          the toolbox <span className="text-pen">↓</span>
        </p>
      </Reveal>

      <div className="mt-8 grid gap-x-10 gap-y-10 sm:grid-cols-2">
        {skills.map((s, gi) => (
          <Reveal key={s.group} delay={gi * 90}>
            <div className="flex h-full flex-col">
              <h3 className="mb-4 font-mono text-[13px] uppercase tracking-widest text-faint">
                {s.group}
              </h3>
              <ul className="flex flex-wrap gap-x-2.5 gap-y-3">
                {s.items.map((item, ii) => (
                  <li
                    key={item}
                    className="sticker sketch-chip relative cursor-default bg-card px-3 py-1.5 font-mono text-sm text-ink"
                    style={{ "--rot": `${tilt(gi, ii)}deg` } as React.CSSProperties}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
