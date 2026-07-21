import { motion } from "framer-motion";
import { Cpu, ShieldCheck, Zap, Microscope } from "lucide-react";

interface InnovationItem {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  stat: string;
  statLabel: string;
}

const innovationData: InnovationItem[] = [
  {
    id: "tech",
    icon: <Cpu className="h-7 w-7" strokeWidth={1.5} />,
    title: "Tech-Driven Diagnostics",
    description:
      "Analyse und Lösung von Problemen mit digitaler Diagnose. Wir nutzen modernste Messtechnik für präzise Fehlererkennung.",
    stat: "98%",
    statLabel: "Treffsicherheit",
  },
  {
    id: "quality",
    icon: <ShieldCheck className="h-7 w-7" strokeWidth={1.5} />,
    title: "Zertifizierte Qualität",
    description:
      "Meistens für Fokus auf Wiener Bauformen und höchste Sicherheitsstandards. Zertifiziert nach den strengsten Qualitätsrichtlinien.",
    stat: "ISO 9001",
    statLabel: "Zertifiziert",
  },
  {
    id: "efficiency",
    icon: <Zap className="h-7 w-7" strokeWidth={1.5} />,
    title: "Energieeffizienz",
    description:
      "Optimierung von Heizungs- und Sanitäranlagen für maximale Energieeffizienz und langfristige Kosteneinsparungen.",
    stat: "30%",
    statLabel: "Energieeinsparung",
  },
  {
    id: "precision",
    icon: <Microscope className="h-7 w-7" strokeWidth={1.5} />,
    title: "Präzisionsarbeit",
    description:
      "Millimetergenaue Installation und Montage. Wir arbeiten mit hochpräzisen Messinstrumenten für perfekte Ergebnisse.",
    stat: "0.1mm",
    statLabel: "Toleranz",
  },
];

const Innovation = () => {
  return (
    <section className="relative overflow-hidden py-24 bg-space-light/20">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-brass/10 blur-3xl" />
        <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-electric/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-brass/10 blur-3xl" />
      </div>

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #C9A84C 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-brass/70">
            <span className="h-px w-8 bg-brass/30" />
            Technologie & Qualität
            <span className="h-px w-8 bg-brass/30" />
          </span>
          <h2 className="mt-4 font-display text-4xl font-bold text-white sm:text-5xl">
            INNOVATION &{" "}
            <span className="bg-gradient-to-r from-brass to-brass-light bg-clip-text text-transparent">
              ENGINEERING
            </span>
          </h2>
          <p className="mt-4 text-platinum/60 max-w-2xl mx-auto">
            B.O INSTALLATIONEN steht für die Evolution des Wiener Handwerks. Wir
            nutzen digitale Diagnose-Tools und lösungsorientierte Messtechnik,
            um Fehlerquellen zu eliminieren, bevor sie entstehen.
          </p>
        </motion.div>

        {/* Innovation Grid - 4 Columns with Proper Alignment */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
          {innovationData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                y: -6,
                transition: { duration: 0.15, ease: "easeOut" },
              }}
              className="group relative flex flex-col rounded-xl border border-platinum/10 bg-space/50 p-6 backdrop-blur-sm transition-all duration-150 hover:border-brass/30 hover:bg-space/70 hover:shadow-[0_0_60px_rgba(201,168,76,0.06)]"
            >
              {/* Icon with Enhanced Glow */}
              <div className="mb-4 inline-flex w-fit rounded-lg bg-gradient-to-br from-brass/10 to-electric/10 p-3 text-brass transition-all duration-150 group-hover:bg-gradient-to-br group-hover:from-brass/20 group-hover:to-electric/20 group-hover:shadow-[0_0_40px_rgba(201,168,76,0.15)]">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="mb-2 text-lg font-semibold text-white">
                {item.title}
              </h3>

              {/* Description - Flex grow to push stat to bottom */}
              <p className="flex-1 text-sm leading-relaxed text-platinum/60">
                {item.description}
              </p>

              {/* Stat Badge - Always at bottom */}
              <div className="mt-4 flex items-center gap-3 rounded-lg border border-platinum/5 bg-space/30 px-3 py-2 backdrop-blur-sm">
                <span className="text-lg font-bold text-brass">
                  {item.stat}
                </span>
                <span className="h-4 w-px bg-platinum/10" />
                <span className="text-xs text-platinum/40">
                  {item.statLabel}
                </span>
              </div>

              {/* Decorative Line */}
              <div className="mt-4 h-px w-12 bg-gradient-to-r from-brass/30 to-transparent transition-all duration-150 group-hover:w-16" />
            </motion.div>
          ))}
        </div>

        {/* Bottom Divider with Brand Message */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 flex flex-col items-center gap-4"
        >
          <div className="flex items-center gap-6 text-xs uppercase tracking-widest text-platinum/30">
            <span className="h-px w-16 bg-platinum/10" />
            <span>Präzision · Sicherheit · Innovation</span>
            <span className="h-px w-16 bg-platinum/10" />
          </div>

          {/* Brand Pill */}
          <div className="inline-flex items-center gap-3 rounded-full border border-brass/10 bg-space/30 px-6 py-2 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brass/60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brass" />
            </span>
            <span className="text-xs font-medium text-brass/70">
              B.O INSTALLATIONEN · Seit 2009
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Innovation;
