import Image from "next/image";
import Reveal from "./Reveal";
import { site } from "@/data/resume";

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-6xl px-6 pt-36 pb-24">
      <div className="grid items-center gap-16 lg:grid-cols-[1fr_auto]">
        <div>
          <Reveal>
            <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-7xl">
              Brian Cochran
            </h1>
          </Reveal>

          <Reveal delay={80}>
            <p className="mt-5 font-hand text-3xl leading-snug text-pen">
              software engineer. junior at Illinois, CS + Economics.
            </p>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-graphite">
              Four internships in, I&rsquo;ve worked on{" "}
              <span className="marker text-ink">
                fraud detection and payment SDKs
              </span>{" "}
              at Synchrony, led a design system used by 40,000+ people at iQor,
              and shipped production ML pipelines at Cal AI before its $100M
              acquisition. I also build iOS apps my friends actually use.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="sketch bg-ink px-6 py-3 font-mono text-sm text-paper transition-colors hover:bg-pen"
              >
                See the work ↓
              </a>
              <a
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
                className="sketch-alt px-6 py-3 font-mono text-sm text-ink transition-colors hover:border-pen hover:text-pen"
              >
                GitHub ↗
              </a>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="sketch px-6 py-3 font-mono text-sm text-ink transition-colors hover:border-pen hover:text-pen"
              >
                LinkedIn ↗
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={120} className="justify-self-center lg:justify-self-end">
          <div className="relative">
            {/* crosshatch patch peeking out behind the polaroid */}
            <svg
              aria-hidden="true"
              className="absolute -right-6 -bottom-6 h-32 w-32 text-ink/15"
              viewBox="0 0 100 100"
            >
              <g stroke="currentColor" strokeWidth="1.5">
                {Array.from({ length: 10 }, (_, i) => (
                  <line key={i} x1={i * 12 - 10} y1="110" x2={i * 12 + 40} y2="-10" />
                ))}
              </g>
            </svg>

            <figure className="sketch relative rotate-2 bg-card p-3 pb-2 shadow-[5px_6px_0_rgba(38,34,26,0.12)] transition-transform duration-300 hover:rotate-0">
              {/* tape strips */}
              <span
                aria-hidden="true"
                className="absolute -top-3 left-6 h-7 w-24 -rotate-6 border border-ink/10 bg-[rgba(240,225,170,0.55)] shadow-sm"
              />
              <span
                aria-hidden="true"
                className="absolute -bottom-3 right-8 h-7 w-20 rotate-3 border border-ink/10 bg-[rgba(240,225,170,0.55)] shadow-sm"
              />
              <Image
                src="/headshot.jpg"
                alt="Brian Cochran"
                width={720}
                height={900}
                priority
                className="h-auto w-60 rounded-sm sm:w-72"
              />
              <figcaption className="py-2 text-center font-hand text-2xl text-graphite">
                hi from Champaign, IL
              </figcaption>
            </figure>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
