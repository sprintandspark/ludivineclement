import { Linkedin, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="py-8 border-t border-border/50">
    <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm font-medium text-muted-foreground">
      <div className="flex items-center gap-3">
        <span>Ludivine Clement © 2026</span>
        <span className="hidden md:inline">·</span>
        <a href="https://www.iubenda.com/privacy-policy/31082620" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Privacy Policy</a>
<span className="hidden md:inline">·</span>
        <Link to="/privacy-policy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
<span className="hidden md:inline">·</span>
<a href="https://www.iubenda.com/privacy-policy/31082620/cookie-policy" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Cookie Policy</a>
      </div>
      <span>P.IVA: in registrazione</span>
      <div className="flex gap-4">
        <a href="https://www.linkedin.com/in/ludivine-clement/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-foreground transition-colors">
          <Linkedin size={18} />
        </a>
        <a href="https://www.instagram.com/sprintandspark" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-foreground transition-colors">
          <Instagram size={18} />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
