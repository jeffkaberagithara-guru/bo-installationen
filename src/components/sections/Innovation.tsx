import { motion } from "framer-motion";
import { Cpu, ShieldCheck } from "lucide-react";

const Innovation = () => {
  return (
    <section className="relative overflow-hidden bg-space-light/30 py-20">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 h-full w-full bg-[radial-gradient(ellipse_at_50%_50%,rgba(201,168,76,0.1),transparent_70%)]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <span className="text-xs font-medium uppercase tracking-widest text-brass/70">
            Technologie & Qualität
          </span>
          <h2 className="mt-2 font-display text-3xl font-bold text-white sm:text-4xl">
            INNOVATION & <span className="text-brass">ENGINEERING</span>
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-platinum/60">
            B.O INSTALLATIONEN steht für die Evolution des Wiener Handwerks. Wir
            nutzen digitale Diagnose-Tools und lösungsorientierte Messtechnik,
            um Fehlerquellen zu eliminieren, bevor sie entstehen.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="group rounded-xl border border-platinum/10 bg-space/50 p-8 backdrop-blur-sm transition-all hover:border-brass/30 hover:shadow-[0_0_40px_rgba(201,168,76,0.05)]"
          >
            <div className="mb-4 inline-flex rounded-lg bg-electric/10 p-3 text-electric transition-all group-hover:bg-electric/20 group-hover:shadow-[0_0_30px_rgba(0,180,216,0.15)]">
              <Cpu className="h-7 w-7" strokeWidth={1.5} />
            </div>
            <h3 className="mb-2 text-xl font-semibold text-white">
              Tech-Driven Diagnostics
            </h3>
            <p className="text-sm leading-relaxed text-platinum/60">
              Analyse und Lösung von Problemen mit digitaler Diagnose. Wir
              nutzen modernste Messtechnik für präzise Fehlererkennung.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="group rounded-xl border border-platinum/10 bg-space/50 p-8 backdrop-blur-sm transition-all hover:border-brass/30 hover:shadow-[0_0_40px_rgba(201,168,76,0.05)]"
          >
            <div className="mb-4 inline-flex rounded-lg bg-brass/10 p-3 text-brass transition-all group-hover:bg-brass/20 group-hover:shadow-[0_0_30px_rgba(201,168,76,0.15)]">
              <ShieldCheck className="h-7 w-7" strokeWidth={1.5} />
            </div>
            <h3 className="mb-2 text-xl font-semibold text-white">
              Zertifizierte Qualität
            </h3>
            <p className="text-sm leading-relaxed text-platinum/60">
              Meistens für Fokus auf Wiener Bauformen und höchste
              Sicherheitsstandards. Zertifiziert nach den strengsten
              Qualitätsrichtlinien.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 flex justify-center"
        >
          <div className="flex items-center gap-6 text-xs uppercase tracking-widest text-platinum/30">
            <span className="h-px w-12 bg-platinum/10" />
            <span>Präzision · Sicherheit · Innovation</span>
            <span className="h-px w-12 bg-platinum/10" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Innovation;
