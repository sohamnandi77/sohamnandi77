import { Book, ClipboardCheck, FolderGit2, Home } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export const NAV_ITEMS = [
  {
    id: "#home",
    title: "Home",
    icon: Home,
  },
  {
    id: "#experience",
    title: "Experience",
    icon: Book,
  },
  {
    id: "#skills",
    title: "Skills",
    icon: ClipboardCheck,
  },
  {
    id: "#projects",
    title: "Projects",
    icon: FolderGit2,
  },
] as const;

export const SOCIALS = [
  {
    name: "Github",
    href: "https://github.com/sohamnandi77",
    icon: <FaGithub />,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/soham-nandi/",
    icon: <FaLinkedin />,
  },
  {
    name: "Email",
    href: "mailto:sohamnandi77@gmail.com",
    icon: <MdEmail />,
  },
];

export const WORK = [
  {
    id: "1",
    company: "Leadsquared",
    duration: "April 2024 - Present",
    designation: "Senior Software Engineer",
    responsibilities: [
      "Led the development of a central component library, standardizing design patterns across projects, which slashed development time by 20%, boosted cross-team collaboration by enabling 150+ developers to reuse components seamlessly, and elevated code quality.",
      "Revamped the legacy React codebase, achieving page load times under 2 seconds and elevating Web Core Vitals to over 85, resulting in a 30% increase in Net Promoter Score (NPS) and enhanced user experience (UX).",
      "Implemented AI-driven test case generation, enhancing testing speed by 40% and advocating for the adoption of AI tools like GitHub Copilot.",
    ],
  },
  {
    id: "2",
    duration: "April 2023 - March 2024",
    designation: "Software Engineer",
    responsibilities: [
      "Successfully developed a project from scratch to production, implementing key modules like incentives and leaderboards, resulting in a 25% increase in onboarding major clients and improved customer satisfaction.",
      "Implemented a microfrontend solution that allowed standalone module deployments, reducing deployment time by 36% , streamlining workflows and ensuring faster releases with zero downtime reported across 10+ production cycles.",
      "Achieved HIPAA compliance by strengthening security protocols and developing a secure OAuth 2.0 Identity Provider (IdP) solution, significantly enhancing system security and user authentication processes.",
    ],
  },
  {
    id: "3",
    duration: "July 2022 - March 2023",
    designation: "Associate Software Engineer",
    responsibilities: [
      "Developed internal tools to automate localization files, improving developer experience and introducing new design patterns.",
      "Implemented multi-theme, RTL, and accessibility support in Ace to enhance user experience.",
      "Built complex and customized incentive solutions in Ace to drive business growth.",
    ],
  },
  {
    id: "4",
    duration: "July 2021 - June 2022",
    designation: "Software Engineer - Intern",
    responsibilities: [
      "Created and documented reusable UI components in Storybook, optimizing development cycles and increasing release frequency from monthly to biweekly, contributing to a more agile development process.",
      "Recognized with 'Spotlight of the Month' in the Ace Team for impactful contributions to incentive and leaderboard workflows.",
    ],
  },
];

