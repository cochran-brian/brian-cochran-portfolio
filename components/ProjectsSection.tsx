import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { CheckItem, Chip, CircledMetric } from "./SketchBits";
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
                  <span className="mr-3 font-mono text-[13px] font-normal text-pen">
                    0{i + 1}
                  </span>
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

              <div className="mt-8 flex flex-1 flex-col justify-end gap-7">
                <CircledMetric value={p.metric.value} label={p.metric.label} />

                <ul className="space-y-2.5">
                  {p.points.map((pt) => (
                    <CheckItem key={pt} text={pt} />
                  ))}
                </ul>

                <ul className="flex flex-wrap gap-2 border-t border-dashed border-line pt-6">
                  {p.stack.map((t, j) => (
                    <Chip key={t} label={t} i={j} />
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
