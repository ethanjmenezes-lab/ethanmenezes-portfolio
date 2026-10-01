export type Metric = { value: string; label: string };
export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  role: string;
  period: string;
  stack: string[];
  stackLabel: string;
  problem: string;
  contributions: { title: string; description: string }[];
  details: { title: string; description: string }[];
  takeaways: string[];
  takeawayLabel: string;
  metrics: Metric[];
  metricNote: string;
  outcome: string;
  visual: "review-flow" | "product";
  media?: {
    src: string;
    alt: string;
    caption: string;
    width: number;
    height: number;
  };
  github?: string;
  demo?: string;
  channel?: string;
};

const projects: Project[] = [
  {
    slug: "team-velo",
    title: "Team Velo",
    subtitle: "Making document changes easier to review.",
    category: "01 / APPLIED AI & SOFTWARE",
    description:
      "An automated document-review prototype built with a team at Aggies Invent, in partnership with Pantex. My focus: the review experience, rewrite validation, and document comparison.",
    role: "Team contributor · review application & APIs",
    period: "September 2026 · Aggies Invent / Pantex",
    stack: ["Next.js", "React", "TypeScript", "Python", "Web Workers"],
    stackLabel: "Technologies",
    problem:
      "A proposed policy change can affect more than one document. Our team worked on a prototype to help reviewers assess Department of Energy policy changes and proposed updates, with clear ways to approve, reject, or revise a change.",
    contributions: [
      {
        title: "A review experience with clear decisions",
        description:
          "I developed React/Next.js review features, including approval, rejection, and revision controls. I also worked on project context and review-state management so the application could represent a reviewer’s decisions.",
      },
      {
        title: "Validation around generated rewrites",
        description:
          "I implemented a rewrite API with input validation and structured-response checks, and added automated tests covering invalid responses and review-state transitions.",
      },
      {
        title: "Comparison that points back to the document",
        description:
          "I built word-level document comparison with sequence-matching algorithms and a Web Worker, producing page-linked results. I added document-comparison tests and collaborated through GitHub branches, pull requests, and merges.",
      },
    ],
    details: [
      {
        title: "Treat generated output as input to validate",
        description:
          "The rewrite API checked both incoming requests and the structure of returned responses. These checks make the boundary between AI-assisted analysis and the review interface explicit.",
      },
      {
        title: "Move comparison work off the UI thread",
        description:
          "The Web Worker separated sequence-matching work from the interface. Page-linked comparison results connected a detected change to its location in the document.",
      },
      {
        title: "Test the decisions, not just the happy path",
        description:
          "Automated tests covered review-state transitions, invalid responses, and comparison behavior. GitHub branches and pull requests supported parallel work during a fast-moving team build.",
      },
    ],
    takeaways: [
      "AI-assisted workflows need explicit validation and human review controls.",
      "A useful comparison identifies both what changed and where to find it.",
      "State transitions and invalid responses deserve the same attention as successful requests.",
    ],
    takeawayLabel: "Engineering takeaways",
    metrics: [
      { value: "3rd", label: "Team placement" },
      { value: "$1,500", label: "Team prize" },
    ],
    metricNote: "Aggies Invent – Pantex · September 2026 · team results",
    outcome:
      "Our team placed third and received a $1,500 prize. The hackathon prototype brought AI-assisted analysis and explicit review controls together around a real document-change workflow.",
    visual: "review-flow",
  },
  {
    slug: "satprep1600",
    title: "SATPrep1600",
    subtitle: "From a study problem to a real product.",
    category: "02 / PRODUCT & ENTREPRENEURSHIP",
    description:
      "An SAT-preparation platform I co-founded and helped build and grow. It connects my interest in practical software with education, content, and the work of reaching real users.",
    role: "Co-founder · product development, content & growth",
    period: "2026–Present",
    stack: ["Education", "AI-assisted learning", "Product development"],
    stackLabel: "Product focus",
    problem:
      "SAT preparation is about more than finding another set of questions. Students need useful explanations and a clearer sense of what to work on. SATPrep1600 brings preparation tools and educational content together around that need.",
    contributions: [
      {
        title: "Help build a product people use",
        description:
          "I co-founded SATPrep1600 and helped build and grow the SAT-preparation product. It serves active users and monthly subscribers, extending the work beyond a classroom assignment.",
      },
      {
        title: "Make educational content part of the product",
        description:
          "I created SAT-preparation content and co-founded the SATPrep1600AI YouTube channel. I helped grow the channel to approximately 849 subscribers.",
      },
    ],
    details: [
      {
        title: "A product with an audience",
        description:
          "The résumé snapshot records 60+ active users and 10 monthly subscribers. These are reported product metrics, rather than a live analytics feed.",
      },
      {
        title: "Software and content working together",
        description:
          "The public product offers AI-assisted SAT coaching, practice tests, and essay evaluation. The YouTube channel offers another way to reach students with preparation content.",
      },
      {
        title: "Building beyond the classroom",
        description:
          "Co-founding SATPrep1600 connects product development with content and entrepreneurship. Reaching users and building an educational audience are part of the work alongside the software itself.",
      },
    ],
    takeaways: [
      "Building an education product brings the learning experience and the software experience together.",
      "Content is another way to make a product useful and reach its audience.",
      "Active users, paying subscribers, and content reach describe different parts of product traction.",
    ],
    takeawayLabel: "Product takeaways",
    metrics: [
      { value: "60+", label: "Active users" },
      { value: "10", label: "Monthly subscribers" },
      { value: "~849", label: "YouTube subscribers" },
    ],
    metricNote: "Résumé snapshot · supplied October 2026 · not live analytics",
    outcome:
      "SATPrep1600 has active users, monthly paying subscribers, and an educational content audience. It is an opportunity to keep developing both the product and the judgment that comes with building something people use.",
    visual: "product",
    media: {
      src: "/projects/satprep1600.jpg",
      alt: "SATPrep1600 public homepage introducing its SAT coaching, practice tests, and essay evaluation tools.",
      caption:
        "Public SATPrep1600 homepage · captured October 2026. Product appearance and offers may change.",
      width: 1200,
      height: 820,
    },
    demo: "https://www.satprep1600.com/",
    channel: "https://www.youtube.com/@satprep1600AI",
  },
];

