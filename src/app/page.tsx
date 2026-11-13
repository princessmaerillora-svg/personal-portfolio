import Image from "next/image";
import Navbar from "@/components/Navbar";
import {
  profile,
  about,
  skills,
  projects,
  achievements,
  contact,
} from "@/data/profile";

const badgeColors: Record<string, string> = {
  Certificate: "bg-violet-100 text-violet-700",
  Award: "bg-fuchsia-100 text-fuchsia-700",
  Seminar: "bg-indigo-100 text-indigo-700",
  Accomplishment: "bg-purple-100 text-purple-700",
};

function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-10">
      <p className="text-sm font-semibold uppercase tracking-widest text-violet-600">
        {eyebrow}
      </p>
      <h2 className="mt-2 text-3xl font-bold text-violet-950 sm:text-4xl">
        {title}
      </h2>
    </div>
  );
}

export default function Home() {

  return (
    <>
      <Navbar initials={profile.initials} />

      <main className="flex-1">
        {/* HOME */}
        <section
          id="home"
          className="relative overflow-hidden bg-gradient-to-br from-violet-950 via-purple-900 to-violet-800 pt-16 text-white"
        >
          <div className="mx-auto flex max-w-5xl flex-col-reverse items-center gap-10 px-4 py-20 sm:px-6 md:flex-row md:py-28">
            <div className="flex-1 text-center md:text-left">
              <p className="font-medium text-violet-300">Hello, I&apos;m</p>
              <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                {profile.name}
              </h1>
              <p className="mt-3 text-lg font-semibold text-fuchsia-300">
                {profile.role}
              </p>
              <p className="mt-4 text-xl italic text-violet-100">
                &ldquo;{profile.tagline}&rdquo;
              </p>
              <p className="mx-auto mt-5 max-w-xl leading-relaxed text-violet-200 md:mx-0">
                {profile.intro}
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start">
                <a
                  href="#projects"
                  className="rounded-full bg-white px-6 py-3 font-semibold text-violet-800 shadow-lg shadow-violet-950/40 transition hover:bg-violet-100"
                >
                  View my work
                </a>
                <a
                  href="#contact"
                  className="rounded-full border-2 border-violet-300 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
                >
                  Contact me
                </a>
                {profile.resumeUrl && (
                  <a
                    href={profile.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full px-6 py-3 font-semibold text-violet-200 underline-offset-4 hover:underline"
                  >
                    Résumé ↗
                  </a>
                )}
              </div>
            </div>

            <div className="shrink-0">
              {profile.photo ? (
                <Image
                  src={profile.photo}
                  alt={`Photo of ${profile.name}`}
                  width={280}
                  height={280}
                  priority
                  className="h-56 w-56 rounded-full object-cover ring-8 ring-violet-400/40 sm:h-72 sm:w-72"
                />
              ) : (
                <div className="grid h-56 w-56 place-items-center rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 text-6xl font-bold text-white ring-8 ring-violet-400/40 sm:h-72 sm:w-72">
                  {profile.initials}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="bg-violet-50 py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <SectionTitle eyebrow="About Me" title="Who I am" />
            <div className="grid gap-12 md:grid-cols-2">
              <div className="space-y-4 leading-relaxed text-violet-900/75">
                {about.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              <div>
                <h3 className="mb-6 text-lg font-bold text-violet-950">
                  Educational Background
                </h3>
                <ol className="relative space-y-6 border-l-2 border-violet-200 pl-6">
                  {about.education.map((e) => (
                    <li key={e.level} className="relative">
                      <span className="absolute -left-[33px] top-1 h-4 w-4 rounded-full border-4 border-white bg-violet-600 ring-2 ring-violet-200" />
                      <p className="text-xs font-semibold uppercase tracking-wide text-violet-600">
                        {e.level} · {e.years}
                      </p>
                      <p className="mt-1 font-semibold text-violet-950">{e.school}</p>
                      {e.program && (
                        <p className="text-sm text-violet-900/75">{e.program}</p>
                      )}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="bg-violet-100 py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <SectionTitle eyebrow="Skills" title="What I work with" />
            <div className="grid gap-6 md:grid-cols-3">
              {skills.map((g) => (
                <div
                  key={g.group}
                  className="rounded-2xl border border-violet-200 bg-white p-6 shadow-sm"
                >
                  <h3 className="mb-5 font-bold text-violet-700">{g.group}</h3>
                  <ul className="space-y-4">
                    {g.items.map((s) => (
                      <li key={s.name}>
                        <div className="mb-1 flex justify-between text-sm">
                          <span className="font-medium text-violet-950">{s.name}</span>
                          <span className="text-violet-500">{s.level}/5</span>
                        </div>
                        <div className="h-2 rounded-full bg-violet-100">
                          <div
                            className="h-2 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500"
                            style={{ width: `${s.level * 20}%` }}
                          />
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="bg-violet-50 py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <SectionTitle eyebrow="Projects" title="Things I've built" />
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((p) => (
                <article
                  key={p.title}
                  className="flex flex-col rounded-2xl border border-violet-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg hover:shadow-violet-100"
                >
                  <div className="mb-4 h-1.5 w-12 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-500" />
                  <h3 className="text-lg font-bold text-violet-950">{p.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-violet-900/75">
                    {p.description}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <li
                        key={t}
                        className="rounded-full bg-violet-100 px-3 py-1 text-xs font-medium text-violet-800"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                  {(p.github || p.demo) && (
                    <div className="mt-5 flex gap-4 text-sm font-semibold">
                      {p.github && (
                        <a href={p.github} target="_blank" rel="noopener noreferrer" className="text-violet-700 hover:underline">
                          Code ↗
                        </a>
                      )}
                      {p.demo && (
                        <a href={p.demo} target="_blank" rel="noopener noreferrer" className="text-violet-700 hover:underline">
                          Live demo ↗
                        </a>
                      )}
                    </div>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ACHIEVEMENTS */}
        <section id="achievements" className="bg-violet-100 py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <SectionTitle eyebrow="Achievements" title="Certificates & awards" />
            <div className="grid gap-4 sm:grid-cols-2">
              {achievements.map((a) => (
                <div
                  key={a.title}
                  className="flex items-start gap-4 rounded-2xl border border-violet-200 bg-white p-5 shadow-sm"
                >
                  <span className={`shrink-0 rounded-full px-3 py-1 text-xs font-semibold ${badgeColors[a.type]}`}>
                    {a.type}
                  </span>
                  <div>
                    <h3 className="font-bold text-violet-950">{a.title}</h3>
                    <p className="text-sm text-violet-900/75">
                      {a.issuer} · {a.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="bg-gradient-to-br from-violet-700 to-fuchsia-700 py-20 text-white">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
            <p className="text-sm font-semibold uppercase tracking-widest text-violet-200">
              Contact Me
            </p>
            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Let&apos;s work together</h2>
            <p className="mx-auto mt-4 max-w-xl text-violet-100">
              I&apos;m open to internships, collaborations, and freelance work.
              Feel free to reach out!
            </p>
            <a
              href={`mailto:${contact.email}`}
              className="mt-8 inline-block rounded-full bg-white px-8 py-3 font-semibold text-violet-700 shadow-lg transition hover:bg-violet-50"
            >
              {contact.email}
            </a>
            <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-3 text-violet-100">
              {contact.phone && (
                <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="hover:text-white">
                  📞 {contact.phone}
                </a>
              )}
              <span>📍 {contact.location}</span>
              {contact.links.map((l) => (
                <a
                  key={l.label}
                  href={l.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium underline-offset-4 hover:text-white hover:underline"
                >
                  {l.label} ↗
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-violet-950 py-6 text-center text-sm text-violet-300">
        © 2026 {profile.name}. Built with Next.js & deployed on Vercel.
      </footer>
    </>
  );
}
