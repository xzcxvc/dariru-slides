import { Hand, BrainCircuit, Sparkles, Lightbulb } from "lucide-react";
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

export const niceToHaves = [
  {
    id: 1,
    name: "Implementation of Atomic Design",
  },
  {
    id: 2,
    name: "Custom Component Documentation",
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
