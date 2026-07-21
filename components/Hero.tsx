import GraphField from "./GraphField";
import Reveal from "./Reveal";
import { site, stats } from "@/data/resume";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <GraphField />
      {/* soft vignette so text stays readable over the canvas */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,var(--ink)_85%)]" />

      <div className="relative mx-auto flex min-h-svh max-w-6xl flex-col justify-center px-6 pt-28 pb-16">
        <Reveal>
          <p className="mb-6 inline-flex w-fit items-center gap-2.5 rounded-full border border-line bg-surface/70 px-4 py-1.5 font-mono text-[13px] text-muted backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ember opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-ember" />
            </span>
            {site.availability}
          </p>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="max-w-4xl text-5xl font-medium leading-[1.05] tracking-tight text-cream sm:text-7xl">
            Everything interesting
            <br />
            is a{" "}
            <em className="font-serif italic text-ember">graph.</em>
          </h1>
        </Reveal>

        <Reveal delay={160}>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted">
            I&rsquo;m {site.name} — I build software that maps connections:
            fraud rings in Neo4j at Synchrony, retrieval systems that follow
            chains of consequence, and communities of a few hundred people.{" "}
            <span className="text-cream">{site.school}.</span>
          </p>
        </Reveal>

        <Reveal delay={240}>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="rounded-full bg-cream px-6 py-3 font-mono text-sm text-ink transition-colors hover:bg-ember"
            >
              See the work ↓
            </a>
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-line px-6 py-3 font-mono text-sm text-cream transition-colors hover:border-ember hover:text-ember"
            >
              GitHub ↗
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-line px-6 py-3 font-mono text-sm text-cream transition-colors hover:border-ember hover:text-ember"
            >
              LinkedIn ↗
            </a>
          </div>
        </Reveal>

        <Reveal delay={320}>
          <dl className="mt-20 grid grid-cols-2 gap-x-8 gap-y-10 border-t border-line pt-10 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd className="text-3xl font-medium tracking-tight text-cream">
                  {s.value}
                </dd>
                <dd className="mt-2 max-w-[26ch] font-mono text-[13px] leading-relaxed text-muted">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
