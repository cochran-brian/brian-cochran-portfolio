import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { skills } from "@/data/resume";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <SectionHeading index="01" title="About" />
      </Reveal>

      <div className="grid gap-14 lg:grid-cols-[3fr_2fr]">
        <Reveal delay={80}>
          <div className="space-y-5 text-lg leading-relaxed text-graphite">
            <p>
              I study{" "}
              <span className="text-ink">CS + Economics at Illinois</span>{" "}
              (3.91 GPA, Class of 2028), and I&rsquo;ve spent every semester
              since freshman year shipping software somewhere real: a startup
              that got acquired for $100M+, a BPO with 40,000 employees, and
              now a Fortune 200 bank.
            </p>
            <p>
              I like owning things end to end. At each stop I&rsquo;ve taken
              work from ambiguous requirements to production, whether that was
              a fraud-detection system, a CTO-approved design system, or an ML
              pipeline serving real users.
            </p>
            <p>
              Off the clock I co-founded a campus outreach initiative, serve as
              VP of my fraternity, and build iOS apps with friends, including
              one that makes you drink water before it unlocks your
              doomscrolling.
            </p>
          </div>
        </Reveal>

        <Reveal delay={160}>
          <div className="space-y-8">
            {skills.map((s) => (
              <div key={s.group}>
                <h3 className="mb-3 font-hand text-2xl text-graphite">
                  {s.group}
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {s.items.map((item) => (
                    <li
                      key={item}
                      className="sketch-chip bg-card px-2.5 py-1 font-mono text-[13px] text-graphite"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
