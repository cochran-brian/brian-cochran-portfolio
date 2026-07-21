import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { leadership } from "@/data/resume";

export default function LeadershipSection() {
  return (
    <section id="leadership" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <SectionHeading index="04" title="Leadership" />
      </Reveal>

      <div className="grid gap-6 md:grid-cols-3">
        {leadership.map((l, i) => (
          <Reveal key={l.org} delay={i * 80} className="h-full">
            <article className="flex h-full flex-col rounded-2xl border border-line bg-surface p-7 transition-colors duration-300 hover:border-ember/40">
              <div className="font-mono text-[13px] text-faint">{l.dates}</div>
              <h3 className="mt-3 text-lg font-medium tracking-tight text-cream">
                {l.org}
              </h3>
              <p className="mt-0.5 font-serif italic text-ember">{l.role}</p>
              <p className="mt-4 text-[15px] leading-relaxed text-muted">
                {l.note}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
