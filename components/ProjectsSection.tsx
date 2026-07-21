import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { projects, site } from "@/data/resume";

export default function ProjectsSection() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <SectionHeading index="03" title="Projects" />
      </Reveal>

      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal
            key={p.name}
            delay={i * 80}
            className={i === 0 ? "lg:col-span-2" : ""}
          >
            <article className="group relative flex h-full flex-col rounded-2xl border border-line bg-surface p-8 transition-colors duration-300 hover:border-ember/40 sm:p-10">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-3xl font-medium tracking-tight text-cream">
                  {p.name}
                  <span className="ml-3 font-serif text-xl italic text-muted">
                    {p.tagline}
                  </span>
                </h3>
                <span className="shrink-0 font-mono text-[13px] text-faint">
                  {p.dates}
                </span>
              </div>

              <p className="mt-5 max-w-3xl leading-relaxed text-muted">
                {p.description}
              </p>

              <div className="mt-8 flex flex-1 flex-col justify-end gap-8">
                <div className="rounded-xl border border-line bg-ink/60 p-5">
                  <div className="text-4xl font-medium tracking-tight text-ember">
                    {p.metric.value}
                  </div>
                  <div className="mt-1.5 font-mono text-[13px] leading-relaxed text-muted">
                    {p.metric.label}
                  </div>
                </div>

                <ul className="space-y-2">
                  {p.points.map((pt) => (
                    <li
                      key={pt}
                      className="flex gap-3 text-[15px] leading-relaxed text-muted"
                    >
                      <span className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-ember-dim" />
                      {pt}
                    </li>
                  ))}
                </ul>

                <ul className="flex flex-wrap gap-2 border-t border-line pt-6">
                  {p.stack.map((t) => (
                    <li
                      key={t}
                      className="rounded-md border border-line px-2 py-0.5 font-mono text-xs text-faint"
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
        <p className="mt-10 text-center font-mono text-[13px] text-faint">
          More on{" "}
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted underline decoration-line underline-offset-4 transition-colors hover:text-ember"
          >
            GitHub ↗
          </a>
        </p>
      </Reveal>
    </section>
  );
}