export const SKILLS = [
  {
    id: "1",
    title: "Languages/Core:",
    skills: [
      {
        name: "JavaScript",
        url: "https://res.cloudinary.com/dz7vrcmfw/image/upload/v1738142436/profile/skills/javascript.png",
        height: 64,
        width: 64,
      },
      {
        name: "TypeScript",
        url: "https://res.cloudinary.com/dz7vrcmfw/image/upload/v1738142436/profile/skills/typescript.png",
        height: 64,
        width: 64,
      },
      {
        name: "HTML5",
        url: "https://res.cloudinary.com/dz7vrcmfw/image/upload/v1738320204/profile/skills/html-5.png",
        height: 64,
        width: 64,
      },
      {
        name: "CSS3",
        url: "https://res.cloudinary.com/dz7vrcmfw/image/upload/v1738320392/profile/skills/css.png",
        height: 64,
        width: 64,
      },
      {
        name: "SASS",
        url: "https://res.cloudinary.com/dz7vrcmfw/image/upload/v1738321756/profile/skills/sass.png",
        height: 64,
        width: 64,
      },
      {
        name: "SQL",
        url: "https://res.cloudinary.com/dz7vrcmfw/image/upload/v1738323522/profile/skills/postgres.png",
        height: 64,
        width: 64,
      },
    ],
  },
  {
    id: "2",
    title: "Frontend Technologies:",
    skills: [
      {
        name: "React",
        url: "https://res.cloudinary.com/dz7vrcmfw/image/upload/v1738142436/profile/skills/react.png",
        height: 64,
        width: 64,
      },
      {
        name: "NextJS",
        url: "https://res.cloudinary.com/dz7vrcmfw/image/upload/v1738320593/profile/skills/nextjs.png",
        height: 64,
        width: 64,
      },
      {
        name: "Redux",
        url: "https://res.cloudinary.com/dz7vrcmfw/image/upload/v1738142436/profile/skills/redux.png",
        height: 64,
        width: 64,
      },
      {
        name: "Tailwind CSS",
        url: "https://res.cloudinary.com/dz7vrcmfw/image/upload/v1738322174/profile/skills/tailwind-css.png",
        height: 64,
        width: 107,
      },
      {
        name: "Framer Motion",
        url: "https://res.cloudinary.com/dz7vrcmfw/image/upload/v1738320960/profile/skills/framer-motion.png",
        height: 64,
        width: 64,
      },
      {
        name: "D3 JS",
        url: "https://res.cloudinary.com/dz7vrcmfw/image/upload/v1738320498/profile/skills/d3-js.png",
        height: 64,
        width: 64,
      },
      {
        name: "Storybook",
        url: "https://res.cloudinary.com/dz7vrcmfw/image/upload/v1738322042/profile/skills/storybook.png",
        height: 64,
        width: 64,
      },
      {
        name: "React Router",
        url: "https://res.cloudinary.com/dz7vrcmfw/image/upload/v1738321803/profile/skills/react-router.png",
        height: 64,
        width: 64,
      },
    ],
  },
  {
    id: "3",
    title: "API/Testing:",
    skills: [
      {
        name: "REST",
        url: "https://res.cloudinary.com/dz7vrcmfw/image/upload/v1738142436/profile/skills/rest.png",
        height: 64,
        width: 64,
      },
      {
        name: "GraphQL",
        url: "https://res.cloudinary.com/dz7vrcmfw/image/upload/v1738321379/profile/skills/graphql.png",
        height: 64,
        width: 64,
      },
      {
        name: "Jest",
        url: "https://res.cloudinary.com/dz7vrcmfw/image/upload/v1738321991/profile/skills/jest.png",
        height: 64,
        width: 64,
      },
      {
        name: "Vitest",
        url: "https://res.cloudinary.com/dz7vrcmfw/image/upload/v1738320868/profile/skills/vitest.png",
        height: 64,
        width: 64,
      },
    ],
  },
  {
    id: "4",
    title: "Cloud/DevOps:",
    skills: [
      {
        name: "AWS - S3",
        url: "https://res.cloudinary.com/dz7vrcmfw/image/upload/v1738142436/profile/skills/aws-s3.png",
        height: 64,
        width: 64,
      },
      {
        name: "AWS - Lambda",
        url: "https://res.cloudinary.com/dz7vrcmfw/image/upload/v1738322428/profile/skills/aws-lambda.png",
        height: 64,
        width: 64,
      },
      {
        name: "AWS - EC2",
        url: "https://res.cloudinary.com/dz7vrcmfw/image/upload/v1738142436/profile/skills/aws-ec2.png",
        height: 64,
        width: 64,
      },
      {
        name: "CI CD",
        url: "https://res.cloudinary.com/dz7vrcmfw/image/upload/v1738322938/profile/skills/ci-cd.png",
        height: 64,
        width: 128,
      },
      {
        name: "Docker",
        url: "https://res.cloudinary.com/dz7vrcmfw/image/upload/v1738320449/profile/skills/docker.png",
        height: 64,
        width: 64,
      },
    ],
  },
];

