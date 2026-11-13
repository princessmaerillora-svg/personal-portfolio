// ============================================================
//  EDIT THIS FILE WITH YOUR OWN INFORMATION.
//  Every section of the website reads from here, so you
//  never need to touch the page code to change your content.
//  Lines marked TODO are placeholders you must replace.
// ============================================================

export const profile = {
  name: "Princess Mae Paras Rillora", // TODO
  initials: "PR", // shown in the navbar circle
  role: "BS Information Technology Student", // TODO
  tagline: "Building clean, useful things for the web.", // TODO
  intro:
    "I'm an aspiring web developer who enjoys turning ideas into simple, responsive websites and applications. I'm always learning new tools and looking for chances to grow.", // TODO

  // Put your photo in the /public folder (e.g. public/profile.jpg)
  // and set this to "/profile.jpg". Leave "" to show your initials.
  photo: "/profile.png",

  resumeUrl: "", // optional: e.g. "/resume.pdf" (place file in /public)
};

export const about = {
  paragraphs: [
    "Hi! I'm a student from Bulacan, Philippines currently taking up BS Information Technology at La Consolacion University. I became interested in technology when my brother introduced me to his work as a developer.", // TODO
    "Outside of coding, I enjoy reading and spending time with my pets. My goal is to become a web developer and contribute to projects that make a positive impact.", // TODO
  ],
  education: [
    {
      level: "College",
      school: "La Consolacion University", // TODO
      program: "Bachelor of Science in Information Technology", // TODO
      years: "2023 – 2027", // TODO
    },
    {
      level: "Senior High School",
      school: "St. John the Baptist Catholic School", // TODO
      program: "STEM / ICT Strand", // TODO
      years: "2021 – 2023", // TODO
    },
    {
      level: "Junior High School",
      school: "St. John the Baptist Catholic School", // TODO
      years: "2017 – 2021", // TODO
    },
  ],
};

// level: 1–5 (shown as a bar). Remove or add skills freely.
export const skills = [
  {
    group: "Languages",
    items: [
      { name: "HTML", level: 3 },
      { name: "CSS", level: 4 },
      { name: "JavaScript", level: 3 },
      { name: "PHP", level: 2 },
      { name: "SQL", level: 3 },
    ],
  },
  {
    group: "Frameworks & Libraries",
    items: [
      { name: "Next.js", level: 3 },
      { name: "Tailwind CSS", level: 2 },
    ],
  },
  {
    group: "Tools",
    items: [
      { name: "Git & GitHub", level: 3 },
      { name: "VS Code", level: 3 },
      { name: "XAMPP / MySQL", level: 3 },
      { name: "Figma", level: 4 },
    ],
  },
];

export const projects = [
  {
    title: "Personal Portfolio Website", // this project!
    description:
      "A responsive portfolio built with Next.js and Tailwind CSS, deployed on Vercel.",
    tags: ["Next.js", "Tailwind CSS", "Vercel"],
    github: "https://github.com/princessmaerillora-svg/personal-portfolio.git", // TODO
    demo: "", // TODO: paste your Vercel URL after deploying
  },
  {
    title: "Project Two", // TODO
    description:
      "Short description of what the project does, who it's for, and what you built.", // TODO
    tags: ["PHP", "MySQL"], // TODO
    github: "", // TODO (optional)
    demo: "",
  },
  {
    title: "Project Three", // TODO
    description:
      "Could also be a school activity, hackathon, or org event you organized or joined.", // TODO
    tags: ["HTML", "CSS", "JavaScript"], // TODO
    github: "",
    demo: "",
  },
];

// type must be one of: "Certificate" | "Award" | "Seminar" | "Accomplishment"
export const achievements = [
  {
    type: "Certificate",
    title: "Certificate Name", // TODO
    issuer: "Issuing Organization", // TODO
    date: "2025", // TODO
  },
  {
    type: "Award",
    title: "Dean's Lister / Award Name", // TODO
    issuer: "Your University", // TODO
    date: "2024", // TODO
  },
  {
    type: "Seminar",
    title: "Seminar / Webinar Title", // TODO
    issuer: "Organizer", // TODO
    date: "2024", // TODO
  },
  {
    type: "Accomplishment",
    title: "Something you're proud of", // TODO
    issuer: "Context", // TODO
    date: "2023", // TODO
  },
] as const;

export const contact = {
  email: "you@example.com", // TODO
  phone: "", // optional, e.g. "+63 900 000 0000"
  location: "City, Country", // TODO
  links: [
    { label: "GitHub", url: "https://github.com/YOUR-USERNAME" }, // TODO
    { label: "LinkedIn", url: "https://linkedin.com/in/YOUR-NAME" }, // TODO
  ],
};
