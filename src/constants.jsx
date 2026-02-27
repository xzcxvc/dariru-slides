import { Hand, BrainCircuit, Sparkles, Lightbulb } from "lucide-react";
import AiEra from "/aiera.png"
import AtomicDesign from "/atomicdesign.png"
import Documentation from "/documentation.png"
import TechStach from "/techstack.png"

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

export const learnings = [
  {
    id: 1,
    name: "New Tech Stack",
    thumbnail: TechStach,
  },
  {
    id: 2,
    name: "Atomic Design",
    thumbnail: AtomicDesign,
  },
  {
    id: 3,
    name: "Custom Component Documentation",
    thumbnail: Documentation,
  },
  {
    id: 4,
    name: "Embracing the AI Era",
    thumbnail: AiEra,
  },
];
