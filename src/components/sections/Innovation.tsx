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
    icon: <Cpu className="h-6 w-6 sm:h-7 sm:w-7" strokeWidth={1.5} />,
    title: "Tech-Driven Diagnostics",
    description:
      "Analyse und Lösung von Problemen mit digitaler Diagnose. Wir nutzen modernste Messtechnik für präzise Fehlererkennung.",
    stat: "98%",
    statLabel: "Treffsicherheit",
  },
  {
    id: "quality",
    icon: <ShieldCheck className="h-6 w-6 sm:h-7 sm:w-7" strokeWidth={1.5} />,
    title: "Zertifizierte Qualität",
    description:
      "Meistens für Fokus auf Wiener Bauformen und höchste Sicherheitsstandards. Zertifiziert nach den strengsten Qualitätsrichtlinien.",
    stat: "ISO 9001",
    statLabel: "Zertifiziert",
  },
  {
    id: "efficiency",
    icon: <Zap className="h-6 w-6 sm:h-7 sm:w-7" strokeWidth={1.5} />,
    title: "Energieeffizienz",
    description:
      "Optimierung von Heizungs- und Sanitäranlagen für maximale Energieeffizienz und langfristige Kosteneinsparungen.",
    stat: "30%",
    statLabel: "Energieeinsparung",
  },
  {
    id: "precision",
    icon: <Microscope className="h-6 w-6 sm:h-7 sm:w-7" strokeWidth={1.5} />,
    title: "Präzisionsarbeit",
    description:
      "Millimetergenaue Installation und Montage. Wir arbeiten mit hochpräzisen Messinstrumenten für perfekte Ergebnisse.",
    stat: "0.1mm",
    statLabel: "Toleranz",
  },
];

const Innovation = () => {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 md:py-24 bg-space-light/20">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] sm:h-[500px] md:h-[600px] w-[400px] sm:w-[500px] md:w-[600px] rounded-full bg-brass/10 blur-3xl" />
        <div className="absolute top-0 right-0 h-32 sm:h-48 md:h-64 w-32 sm:w-48 md:w-64 rounded-full bg-electric/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-32 sm:h-48 md:h-64 w-32 sm:w-48 md:w-64 rounded-full bg-brass/10 blur-3xl" />
      </div>

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #C9A84C 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

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
            Technologie & Qualität
            <span className="h-px w-6 sm:w-8 bg-brass/30" />
          </span>
          <h2 className="mt-2 sm:mt-3 md:mt-4 font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            INNOVATION & <span className="bg-gradient-to-r from-brass to-brass-light bg-clip-text text-transparent">ENGINEERING</span>
          </h2>
          <p className="mt-2 sm:mt-3 md:mt-4 text-sm sm:text-base text-platinum/60 max-w-2xl mx-auto">
            B.O INSTALLATIONEN steht für die Evolution des Wiener Handwerks. Wir
            nutzen digitale Diagnose-Tools und lösungsorientierte Messtechnik,
            um Fehlerquellen zu eliminieren, bevor sie entstehen.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 max-w-6xl mx-auto">
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
              className="group relative flex flex-col rounded-xl border border-platinum/10 bg-space/50 p-4 sm:p-5 md:p-6 backdrop-blur-sm transition-all duration-150 hover:border-brass/30 hover:bg-space/70 hover:shadow-[0_0_60px_rgba(201,168,76,0.06)]"
            >
              <div className="mb-3 sm:mb-4 inline-flex w-fit rounded-lg bg-gradient-to-br from-brass/10 to-electric/10 p-2 sm:p-2.5 md:p-3 text-brass transition-all duration-150 group-hover:bg-gradient-to-br group-hover:from-brass/20 group-hover:to-electric/20 group-hover:shadow-[0_0_40px_rgba(201,168,76,0.15)]">
                {item.icon}
              </div>

              <h3 className="mb-1.5 sm:mb-2 text-base sm:text-lg md:text-xl font-semibold text-white">
                {item.title}
              </h3>

              <p className="flex-1 text-xs sm:text-sm leading-relaxed text-platinum/60">
                {item.description}
              </p>

              <div className="mt-3 sm:mt-4 flex items-center gap-2 sm:gap-3 rounded-lg border border-platinum/5 bg-space/30 px-2.5 sm:px-3 py-1.5 sm:py-2 backdrop-blur-sm">
                <span className="text-base sm:text-lg font-bold text-brass">{item.stat}</span>
                <span className="h-3 sm:h-4 w-px bg-platinum/10" />
                <span className="text-[10px] sm:text-xs text-platinum/40">{item.statLabel}</span>
              </div>

              <div className="mt-3 sm:mt-4 h-px w-8 sm:w-10 md:w-12 bg-gradient-to-r from-brass/30 to-transparent transition-all duration-150 group-hover:w-12 sm:group-hover:w-14 md:group-hover:w-16" />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-10 sm:mt-12 md:mt-16 flex flex-col items-center gap-3 sm:gap-4"
        >
          <div className="flex items-center gap-4 sm:gap-6 text-[10px] sm:text-xs uppercase tracking-widest text-platinum/30">
            <span className="h-px w-10 sm:w-12 md:w-16 bg-platinum/10" />
            <span>Präzision · Sicherheit · Innovation</span>
            <span className="h-px w-10 sm:w-12 md:w-16 bg-platinum/10" />
          </div>

          <div className="inline-flex items-center gap-2 sm:gap-3 rounded-full border border-brass/10 bg-space/30 px-4 sm:px-5 md:px-6 py-1.5 sm:py-2 backdrop-blur-sm">
            <span className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brass/60" />
              <span className="relative inline-flex h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-brass" />
            </span>
            <span className="text-[10px] sm:text-xs font-medium text-brass/70">
              B.O INSTALLATIONEN · Seit 2009
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Innovation;