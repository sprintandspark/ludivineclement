import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Gli Sprint", href: "https://ludivineclement.com/#sprint" },
  { label: "Come funziona", href: "https://ludivineclement.com/#come-funziona" },
  { label: "Il Metodo Sprint & Spark", href: "https://ludivineclement.com/#il-metodo" },
  { label: "Chi sono", href: "https://ludivineclement.com/#chi-sono" },
  { label: "Glossario", href: "https://ludivineclement.com/glossario" },
  { label: "Contatti", href: "https://ludivineclement.com/#contatti" },
  { label: "FAQ", href: "https://ludivineclement.com/#faq" },
  { label: "Glossario", href: "https://ludivineclement.com/glossario" },
];
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 h-20 flex items-center transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="mx-auto w-full max-w-6xl px-6 flex items-center justify-between">
        <a href="https://ludivineclement.com" className="flex items-center">
          <img src={logo} alt="Ludivine Clement" style={{ height: "90px", width: "auto" }} />        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
            link.href.startsWith("/") ? (
              <Link
                key={link.href}
                to={link.href}
                className="text-sm font-semibold text-foreground/70 hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-foreground/70 hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            )
          )}
          <a
            href="https://ludivineclement.com/#contatti"
            className="px-6 py-2.5 rounded-full bg-primary text-primary-foreground font-bold text-sm hover:scale-[1.02] hover:shadow-lg transition-all duration-300"
          >
            Prenota una call →
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-20 left-0 right-0 bg-background shadow-lg md:hidden"
          >
            <div className="flex flex-col items-center gap-4 py-6">
              {navLinks.map((link) =>
                link.href.startsWith("/") ? (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="text-sm font-semibold text-foreground/70"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-sm font-semibold text-foreground/70"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </a>
                )
              )}
              <a
                href="https://ludivineclement.com/#contatti"
                className="px-6 py-2.5 rounded-full bg-primary text-primary-foreground font-bold text-sm"
                onClick={() => setMobileOpen(false)}
              >
                Prenota una call →
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
