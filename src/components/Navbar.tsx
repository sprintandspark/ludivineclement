import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [sprintOpen, setSprintOpen] = useState(false);
  const [risorseOpen, setRisorseOpen] = useState(false);
  const sprintRef = useRef<HTMLDivElement>(null);
  const risorseRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (sprintRef.current && !sprintRef.current.contains(e.target as Node)) {
        setSprintOpen(false);
      }
      if (risorseRef.current && !risorseRef.current.contains(e.target as Node)) {
        setRisorseOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const dropdownClass = "absolute top-full left-0 mt-2 w-52 bg-background rounded-xl shadow-lg border border-border py-2 z-50";
  const dropdownItemClass = "block px-4 py-2.5 text-sm font-semibold text-foreground/70 hover:text-foreground hover:bg-muted transition-colors";

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

          {/* Gli Sprint dropdown */}
          <div ref={sprintRef} className="relative">
            <button
              className="flex items-center gap-1 text-sm font-semibold text-foreground/70 hover:text-foreground transition-colors"
              onMouseEnter={() => setSprintOpen(true)}
              onMouseLeave={() => setSprintOpen(false)}
              onClick={() => setSprintOpen(!sprintOpen)}
            >
              Gli Sprint
              <ChevronDown size={14} className={`transition-transform duration-200 ${sprintOpen ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
              {sprintOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.15 }}
                  className={dropdownClass}
                  onMouseEnter={() => setSprintOpen(true)}
                  onMouseLeave={() => setSprintOpen(false)}
                >
                  <a href="https://ludivineclement.com/#sprint" className={dropdownItemClass}>Gli Sprint</a>
                  <a href="https://ludivineclement.com/#come-funziona" className={dropdownItemClass}>Come funziona</a>
                  <a href="https://ludivineclement.com/#il-metodo" className={dropdownItemClass}>Il Metodo Sprint & Spark</a>
                  <a href="https://ludivineclement.com/#quiz" className={dropdownItemClass}>Quiz - Trova il tuo Sprint ⚡</a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Chi sono */}
          <a href="https://ludivineclement.com/#chi-sono"
            className="text-sm font-semibold text-foreground/70 hover:text-foreground transition-colors"
          >
            Chi sono
          </a>

          {/* Risorse dropdown */}
          <div ref={risorseRef} className="relative">
            <button
              className="flex items-center gap-1 text-sm font-semibold text-foreground/70 hover:text-foreground transition-colors"
              onMouseEnter={() => setRisorseOpen(true)}
              onMouseLeave={() => setRisorseOpen(false)}
              onClick={() => setRisorseOpen(!risorseOpen)}
            >
              Risorse
              <ChevronDown size={14} className={`transition-transform duration-200 ${risorseOpen ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
              {risorseOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.15 }}
                  className={dropdownClass}
                  onMouseEnter={() => setRisorseOpen(true)}
                  onMouseLeave={() => setRisorseOpen(false)}
                >
                  <a href="https://ludivineclement.com/#faq" className={dropdownItemClass}>FAQ</a>
                  <a href="https://ludivineclement.com/glossario" className={dropdownItemClass}>Glossario</a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Contatti */}
          <a href="https://ludivineclement.com/#contatti"
            className="text-sm font-semibold text-foreground/70 hover:text-foreground transition-colors"
          >
            Contatti
          </a>

          <a href="https://ludivineclement.com/#contatti"
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
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Gli Sprint</p>
              <a href="https://ludivineclement.com/#sprint" className="text-sm font-semibold text-foreground/70" onClick={() => setMobileOpen(false)}>Gli Sprint</a>
              <a href="https://ludivineclement.com/#come-funziona" className="text-sm font-semibold text-foreground/70" onClick={() => setMobileOpen(false)}>Come funziona</a>
              <a href="https://ludivineclement.com/#il-metodo" className="text-sm font-semibold text-foreground/70" onClick={() => setMobileOpen(false)}>Il Metodo Sprint & Spark</a>
              <a href="https://ludivineclement.com/#quiz" className="text-sm font-semibold text-foreground/70" onClick={() => setMobileOpen(false)}>Quiz - Trova il tuo Sprint ⚡</a>
              <div className="w-full border-t border-border/50" />
              <a href="https://ludivineclement.com/#chi-sono" className="text-sm font-semibold text-foreground/70" onClick={() => setMobileOpen(false)}>Chi sono</a>
              <div className="w-full border-t border-border/50" />
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Risorse</p>
              <a href="https://ludivineclement.com/#faq" className="text-sm font-semibold text-foreground/70" onClick={() => setMobileOpen(false)}>FAQ</a>
              <a href="https://ludivineclement.com/glossario" className="text-sm font-semibold text-foreground/70" onClick={() => setMobileOpen(false)}>Glossario</a>
              <div className="w-full border-t border-border/50" />
              <a href="https://ludivineclement.com/#contatti" className="text-sm font-semibold text-foreground/70" onClick={() => setMobileOpen(false)}>Contatti</a>
              <a href="https://ludivineclement.com/#contatti"
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
