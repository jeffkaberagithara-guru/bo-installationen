import { motion } from "framer-motion";
import { Phone, ArrowDown, Calendar, Wrench } from "lucide-react";

const Hero = () => {
  const scrollToServices = () => {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
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
          <source src="/videos/hero-loop.mp4" type="video/mp4" />
        </video>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-space/90 via-space/70 to-space/50" />
        {/* Lens Flare Effect */}
        <div className="absolute inset-0 bg-gradient-radial from-brass/10 via-transparent to-transparent opacity-40 animate-lens-flare pointer-events-none" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center">
        {/* Brand Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-brass/30 bg-space/50 px-4 py-1.5 backdrop-blur-sm"
        >
          <span className="text-xs font-medium uppercase tracking-widest text-brass">
            Wien · 24/7 Service
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
        >
          <span className="block">PRÄZISION</span>
          <span className="block text-brass">IN JEDEM DETAIL</span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
          className="mt-4 max-w-2xl text-base text-platinum/70 sm:text-lg md:text-xl"
        >
          Von der Bauplanung bis zum Notdienst — <br className="sm:hidden" />
          Ihr Partner für präzise Gebäudetechnik in Wien.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mt-8 flex flex-col gap-4 sm:flex-row sm:gap-6"
        >
          {/* Primary CTA - Emergency Call */}
          <a
            href="tel:+436602626722"
            className="group inline-flex items-center justify-center gap-2 rounded-lg bg-signal px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-white transition-all hover:bg-signal/80 hover:shadow-[0_0_40px_rgba(230,57,70,0.3)]"
          >
            <Phone className="h-4 w-4 animate-pulse" />
            Jetzt Notdienst anrufen
          </a>

          {/* Secondary CTA - Services */}
          <button
            onClick={scrollToServices}
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-platinum/20 bg-white/5 px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-white backdrop-blur-sm transition-all hover:bg-white/10 hover:border-brass/40"
          >
            <Wrench className="h-4 w-4" />
            Unsere Services
          </button>

          {/* Tertiary CTA - Quote */}
          <button className="inline-flex items-center justify-center gap-2 rounded-lg border border-brass/30 bg-brass/10 px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-brass backdrop-blur-sm transition-all hover:bg-brass/20 hover:border-brass/50">
            <Calendar className="h-4 w-4" />
            Angebot anfragen
          </button>
        </motion.div>

        {/* Trust Badge Row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs uppercase tracking-widest text-platinum/50"
        >
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-brass/60" />
            15+ Jahre Erfahrung
          </span>
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-brass/60" />
            Zertifizierte Qualität
          </span>
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-brass/60" />⭐ 4.9/5 ·
            200+ Bewertungen
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
          <ArrowDown className="h-6 w-6 text-platinum/30 hover:text-platinum/60 transition-colors" />
        </motion.div>
      </div>

      {/* Emergency Fixed Button - Mobile Optimized */}
      <a
        href="tel:+436602626722"
        className="fixed bottom-4 left-4 right-4 z-50 flex items-center justify-center gap-2 rounded-lg bg-signal px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-white shadow-[0_0_40px_rgba(230,57,70,0.4)] transition-all hover:shadow-[0_0_60px_rgba(230,57,70,0.6)] sm:hidden"
      >
        <Phone className="h-4 w-4 animate-pulse" />
        🚨 24/7 Notdienst
      </a>

      {/* Emergency Fixed Button - Desktop */}
      <a
        href="tel:+436602626722"
        className="fixed right-6 top-6 z-50 hidden items-center gap-2 rounded-lg bg-signal/90 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-sm transition-all hover:bg-signal hover:shadow-[0_0_40px_rgba(230,57,70,0.3)] sm:flex"
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal/60" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-signal" />
        </span>
        🚨 24/7 Notdienst · 0660 26 26 722
      </a>
    </section>
  );
};

export default Hero;