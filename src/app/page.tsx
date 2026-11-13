import Image from "next/image";
import Navbar from "@/components/Navbar";
import { arrowClass, btn } from "@/components/button";
import {
  profile,
  about,
  skills,
  projects,
  achievements,
  contact,
} from "@/data/profile";

function Arrow() {
  return (
    <svg className={arrowClass} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 11L11 5M6 5h5v5" />
    </svg>
  );
}

function SectionHead({ index, title, note }: { index: string; title: string; note?: string }) {
  return (
    <div className="mb-12 flex flex-wrap items-end justify-between gap-x-6 gap-y-2 border-b border-indigo-950 pb-4">
      <h2 className="font-display text-[clamp(2.75rem,7vw,5rem)] uppercase leading-[0.9] tracking-tight text-indigo-950">
        {title}
      </h2>
      <p className="flex items-baseline gap-3 pb-1 text-sm text-indigo-950/60">
        {note && <span className="font-serif text-lg italic text-indigo-950/70">{note}</span>}
        <span className="font-mono">({index})</span>
      </p>
    </div>
  );
}

function Dots({ level }: { level: number }) {
  return (
    <span className="flex gap-1" aria-label={`${level} out of 5`} role="img">
      {[1, 2, 3, 4, 5].map((n) => (
        <span key={n} className={`h-2 w-2 ${n <= level ? "bg-indigo-600" : "bg-indigo-100"}`} />
      ))}
    </span>
  );
}

