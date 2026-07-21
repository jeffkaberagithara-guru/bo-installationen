import { 
  Mail, 
  Phone, 
  MapPin, 
  ChevronRight, 
  Clock, 
  ShieldCheck,
  PhoneCall,
  Building2
} from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navigationLinks = [
    { label: "Leistungen", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Angebot anfragen", href: "#quote" },
    { label: "Notdienst", href: "#emergency" },
  ];

  const legalLinks = [
    { label: "Impressum", href: "#" },
    { label: "Datenschutz", href: "#" },
    { label: "AGB", href: "#" },
    { label: "Zertifizierungen", href: "#" },
  ];

  return (
    <footer className="relative border-t border-platinum/5 bg-space overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute bottom-0 right-0 h-48 sm:h-64 md:h-96 w-48 sm:w-64 md:w-96 rounded-full bg-brass/5 blur-3xl" />
        <div className="absolute top-0 left-0 h-32 sm:h-48 md:h-64 w-32 sm:w-48 md:w-64 rounded-full bg-electric/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-14 md:py-16 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="relative">
                <img
                  src="/images/logo.png"
                  alt="B.O INSTALLATIONEN"
                  className="h-10 sm:h-12 md:h-14 w-auto object-contain transition-all duration-300 hover:scale-105"
                  style={{ maxHeight: "56px" }}
                />
                <div className="absolute inset-0 rounded-full bg-brass/0 transition-all duration-300 hover:bg-brass/5 blur-xl" />
              </div>
              <div>
                <h3 className="font-display text-base sm:text-lg md:text-xl font-bold text-white leading-tight">
                  B.O <span className="text-brass">INSTALLATIONEN</span>
                </h3>
                <p className="text-[8px] sm:text-[9px] md:text-[10px] uppercase tracking-widest text-platinum/30">
                  Präzision in jedem Detail
                </p>
              </div>
            </div>
            <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-platinum/40">
              Wien · Präzision in jedem Detail
            </p>
            <div className="mt-3 sm:mt-4 flex gap-2 sm:gap-3">
              {[
                { icon: <FaFacebook className="h-3.5 w-3.5 sm:h-4 sm:w-4" />, label: "Facebook" },
                { icon: <FaInstagram className="h-3.5 w-3.5 sm:h-4 sm:w-4" />, label: "Instagram" },
                { icon: <FaLinkedin className="h-3.5 w-3.5 sm:h-4 sm:w-4" />, label: "LinkedIn" },
                { icon: <FaYoutube className="h-3.5 w-3.5 sm:h-4 sm:w-4" />, label: "YouTube" },
              ].map((social, i) => (
                <a
                  key={i}
                  href="#"
                  className="rounded-lg bg-space/50 p-2 sm:p-2.5 text-platinum/40 transition-all duration-150 hover:bg-brass/10 hover:text-brass hover:shadow-[0_0_20px_rgba(201,168,76,0.1)]"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <div className="mt-3 sm:mt-4 flex items-center gap-1.5 sm:gap-2 rounded-lg border border-platinum/5 bg-space/30 px-2.5 sm:px-3 py-1.5 sm:py-2 backdrop-blur-sm">
              <ShieldCheck className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-brass" />
              <span className="text-[10px] sm:text-xs text-platinum/40">Zertifiziert · Versichert</span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs sm:text-sm font-semibold text-white flex items-center gap-1.5 sm:gap-2">
              <span className="h-px w-3 sm:w-4 bg-brass/30" />
              Navigation
            </h4>
            <ul className="mt-3 sm:mt-4 space-y-2 sm:space-y-2.5">
              {navigationLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-platinum/40 transition-all duration-150 hover:text-brass"
                  >
                    <span className="h-1 w-1 rounded-full bg-platinum/20 transition-all duration-150 group-hover:bg-brass group-hover:scale-125" />
                    {link.label}
                    <ChevronRight className="h-2.5 w-2.5 sm:h-3 sm:w-3 opacity-0 transition-all duration-150 group-hover:opacity-100 group-hover:translate-x-0.5" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs sm:text-sm font-semibold text-white flex items-center gap-1.5 sm:gap-2">
              <span className="h-px w-3 sm:w-4 bg-brass/30" />
              Rechtliches
            </h4>
            <ul className="mt-3 sm:mt-4 space-y-2 sm:space-y-2.5">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-platinum/40 transition-all duration-150 hover:text-brass"
                  >
                    <span className="h-1 w-1 rounded-full bg-platinum/20 transition-all duration-150 group-hover:bg-brass group-hover:scale-125" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-3 sm:mt-4 flex flex-wrap gap-1.5 sm:gap-2">
              {["ISO 9001", "ÖNORM", "Zertifiziert"].map((cert) => (
                <span
                  key={cert}
                  className="rounded-full border border-platinum/5 bg-space/30 px-2 sm:px-2.5 py-0.5 sm:py-1 text-[8px] sm:text-[10px] text-platinum/30"
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs sm:text-sm font-semibold text-white flex items-center gap-1.5 sm:gap-2">
              <span className="h-px w-3 sm:w-4 bg-brass/30" />
              Kontakt
            </h4>
            <ul className="mt-3 sm:mt-4 space-y-2.5 sm:space-y-3">
              <li className="flex items-start gap-2 sm:gap-3">
                <div className="mt-0.5 rounded-full bg-brass/10 p-1 sm:p-1.5 text-brass">
                  <MapPin className="h-3.5 w-3.5 sm:h-4 sm:w-4" strokeWidth={1.5} />
                </div>
                <div>
                  <span className="text-[10px] sm:text-xs text-platinum/30">Adresse</span>
                  <p className="text-xs sm:text-sm text-platinum/60">Treustraße 5/2, 1200 Wien</p>
                </div>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <div className="mt-0.5 rounded-full bg-brass/10 p-1 sm:p-1.5 text-brass">
                  <Phone className="h-3.5 w-3.5 sm:h-4 sm:w-4" strokeWidth={1.5} />
                </div>
                <div>
                  <span className="text-[10px] sm:text-xs text-platinum/30">Telefon</span>
                  <a
                    href="tel:+436602626722"
                    className="block text-xs sm:text-sm text-platinum/60 transition-all duration-150 hover:text-brass"
                  >
                    0660 26 26 722
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <div className="mt-0.5 rounded-full bg-brass/10 p-1 sm:p-1.5 text-brass">
                  <Mail className="h-3.5 w-3.5 sm:h-4 sm:w-4" strokeWidth={1.5} />
                </div>
                <div>
                  <span className="text-[10px] sm:text-xs text-platinum/30">E-Mail</span>
                  <a
                    href="mailto:boinstallateur@gmail.com"
                    className="block text-xs sm:text-sm text-platinum/60 transition-all duration-150 hover:text-brass"
                  >
                    boinstallateur@gmail.com
                  </a>
                </div>
              </li>
            </ul>
            <div className="mt-3 sm:mt-4 flex items-center gap-1.5 sm:gap-2 rounded-lg bg-signal/10 border border-signal/10 px-2.5 sm:px-3 py-1.5 sm:py-2">
              <span className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal/60" />
                <span className="relative inline-flex h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-signal" />
              </span>
              <PhoneCall className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-signal" />
              <span className="text-[10px] sm:text-xs font-medium text-signal">24/7 Notdienst</span>
            </div>
          </div>
        </div>

        <div className="mt-8 sm:mt-10 md:mt-12 border-t border-platinum/5 pt-6 sm:pt-7 md:pt-8">
          <div className="flex flex-col items-center justify-between gap-3 sm:gap-4 sm:flex-row">
            <p className="text-[10px] sm:text-xs text-platinum/30">
              © {currentYear} B.O Installateur e.U. — Alle Rechte vorbehalten.
            </p>
            <div className="flex items-center gap-3 sm:gap-4 text-[10px] sm:text-xs text-platinum/30">
              <span className="flex items-center gap-1 sm:gap-1.5">
                <ShieldCheck className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-brass/40" />
                Geprüfte Qualität
              </span>
              <span className="h-3 w-px bg-platinum/10" />
              <span className="flex items-center gap-1 sm:gap-1.5">
                <Clock className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-brass/40" />
                Seit 2009
              </span>
            </div>
          </div>
          <p className="mt-2 text-center text-[8px] sm:text-[10px] text-platinum/20 sm:text-right">
            B.O INSTALLATIONEN · Treustraße 5/2 · 1200 Wien · Österreich
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;