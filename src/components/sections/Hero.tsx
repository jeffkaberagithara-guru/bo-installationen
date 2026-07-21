import { motion, useScroll, useTransform } from "framer-motion";
import {
  Phone,
  ArrowDown,
  Calendar,
  Wrench,
  Shield,
  Clock,
  Star,
  BadgeCheck,
  Gauge,
} from "lucide-react";
import { useRef } from "react";

const Hero = () => {
  const scrollToServices = () => {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen w-full overflow-hidden pt-20"
    >
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
          poster="/images/hero-poster.jpg"
        >
          <source src="/videos/herosection.mp4" type="video/mp4" />
        </video>
        {/* Layered Overlay for Depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-space/95 via-space/75 to-space/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-space via-transparent to-transparent" />
        {/* Animated Gradient Lens Flare */}
        <div className="absolute inset-0 bg-gradient-radial from-brass/15 via-transparent to-transparent opacity-60 animate-lens-flare pointer-events-none" />
      </div>

      {/* Content */}
      <motion.div
        style={{ opacity, scale, y }}
        className="relative z-10 flex min-h-[calc(100vh-5rem)] flex-col items-center justify-center px-6 text-center"
      >
        {/* Brand Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-brass/20 bg-space/40 px-5 py-2 backdrop-blur-md shadow-[0_0_40px_rgba(201,168,76,0.08)]"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brass/60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-brass" />
          </span>
          <span className="text-xs font-medium uppercase tracking-widest text-brass">
            Wien · 24/7 Service · Zertifiziert
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="font-display text-4xl font-bold leading-tight sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
        >
          <span className="block text-white drop-shadow-[0_0_30px_rgba(0,0,0,0.3)]">
            PRÄZISION
          </span>
          <span className="block bg-gradient-to-r from-brass via-brass-light to-brass bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(201,168,76,0.15)]">
            IN JEDEM DETAIL
          </span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
          className="mt-6 max-w-2xl text-base text-platinum/80 drop-shadow-[0_0_20px_rgba(0,0,0,0.5)] sm:text-lg md:text-xl"
        >
          Von der Bauplanung bis zum Notdienst — <br className="sm:hidden" />
          Ihr Partner für präzise Gebäudetechnik in Wien.
        </motion.p>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          {[
            { icon: Shield, label: "Zertifiziert", sub: "Höchste Standards" },
            { icon: Gauge, label: "Reaktionszeit", sub: "< 48 Minuten" },
            { icon: Clock, label: "24/7 Erreichbar", sub: "Rund um die Uhr" },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-3 rounded-lg border border-platinum/10 bg-space/30 px-4 py-2 backdrop-blur-md"
            >
              <item.icon className="h-4 w-4 text-brass" />
              <div className="text-left">
                <div className="text-xs font-semibold text-white">
                  {item.label}
                </div>
                <div className="text-[10px] text-platinum/50">{item.sub}</div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mt-10 flex flex-col gap-4 sm:flex-row sm:gap-6"
        >
          <a
            href="tel:+436602626722"
            className="group inline-flex items-center justify-center gap-3 rounded-lg bg-gradient-to-r from-signal to-signal/80 px-10 py-4 text-sm font-bold uppercase tracking-wider text-white transition-all hover:from-signal/90 hover:to-signal/70 hover:shadow-[0_0_60px_rgba(230,57,70,0.4)] hover:scale-105 active:scale-95"
          >
            <Phone className="h-5 w-5 animate-pulse" />
            <span>Notdienst: 0660 26 26 722</span>
          </a>

          <button
            onClick={scrollToServices}
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-platinum/20 bg-white/5 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white backdrop-blur-md transition-all hover:bg-white/10 hover:border-brass/40 hover:scale-105 active:scale-95"
          >
            <Wrench className="h-4 w-4" />
            Unsere Services
          </button>

          <a
            href="#quote"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-brass/30 bg-brass/10 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-brass backdrop-blur-md transition-all hover:bg-brass/20 hover:border-brass/50 hover:scale-105 active:scale-95"
          >
            <Calendar className="h-4 w-4" />
            Angebot anfragen
          </a>
        </motion.div>

        {/* Trust Badge Row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="mt-14 flex flex-wrap items-center justify-center gap-8 text-xs uppercase tracking-widest text-platinum/50"
        >
          <span className="flex items-center gap-2">
            <BadgeCheck className="h-3 w-3 text-brass/60" />
            15+ Jahre Erfahrung
          </span>
          <span className="flex items-center gap-2">
            <Shield className="h-3 w-3 text-brass/60" />
            Zertifizierte Qualität
          </span>
          <span className="flex items-center gap-2">
            <Star className="h-3 w-3 text-brass/60" />
            4.9/5 · 200+ Bewertungen
          </span>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.8,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
          onClick={scrollToServices}
        >
          <div className="flex flex-col items-center gap-1">
            <span className="text-[10px] uppercase tracking-widest text-platinum/30">
              Scroll
            </span>
            <ArrowDown className="h-5 w-5 text-platinum/30 hover:text-platinum/60 transition-colors" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
