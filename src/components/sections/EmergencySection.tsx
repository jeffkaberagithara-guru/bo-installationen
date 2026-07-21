import { motion } from "framer-motion";
import {
  Phone,
  Clock,
  MapPin,
  Shield,
  CheckCircle,
  AlertTriangle,
  Gauge,
  Award,
  Zap,
  Home,
  Droplets,
  Thermometer,
  Wrench,
} from "lucide-react";

const EmergencySection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-space via-space-light to-space py-16 sm:py-20 md:py-24">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-0 h-48 sm:h-64 md:h-96 w-48 sm:w-64 md:w-96 rounded-full bg-signal/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-48 sm:h-64 md:h-96 w-48 sm:w-64 md:w-96 rounded-full bg-brass/10 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[300px] sm:h-[400px] w-[300px] sm:w-[400px] rounded-full bg-signal/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-4 sm:mb-6 inline-flex items-center gap-1.5 sm:gap-2 rounded-full bg-signal/20 px-3 sm:px-4 py-1 sm:py-1.5 md:py-2 backdrop-blur-sm border border-signal/10"
          >
            <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal/60" />
              <span className="relative inline-flex h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-signal" />
            </span>
            <span className="text-[9px] sm:text-[10px] md:text-xs font-medium uppercase tracking-widest text-signal">
              TECHNISCHER NOTDIENST 24/7
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white"
          >
            Wasserschaden oder <br />
            <span className="bg-gradient-to-r from-signal to-signal/80 bg-clip-text text-transparent">Heizungsausfall?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-2 sm:mt-3 md:mt-4 text-sm sm:text-base md:text-lg text-platinum/60 max-w-2xl"
          >
            Unser Einsatzteam ist in Wien und Umgebung rund um die Uhr in
            höchster Bereitschaft. Wir sind innerhalb von 20 Minuten bei Ihnen.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-6 sm:mt-7 md:mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4"
          >
            <div className="flex items-center gap-2 sm:gap-3 rounded-lg border border-platinum/10 bg-space/50 px-3 sm:px-4 py-2 sm:py-3 backdrop-blur-sm transition-all duration-150 hover:border-signal/30 hover:bg-space/70">
              <div className="rounded-full bg-signal/10 p-1.5 sm:p-2 text-signal">
                <Gauge className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={1.5} />
              </div>
              <div>
                <div className="text-xs sm:text-sm font-semibold text-white">
                  Reaktionszeit
                </div>
                <div className="text-[10px] sm:text-xs text-platinum/40">&lt; 20 Minuten</div>
              </div>
            </div>
            <div className="flex items-center gap-2 sm:gap-3 rounded-lg border border-platinum/10 bg-space/50 px-3 sm:px-4 py-2 sm:py-3 backdrop-blur-sm transition-all duration-150 hover:border-brass/30 hover:bg-space/70">
              <div className="rounded-full bg-brass/10 p-1.5 sm:p-2 text-brass">
                <MapPin className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={1.5} />
              </div>
              <div>
                <div className="text-xs sm:text-sm font-semibold text-white">
                  Servicegebiet
                </div>
                <div className="text-[10px] sm:text-xs text-platinum/40">Wien & Umgebung</div>
              </div>
            </div>
            <div className="flex items-center gap-2 sm:gap-3 rounded-lg border border-platinum/10 bg-space/50 px-3 sm:px-4 py-2 sm:py-3 backdrop-blur-sm transition-all duration-150 hover:border-brass/30 hover:bg-space/70">
              <div className="rounded-full bg-brass/10 p-1.5 sm:p-2 text-brass">
                <Award className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={1.5} />
              </div>
              <div>
                <div className="text-xs sm:text-sm font-semibold text-white">
                  Zertifiziert
                </div>
                <div className="text-[10px] sm:text-xs text-platinum/40">
                  Höchste Qualitätsstandards
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-6 sm:mt-7 md:mt-8 rounded-lg border border-platinum/10 bg-space/50 p-4 sm:p-5 md:p-6 backdrop-blur-sm transition-all duration-150 hover:border-signal/20"
          >
            <h4 className="mb-2 sm:mb-3 flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-semibold text-white">
              <AlertTriangle className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-signal" />
              Was tun bei einem Notfall?
            </h4>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-platinum/60">
              <li className="flex items-start gap-1.5 sm:gap-2">
                <CheckCircle className="mt-0.5 h-3.5 w-3.5 sm:h-4 sm:w-4 flex-shrink-0 text-brass" />
                <span>Hauptwasserhahn sofort schließen</span>
              </li>
              <li className="flex items-start gap-1.5 sm:gap-2">
                <CheckCircle className="mt-0.5 h-3.5 w-3.5 sm:h-4 sm:w-4 flex-shrink-0 text-brass" />
                <span>Schaden mit Fotos dokumentieren</span>
              </li>
              <li className="flex items-start gap-1.5 sm:gap-2">
                <CheckCircle className="mt-0.5 h-3.5 w-3.5 sm:h-4 sm:w-4 flex-shrink-0 text-brass" />
                <span>Uns sofort unter 0660 26 26 722 anrufen</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            viewport={{ once: true }}
            className="mt-4 sm:mt-5 md:mt-6 grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3"
          >
            {[
              { icon: <Droplets className="h-3.5 w-3.5 sm:h-4 sm:w-4" />, label: "Wasserschaden" },
              { icon: <Thermometer className="h-3.5 w-3.5 sm:h-4 sm:w-4" />, label: "Heizungsausfall" },
              { icon: <Home className="h-3.5 w-3.5 sm:h-4 sm:w-4" />, label: "Rohrbruch" },
              { icon: <Wrench className="h-3.5 w-3.5 sm:h-4 sm:w-4" />, label: "24/7 Service" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-1.5 sm:gap-2 rounded-lg border border-platinum/5 bg-space/30 px-2 sm:px-3 py-1.5 sm:py-2 backdrop-blur-sm"
              >
                <span className="text-signal">{item.icon}</span>
                <span className="text-[10px] sm:text-xs text-platinum/40">{item.label}</span>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-6 sm:mt-7 md:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4"
          >
            <a
              href="tel:+436602626722"
              className="group inline-flex items-center justify-center gap-2 sm:gap-3 rounded-lg bg-gradient-to-r from-signal to-signal/80 px-6 sm:px-8 md:px-8 py-3 sm:py-3.5 md:py-4 text-xs sm:text-sm md:text-base font-bold text-white transition-all duration-150 hover:from-signal/90 hover:to-signal/70 hover:shadow-[0_0_50px_rgba(230,57,70,0.4)] hover:scale-105 active:scale-95 touch-feedback"
            >
              <Phone className="h-4 w-4 sm:h-5 sm:w-5 animate-pulse" />
              Jetzt anrufen: 0660 26 26 722
            </a>
            <a
              href="#quote"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-platinum/20 bg-white/5 px-6 sm:px-8 md:px-8 py-3 sm:py-3.5 md:py-4 text-xs sm:text-sm md:text-base font-semibold text-white backdrop-blur-sm transition-all duration-150 hover:bg-white/10 hover:border-brass/40 hover:scale-105 active:scale-95 touch-feedback"
            >
              <Zap className="h-4 w-4 sm:h-5 sm:w-5 text-brass" />
              Angebot anfragen
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-6 sm:mt-7 md:mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-[10px] sm:text-xs text-platinum/30"
          >
            <span className="flex items-center gap-1.5 sm:gap-2">
              <Shield className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-brass/60" />
              Zertifiziert
            </span>
            <span className="h-3 w-px bg-platinum/10" />
            <span className="flex items-center gap-1.5 sm:gap-2">
              <Clock className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-brass/60" />
              24/7 Erreichbar
            </span>
            <span className="h-3 w-px bg-platinum/10" />
            <span className="flex items-center gap-1.5 sm:gap-2">
              <CheckCircle className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-brass/60" />
              Festpreisgarantie
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EmergencySection;