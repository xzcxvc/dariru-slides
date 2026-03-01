import {
  Hand,
  BrainCircuit,
  Sparkles,
  Lightbulb,
  Atom,
  Bookmark,
  Book,
} from "lucide-react";
import AiEra from "/aiera.png";
import AtomicDesign from "/atomicdesign.png";
import Documentation from "/documentation.png";
import TechStach from "/techstack.png";

export const navItems = [
  {
    id: 1,
    name: "Welcome",
    href: "#welcome",
    icon: Hand,
  },
  {
    id: 2,
    name: "Learnings",
    href: "#learnings",
    icon: BrainCircuit,
  },
  {
    id: 3,
    name: "Nice to Haves",
    href: "#nice-to-haves",
    icon: Sparkles,
  },
  {
    id: 4,
    name: "Realizations",
    href: "#realizations",
    icon: Lightbulb,
  },
];

export const welcomeWords = [
  { id: 1, word: "Explore our ", type: "normal" },
  { id: 2, word: "insights", type: "animated" },
  { id: 3, word: ", learn from our ", type: "normal" },
  { id: 4, word: "missteps", type: "animated" },
  { id: 5, word: ", and celebrate the ", type: "normal" },
  { id: 6, word: "discoveries", type: "animated" },
  { id: 7, word: " that light the path ahead.", type: "normal" },
];

export const niceToHaves = [
  {
    id: 1,
    name: "Implementation of Atomic Design",
    description:
      "<Adopting Atomic Design principles for better component organization and scalability./>",
    icon: Atom,
  },
  {
    id: 2,
    name: "Custom Component Documentation",
    description:
      "<Creating comprehensive documentation for custom components to enhance team collaboration and onboarding./>",
    icon: Book,
  },
];

export const learnings = [
  {
    id: 1,
    name: "New Tech Stack",
    thumbnail: TechStach,
    topics: [
      {
        id: 1,
        name: "React JS",
        context: "Builds fast, interactive user interfaces.",
      },
      {
        id: 2,
        name: "TypeScript",
        context: "Adds type safety and better scalability.",
      },
      {
        id: 3,
        name: "TailwindCSS",
        context: "Enables rapid, responsive UI styling.",
      },
    ],
  },
  {
    id: 2,
    name: "Atomic Design",
    thumbnail: AtomicDesign,
    topics: [
      {
        id: 1,
        name: "Atoms",
        context: "Basic UI elements like buttons, inputs, and labels.",
      },
      {
        id: 2,
        name: "Molecules",
        context: "Small groups of atoms forming simple components.",
      },
      {
        id: 3,
        name: "Organisms",
        context: "Complex sections composed of multiple molecules.",
      },
      {
        id: 4,
        name: "Templates",
        context: "Page layouts arranging organisms into structure.",
      },
      {
        id: 5,
        name: "Pages",
        context: "Complete screens with real content and data.",
      },
    ],
  },
  {
    id: 3,
    name: "Custom Component Documentation",
    thumbnail: Documentation,
    items: [
      {
        id: 1,
        item: "",
      },
    ],
  },
  {
    id: 4,
    name: "Embracing the AI Era",
    thumbnail: AiEra,
    items: [
      {
        id: 1,
        item: "",
      },
    ],
  },
];
