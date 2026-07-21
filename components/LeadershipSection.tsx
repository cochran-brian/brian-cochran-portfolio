import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { leadership } from "@/data/resume";

export default function LeadershipSection() {
  return (
    <section id="leadership" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <SectionHeading index="04" title="Leadership" />
      </Reveal>

      <div className="grid gap-8 md:grid-cols-3">
        {leadership.map((l, i) => (
          <Reveal key={l.org} delay={i * 80} className="h-full">
            <article
              className={`${
                i % 2 === 0 ? "sketch rotate-[0.4deg]" : "sketch-alt -rotate-[0.4deg]"
              } flex h-full flex-col bg-card p-7 transition-transform duration-300 hover:rotate-0 hover:shadow-[5px_6px_0_rgba(38,34,26,0.1)]`}
            >
              <div className="font-mono text-[13px] text-faint">{l.dates}</div>
              <h3 className="mt-3 text-lg font-semibold tracking-tight text-ink">
                {l.org}
              </h3>
              <p className="mt-0.5 font-hand text-2xl text-pen">{l.role}</p>
              <p className="mt-4 text-[15px] leading-relaxed text-graphite">
                {l.note}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
