export const site = {
  name: "Brian Cochran",
  role: "Software Engineer",
  school: "CS + Economics @ Illinois · Class of 2028",
  email: "cochranbrian424@gmail.com",
  github: "https://github.com/cochran-brian",
  linkedin: "https://linkedin.com/in/cochran-brian",
  url: "https://briancochran.dev",
};

export type Experience = {
  company: string;
  role: string;
  dates: string;
  summary: string;
  points: string[];
  stack: string[];
};

export const experience: Experience[] = [
  {
    company: "Synchrony",
    role: "Software Engineering Intern",
    dates: "Jan 2026 – Present",
    summary:
      "Fraud graphs, payment SDKs, and AI codegen agents at a Fortune 200 bank.",
    points: [
      "Built AI code-gen agents automating SDK implementation from Jira ticket to Bitbucket PR, cutting manual effort 60%",
      "Shipped payment, card-access, and subscription modules in an SDK powering 5 teams' apps used by millions",
      "Architected graph-based fraud detection in Neo4j, part of a $130M+ annual fraud-prevention run rate",
      "Built distributed data-ingestion pipelines on Apache Spark and Hadoop feeding the fraud graph on AWS",
    ],
    stack: ["Neo4j", "Spark", "Hadoop", "AWS", "Kotlin"],
  },
  {
    company: "CUBE Consulting",
    role: "Business & Engineering Consultant",
    dates: "Sep 2025 – Dec 2025",
    summary: "AI tutoring tools for a real client, demoed end-to-end.",
    points: [
      "Built an AI tutoring assistant (Speech-to-Text + OpenAI) surfacing real-time prompts from live tutoring dialogue",
      "Delivered an end-to-end demo to client Zentora on a Zoom-SDK video platform with scheduling and feedback",
    ],
    stack: ["OpenAI", "Zoom SDK", "Speech-to-Text"],
  },
  {
    company: "iQor",
    role: "Software Engineering Intern",
    dates: "May 2025 – Aug 2025",
    summary: "Shipped mobile UI work and test automation for an app with 40,000+ users.",
    points: [
      "Rebuilt core UI flows for the iQorian app (40,000+ users), improving consistency and usability across the mobile experience",
      "Built Appium test suites across mobile UI and backend APIs, adding automated regression coverage to CI/CD",
    ],
    stack: ["React Native", "Appium", "CI/CD"],
  },
  {
    company: "Cal AI",
    role: "Software Engineering Intern",
    dates: "Jun 2024 – Aug 2024",
    summary:
      "LLM-powered features at a startup later acquired for $100M+ by MyFitnessPal.",
    points: [
      "Reworked the food-detection correction pipeline to parse natural-language edits with cloud LLMs, +20% accuracy in production",
      "Migrated AWS Lambda from Python to TypeScript, cutting costs ~40%",
    ],
    stack: ["TypeScript", "AWS Lambda", "LLMs"],
  },
];

export type Project = {
  name: string;
  tagline: string;
  description: string;
  metric: { value: string; label: string };
  points: string[];
  stack: string[];
  dates: string;
};

export const projects: Project[] = [
  {
    name: "Cascade",
    tagline: "Graph RAG for sentiment cascades",
    description:
      "A retrieval system that models how sentiment ripples through connected entities, built for the multi-hop questions flat vector search gets wrong. A Neo4j schema with 5 weighted relationship types and an N-hop Cypher retriever traces cascading impacts that embeddings alone miss.",
    metric: { value: "100%", label: "entity recall vs 76% for flat vector search" },
    points: [
      "LLM-as-judge eval harness where the graph won 75% of head-to-head multi-hop queries vs flat RAG",
      "N-hop Cypher retriever over 5 weighted relationship types",
    ],
    stack: ["Python", "Neo4j", "ChromaDB", "FastAPI", "Next.js", "AWS S3", "Claude"],
    dates: "2026",
  },
  {
    name: "drnk",
    tagline: "Screen time you have to earn",
    description:
      "An iOS app that locks your distracting apps behind verified hydration. Apple DeviceActivity + FamilyControls gate screen time; a fail-closed computer-vision pipeline verifies the water is real; a deterministic, unit-tested economy engine handles caps, cooldowns, streaks, and multipliers.",
    metric: { value: "fail-closed", label: "CV verification with no image storage and GDPR deletion" },
    points: [
      "On-device frames verified via Gemini vision, engineered to fail closed on false positives",
      "Privacy-first serverless backend with server-side keys",
    ],
    stack: ["React Native", "Expo", "Supabase", "Deno", "Gemini", "TypeScript"],
    dates: "2026 – Present",
  },
  {
    name: "Liftype",
    tagline: "Local-first lifting, parsed from plain English",
    description:
      "A lifting app that understands \"bench 3x8 at 185, felt easy\". A regex fast-path handles the common cases and a Claude fallback catches the rest, so most logs never touch an LLM. Fully offline-capable with an outbox syncing to Supabase.",
    metric: { value: "80%", label: "fewer LLM calls via the regex fast-path" },
    points: [
      "Local-first architecture: offline by default, outbox sync to Supabase",
      "Postgres + RLS + edge functions, LLM workout coaching, RevenueCat, OAuth",
    ],
    stack: ["Expo", "React Native", "TypeScript", "Supabase", "Claude"],
    dates: "2026 – Present",
  },
];

export type Leadership = {
  org: string;
  role: string;
  dates: string;
  note: string;
};

export const leadership: Leadership[] = [
  {
    org: "Metanoia",
    role: "Co-Founder & President",
    dates: "Mar 2026 – Present",
    note: "Co-founded a Greek Life outreach initiative at UIUC that drew 200+ attendees to its inaugural event, with grassroots marketing and recruiting pipelines across chapters.",
  },
  {
    org: "Sigma Alpha Epsilon, Illinois Beta",
    role: "Vice President & Small Group Leader",
    dates: "Apr 2025 – Present",
    note: "Elected VP of a 100+ member chapter. Lead daily operations and facilitate a weekly small group with original personal-development curriculum.",
  },
  {
    org: "Phi Gamma Nu Business Fraternity",
    role: "Philanthropy & Wellness Committee",
    dates: "Sep 2025 – Present",
    note: "Selected 1 of 30 from 900+ applicants. Raised $1,000 for Camp Kesem, supporting children of cancer patients.",
  },
];

export const skills: { group: string; items: string[] }[] = [
  {
    group: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "Java", "Kotlin", "C/C++", "SQL"],
  },
  {
    group: "Full-Stack",
    items: ["React", "Next.js", "Node.js", "FastAPI", "REST APIs"],
  },
  {
    group: "Mobile",
    items: ["React Native", "Expo", "iOS", "Android", "Supabase", "RevenueCat", "Appium"],
  },
  {
    group: "Data & Infra",
    items: ["Neo4j", "ChromaDB", "PostgreSQL", "Spark", "Hadoop", "AWS", "Docker"],
  },
];
