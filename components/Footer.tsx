import Reveal from "./Reveal";
import { site } from "@/data/resume";

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-28">
        <Reveal>
          <p className="font-mono text-sm text-ember">05 · Contact</p>
          <h2 className="mt-6 max-w-3xl text-4xl font-medium leading-[1.1] tracking-tight text-cream sm:text-6xl">
            Let&rsquo;s <em className="font-serif italic text-ember">talk.</em>
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            Recruiting for Summer 2027 internships, or just want to compare
            notes on mobile apps and campus startups? My inbox is open.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={`mailto:${site.email}`}
              className="rounded-full bg-cream px-7 py-3.5 font-mono text-sm text-ink transition-colors hover:bg-ember"
            >
              {site.email}
            </a>
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-line px-6 py-3.5 font-mono text-sm text-cream transition-colors hover:border-ember hover:text-ember"
            >
              GitHub ↗
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-line px-6 py-3.5 font-mono text-sm text-cream transition-colors hover:border-ember hover:text-ember"
            >
              LinkedIn ↗
            </a>
          </div>
        </Reveal>

        <div className="mt-24 flex flex-col gap-3 border-t border-line pt-8 font-mono text-[13px] text-faint sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name} · Champaign, IL
          </p>
          <p>Built with Next.js</p>
        </div>
      </div>
    </footer>
  );
}
