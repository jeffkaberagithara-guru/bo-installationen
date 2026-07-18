import { motion } from "framer-motion";
import {
  Building2,
  PenTool,
  PencilRuler,
  Wrench,
  Package,
  ArrowRight,
} from "lucide-react";
import { services, type Service } from "@/data/services";

// Map icon strings to components
const iconMap = {
  building2: Building2,
  pentool: PenTool,
  pencilruler: PencilRuler,
  wrench: Wrench,
  package: Package,
};

const ServiceCard = ({ title, description, icon, href }: Service) => {
  const IconComponent = iconMap[icon as keyof typeof iconMap];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="group relative rounded-xl border border-platinum/10 bg-space-light/50 p-8 backdrop-blur-sm transition-all hover:border-brass/30 hover:bg-space-light/80 hover:shadow-[0_0_40px_rgba(201,168,76,0.05)]"
    >
      {/* Icon */}
      <div className="mb-4 inline-flex rounded-lg bg-brass/10 p-3 text-brass transition-all group-hover:bg-brass/20 group-hover:shadow-[0_0_30px_rgba(201,168,76,0.15)]">
        <IconComponent className="h-7 w-7" strokeWidth={1.5} />
      </div>

      {/* Title */}
      <h3 className="mb-2 text-xl font-semibold text-white">{title}</h3>

      {/* Description */}
      <p className="mb-4 text-sm leading-relaxed text-platinum/60">
        {description}
      </p>

      {/* Link */}
      <a
        href={href}
        className="inline-flex items-center gap-1 text-sm font-medium text-brass transition-all group-hover:gap-2"
      >
        Mehr erfahren
        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
      </a>
    </motion.div>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-20 bg-space">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <span className="text-xs font-medium uppercase tracking-widest text-brass/70">
            Unsere Leistungen
          </span>
          <h2 className="mt-2 font-display text-3xl font-bold text-white sm:text-4xl">
            Präzision in <span className="text-brass">jeder Phase</span>
          </h2>
          <p className="mt-3 text-platinum/60 max-w-2xl mx-auto">
            Von der ersten Skizze bis zum Notdienst — wir begleiten Ihr Projekt
            mit höchster Qualität.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {services.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
