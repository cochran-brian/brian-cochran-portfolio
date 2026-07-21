import Image from "next/image";
import Reveal from "./Reveal";
import { site } from "@/data/resume";

const ink = {
  fill: "none" as const,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export default function Hero() {
  return (
    <section id="top" className="relative mx-auto max-w-6xl px-6 pt-36 pb-24">
      {/* floating sparkle doodles around the hero */}
      <svg
        aria-hidden="true"
        className="doodle-twinkle absolute left-[44%] top-24 h-6 w-6 text-pen/50"
        viewBox="0 0 40 40"
      >
        <path
          {...ink}
          stroke="currentColor"
          strokeWidth={2.5}
          d="M20 4 L20 36 M4 20 L36 20 M9 9 L31 31 M31 9 L9 31"
        />
      </svg>
      <svg
        aria-hidden="true"
        className="doodle-float absolute right-[40%] top-16 hidden h-8 w-8 text-ink/20 sm:block"
        viewBox="0 0 48 48"
        style={{ ["--r" as string]: "12deg" }}
      >
        <path
          {...ink}
          stroke="currentColor"
          strokeWidth={2}
          d="M24 24 C24 20 28 20 28 24 C28 30 20 30 20 24 C20 16 32 16 32 24 C32 34 16 34 16 24 C16 12 36 12 36 24"
        />
      </svg>

      <div className="grid items-center gap-16 lg:grid-cols-[1fr_auto]">
        <div className="relative">
          <Reveal>
            <h1 className="relative inline-block text-5xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-7xl">
              Brian Cochran
              {/* self-drawing scribble underline */}
              <svg
                aria-hidden="true"
                className="absolute -bottom-3 left-0 h-4 w-full text-pen"
                viewBox="0 0 300 16"
                preserveAspectRatio="none"
              >
                <path
                  {...ink}
                  className="draw-in"
                  pathLength={1}
                  stroke="currentColor"
                  strokeWidth={3}
                  d="M4 9 C 60 3, 110 13, 160 7 S 250 3, 296 10"
                />
              </svg>
            </h1>
          </Reveal>

          <Reveal delay={80}>
            <p className="mt-7 font-hand text-3xl leading-snug text-pen">
              software engineer. junior at Illinois, CS + Economics.
            </p>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-graphite">
              Three internships in, I&rsquo;ve worked on{" "}
              <span className="marker marker-draw text-ink">
                fraud detection and payment SDKs
              </span>{" "}
              at Synchrony, built mobile features for 40,000+ people at iQor,
              and built LLM-powered features at Cal AI before its $100M
              acquisition. I also build iOS apps my friends actually use.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="group sketch bg-ink px-6 py-3 font-mono text-sm text-paper transition-colors hover:bg-pen"
              >
                See the work{" "}
                <span className="inline-block transition-transform group-hover:translate-y-0.5">
                  ↓
                </span>
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
            {/* hand-drawn "that's me" arrow pointing at the photo */}
            <div className="arrow-bob absolute -left-24 top-2 z-10 hidden w-28 lg:block">
              <span className="block -rotate-6 font-hand text-2xl text-pen">
                that&rsquo;s me!
              </span>
              <svg
                aria-hidden="true"
                className="mt-1 h-12 w-24 text-pen"
                viewBox="0 0 96 48"
              >
                <path
                  {...ink}
                  className="draw-in"
                  pathLength={1}
                  stroke="currentColor"
                  strokeWidth={2.5}
                  d="M6 8 C 30 40, 60 44, 86 30"
                />
                <path
                  {...ink}
                  stroke="currentColor"
                  strokeWidth={2.5}
                  d="M74 34 L88 28 L84 42"
                />
              </svg>
            </div>

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