export default function Home() {
  return (
    <>
      <Navbar name={profile.shortName} />

      <main className="flex-1">
        {/* HOME */}
        <section id="home" className="relative isolate overflow-hidden">
          <div className="relative mx-auto flex max-w-6xl flex-col items-center px-4 pb-14 pt-10 sm:px-6 lg:block lg:h-[clamp(640px,calc(100svh-4rem),760px)] lg:p-0">
            {/* Hey, there */}
            <p className="relative z-20 flex gap-3 font-serif text-[clamp(3.25rem,14vw,4.5rem)] italic leading-none text-indigo-950 lg:absolute lg:inset-x-0 lg:top-[20%] lg:justify-center lg:gap-[clamp(10rem,18vw,14rem)] lg:text-[clamp(5rem,8vw,7.5rem)]">
              <span>Hey,</span>
              <span>there</span>
            </p>

            {/* Portrait */}
            <div className="relative z-10 mt-4 w-[min(88vw,400px)] lg:absolute lg:bottom-0 lg:left-1/2 lg:mt-0 lg:w-[clamp(480px,42vw,560px)] lg:-translate-x-1/2">
              <Image
                src={profile.photo}
                alt={`Portrait of ${profile.name}`}
                width={768}
                height={768}
                priority
                className="h-auto w-full"
              />
            </div>

            {/* Availability */}
            <p className="relative z-20 order-first mb-6 inline-flex items-center gap-2.5 rounded-full border border-indigo-950/10 bg-white py-2 pl-3 pr-4 text-sm font-medium text-indigo-950 lg:absolute lg:left-6 lg:top-[50%] lg:order-none lg:mb-0">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inset-0 animate-ping rounded-full bg-indigo-500/60 motion-reduce:hidden" />
                <span className="relative h-2.5 w-2.5 rounded-full bg-indigo-600" />
              </span>
              {profile.availability}
            </p>

            {/* Intro + actions */}
            <div className="relative z-20 order-last mt-8 w-full max-w-md text-center lg:absolute lg:right-6 lg:top-[42%] lg:order-none lg:mt-0 lg:w-[17rem] lg:text-left">
              <p className="text-[0.95rem] leading-relaxed text-indigo-950/75 lg:text-sm">{profile.intro}</p>
              <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:justify-center lg:justify-start">
                <a href="#projects" className={btn("solid")}>
                  View my work
                </a>
                {profile.resumeUrl ? (
                  <a href={profile.resumeUrl} target="_blank" rel="noopener noreferrer" className={btn("outline")}>
                    Résumé <Arrow />
                  </a>
                ) : (
                  <a href="#contact" className={btn("outline")}>
                    Contact me
                  </a>
                )}
              </div>
            </div>

            {/* I AM NAME */}
            <h1 className="relative z-20 mt-6 w-full text-center font-display uppercase leading-[0.86] tracking-tight text-indigo-950 lg:absolute lg:bottom-12 lg:left-6 lg:mt-0 lg:w-auto lg:text-left">
              <span className="block text-[clamp(3.25rem,17vw,5.5rem)] lg:text-[clamp(4.5rem,7vw,6.5rem)]">I am</span>
              <span className="block text-[clamp(3.25rem,17vw,5.5rem)] lg:text-[clamp(4.5rem,7vw,6.5rem)]">{profile.shortName}</span>
              <span className="sr-only"> — {profile.name}</span>
            </h1>

            {/* Headline */}
            <p className="relative z-20 mt-4 text-center font-display text-[clamp(1.5rem,7vw,2.25rem)] uppercase leading-[0.95] text-indigo-600 lg:absolute lg:bottom-12 lg:right-6 lg:mt-0 lg:text-left lg:text-[clamp(2rem,3vw,2.75rem)]">
              {profile.headline.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </p>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionHead index="01" title="About me" note="who I am" />
            <div className="grid gap-14 md:grid-cols-[1.1fr_1fr]">
              <div>
                <p className="font-serif text-[clamp(2rem,4vw,2.75rem)] italic leading-[1.1] text-indigo-950">
                  {profile.tagline}
                </p>
                <div className="mt-8 space-y-4 leading-relaxed text-indigo-950/75">
                  {about.paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600">
                  Education
                </h3>
                <ol className="border-t border-indigo-950/15">
                  {about.education.map((e) => (
                    <li key={e.level} className="grid grid-cols-[6.5rem_1fr] gap-4 border-b border-indigo-950/15 py-5">
                      <span className="font-mono text-xs leading-6 text-indigo-950/60">{e.years}</span>
                      <div>
                        <p className="text-xs uppercase tracking-wider text-indigo-950/60">{e.level}</p>
                        <p className="mt-1 font-semibold text-indigo-950">{e.school}</p>
                        {e.program && <p className="text-sm text-indigo-950/70">{e.program}</p>}
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="bg-indigo-50/60 py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionHead index="02" title="Skills" note="what I work with" />
            <div className="grid gap-12 md:grid-cols-3 md:gap-10">
              {skills.map((g) => (
                <div key={g.group}>
                  <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600">{g.group}</h3>
                  <ul className="border-t border-indigo-950/15">
                    {g.items.map((s) => (
                      <li key={s.name} className="flex items-center justify-between gap-4 border-b border-indigo-950/15 py-3">
                        <span className="font-medium text-indigo-950">{s.name}</span>
                        <Dots level={s.level} />
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionHead index="03" title="Projects" note="things I've built" />
            <ol>
              {projects.map((p, i) => (
                <li
                  key={p.title}
                  className="grid gap-4 border-b border-indigo-950/15 py-8 first:pt-0 md:grid-cols-[4rem_1fr_auto] md:items-start md:gap-8"
                >
                  <span className="font-mono text-sm text-indigo-600">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="font-display text-[clamp(1.75rem,3.5vw,2.5rem)] uppercase leading-none text-indigo-950">
                      {p.title}
                    </h3>
                    <p className="mt-3 max-w-2xl leading-relaxed text-indigo-950/75">{p.description}</p>
                    <p className="mt-4 text-xs uppercase tracking-[0.15em] text-indigo-950/55">
                      {p.tags.join("  /  ")}
                    </p>
                  </div>
                  {(p.github || p.demo) && (
                    <div className="flex flex-wrap gap-2 md:justify-end">
                      {p.demo && (
                        <a href={p.demo} target="_blank" rel="noopener noreferrer" className={btn("solid")}>
                          Live site <Arrow />
                        </a>
                      )}
                      {p.github && (
                        <a href={p.github} target="_blank" rel="noopener noreferrer" className={btn("outline")}>
                          Code <Arrow />
                        </a>
                      )}
                    </div>
                  )}
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ACHIEVEMENTS */}
        <section id="achievements" className="bg-indigo-50/60 py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionHead index="04" title="Achievements" note="certificates & awards" />
            <ul className="border-t border-indigo-950/15">
              {achievements.map((a) => (
                <li
                  key={a.title}
                  className="grid grid-cols-[1fr_auto] items-center gap-x-6 gap-y-2 border-b border-indigo-950/15 py-6 sm:grid-cols-[7rem_1fr_auto]"
                >
                  <span className="col-span-2 font-mono text-sm text-indigo-950/60 sm:col-span-1">{a.date}</span>
                  <div>
                    <h3 className="text-lg font-semibold text-indigo-950">{a.title}</h3>
                    <p className="text-sm text-indigo-950/65">{a.issuer}</p>
                  </div>
                  <span
                    className={`justify-self-end rounded-full px-3 py-1 text-xs font-medium uppercase tracking-wider ${
                      a.type === "Award" ? "bg-indigo-600 text-white" : "border border-indigo-600/40 text-indigo-700"
                    }`}
                  >
                    {a.type}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="bg-indigo-950 py-24 text-white">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="flex items-baseline justify-between border-b border-white/20 pb-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-300">Contact me</p>
              <span className="font-mono text-sm text-white/50">(05)</span>
            </div>

            <p className="mt-12 font-serif text-[clamp(2.5rem,7vw,5rem)] italic leading-none text-indigo-200">
              Let&apos;s work
            </p>
            <h2 className="font-display text-[clamp(3.5rem,13vw,10rem)] uppercase leading-[0.85] tracking-tight">
              Together
            </h2>
            <p className="mt-6 max-w-lg text-indigo-100/80">
              I&apos;m open to internships, collaborations, and freelance work. Feel free to reach out.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a href={`mailto:${contact.email}`} className={btn("light", "sm:w-auto")}>
                {contact.email}
              </a>
              {contact.links.map((l) => (
                <a key={l.label} href={l.url} target="_blank" rel="noopener noreferrer" className={btn("light-outline")}>
                  {l.label} <Arrow />
                </a>
              ))}
            </div>

            <dl className="mt-14 grid gap-6 border-t border-white/20 pt-6 text-sm sm:grid-cols-3">
              {contact.phone && (
                <div>
                  <dt className="text-xs uppercase tracking-[0.2em] text-indigo-300">Phone</dt>
                  <dd className="mt-1">
                    <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="underline-offset-4 hover:underline">
                      {contact.phone}
                    </a>
                  </dd>
                </div>
              )}
              <div>
                <dt className="text-xs uppercase tracking-[0.2em] text-indigo-300">Based in</dt>
                <dd className="mt-1">{contact.location}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.2em] text-indigo-300">Status</dt>
                <dd className="mt-1">{profile.availability}</dd>
              </div>
            </dl>
          </div>
        </section>
      </main>

      <footer className="bg-indigo-950 text-sm text-indigo-200/70">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 border-t border-white/10 px-4 py-6 sm:px-6">
          <p>© 2026 {profile.name}</p>
          <a href="#home" className="rounded-full px-3 py-2 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-white">
            Back to top ↑
          </a>
        </div>
      </footer>
    </>
  );
}
