export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string; // Lucide icon name
  href: string;
}

export const services: Service[] = [
  {
    id: "neubau",
    title: "Neubau",
    description:
      "Full-system rough-ins, gas lines, septic, and slab plumbing for residential and commercial new builds.",
    icon: "Building2",
    href: "#neubau",
  },
  {
    id: "design",
    title: "Design & Beratung",
    description:
      "3D blueprints, code compliance, eco-efficient systems, and smart home integration from concept to reality.",
    icon: "PenTool",
    href: "#design",
  },
  {
    id: "renovierung",
    title: "Renovierung",
    description:
      "Bathroom and kitchen remodels, whole-house repiping, and fixture upgrades that transform your space.",
    icon: "PencilRuler",
    href: "#renovierung",
  },
  {
    id: "reparatur",
    title: "Reparatur",
    description:
      "24/7 emergency service, leak detection, drain cleaning, and rapid repairs for every plumbing issue.",
    icon: "Wrench",
    href: "#reparatur",
  },
  {
    id: "installation",
    title: "Installation",
    description:
      "Water heaters, filtration systems, sump pumps, smart plumbing devices, and gas appliance hookups.",
    icon: "Package",
    href: "#installation",
  },
];