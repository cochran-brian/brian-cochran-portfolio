import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { experience } from "@/data/resume";

export default function ExperienceSection() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <SectionHeading index="02" title="Experience" />
      </Reveal>

      {/* hand-drawn timeline: dashed rail, pushpin nodes, file-tab dates */}
      <div className="relative">
        <div
          aria-hidden="true"
          className="absolute bottom-10 left-[7px] top-4 border-l-2 border-dashed border-line"
        />
        <ol className="space-y-14">
          {experience.map((job, i) => (
            <li key={job.company} className="relative pl-9 sm:pl-14">
              <span
                aria-hidden="true"
                className="absolute left-0 top-10 h-[15px] w-[15px] rounded-full border-2 border-ink bg-paper"
              />
              <Reveal delay={i * 60}>
                <article
                  className={`${
                    i % 2 === 0
                      ? "sketch rotate-[0.25deg]"
                      : "sketch-alt -rotate-[0.25deg]"
                  } group relative bg-card p-7 transition-all duration-300 hover:rotate-0 hover:shadow-[5px_6px_0_rgba(38,34,26,0.1)] sm:p-9`}
                >
                  <span className="absolute -top-4 left-6 -rotate-2 bg-paper px-3 py-1 font-mono text-xs text-graphite sketch-chip">
                    {job.dates}
                  </span>

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
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