// Personal content lives here. Omit unknown URLs rather than using placeholder links.
export const portfolio = {
  name: "Ethan Menezes",
  siteUrl: "",
  headline: "Computer Science + AI Engineering",
  intro:
    "Freshman General Engineering student at Texas A&M, planning to enter Computer Science. Building toward intelligent software, useful AI systems, and practical products.",
  school: "Texas A&M University",
  location: "College Station, TX",
  bio: "I’m early in my CS journey, and I’m finding the most useful lessons by building. I’m a freshman General Engineering student at Texas A&M, planning to enter Computer Science, with a growing interest in AI engineering and software that solves practical problems.",
  bioSecondary:
    "I completed Harvard’s CS50x in 2026. My direction is taking shape through projects, hackathons, coursework, and self-study: build a strong foundation, work with other people, and keep taking on harder technical questions.",
  interests: [
    "Practical AI products",
    "Computer vision",
    "Research",
    "GPU computing",
    "Entrepreneurship",
  ],
  contact: {
    email: "ethanmenezes@gmail.com",
    github: "https://github.com/ethanjmenezes-lab",
    linkedin: "",
  },
  resume: {
    url: "/resume.pdf",
    summary:
      "For the full picture: education, technical projects, work experience, leadership, and honors.",
  },
  projects,
  foundations: [
    {
      title: "Speller",
      context: "CS50x · C",
      description:
        "A dictionary and spell checker using a hash table with linked lists. I implemented dictionary loading and case-insensitive lookup, with dynamic memory allocation and cleanup.",
      concepts: ["Hash tables", "Linked lists", "Memory management"],
    },
    {
      title: "DNA Profiler",
      context: "CS50x · Python",
      description:
        "I loaded CSV profiles and DNA sequence files, used the supplied repeat-counting logic, and matched short tandem repeat counts to records to identify a match or report none.",
      concepts: ["CSV processing", "File I/O", "Record matching"],
    },
  ],
  explorationIntro:
    "I’m building foundations for future AI engineering and research through coursework, self-study, and hands-on projects. These are the questions and tools I’m exploring next.",
  exploration: [
    {
      title: "ML foundations",
      number: "01",
      topics: ["Neural networks", "Transformers", "Reinforcement learning"],
      description:
        "Developing the mathematical and programming foundations to understand how learning systems work.",
      direction: "Toward AI/ML research",
    },
    {
      title: "Vision & GPU computing",
      number: "02",
      topics: ["Computer vision", "CUDA", "GPU acceleration"],
      description:
        "Exploring how models interpret visual data and how GPU computing supports more demanding AI workloads.",
      direction: "Toward larger-scale AI systems",
    },
    {
      title: "Agents & practical products",
      number: "03",
      topics: ["Codex", "AI agents", "Data science"],
      description:
        "Exploring agentic development tools and how to turn AI capabilities into useful, understandable software.",
      direction: "Toward useful AI products",
    },
  ],
  skills: [
    {
      title: "Languages",
      items: ["Python", "C", "JavaScript / TypeScript", "SQL", "HTML / CSS"],
      note: "Coursework and project foundations",
    },
    {
      title: "Frameworks / Tools",
      items: ["React / Next.js", "Git / GitHub", "VS Code", "Codex", "Vercel"],
      note: "Building, collaborating, and deploying",
    },
    {
      title: "Currently Learning",
      items: [
        "Machine learning / PyTorch",
        "Computer vision",
        "CUDA / GPU computing",
        "AI agents",
      ],
      note: "An active learning direction",
    },
  ],
  experience: [
    {
      category: "FOUNDATIONS",
      title: "Texas A&M + CS50x",
      detail:
        "General Engineering, pursuing Computer Science · Engineering Honors. Completed Harvard CS50x in 2026.",
      label: "Expected 2030",
    },
    {
      category: "TEAMWORK",
      title: "Jersey Mike’s",
      detail:
        "Trained and supported 10+ new hires as a shift lead / crew member, with 800+ hours across service and daily operations.",
      label: "2023–2026",
    },
    {
      category: "SERVICE",
      title: "Young Men’s Service League",
      detail:
        "As president, led meetings and coordinated service activities involving 50+ peers; completed 200+ service hours.",
      label: "2023–2025",
    },
    {
      category: "INITIATIVE",
      title: "Team Cancel Cancer",
      detail:
        "Co-founded a team that helped raise $11,000+ for cancer research and patient support through campaigns and outreach.",
      label: "2023",
    },
    {
      category: "ENTREPRENEURSHIP",
      title: "SLC Detailing",
      detail:
        "Founded an auto-detailing business, supervised two part-time employees, and generated $1,000+ in revenue.",
      label: "2024–2026",
    },
  ],
  honors: [
    "One Southlake Scholarship · 1st place, $2,000 (2026)",
    "Nebustream Technology Development Scholarship · Finalist",
    "BPA Cybersecurity & DECA Business Finance · State qualifier (2024)",
  ],
  hardware: [
    { label: "Case", value: "Phanteks NV7" },
    { label: "Graphics", value: "MSI SUPRIM X RTX 4070 Ti" },
    { label: "Processor", value: "Intel Core i7-14700K" },
    { label: "Memory", value: "32 GB DDR5" },
    { label: "Storage", value: "Multiple NVMe SSDs" },
    { label: "Cooling", value: "360 mm AIO · D30-style fans" },
  ],
};
