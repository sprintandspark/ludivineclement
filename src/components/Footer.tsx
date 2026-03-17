import { Linkedin, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="py-8 border-t border-border/50">
    <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm font-medium text-muted-foreground">
      <div className="flex items-center gap-3">
        <span>Ludivine Clement © 2025</span>
        <span className="hidden md:inline">·</span>
        <Link to="/privacy-policy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
      </div>
      <span>P.IVA: [placeholder]</span>
      <div className="flex gap-4">
        <a href="#" aria-label="LinkedIn" className="hover:text-foreground transition-colors">
          <Linkedin size={18} />
        </a>
        <a href="#" aria-label="Instagram" className="hover:text-foreground transition-colors">
          <Instagram size={18} />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
