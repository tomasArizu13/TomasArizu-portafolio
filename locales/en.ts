const en = {
  nav: {
    home: "Home",
    about: "About",
    experience: "Experience",
    projects: "Projects",
    contact: "Contact",
  },
  hero: {
    eyebrow: "Product · UX · Strategy",
    pill: "Open to product roles",
    headlineWords: ["I", "build", "products", "people", "actually", "want", "to", "use."],
    headlineUnderlineIndex: 2,
    description: "Product-minded builder with a business degree and a technical backbone. I like the messy part — figuring out the real problem — and the craft of shipping the solution.",
    spec: [
      { k: "Now", v: "QA Automation Engineer · Luno" },
      { k: "Education", v: "Digital Business · UdeSA" },
      { k: "Looking for", v: "A product role — PM / Analyst / Owner" }
    ],
    assertionsLabel: "running checks",
    assertions: ["product-minded", "technical", "validated before built"],
    scrollCue: "Scroll",
    scrollHint: "move · click to ping",
  },
  about: {
    title: "About Me",
    subtitle: "What I've built, why I care about product, and how I got here",
    hi: "Hi, I'm Tomas Arizu",
    content1: "I studied Digital Business at Universidad de San Andrés — but I learned the most by building. I've shipped MVPs, validated ideas with real users before writing a line of code, and today I keep a multi-platform product healthy as QA Automation Engineer at Luno. That role lets me see products from the inside: what breaks, where users get stuck, and what actually matters to ship.",
    content2: "What pulls me in is the full loop of product — talking to users, finding the real problem, deciding what's worth building, and sweating the details until it feels right. I'm comfortable on both sides: I can talk strategy with stakeholders and read the codebase with the devs.",
    content3: "Co-founded OneBite, a premium dining club, and validated it with 60+ real users before building.",
    keypoints: [
      "Product Discovery & Validation",
      "QA & Cross-Platform Testing",
      "MVP Building",
      "Stakeholder ↔ Dev Bridge"
    ],
    download: "Download Resume",
    skills: "Skills",
    skillGroups: [
      { category: "Product", items: ["User discovery & validation", "Feature definition", "Prioritization", "Prototyping", "MVP building"] },
      { category: "Technical / Testing", items: ["Playwright (TypeScript, POM)", "Maestro", "Test-case design", "Bug reporting", "Cross-platform testing"] },
      { category: "Technologies", items: ["TypeScript/JavaScript", "React", "Next.js", "SQL (basic)", "Python (basic)", "Three.js / React Three Fiber", "Solana / web3"] },
      { category: "Tools", items: ["Linear", "Notion", "Jira", "Figma", "GitHub"] },
      { category: "Languages", items: ["Spanish (native)", "English (C1 — Cambridge)"] }
    ]
  },
  howIThink: {
    title: "How I Think About Product",
    subtitle: "A few things I keep coming back to when building product",
    principles: [
      {
        title: "Start with the problem, not the feature.",
        body: "I'd rather validate demand with 60 surveys than build something nobody asked for. Every product I've worked on started with \"what's the actual problem here?\""
      },
      {
        title: "The user is the whole point.",
        body: "My QA work trained me to obsess over the real experience — where people get confused, where the flow breaks, what makes something feel effortless."
      },
      {
        title: "Ship, then learn.",
        body: "Prototypes over decks. I like getting something real in front of people fast and improving from there."
      }
    ]
  },
  experience: {
    title: "Experience",
    subtitle: "My professional journey and the experiences that shaped my expertise",
    items: [
      {
        title: "QA Automation Engineer",
        company: "Luno",
        location: "Remote",
        period: "Jan 2026 – Present",
        bullets: [
          "Ensure product quality across three platforms: Creator Hub (content creators), Adapt (a ChatGPT-style assistant), and Adium Pro (pharmaceutical).",
          "Act as the bridge between developers, design, and the client — detecting, documenting, and prioritizing issues, and translating needs into what to fix first.",
          "Built the test automation from scratch (Playwright + Maestro), with cross-platform coverage.",
          "Contributed feedback on product and UX decisions alongside the Head of Product."
        ],
        technologies: ["Playwright", "Maestro", "TypeScript", "Cross-platform QA"]
      },
      {
        title: "Operations Specialist (Internship)",
        company: "Globant · Disney Smart Parks",
        location: "Remote",
        period: "Dec 2024 – Apr 2025",
        bullets: [
          "Integrated Jira with Smartsheet dashboards for operational visibility, supporting Program Management.",
          "Turned operational and sensor data into actionable alerts; documented SOPs and cross-team handoffs."
        ],
        technologies: ["Jira", "Smartsheet", "Program Management", "SOPs"]
      }
    ]
  },
  projects: {
    title: "Featured Projects",
    subtitle: "A few of the strongest — problem, what I did, and the outcome",
    liveDemo: "Live Demo",
    viewDetails: "View Details",
    viewLive: "View Live Site",
    sourceCode: "Source Code",
    technologies: "Technologies Used:",
    problemLabel: "Problem",
    actionLabel: "Action",
    outcomeLabel: "Outcome",
    items: [
      {
        id: 1,
        title: "Lendit — Credit-Fund Manager for SMBs",
        problem: "Small and medium businesses in Argentina struggle to access working capital through traditional credit channels.",
        action: "Designed the end-to-end web prototype and led the demo-day pitch for a credit-fund manager built for SMBs, as my undergraduate thesis project.",
        outcome: "A working prototype and pitch that carried the project through demo day.",
        image: "/lendit.png",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
        liveUrl: "https://lendit-next-arg.vercel.app",
        githubUrl: "https://github.com/tomasArizu13/PrototipoLendit"
      },
      {
        id: 2,
        title: "OneBite — Premium Dining Club (Co-Founded)",
        problem: "People looking for high-end, multisensory dining experiences had no dedicated way to discover or access them.",
        action: "Identified the opportunity and validated demand with 60+ surveys of potential members before writing a line of code, then designed the membership structure, benefits, and landing experience.",
        outcome: "A live landing page at onebiteclub.com validated by strong survey demand — the club itself never got past that stage.",
        image: "/onebiteclub-screenshot.png",
        technologies: ["React", "Next.js", "Tailwind CSS", "Vercel"],
        liveUrl: "https://www.onebiteclub.com/"
      },
      {
        id: 3,
        title: "RealSync — AI Assistant for Real Estate",
        problem: "Real estate agents lose momentum when they can't respond to leads immediately.",
        action: "Designed and built the landing page and demo experience for RealSync, a conversational AI assistant that qualifies leads and answers real estate questions instantly.",
        outcome: "A working demo showing how an always-on assistant could plug into an agency's lead flow.",
        image: "/realsync-screenshot.png",
        technologies: ["Next.js", "Tailwind CSS", "Vercel", "React"],
        liveUrl: "https://real-sync-phi.vercel.app/",
        githubUrl: "https://github.com/tomasArizu13/RealSync"
      }
    ]
  },
  education: {
    title: "Education",
    subtitle: "Where the fundamentals came from",
    items: [
      {
        degree: "Digital Business",
        institution: "Universidad de San Andrés (UdeSA)",
        period: "2021 – 2026"
      },
      {
        degree: "Full-Stack Development Program (training)",
        institution: "Digital House",
        period: "2021 – 2023"
      },
      {
        degree: "Bilingual High School Diploma",
        institution: "Colegio Cardenal Newman",
        period: "2008 – 2020"
      }
    ]
  },
  contact: {
    title: "Now",
    subtitle: "What I'm doing, and where I'm headed",
    letsConnect: "Right Now",
    letsConnectDesc: "Wrapping up my Digital Business studies at UdeSA, keeping products healthy at Luno, and looking for a product role — PM, Product Analyst, or Product Owner — where I can own outcomes. If you're building something interesting, I'd love to talk.",
    emailLabel: "Email",
    emailValue: "tomasarizu13@gmail.com",
    linkedinLabel: "LinkedIn",
    linkedinValue: "linkedin.com/in/tomas-arizu",
    githubLabel: "GitHub",
    githubValue: "github.com/tomasArizu13",
    ctaTitle: "Let's Talk",
    ctaDesc: "Email, LinkedIn, or GitHub — whichever's easiest for you.",
    ctaButton: "Email Me"
  },
  footer: {
    copyright: "All rights reserved.",
    designed: "Designed by",
    portfolio: "tuportafolio.com"
  }
}

export default en; 