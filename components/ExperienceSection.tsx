import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { experience } from "@/data/resume";

export default function ExperienceSection() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <SectionHeading index="02" title="Experience" />
      </Reveal>

      <ol className="border-y border-dashed border-line">
        {experience.map((job, i) => (
          <li
            key={job.company}
            className={i > 0 ? "border-t border-dashed border-line" : ""}
          >
            <Reveal delay={i * 60}>
              <div className="group grid gap-4 py-10 sm:grid-cols-[180px_1fr] sm:gap-10">
                <div className="font-mono text-[13px] leading-6 text-faint">
                  {job.dates}
                </div>
                <div>
                  <h3 className="text-xl font-semibold tracking-tight text-ink">
                    {job.company}
                    <span className="font-medium text-graphite">
                      {" "}
                      · {job.role}
                    </span>
                  </h3>
                  <p className="mt-1 font-hand text-2xl text-pen">
                    {job.summary}
                  </p>
                  <ul className="mt-4 space-y-2.5">
                    {job.points.map((p) => (
                      <li
                        key={p}
                        className="flex gap-3 text-[15px] leading-relaxed text-graphite"
                      >
                        <span className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-pen/60" />
                        {p}
                      </li>
                    ))}
                  </ul>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {job.stack.map((t) => (
                      <li
                        key={t}
                        className="sketch-chip px-2 py-0.5 font-mono text-xs text-faint transition-colors group-hover:text-graphite"
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
