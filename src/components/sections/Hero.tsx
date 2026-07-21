import { motion, useScroll, useTransform } from "framer-motion";
import { Phone, ArrowDown, Calendar, Wrench, Shield, Clock, Star, BadgeCheck, Gauge } from "lucide-react";
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
    <section ref={ref} className="relative min-h-screen w-full overflow-hidden pt-14 sm:pt-16 md:pt-20">
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
        <div className="absolute inset-0 bg-gradient-to-b from-space/95 via-space/75 to-space/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-space via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-radial from-brass/15 via-transparent to-transparent opacity-60 animate-lens-flare pointer-events-none" />
      </div>

      {/* Content */}
      <motion.div
        style={{ opacity, scale, y }}
        className="relative z-10 flex min-h-[calc(100vh-3.5rem)] sm:min-h-[calc(100vh-4rem)] md:min-h-[calc(100vh-5rem)] flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-center"
      >
        {/* Brand Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-4 sm:mb-6 md:mb-8 inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-brass/20 bg-space/40 px-3 sm:px-4 md:px-5 py-1 sm:py-1.5 md:py-2 backdrop-blur-md shadow-[0_0_40px_rgba(201,168,76,0.08)]"
        >
          <span className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brass/60" />
            <span className="relative inline-flex h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-brass" />
          </span>
          <span className="text-[9px] sm:text-[10px] md:text-xs font-medium uppercase tracking-widest text-brass">
            Wien · 24/7 Service · Zertifiziert
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold leading-[1.1] sm:leading-[1.15] md:leading-[1.2]"
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
          className="mt-3 sm:mt-4 md:mt-6 max-w-xl sm:max-w-2xl text-sm sm:text-base md:text-lg lg:text-xl text-platinum/80 drop-shadow-[0_0_20px_rgba(0,0,0,0.5)]"
        >
          Von der Bauplanung bis zum Notdienst —{" "}
          <br className="sm:hidden" />
          Ihr Partner für präzise Gebäudetechnik in Wien.
        </motion.p>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
          className="mt-6 sm:mt-7 md:mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3 md:gap-4"
        >
          {[
            { icon: Shield, label: "Zertifiziert", sub: "Höchste Standards" },
            { icon: Gauge, label: "Reaktionszeit", sub: "< 20 Minuten" },
            { icon: Clock, label: "24/7 Erreichbar", sub: "Rund um die Uhr" },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-1.5 sm:gap-2 md:gap-3 rounded-lg border border-platinum/10 bg-space/30 px-2.5 sm:px-3 md:px-4 py-1.5 sm:py-2 backdrop-blur-md"
            >
              <item.icon className="h-3 w-3 sm:h-3.5 sm:w-3.5 md:h-4 md:w-4 text-brass" />
              <div className="text-left">
                <div className="text-[10px] sm:text-[11px] md:text-xs font-semibold text-white">
                  {item.label}
                </div>
                <div className="text-[8px] sm:text-[9px] md:text-[10px] text-platinum/50">{item.sub}</div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mt-6 sm:mt-8 md:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 w-full sm:w-auto"
        >
          <a
            href="tel:+436602626722"
            className="group inline-flex items-center justify-center gap-2 sm:gap-3 rounded-lg bg-gradient-to-r from-signal to-signal/80 px-6 sm:px-8 md:px-10 py-3 sm:py-3.5 md:py-4 text-xs sm:text-sm md:text-base font-bold uppercase tracking-wider text-white transition-all hover:from-signal/90 hover:to-signal/70 hover:shadow-[0_0_60px_rgba(230,57,70,0.4)] hover:scale-105 active:scale-95 touch-feedback"
          >
            <Phone className="h-4 w-4 sm:h-5 sm:w-5 animate-pulse" />
            <span className="whitespace-nowrap">Notdienst: 0660 26 26 722</span>
          </a>

          <button
            onClick={scrollToServices}
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-platinum/20 bg-white/5 px-6 sm:px-8 md:px-8 py-3 sm:py-3.5 md:py-4 text-xs sm:text-sm md:text-base font-semibold uppercase tracking-wider text-white backdrop-blur-md transition-all hover:bg-white/10 hover:border-brass/40 hover:scale-105 active:scale-95 touch-feedback"
          >
            <Wrench className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            <span>Unsere Services</span>
          </button>

          <a
            href="#quote"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-brass/30 bg-brass/10 px-6 sm:px-8 md:px-8 py-3 sm:py-3.5 md:py-4 text-xs sm:text-sm md:text-base font-semibold uppercase tracking-wider text-brass backdrop-blur-md transition-all hover:bg-brass/20 hover:border-brass/50 hover:scale-105 active:scale-95 touch-feedback"
          >
            <Calendar className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            <span>Angebot anfragen</span>
          </a>
        </motion.div>

        {/* Trust Badge Row - No Emojis */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="mt-8 sm:mt-10 md:mt-14 flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 text-[9px] sm:text-[10px] md:text-xs uppercase tracking-widest text-platinum/50"
        >
          <span className="flex items-center gap-1.5 sm:gap-2">
            <BadgeCheck className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-brass/60" />
            15+ Jahre Erfahrung
          </span>
          <span className="flex items-center gap-1.5 sm:gap-2">
            <Shield className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-brass/60" />
            Zertifizierte Qualität
          </span>
          <span className="flex items-center gap-1.5 sm:gap-2">
            <Star className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-brass/60" />
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
          className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 cursor-pointer hidden sm:block"
          onClick={scrollToServices}
        >
          <div className="flex flex-col items-center gap-1">
            <span className="text-[8px] sm:text-[9px] md:text-[10px] uppercase tracking-widest text-platinum/30">
              Scroll
            </span>
            <ArrowDown className="h-4 w-4 sm:h-5 sm:w-5 text-platinum/30 hover:text-platinum/60 transition-colors" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;