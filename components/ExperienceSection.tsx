import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { experience } from "@/data/resume";

export default function ExperienceSection() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <SectionHeading index="02" title="Experience" />
      </Reveal>

      <ol className="divide-y divide-line border-y border-line">
        {experience.map((job, i) => (
          <li key={job.company}>
            <Reveal delay={i * 60}>
              <div className="group grid gap-4 py-10 transition-colors sm:grid-cols-[180px_1fr] sm:gap-10">
                <div className="font-mono text-[13px] leading-6 text-faint">
                  {job.dates}
                </div>
                <div>
                  <h3 className="text-xl font-medium tracking-tight text-cream">
                    {job.company}
                    <span className="text-muted"> — {job.role}</span>
                  </h3>
                  <p className="mt-1 font-serif text-lg italic text-muted">
                    {job.summary}
                  </p>
                  <ul className="mt-4 space-y-2.5">
                    {job.points.map((p) => (
                      <li
                        key={p}
                        className="flex gap-3 text-[15px] leading-relaxed text-muted"
                      >
                        <span className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-ember-dim" />
                        {p}
                      </li>
                    ))}
                  </ul>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {job.stack.map((t) => (
                      <li
                        key={t}
                        className="rounded-md border border-line px-2 py-0.5 font-mono text-xs text-faint transition-colors group-hover:border-ember/30 group-hover:text-muted"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}
