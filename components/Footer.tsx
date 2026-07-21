import Reveal from "./Reveal";
import { site } from "@/data/resume";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative z-10 border-t border-dashed border-line bg-paper"
    >
      <div className="mx-auto max-w-6xl px-6 py-28">
        <Reveal>
          <p className="font-mono text-sm text-pen">05 · Contact</p>
          <h2 className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.1] tracking-tight text-ink sm:text-6xl">
            Let&rsquo;s <span className="scribble">talk.</span>
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-graphite">
            Recruiting for{" "}
            <span className="marker text-ink">Summer 2027 internships</span>,
            or just want to compare notes on mobile apps and campus startups?
            My inbox is open.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={`mailto:${site.email}`}
              className="sketch bg-ink px-7 py-3.5 font-mono text-sm text-paper transition-colors hover:bg-pen"
            >
              {site.email}
            </a>
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="sketch-alt px-6 py-3.5 font-mono text-sm text-ink transition-colors hover:border-pen hover:text-pen"
            >
              GitHub ↗
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="sketch px-6 py-3.5 font-mono text-sm text-ink transition-colors hover:border-pen hover:text-pen"
            >
              LinkedIn ↗
            </a>
            <a
              href={site.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="sketch-alt border-pen px-6 py-3.5 font-mono text-sm text-pen transition-colors hover:bg-pen hover:text-paper"
            >
              Résumé ↗
            </a>
          </div>
        </Reveal>

        <div className="mt-24 flex flex-col gap-3 border-t border-dashed border-line pt-8 font-mono text-[13px] text-faint sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name} · Champaign, IL
          </p>
          <p>Built with Next.js</p>
        </div>
      </div>
    </footer>
  );
}
