import { motion } from "framer-motion";
import {
  Phone,
  Clock,
  MapPin,
  Shield,
  CheckCircle,
  AlertTriangle,
} from "lucide-react";

const EmergencySection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-space via-space-light to-space py-20">
      {/* Background overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-signal/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-brass/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-6 inline-flex items-center gap-2 rounded-full bg-signal/20 px-4 py-1.5 backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal/60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-signal" />
            </span>
            <span className="text-xs font-medium uppercase tracking-widest text-signal">
              TECHNISCHER NOTDIENST 24/7
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl"
          >
            Wasserschaden oder <br />
            <span className="text-signal">Heizungsausfall?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-4 text-lg text-platinum/60 max-w-2xl"
          >
            Unser Einsatzteam ist in Wien und Umgebung rund um die Uhr in
            höchster Bereitschaft. Wir sind innerhalb von 48 Minuten bei Ihnen.
          </motion.p>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3"
          >
            <div className="flex items-center gap-3 rounded-lg border border-platinum/10 bg-space/50 px-4 py-3 backdrop-blur-sm">
              <Clock className="h-5 w-5 text-signal" />
              <div>
                <div className="text-sm font-semibold text-white">
                  Reaktionszeit
                </div>
                <div className="text-xs text-platinum/40">&lt; 48 Minuten</div>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-lg border border-platinum/10 bg-space/50 px-4 py-3 backdrop-blur-sm">
              <MapPin className="h-5 w-5 text-brass" />
              <div>
                <div className="text-sm font-semibold text-white">
                  Servicegebiet
                </div>
                <div className="text-xs text-platinum/40">Wien & Umgebung</div>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-lg border border-platinum/10 bg-space/50 px-4 py-3 backdrop-blur-sm">
              <Shield className="h-5 w-5 text-brass" />
              <div>
                <div className="text-sm font-semibold text-white">
                  Zertifiziert
                </div>
                <div className="text-xs text-platinum/40">
                  Höchste Qualitätsstandards
                </div>
              </div>
            </div>
          </motion.div>

          {/* Emergency Checklist */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-8 rounded-lg border border-platinum/10 bg-space/50 p-6 backdrop-blur-sm"
          >
            <h4 className="mb-3 flex items-center gap-2 text-sm font-semibold text-white">
              <AlertTriangle className="h-4 w-4 text-signal" />
              Was tun bei einem Notfall?
            </h4>
            <ul className="space-y-2 text-sm text-platinum/60">
              <li className="flex items-start gap-2">
                <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-brass" />
                <span>Hauptwasserhahn sofort schließen</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-brass" />
                <span>Schaden mit Fotos dokumentieren</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-brass" />
                <span>Uns sofort unter 0660 26 26 722 anrufen</span>
              </li>
            </ul>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-8 flex flex-col gap-4 sm:flex-row"
          >
            <a
              href="tel:+436602626722"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-signal px-8 py-4 text-base font-bold text-white transition-all hover:bg-signal/80 hover:shadow-[0_0_40px_rgba(230,57,70,0.3)]"
            >
              <Phone className="h-5 w-5 animate-pulse" />
              Jetzt anrufen: 0660 26 26 722
            </a>
            <a
              href="#quote"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-platinum/20 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/10 hover:border-brass/40"
            >
              Angebot anfragen
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EmergencySection;
