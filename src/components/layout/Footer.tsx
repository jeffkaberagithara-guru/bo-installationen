import { Mail, Phone, MapPin } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-platinum/5 bg-space-light/30">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h3 className="font-display text-xl font-bold text-white">
              B.O <span className="text-brass">INSTALLATIONEN</span>
            </h3>
            <p className="mt-2 text-sm text-platinum/40">
              Wien · Präzision in jedem Detail
            </p>
            <div className="mt-4 flex gap-3">
              <a
                href="#"
                className="rounded-lg bg-space/50 p-2 text-platinum/40 transition-colors hover:text-brass"
                aria-label="Facebook"
              >
                <FaFacebook className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="rounded-lg bg-space/50 p-2 text-platinum/40 transition-colors hover:text-brass"
                aria-label="Instagram"
              >
                <FaInstagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="rounded-lg bg-space/50 p-2 text-platinum/40 transition-colors hover:text-brass"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold text-white">Navigation</h4>
            <ul className="mt-3 space-y-2 text-sm text-platinum/40">
              <li>
                <a
                  href="#services"
                  className="hover:text-brass transition-colors"
                >
                  Leistungen
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="hover:text-brass transition-colors"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#quote" className="hover:text-brass transition-colors">
                  Angebot anfragen
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold text-white">Rechtliches</h4>
            <ul className="mt-3 space-y-2 text-sm text-platinum/40">
              <li>
                <a href="#" className="hover:text-brass transition-colors">
                  Impressum
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brass transition-colors">
                  Datenschutz
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brass transition-colors">
                  AGB
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brass transition-colors">
                  Zertifizierungen
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white">Kontakt</h4>
            <ul className="mt-3 space-y-2 text-sm text-platinum/40">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-brass" />
                <span>Treustraße 5/2, 1200 Wien</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0 text-brass" />
                <a
                  href="tel:+436602626722"
                  className="hover:text-brass transition-colors"
                >
                  0660 26 26 722
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0 text-brass" />
                <a
                  href="mailto:boinstallateur@gmail.com"
                  className="hover:text-brass transition-colors"
                >
                  boinstallateur@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 border-t border-platinum/5 pt-8 text-center text-xs text-platinum/30">
          <p>
            © {currentYear} B.O Installateur e.U. — Alle Rechte vorbehalten.
          </p>
          <p className="mt-1">
            B.O INSTALLATIONEN · Treustraße 5/2 · 1200 Wien · Österreich
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
