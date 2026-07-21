import { motion } from "framer-motion";
import {
  Building2,
  PenTool,
  PencilRuler,
  Wrench,
  Package,
  ArrowRight,
  Sparkles,
} from "lucide-react";

interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  href: string;
  features: string[];
  badge?: string;
}

const services: Service[] = [
  {
    id: "planung",
    title: "Planung & Beratung",
    description:
      "Von der ersten Skizze bis zur detaillierten Ausführungsplanung — wir begleiten Sie mit Fachkompetenz und Präzision.",
    icon: "PenTool",
    href: "#",
    features: ["3D-Visualisierung", "Materialberatung", "Kostenoptimierung"],
    badge: "Kostenlos",
  },
  {
    id: "design",
    title: "Design & Konzept",
    description:
      "Ästhetik trifft Funktion. Wir entwickeln maßgeschneiderte Lösungen, die Ihren Raum perfekt in Szene setzen.",
    icon: "PencilRuler",
    href: "#",
    features: ["Individuelle Gestaltung", "Farbkonzepte", "Lichtplanung"],
    badge: "Maßgeschneidert",
  },
  {
    id: "installation",
    title: "Installation & Montage",
    description:
      "Präzise Ausführung mit höchster Sorgfalt. Unsere Monteure arbeiten nach den strengsten Qualitätsstandards.",
    icon: "Wrench",
    href: "#",
    features: ["Sanitärinstallation", "Heizungsmontage", "Wartungsverträge"],
    badge: "Zertifiziert",
  },
  {
    id: "sanierung",
    title: "Sanierung & Renovierung",
    description:
      "Moderne Technik trifft auf bestehende Bausubstanz. Wir sanieren effizient und nachhaltig.",
    icon: "Building2",
    href: "#",
    features: ["Badrenovierung", "Leitungsersatz", "Energieeffizienz"],
    badge: "Nachhaltig",
  },
  {
    id: "notdienst",
    title: "24/7 Notdienst",
    description:
      "Rund um die Uhr für Sie da. Bei Wasserschaden oder Heizungsausfall — wir sind innerhalb von 20 Minuten vor Ort.",
    icon: "Package",
    href: "#",
    features: ["Schnelle Reaktion", "20-min Garantie", "Festpreis"],
    badge: "24/7",
  },
];

const iconMap = {
  PenTool: PenTool,
  PencilRuler: PencilRuler,
  Wrench: Wrench,
  Building2: Building2,
  Package: Package,
};

const ServiceCard = ({ service, index }: { service: Service; index: number }) => {
  const IconComponent = iconMap[service.icon as keyof typeof iconMap];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{
        y: -6,
        transition: { duration: 0.15, ease: "easeOut" },
      }}
      className="group relative rounded-xl border border-platinum/10 bg-space-light/30 p-4 sm:p-5 md:p-6 lg:p-8 backdrop-blur-sm transition-all duration-150 hover:border-brass/30 hover:bg-space-light/60 hover:shadow-[0_0_60px_rgba(201,168,76,0.06)]"
    >
      {service.badge && (
        <span className="absolute -top-2 -right-2 rounded-full bg-gradient-to-r from-brass to-brass-light px-2 sm:px-2.5 md:px-3 py-0.5 sm:py-1 text-[8px] sm:text-[9px] md:text-[10px] font-bold uppercase tracking-wider text-space shadow-[0_0_20px_rgba(201,168,76,0.3)]">
          {service.badge}
        </span>
      )}

      <div className="mb-3 sm:mb-4 inline-flex rounded-lg bg-brass/10 p-2 sm:p-2.5 md:p-3 text-brass transition-all duration-150 group-hover:bg-brass/20 group-hover:shadow-[0_0_40px_rgba(201,168,76,0.2)]">
        <IconComponent className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7" strokeWidth={1.5} />
      </div>

      <h3 className="mb-1.5 sm:mb-2 text-base sm:text-lg md:text-xl font-semibold text-white">
        {service.title}
      </h3>

      <p className="mb-3 sm:mb-4 text-xs sm:text-sm leading-relaxed text-platinum/60">
        {service.description}
      </p>

      <ul className="mb-4 sm:mb-5 md:mb-6 space-y-1 sm:space-y-1.5">
        {service.features.map((feature, i) => (
          <li key={i} className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs text-platinum/40">
            <Sparkles className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-brass/60" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <a
        href={service.href}
        className="inline-flex items-center gap-1 text-xs sm:text-sm font-medium text-brass transition-all duration-150 group-hover:gap-2 group-hover:text-brass-light"
      >
        Mehr erfahren
        <ArrowRight className="h-3 w-3 sm:h-3.5 sm:w-3.5 transition-transform duration-150 group-hover:translate-x-1" />
      </a>
    </motion.div>
  );
};

const Services = () => {
  return (
    <section id="services" className="relative py-16 sm:py-20 md:py-24 bg-space overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-0 h-48 sm:h-64 md:h-96 w-48 sm:w-64 md:w-96 rounded-full bg-brass/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-48 sm:h-64 md:h-96 w-48 sm:w-64 md:w-96 rounded-full bg-electric/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-10 sm:mb-12 md:mb-16 text-center"
        >
          <span className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-medium uppercase tracking-widest text-brass/70">
            <span className="h-px w-6 sm:w-8 bg-brass/30" />
            Unsere Leistungen
            <span className="h-px w-6 sm:w-8 bg-brass/30" />
          </span>
          <h2 className="mt-2 sm:mt-3 md:mt-4 font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Präzision in{" "}
            <span className="bg-gradient-to-r from-brass to-brass-light bg-clip-text text-transparent">
              jeder Phase
            </span>
          </h2>
          <p className="mt-2 sm:mt-3 md:mt-4 text-sm sm:text-base text-platinum/60 max-w-2xl mx-auto">
            Von der ersten Skizze bis zum Notdienst — wir begleiten Ihr Projekt
            mit höchster Qualität und über 15 Jahren Erfahrung.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-5 md:gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-10 sm:mt-12 md:mt-16 text-center"
        >
          <div className="inline-flex flex-wrap items-center justify-center gap-3 sm:gap-4 rounded-full border border-platinum/10 bg-space-light/30 px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 backdrop-blur-sm">
            <span className="flex items-center gap-1.5 text-[10px] sm:text-xs font-medium uppercase tracking-widest text-platinum/40">
              <Building2 className="h-3 w-3 text-brass/60" />
              Über 500 realisierte Projekte
            </span>
            <span className="h-3 sm:h-4 w-px bg-platinum/10" />
            <span className="flex items-center gap-1.5 text-[10px] sm:text-xs font-medium uppercase tracking-widest text-platinum/40">
              <Star className="h-3 w-3 text-brass/60" />
              4.9/5 · 200+ Bewertungen
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;