export const profile = {
  name: "Princess Mae Paras Rillora",
  shortName: "Princess",
  lastName: "Rillora",
  role: "BS Information Technology Student",
  headline: ["Information", "Technology", "Student"],
  availability: "Open to internships",
  tagline: "Building clean, useful things for the web.",
  intro:
    "I'm an aspiring web developer who enjoys turning ideas into simple, responsive websites and applications. I'm always learning new tools and looking for chances to grow.",
  photo: "/profile-transparent.png",
};

export const about = {
  paragraphs: [
    "Hi! I'm a student from Bulacan, Philippines, currently taking up BS Information Technology at La Consolacion University Philippines. I became interested in technology when my brother introduced me to his work as a developer.",
    "Outside of coding, I enjoy reading and spending time with my pets. My goal is to become a web developer and contribute to projects that make a positive impact.",
  ],
  education: [
    {
      level: "College",
      school: "La Consolacion University Philippines",
      program: "Bachelor of Science in Information Technology",
      years: "2023 – 2027",
    },
    {
      level: "Senior High School",
      school: "St. John the Baptist Catholic School",
      program: "STEM / ICT Strand",
      years: "2021 – 2023",
    },
    {
      level: "Junior High School",
      school: "St. John the Baptist Catholic School",
      program: "",
      years: "2017 – 2021",
    },
  ],
};

export const skills = [
  {
    group: "Languages",
    items: [
      { name: "HTML", level: 4 },
      { name: "CSS", level: 3 },
      { name: "JavaScript", level: 2 },
      { name: "TypeScript", level: 2 },
      { name: "C#", level: 3 },
      { name: "Kotlin", level: 3 },
      { name: "PHP", level: 2 },
      { name: "SQL", level: 3 },
    ],
  },
  {
    group: "Frameworks & Services",
    items: [
      { name: "Next.js", level: 3 },
      { name: "Tailwind CSS", level: 4 },
      { name: "MySQL", level: 3 },
      { name: "reCAPTCHA", level: 4 },
    ],
  },
  {
    group: "Tools",
    items: [
      { name: "Git & GitHub", level: 3 },
      { name: "VS Code", level: 3 },
      { name: "XAMPP", level: 3 },
      { name: "Figma", level: 4 },
    ],
  },
];

export const projects = [
  {
    title: "Personal Portfolio Website",
    description:
      "A responsive portfolio website built with Next.js and Tailwind CSS and deployed on Vercel.",
    tags: ["Next.js", "Tailwind CSS", "Vercel"],
    github: "https://github.com/princessmaerillora-svg/personal-portfolio",
    demo: "https://mypersonal-portfolio-topaz.vercel.app",
  },
  {
    title: "UBMS Maintenance and Reporting System",
    description:
      "A web system for La Consolacion University Philippines that makes maintenance requests and issue reporting faster and easier for maintenance personnel, students and teachers.",
    tags: ["TypeScript", "JavaScript", "MySQL", "Tailwind CSS"],
    github: "https://github.com/princessmaerillora-svg/ubms-lcup",
    demo: "https://ubms-lcup.vercel.app",
  },
  {
    title: "Student Planner App",
    description:
      "A simple school planner app that helps students organize their tasks and schedules, built with Kotlin and SQLite.",
    tags: ["SQLite", "Kotlin", "Android Studio"],
    github: "",
    demo: "",
  },
];

export type Achievement = {
  type: "Certificate" | "Award";
  title: string;
  issuer: string;
  date: string;
  image?: string;
  verifyUrl?: string;
};

export const achievements: Achievement[] = [
  {
    type: "Certificate",
    title: "Microsoft Office Specialist: Access 2019 Expert",
    issuer: "Microsoft",
    date: "December 21, 2025",
    image: "/certificates/mos-access-2019-expert.png",
  },
  {
    type: "Certificate",
    title: "Foundational C# with Microsoft",
    issuer: "freeCodeCamp × Microsoft",
    date: "October 9, 2025",
    image: "/certificates/foundational-csharp.png",
    verifyUrl:
      "https://freecodecamp.org/certification/fcc-9d1de4f2-de5d-4294-ab5d-625adb1fef3f/foundational-c-sharp-with-microsoft",
  },
  {
    type: "Award",
    title: "Dean's Lister",
    issuer: "La Consolacion University Philippines",
    date: "2024 and 2026",
  },
];

export const contact = {
  email: "princessmaerillora@gmail.com",
  phone: "+63 945 736 5628",
  location: "Bulacan, Philippines",
  links: [{ label: "GitHub", url: "https://github.com/princessmaerillora-svg" }],
};
