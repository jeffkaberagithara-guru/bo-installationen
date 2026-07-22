import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X, PhoneCall } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Leistungen", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Angebot", href: "#quote" },
    { label: "Notdienst", href: "#emergency" },
  ];

  // Scroll to top function
  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-space/95 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.3)]"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-3 sm:px-4 md:px-6">
        <div className="flex items-center justify-between h-14 sm:h-16 md:h-20">
          {/* Logo - Click to scroll to top */}
          <a
            href="/"
            onClick={scrollToTop}
            className="flex items-center gap-2 sm:gap-3 group flex-shrink-0 cursor-pointer"
          >
            <div className="relative">
              <img
                src="/images/logo.png"
                alt="B.O INSTALLATIONEN"
                className="h-8 sm:h-10 md:h-12 w-auto object-contain transition-all duration-300 group-hover:scale-105 group-hover:brightness-110"
                style={{ maxHeight: "48px" }}
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
              <div className="absolute inset-0 rounded-full bg-brass/0 transition-all duration-300 group-hover:bg-brass/5 blur-xl" />
            </div>
            <div className="hidden xs:block">
              <h1 className="font-display text-base sm:text-lg md:text-xl font-bold text-white leading-tight">
                B.O <span className="text-brass">INSTALLATIONEN</span>
              </h1>
              <p className="text-[8px] sm:text-[9px] md:text-[10px] uppercase tracking-widest text-platinum/30">
                Präzision in jedem Detail
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-platinum/60 hover:text-brass transition-colors duration-150 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-brass transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <a
              href="tel:+436602626722"
              className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-signal to-signal/80 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold text-white transition-all duration-150 hover:shadow-[0_0_30px_rgba(230,57,70,0.3)] hover:scale-105 touch-feedback"
            >
              <Phone className="h-3 w-3 sm:h-4 sm:w-4" />
              <span className="hidden xl:inline">Notdienst</span>
              <span className="xl:hidden">24/7</span>
            </a>
          </nav>

          {/* Tablet Navigation */}
          <nav className="hidden md:flex lg:hidden items-center gap-4">
            <a
              href="tel:+436602626722"
              className="flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-signal to-signal/80 px-3 py-1.5 text-xs font-semibold text-white transition-all duration-150 hover:shadow-[0_0_30px_rgba(230,57,70,0.3)] hover:scale-105 touch-feedback"
            >
              <Phone className="h-3 w-3" />
              <span>24/7</span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-platinum/60 hover:text-white transition-colors duration-150 p-2 -mr-2 touch-feedback"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-3 sm:py-4 border-t border-platinum/5 space-y-2 sm:space-y-3">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-sm sm:text-base text-platinum/60 hover:text-brass transition-colors duration-150 py-2 px-2 rounded-lg hover:bg-space/30 touch-feedback"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="tel:+436602626722"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-signal to-signal/80 px-4 py-3 sm:py-3.5 text-sm sm:text-base font-semibold text-white transition-all duration-150 hover:shadow-[0_0_30px_rgba(230,57,70,0.3)] touch-feedback mt-2"
                >
                  <PhoneCall className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span>24/7 Notdienst: 0660 26 26 722</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;