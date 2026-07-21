import Image from "next/image";
import Reveal from "./Reveal";
import { site } from "@/data/resume";

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-6xl px-6 pt-40 pb-24">
      <div className="grid items-center gap-12 lg:grid-cols-[1fr_auto]">
        <div>
          <Reveal>
            <h1 className="text-5xl font-medium leading-[1.05] tracking-tight text-cream sm:text-7xl">
              Brian Cochran
            </h1>
          </Reveal>

          <Reveal delay={80}>
            <p className="mt-6 font-serif text-2xl italic text-ember">
              Software engineer. Junior at Illinois, CS + Economics.
            </p>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              Four internships in, I&rsquo;ve worked on fraud detection and
              payment SDKs at Synchrony, led a design system used by 40,000+
              people at iQor, and shipped production ML pipelines at Cal AI
              before its $100M acquisition. I also build iOS apps my friends
              actually use.
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
        </div>

        <Reveal delay={120} className="justify-self-center lg:justify-self-end">
          <Image
            src="/headshot.jpg"
            alt="Brian Cochran"
            width={288}
            height={360}
            priority
            className="h-auto w-56 rounded-2xl border border-line object-cover sm:w-72"
          />
        </Reveal>
      </div>
    </section>
  );
}
