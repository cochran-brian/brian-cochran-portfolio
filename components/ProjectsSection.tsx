import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { projects, site } from "@/data/resume";

export default function ProjectsSection() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <SectionHeading index="03" title="Projects" />
      </Reveal>

      <div className="grid gap-8 lg:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal
            key={p.name}
            delay={i * 80}
            className={i === 0 ? "lg:col-span-2" : ""}
          >
            <article
              className={`${
                i % 2 === 0 ? "sketch rotate-[0.3deg]" : "sketch-alt -rotate-[0.3deg]"
              } group relative flex h-full flex-col bg-card p-8 transition-transform duration-300 hover:rotate-0 hover:shadow-[5px_6px_0_rgba(38,34,26,0.1)] sm:p-10`}
            >
              {i === 0 && (
                <span className="absolute -top-9 right-6 z-10 -rotate-3 font-hand text-2xl text-pen sm:-right-2 sm:-top-10">
                  my favorite one ↓
                </span>
              )}
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-3xl font-semibold tracking-tight text-ink">
                  {p.name}
                  <span className="ml-3 font-hand text-2xl font-normal text-graphite">
                    {p.tagline}
                  </span>
                </h3>
                <span className="shrink-0 font-mono text-[13px] text-faint">
                  {p.dates}
                </span>
              </div>

              <p className="mt-5 max-w-3xl leading-relaxed text-graphite">
                {p.description}
              </p>

              <div className="mt-8 flex flex-1 flex-col justify-end gap-8">
                <div className="sketch-chip bg-paper p-5">
                  <div className="text-4xl font-semibold tracking-tight text-pen">
                    {p.metric.value}
                  </div>
                  <div className="mt-1.5 font-mono text-[13px] leading-relaxed text-graphite">
                    {p.metric.label}
                  </div>
                </div>

                <ul className="space-y-2">
                  {p.points.map((pt) => (
                    <li
                      key={pt}
                      className="flex gap-3 text-[15px] leading-relaxed text-graphite"
                    >
                      <span className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-pen/60" />
                      {pt}
                    </li>
                  ))}
                </ul>

                <ul className="flex flex-wrap gap-2 border-t border-dashed border-line pt-6">
                  {p.stack.map((t) => (
                    <li
                      key={t}
                      className="sketch-chip px-2 py-0.5 font-mono text-xs text-faint"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={120}>
        <p className="mt-12 text-center font-hand text-2xl text-graphite">
          more on{" "}
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-pen underline decoration-wavy underline-offset-4 transition-colors hover:text-ink"
          >
            GitHub
          </a>{" "}
          ↗
        </p>
      </Reveal>
    </section>
  );
}
