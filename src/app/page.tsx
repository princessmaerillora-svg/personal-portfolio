import Image from "next/image";
import { existsSync } from "node:fs";
import { join } from "node:path";
import type { CSSProperties } from "react";
import Navbar from "@/components/Navbar";
import MotionObserver from "@/components/MotionObserver";
import { arrowClass, btn } from "@/components/button";
import {
  profile,
  about,
  skills,
  projects,
  achievements,
  contact,
  type Achievement,
} from "@/data/profile";

function reveal(step = 0) {
  return {
    "data-reveal": "",
    style: { "--reveal-delay": `${step * 90}ms` } as CSSProperties,
  };
}

function Arrow({ down = false }: { down?: boolean }) {
  return (
    <svg
      className={down ? `${arrowClass} arrow-down` : arrowClass}
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={down ? "M8 3v10M4 9l4 4 4-4" : "M5 11L11 5M6 5h5v5"} />
    </svg>
  );
}

function SectionHeading({ label, title }: { label: string; title: string }) {
  return (
    <div {...reveal()} className="mb-7 border-b border-white/10 pb-4">
      <p className="eyebrow mb-2">{label}</p>
      <h2 className="section-title">{title}</h2>
    </div>
  );
}

function SkillDots({ level }: { level: number }) {
  return (
    <span className="flex gap-1.5" aria-label={`${level} out of 5`} role="img">
      {[1, 2, 3, 4, 5].map((n) => (
        <span
          key={n}
          className={`h-1.5 w-1.5 rounded-full ${
            n <= level ? "bg-[#c9a83e]" : "bg-white/15"
          }`}
        />
      ))}
    </span>
  );
}

const certificates = achievements.filter((a) => a.type === "Certificate");
const awards = achievements.filter((a) => a.type !== "Certificate");

function publicFileExists(src?: string) {
  return !!src && existsSync(join(process.cwd(), "public", src));
}

