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
    items: [
      {
        id: 1,
        item: "React JS",
      },
      {
        id: 2,
        item: "Typescript",
      },
      {
        id: 3,
        item: "Tailwind CSS",
      },
    ],
  },
  {
    id: 2,
    name: "Atomic Design",
    thumbnail: AtomicDesign,
    items: [
      {
        id: 1,
        item: "Atoms",
      },
      {
        id: 2,
        item: "Molecules",
      },
      {
        id: 3,
        item: "Organisms",
      },
      {
        id: 4,
        item: "Templates",
      },
      {
        id: 5,
        item: "Pages",
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
