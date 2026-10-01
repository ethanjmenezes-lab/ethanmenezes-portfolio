export type Project = {
  title: string;
  category: string;
  description: string;
  stack: string[];
  impact: string;
  visual: "neural" | "orbit" | "wave";
  github?: string;
  demo?: string;
  placeholder: boolean;
};

// Edit this file to personalize the site. Omit unavailable URLs; never use "#".
export const portfolio = {
  name: "Ethan Menezes",
  // Optional custom domain; Vercel's deployment URL is used automatically otherwise.
  siteUrl: "",
  headline: "Engineering student. Software, AI & things that matter.",
  intro:
    "Exploring the intersection of software, intelligence, and real-world impact. Built with curiosity, from the hardware up.",
  location: "College Station, TX",
  school: "Texas A&M University",
  bio: "I’m a first-year engineering student at Texas A&M with an interest in computer science, AI/ML, and software engineering. I’m drawn to the process of turning an idea into something useful — understanding how it works, building it, and making it better.",
  bioSecondary:
    "My PC setup is an extension of that curiosity: carefully chosen parts, a little experimentation, and an appreciation for the details. This portfolio brings that same approach to the web.",
  interests: [
    "Artificial intelligence",
    "Software engineering",
    "Impactful projects",
    "PC hardware",
  ],
  // Set these to your real addresses to enable the contact links.
  contact: { email: "", github: "", linkedin: "" },
  // Add public/resume.pdf, then set url to "/resume.pdf".
  resume: {
    url: "",
    summary:
      "First-year engineering student at Texas A&M University, interested in computer science, AI/ML, software engineering, and building impactful technical projects.",
  },
  projects: [
    {
      title: "Intelligence, applied.",
      category: "01 / AI & MACHINE LEARNING",
      description:
        "A space for an AI project that turns complex information into useful answers. Replace this sample with your own problem, approach, and implementation.",
      stack: ["Python", "PyTorch", "FastAPI"],
      impact: "Intended impact: make information easier to understand and use.",
      visual: "neural",
      placeholder: true,
    },
    {
      title: "Ideas into interfaces.",
      category: "02 / SOFTWARE ENGINEERING",
      description:
        "A space for a thoughtful web application. Share what you built, who it helps, and the decisions that made the experience better.",
      stack: ["Next.js", "TypeScript", "PostgreSQL"],
      impact:
        "Intended impact: turn a repetitive workflow into a simple experience.",
      visual: "orbit",
      placeholder: true,
    },
    {
      title: "Signals into stories.",
      category: "03 / DATA & EXPLORATION",
      description:
        "A space for an experiment with data. Show how you explored a question, tested an idea, and communicated what you learned.",
      stack: ["Python", "Pandas", "Matplotlib"],
      impact: "Intended impact: reveal useful patterns in a complex dataset.",
      visual: "wave",
      placeholder: true,
    },
  ] satisfies Project[],
  skills: [
    {
      title: "Languages",
      items: ["Python", "TypeScript", "JavaScript", "C++"],
    },
    { title: "Frameworks", items: ["React", "Next.js", "Tailwind CSS"] },
    { title: "AI / ML", items: ["PyTorch", "NumPy", "Pandas"] },
    { title: "Tools", items: ["Git", "GitHub", "VS Code", "Linux"] },
    { title: "Deployment / Cloud", items: ["Vercel", "Docker", "AWS"] },
  ],
  skillsAreExamples: true,
  experience: [
    {
      category: "EDUCATION",
      title: "Texas A&M University",
      detail:
        "First-year engineering student exploring computer science, AI/ML, and software engineering.",
      label: "Present",
      placeholder: false,
    },
    {
      category: "HACKATHONS & PROJECTS",
      title: "Room for the next build",
      detail:
        "Add a hackathon or collaborative project, your role, and what your team accomplished.",
      label: "Placeholder",
      placeholder: true,
    },
    {
      category: "RESEARCH & LEADERSHIP",
      title: "Questions worth exploring",
      detail:
        "Add research involvement, student organizations, or a leadership role here.",
      label: "Placeholder",
      placeholder: true,
    },
    {
      category: "WORK EXPERIENCE",
      title: "The next chapter",
      detail:
        "Add an internship or work role, your contributions, and a concrete result.",
      label: "Placeholder",
      placeholder: true,
    },
  ],
};