function CertificatePreview({ cert }: { cert: Achievement }) {
  if (cert.image && publicFileExists(cert.image)) {
    return (
      <a
        href={cert.image}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open full-size certificate: ${cert.title}`}
        className="relative block aspect-[3/2] overflow-hidden bg-[#0b0d12] focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[#e2c866]"
      >
        <Image
          src={cert.image}
          alt={`${cert.title} certificate`}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-contain p-3 transition-[scale] duration-500 ease-out group-hover:scale-[1.03] motion-reduce:transition-none"
        />
      </a>
    );
  }

  return (
    <div className="cert-placeholder relative grid aspect-[3/2] place-items-center overflow-hidden">
      <div className="flex flex-col items-center gap-3 text-center">
        <svg
          className="h-9 w-9 text-[#c9a83e]/70"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect x="3" y="4" width="18" height="13" rx="1.5" />
          <path d="M7 8.5h10M7 11.5h6" />
          <circle cx="16.5" cy="17.5" r="2.5" />
          <path d="M15 19.5 14.5 22l2-1 2 1-.5-2.5" />
        </svg>
        <span className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-white/40">
          Certificate preview
        </span>
      </div>
    </div>
  );
}

const quickFacts = [
  {
    question: "What kind of opportunities are you looking for?",
    answer:
      "I'm looking for internship opportunities, student developer roles, and small project collaborations where I can contribute, learn, and grow with a team.",
  },
  {
    question: "When can you start?",
    answer:
      "I can begin as soon as the schedule allows, and I'm open to discussing start dates based on the role, school calendar, and team needs.",
  },
  {
    question: "Are you open to remote or onsite work?",
    answer:
      "Yes. I'm open to remote, onsite, or hybrid arrangements depending on the opportunity and what works best for the organization.",
  },
  {
    question: "What can you contribute to a team?",
    answer:
      "I can support front-end development, UI implementation, project tasks, and collaborative work using modern web tools, while continuing to learn from experienced teammates.",
  },
  {
    question: "How does school affect your availability?",
    answer:
      "I'm currently a student, so I'm available for roles and projects that fit around my academic schedule while still allowing me to contribute consistently.",
  },
  {
    question: "How should an organization get in touch?",
    answer:
      "You can reach me by email to discuss internships, collaborations, or project opportunities. I'm happy to share more details about my work and availability.",
  },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <MotionObserver />

      <main className="portfolio-bg flex-1 overflow-hidden">
        <section id="home" className="px-4 py-4 sm:px-6 sm:py-6 lg:py-7">
          <div className="hero-panel panel-stars home-hero relative mx-auto flex max-w-6xl flex-col overflow-hidden rounded-[1.75rem] px-5 pb-6 pt-5 sm:px-8 md:block md:px-0 md:pb-0 md:pt-0">
            <h1 className="enter relative z-0 mt-10 flex flex-wrap items-center justify-center gap-x-2 font-display text-[clamp(2.1rem,9vw,8.5rem)] uppercase leading-[0.85] tracking-[0.025em] md:absolute md:inset-x-4 md:top-[17%] md:mt-0 md:gap-x-5">
              <span className="hero-hover hero-name-outline">{profile.shortName}</span>
              <span className="hero-hover text-[#eee6c9]">{profile.lastName}</span>
              <span className="sr-only"> — {profile.name}</span>
            </h1>

            <div className="relative z-10 mx-auto -mt-1 h-[min(92vw,390px)] w-full max-w-[440px] pointer-events-none shrink-0 portrait-frame enter-portrait md:absolute md:bottom-0 md:left-1/2 md:mt-0 md:h-[82%] md:w-[min(58%,640px)] md:max-w-none md:-translate-x-1/2">
              <div className="portrait-float absolute inset-0">
                <Image
                  src={profile.photo}
                  alt=""
                  aria-hidden="true"
                  fill
                  sizes="(max-width: 768px) 92vw, 58vw"
                  className="hero-portrait-aura object-contain object-bottom"
                />
                <Image
                  src={profile.photo}
                  alt={`Portrait of ${profile.name}`}
                  fill
                  priority
                  sizes="(max-width: 768px) 92vw, 58vw"
                  className="hero-portrait object-contain object-bottom"
                />
              </div>
            </div>

            <div style={{ "--enter-delay": "350ms" } as CSSProperties} className="enter relative z-20 mt-auto grid gap-6 sm:grid-cols-[1fr_auto] sm:items-end md:absolute md:inset-x-9 md:bottom-9 md:mt-0 md:flex md:items-end md:justify-between lg:inset-x-12 lg:bottom-12">
              <div className="max-w-sm">
                <p className="hero-hover font-display text-2xl uppercase leading-tight tracking-wide text-[#c9a83e] sm:text-3xl">
                  {profile.headline.join(" ")}
                </p>
                <p className="hero-hover mt-2 max-w-xs text-sm leading-6 text-white/60">
                  {profile.intro}
                </p>
                <a
                  href="#contact"
                  className={btn("solid", "mt-4")}
                >
                  Let&apos;s collaborate <Arrow down />
                </a>
              </div>

              <p className="hero-hover inline-flex min-h-10 items-center gap-2.5 justify-self-start rounded-full border border-white/10 bg-black/30 px-3 text-xs font-medium text-white/75 backdrop-blur-sm sm:justify-self-end sm:px-4">
                <span className="relative flex h-2 w-2 shrink-0" aria-hidden="true">
                  <span className="absolute inset-0 animate-ping rounded-full bg-[#34d399]/60 motion-reduce:hidden" />
                  <span className="relative h-2 w-2 rounded-full bg-[#34d399]" />
                </span>
                <span className="font-mono text-[0.62rem] uppercase tracking-[0.14em] sm:text-xs">
                  {profile.availability}
                </span>
              </p>
            </div>
          </div>
        </section>

        <section id="quick-facts" className="px-4 py-10 sm:px-6 sm:py-14">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-12">
            <div {...reveal()} className="flex flex-col justify-center">
              <p className="eyebrow mb-3">A few things to know</p>
              <h2 className="section-title max-w-sm text-[clamp(3rem,7vw,5.25rem)]">
                Before you ask<span className="gold-text">...</span>
              </h2>
              <p className="mt-4 max-w-sm text-sm leading-6 text-white/50">
                A little more about the kind of work I&apos;m looking for and how I
                like to collaborate.
              </p>
            </div>
            <ol className="grid gap-3 sm:grid-cols-2">
              {quickFacts.map((fact, i) => (
                <li
                  key={fact.question}
                  {...reveal(i)}
                  className="surface-card rounded-2xl p-5 transition-colors hover:border-[#c9a83e]/30"
                >
                  <span className="font-mono text-[0.65rem] tracking-widest text-[#c9a83e]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 text-sm font-semibold leading-snug text-[#f0eee6]">
                    {fact.question}
                  </h3>
                  <p className="mt-2 text-xs leading-6 text-white/50">
                    {fact.answer}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="about" className="px-4 py-10 sm:px-6 sm:py-14">
          <div className="mx-auto max-w-6xl">
            <SectionHeading label="The person behind the work" title="About me" />
            <div className="grid gap-4 lg:grid-cols-[1fr_1fr]">
              <div {...reveal(0)} className="surface-card rounded-2xl p-6 sm:p-8">
                <p className="font-serif text-3xl leading-tight text-[#eee6c9] sm:text-4xl">
                  {profile.tagline}
                </p>
                <div className="mt-6 space-y-4 text-sm leading-7 text-white/55">
                  {about.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>

              <div {...reveal(1)} className="surface-card rounded-2xl p-6 sm:p-8">
                <h3 className="eyebrow mb-5">Education</h3>
                <ol className="divide-y divide-white/[0.08]">
                  {about.education.map((education) => (
                    <li
                      key={education.level}
                      className="py-4 first:pt-0 last:pb-0"
                    >
                      <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                        <p className="font-medium text-white/90">
                          {education.school}
                        </p>
                        <span className="font-mono text-[0.65rem] text-white/40">
                          {education.years}
                        </span>
                      </div>
                      <p className="mt-1 text-xs text-white/45">
                        {education.level}
                        {education.program ? ` · ${education.program}` : ""}
                      </p>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="px-4 py-10 sm:px-6 sm:py-14">
          <div className="mx-auto max-w-6xl">
            <SectionHeading label="Tools of the trade" title="Skills" />
            <div className="grid gap-4 md:grid-cols-3">
              {skills.map((group, i) => (
                <div key={group.group} {...reveal(i)} className="surface-card rounded-2xl p-6">
                  <h3 className="mb-5 font-serif text-2xl text-[#eee6c9]">
                    {group.group}
                  </h3>
                  <ul className="divide-y divide-white/[0.08]">
                    {group.items.map((skill) => (
                      <li
                        key={skill.name}
                        className="flex items-center justify-between gap-4 py-3"
                      >
                        <span className="text-sm text-white/75">
                          {skill.name}
                        </span>
                        <SkillDots level={skill.level} />
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="px-4 py-10 sm:px-6 sm:py-14">
          <div className="mx-auto max-w-6xl">
            <SectionHeading label="Selected work" title="Projects" />
            <ol className="grid gap-4 lg:grid-cols-2">
              {projects.map((project, i) => (
                <li
                  key={project.title}
                  {...reveal(i)}
                  className="surface-card flex flex-col rounded-2xl p-6 transition-colors hover:border-[#c9a83e]/30 sm:p-7"
                >
                  <h3 className="max-w-xl font-serif text-3xl leading-tight text-[#f0eee6] sm:text-4xl">
                    {project.title}
                  </h3>
                  <p className="mt-3 max-w-2xl text-sm leading-6 text-white/50">
                    {project.description}
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full border border-white/10 bg-black/20 px-3 py-1.5 font-mono text-[0.62rem] text-white/55"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                  {(project.github || project.demo) && (
                    <div className="mt-7 flex flex-wrap gap-2 border-t border-white/[0.08] pt-5">
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={btn("solid")}
                        >
                          Live site <Arrow />
                        </a>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={btn("outline")}
                        >
                          Source code <Arrow />
                        </a>
                      )}
                    </div>
                  )}
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="achievements" className="px-4 py-10 sm:px-6 sm:py-14">
          <div className="mx-auto max-w-6xl">
            <SectionHeading
              label="Milestones along the way"
              title="Achievements"
            />
            <ul className="mb-4 grid gap-4 md:grid-cols-2">
              {certificates.map((cert, i) => (
                <li
                  key={cert.title}
                  {...reveal(i)}
                  className="surface-card group flex flex-col overflow-hidden rounded-2xl"
                >
                  <CertificatePreview cert={cert} />
                  <div className="flex flex-1 flex-wrap items-end justify-between gap-3 border-t border-white/[0.08] p-5 sm:p-6">
                    <div>
                      <span className="font-mono text-[0.65rem] tracking-widest text-[#c9a83e]">
                        CERTIFICATE / {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="mt-2 font-serif text-2xl leading-tight text-[#f0eee6]">
                        {cert.title}
                      </h3>
                      <p className="mt-1 text-xs text-white/45">
                        {cert.issuer} · {cert.date}
                      </p>
                    </div>
                    {cert.verifyUrl && (
                      <a
                        href={cert.verifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={btn("outline", "min-h-9 px-4 text-xs")}
                      >
                        Verify <Arrow />
                      </a>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            <ul {...reveal()} className="surface-card divide-y divide-white/[0.08] rounded-2xl px-5 sm:px-8">
              {awards.map((achievement, i) => (
                <li
                  key={achievement.title}
                  {...reveal(i)}
                  className="grid grid-cols-[2.5rem_1fr_auto] items-center gap-3 py-5 sm:grid-cols-[4rem_1fr_auto] sm:gap-5"
                >
                  <span className="font-mono text-xs text-[#c9a83e]">
                    {String(certificates.length + i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-white/90 sm:text-base">
                      {achievement.title}
                    </h3>
                    <p className="mt-1 text-xs text-white/45">
                      {achievement.issuer} · {achievement.date}
                    </p>
                  </div>
                  <span className="rounded-full bg-[#c9a83e] px-3 py-1 font-mono text-[0.58rem] uppercase tracking-wider text-[#11110c]">
                    {achievement.type}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="contact" className="px-4 pb-12 pt-10 sm:px-6 sm:pb-16 sm:pt-14">
          <div {...reveal()} className="hero-panel panel-stars relative mx-auto max-w-6xl overflow-hidden rounded-[1.75rem] px-6 py-9 sm:px-10 sm:py-12 lg:px-14">
            <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <p className="eyebrow mb-4">Have a project in mind?</p>
                <h2 className="font-serif text-[clamp(3.5rem,9vw,7rem)] leading-[0.82] text-[#eee6c9]">
                  Let&apos;s work
                  <br />
                  <span className="gold-text">together.</span>
                </h2>
                <p className="mt-5 max-w-xl text-sm leading-6 text-white/55">
                  I&apos;m open to internships, student developer roles, and project
                  collaborations. Feel free to reach out.
                </p>
              </div>
              <a
                href={`mailto:${contact.email}`}
                className={btn("solid", "w-full sm:w-auto")}
              >
                Start a conversation <Arrow />
              </a>
            </div>

            <div className="gold-rule relative z-10 my-8 opacity-40" />

            <div className="relative z-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div>
                <p className="eyebrow">Email</p>
                <a
                  href={`mailto:${contact.email}`}
                  className="mt-2 inline-block break-all text-sm text-white/75 transition-colors hover:text-[#e2c866]"
                >
                  {contact.email}
                </a>
              </div>
              {contact.phone && (
                <div>
                  <p className="eyebrow">Phone</p>
                  <a
                    href={`tel:${contact.phone.replace(/\s/g, "")}`}
                    className="mt-2 inline-block text-sm text-white/75 transition-colors hover:text-[#e2c866]"
                  >
                    {contact.phone}
                  </a>
                </div>
              )}
              <div>
                <p className="eyebrow">Based in</p>
                <p className="mt-2 text-sm text-white/75">{contact.location}</p>
              </div>
            </div>

            <div className="relative z-10 mt-7 flex flex-wrap gap-2">
              {contact.links.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={btn("light-outline")}
                >
                  {link.label} <Arrow />
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-[#08090c]">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-6 text-xs text-white/40 sm:px-6">
          <p>© 2026 {profile.name}</p>
          <a
            href="#home"
            className="font-mono uppercase tracking-widest transition-colors hover:text-[#e2c866] focus-visible:outline-2 focus-visible:outline-[#e2c866]"
          >
            Back to top ↑
          </a>
        </div>
      </footer>
    </>
  );
}