export const PROJECTS = [
  {
    id: "1",
    title: "Echo",
    tags: ["NextJS", "Tailwind"],
    description:
      "Echo is a pluggable feedback widget for web apps, offering seamless integration, analytics, and secure data handling.",
    imageUrl:
      "https://res.cloudinary.com/dz7vrcmfw/image/upload/v1738154420/profile/projects/echo.jpg",
    githubUrl: "https://github.com/sohamnandi77/echo-sass",
    liveDemoUrl: "https://echo.sohamnandi.com/",
  },
  {
    id: "2",
    title: "Compressify",
    tags: ["NextJS", "FFmpeg", "WASM"],
    description:
      "Compressify is a web-based video compression tool, enabling fast uploads and downloads.",
    imageUrl:
      "https://res.cloudinary.com/dz7vrcmfw/image/upload/v1738169832/profile/projects/compressify.png",
    githubUrl: "https://github.com/sohamnandi77/compressify",
    liveDemoUrl: "https://compressify.sohamnandi.com/",
  },
  {
    id: "3",
    title: "Storybook",
    tags: ["Storybook", "React Aria Components", "Tailwind"],
    description:
      "A customizable component library documented in Storybook for interactive testing and browsing of your design system.",
    imageUrl:
      "https://res.cloudinary.com/dz7vrcmfw/image/upload/v1738163245/profile/projects/storybook.png",
    githubUrl:
      "https://github.com/sohamnandi77/projects/tree/main/apps/storybook",
    liveDemoUrl: "https://storybook.sohamnandi.com/",
  },
  {
    id: "4",
    title: "Convertify",
    tags: ["NextJS", "FFmpeg", "WASM"],
    description:
      "Convertify is your free online tool for unlimited multimedia conversion, supporting images, videos, and audio.",
    imageUrl:
      "https://res.cloudinary.com/dz7vrcmfw/image/upload/v1738162681/profile/projects/convertify.png",
    githubUrl: "https://github.com/sohamnandi77/convertify",
    liveDemoUrl: "https://convertify.sohamnandi.com/",
  },
  {
    id: "5",
    title: "URL Checker Extension",
    tags: ["WXT", "Shadcn/ui", "Tailwind"],
    description:
      "URL Checker enhances online safety by scanning URLs for threats and unshortening links, ensuring secure browsing.",
    imageUrl:
      "https://res.cloudinary.com/dz7vrcmfw/image/upload/v1738164032/profile/projects/url-checker.png",
    githubUrl: "https://github.com/sohamnandi77/url-checker",
    liveDemoUrl: "",
  },
  {
    id: "6",
    title: "Speech guard",
    tags: ["Hono", "Upstash", "NextJS"],
    description:
      "SpeechGuard: A fast, free profanity filter for web apps, accurate detection and customizable, scalable solutions.",
    imageUrl:
      "https://res.cloudinary.com/dz7vrcmfw/image/upload/v1738163972/profile/projects/speech-guard.png",
    githubUrl: "https://github.com/sohamnandi77/speech-guard",
    liveDemoUrl: "https://speech-guard.sohamnandi.com/",
  },
  {
    id: "7",
    title: "Art Board",
    tags: ["NextJS", "Prisma", "Liveblocks"],
    description:
      "Art Board is a real-time collaborative design tool featuring live updates, shareable rooms, and advanced editing tools.",
    imageUrl:
      "https://res.cloudinary.com/dz7vrcmfw/image/upload/v1738169827/profile/projects/art-board.png",
    githubUrl: "https://github.com/sohamnandi77/art-board",
    liveDemoUrl: "https://art-board.sohamnandi.com/",
  },
  {
    id: "8",
    title: "Hangman",
    tags: ["React", "Vite", "Tailwind"],
    description:
      "Hangman: A classic word puzzle game, challenging players to guess hidden words while enhancing vocabulary skills.",
    imageUrl:
      "https://res.cloudinary.com/dz7vrcmfw/image/upload/v1738163573/profile/projects/hangman.png",
    githubUrl: "https://github.com/sohamnandi77/hangman",
    liveDemoUrl: "https://hangman.sohamnandi.com/",
  },
  {
    id: "9",
    title: "Design By Nidhi",
    tags: ["NextJS", "Framer Motion", "Tailwind"],
    description:
      "Design by Nidhi: A personal portfolio website showcasing the work of designer",
    imageUrl:
      "https://res.cloudinary.com/dz7vrcmfw/image/upload/v1738162392/profile/projects/design-by-nidhi.png",
    githubUrl: "",
    liveDemoUrl: "https://designbynidhi.com/",
  },
  {
    id: "10",
    title: "Filter Flow",
    tags: ["NextJS", "Upstash", "Tailwind"],
    description:
      "FilterFlow is a full-stack filtering system with dynamic search options, modern UI, and scalable architecture.",
    imageUrl:
      "https://res.cloudinary.com/dz7vrcmfw/image/upload/v1738163029/profile/projects/filter-flow.png",
    githubUrl: "https://github.com/sohamnandi77/filter-flow",
    liveDemoUrl: "https://filter-flow.sohamnandi.com/",
  },
];
