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
    <svg
      className={arrowClass}
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 11L11 5M6 5h5v5" />
    </svg>
  );
}

function SectionHeading({
  index,
  label,
  title,
}: {
  index: string;
  label: string;
  title: string;
}) {
  return (
    <div className="mb-7 flex flex-wrap items-end justify-between gap-3 border-b border-white/10 pb-4">
      <div>
        <p className="eyebrow mb-2">{label}</p>
        <h2 className="section-title">{title}</h2>
      </div>
      <span className="pb-1 font-mono text-xs tracking-widest text-white/35">
        ({index})
      </span>
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

const quickFacts = [
  {
    question: "What kind of opportunities are you looking for?",
    answer:
      "I'm looking for internship opportunities, student developer roles, and small project collaborations where I can contribute, learn, and grow with a team.",
  },
  {
    question: "When can you start?",
    answer:
      "I can begin as soon as the schedule allows, and I’m open to discussing start dates based on the role, school calendar, and team needs.",
  },
  {
    question: "Are you open to remote or onsite work?",
    answer:
      "Yes. I’m open to remote, onsite, or hybrid arrangements depending on the opportunity and what works best for the organization.",
  },
  {
    question: "What can you contribute to a team?",
    answer:
      "I can support front-end development, UI implementation, project tasks, and collaborative work using modern web tools, while continuing to learn from experienced teammates.",
  },
  {
    question: "How does school affect your availability?",
    answer:
      "I’m currently a student, so I’m available for roles and projects that fit around my academic schedule while still allowing me to contribute consistently.",
  },
  {
    question: "How should an organization get in touch?",
    answer:
      "You can reach me by email to discuss internships, collaborations, or project opportunities. I’m happy to share more details about my work and availability.",
  },
];

export default function Home() {
  return (
    <>
      <Navbar name={profile.shortName} />

      <main className="portfolio-bg flex-1 overflow-hidden">
        <section id="home" className="px-4 pb-10 pt-8 sm:px-6 sm:pt-12">
          <div className="hero-panel panel-grid relative mx-auto grid max-w-6xl overflow-hidden rounded-[1.75rem] px-6 py-8 sm:px-10 sm:py-12 lg:min-h-[480px] lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:px-14">
            <div className="relative z-10 flex flex-col items-start">
              <div className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-black/30 px-3 py-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inset-0 animate-ping rounded-full bg-[#c9a83e]/60 motion-reduce:hidden" />
                  <span className="relative h-2 w-2 rounded-full bg-[#c9a83e]" />
                </span>
                <span className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-white/70">
                  {profile.availability}
                </span>
              </div>

              <p className="eyebrow mb-3">Portfolio · Bulacan, Philippines</p>
              <h1 className="font-serif text-[clamp(4.5rem,12vw,8.5rem)] leading-[0.78] tracking-tight text-[#eee6c9]">
                {profile.shortName}
                <span className="gold-text">.</span>
              </h1>
              <p className="mt-5 max-w-xl font-display text-[clamp(1.05rem,2.2vw,1.55rem)] uppercase leading-tight tracking-wide text-[#c9a83e]">
                {profile.headline.join(" ")}
              </p>
              <p className="mt-6 max-w-lg text-sm leading-7 text-white/60 sm:text-base">
                {profile.intro}
              </p>

              <div className="mt-7 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                <a href="#projects" className={btn("solid")}>
                  Explore my work <Arrow />
                </a>
                {profile.resumeUrl ? (
                  <a
                    href={profile.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={btn("outline")}
                  >
                    Résumé <Arrow />
                  </a>
                ) : (
                  <a href="#contact" className={btn("outline")}>
                    Get in touch <Arrow />
                  </a>
                )}
              </div>

              <div className="mt-8 flex items-center gap-3 text-xs text-white/40">
                <span className="h-px w-8 bg-[#c9a83e]/70" />
                <span className="font-mono uppercase tracking-wider">
                  {profile.name}
                </span>
              </div>
            </div>

            <div className="relative mt-10 min-h-[300px] overflow-hidden rounded-2xl border border-white/10 portrait-frame sm:min-h-[390px] lg:mt-0 lg:ml-8">
              <div className="absolute inset-0 bg-gradient-to-t from-[#08090c] via-transparent to-transparent" />
              <Image
                src={profile.photo}
                alt={`Portrait of ${profile.name}`}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-contain object-bottom"
              />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 bg-gradient-to-t from-[#08090c] via-[#08090c]/75 to-transparent px-5 pb-5 pt-20">
                <div>
                  <p className="eyebrow">Currently studying</p>
                  <p className="mt-1 text-sm font-medium text-white/90">
                    Information Technology
                  </p>
                </div>
                <span className="rounded-full border border-[#c9a83e]/30 bg-black/40 px-3 py-1.5 font-mono text-[0.65rem] text-[#e2c866]">
                  2023 — 2027
                </span>
              </div>
              <span className="absolute right-4 top-4 rounded-full border border-white/10 bg-black/35 px-3 py-1.5 font-mono text-[0.6rem] uppercase tracking-widest text-white/50">
                Profile 001
              </span>
            </div>
          </div>
        </section>

        <section id="quick-facts" className="px-4 py-10 sm:px-6 sm:py-14">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-12">
            <div className="flex flex-col justify-center">
              <p className="eyebrow mb-3">A few things to know</p>
              <h2 className="section-title max-w-sm text-[clamp(3rem,7vw,5.25rem)]">
                Before you ask<span className="gold-text">...</span>
              </h2>
              <p className="mt-4 max-w-sm text-sm leading-6 text-white/50">
                A little more about the kind of work I’m looking for and how I
                like to collaborate.
              </p>
            </div>
            <ol className="grid gap-3 sm:grid-cols-2">
              {quickFacts.map((fact, i) => (
                <li
                  key={fact.question}
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
            <SectionHeading index="01" label="The person behind the work" title="About me" />
            <div className="grid gap-4 lg:grid-cols-[1fr_1fr]">
              <div className="surface-card rounded-2xl p-6 sm:p-8">
                <p className="font-serif text-3xl leading-tight text-[#eee6c9] sm:text-4xl">
                  {profile.tagline}
                </p>
                <div className="mt-6 space-y-4 text-sm leading-7 text-white/55">
                  {about.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>

              <div className="surface-card rounded-2xl p-6 sm:p-8">
                <div className="mb-5 flex items-center justify-between">
                  <h3 className="eyebrow">Education</h3>
                  <span className="font-mono text-[0.62rem] text-white/35">
                    03 ENTRIES
                  </span>
                </div>
                <ol className="divide-y divide-white/[0.08]">
                  {about.education.map((education, i) => (
                    <li
                      key={education.level}
                      className="grid grid-cols-[2.25rem_1fr] gap-3 py-4 first:pt-0 last:pb-0"
                    >
                      <span className="font-mono text-xs text-[#c9a83e]">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
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
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="px-4 py-10 sm:px-6 sm:py-14">
          <div className="mx-auto max-w-6xl">
            <SectionHeading index="02" label="Tools of the trade" title="Skills" />
            <div className="grid gap-4 md:grid-cols-3">
              {skills.map((group, i) => (
                <div key={group.group} className="surface-card rounded-2xl p-6">
                  <div className="mb-5 flex items-center justify-between">
                    <h3 className="font-serif text-2xl text-[#eee6c9]">
                      {group.group}
                    </h3>
                    <span className="font-mono text-[0.65rem] text-[#c9a83e]">
                      0{i + 1}
                    </span>
                  </div>
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
            <SectionHeading index="03" label="Selected work" title="Projects" />
            <ol className="grid gap-4 lg:grid-cols-2">
              {projects.map((project, i) => (
                <li
                  key={project.title}
                  className="surface-card group flex flex-col rounded-2xl p-6 transition-colors hover:border-[#c9a83e]/30 sm:p-7"
                >
                  <div className="mb-7 flex items-center justify-between">
                    <span className="font-mono text-xs tracking-widest text-[#c9a83e]">
                      PROJECT / {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-white/30 transition-colors group-hover:text-[#e2c866]">
                      <Arrow />
                    </span>
                  </div>
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
              index="04"
              label="Milestones along the way"
              title="Achievements"
            />
            <ul className="surface-card divide-y divide-white/[0.08] rounded-2xl px-5 sm:px-8">
              {achievements.map((achievement, i) => (
                <li
                  key={achievement.title}
                  className="grid grid-cols-[2.5rem_1fr_auto] items-center gap-3 py-5 sm:grid-cols-[4rem_1fr_auto] sm:gap-5"
                >
                  <span className="font-mono text-xs text-[#c9a83e]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-white/90 sm:text-base">
                      {achievement.title}
                    </h3>
                    <p className="mt-1 text-xs text-white/45">
                      {achievement.issuer} · {achievement.date}
                    </p>
                  </div>
                  <span
                    className={`rounded-full px-3 py-1 font-mono text-[0.58rem] uppercase tracking-wider ${
                      achievement.type === "Award"
                        ? "bg-[#c9a83e] text-[#11110c]"
                        : "border border-white/15 text-white/55"
                    }`}
                  >
                    {achievement.type}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="contact" className="px-4 pb-12 pt-10 sm:px-6 sm:pb-16 sm:pt-14">
          <div className="hero-panel panel-grid relative mx-auto max-w-6xl overflow-hidden rounded-[1.75rem] px-6 py-9 sm:px-10 sm:py-12 lg:px-14">
            <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <p className="eyebrow mb-4">Have a project in mind?</p>
                <h2 className="font-serif text-[clamp(3.5rem,9vw,7rem)] leading-[0.82] text-[#eee6c9]">
                  Let&apos;s work
                  <br />
                  <span className="gold-text">together.</span>
                </h2>
                <p className="mt-5 max-w-xl text-sm leading-6 text-white/55">
                  I&apos;m open to internships, collaborations, and freelance
                  work. Feel free to reach out.
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
