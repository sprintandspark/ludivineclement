import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { trackEvent } from "@/lib/analytics";

const ContactSection = () => {
  useEffect(() => {
    const id = "tally-contact-embed";
    if (document.getElementById(id)) return;
    const s = document.createElement("script");
    s.id = id;
    s.src = "https://tally.so/widgets/embed.js";
    s.onload = () => {
      if (typeof (window as any).Tally !== "undefined") {
        (window as any).Tally.loadEmbeds();
      }
    };
    s.onerror = () => {
      document.querySelectorAll("iframe[data-tally-src]:not([src])").forEach((el) => {
        (el as HTMLIFrameElement).src = (el as HTMLIFrameElement).dataset.tallySrc || "";
      });
    };
    document.body.appendChild(s);
  }, []);

  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          trackEvent("contact_form_view", { page: "home" });
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (formRef.current) observer.observe(formRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="contatti" className="py-24 md:py-48 bg-primary">
      <div className="mx-auto max-w-2xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-display text-3xl md:text-5xl text-primary-foreground">
            Partiamo? 🚀
          </h2>
          <p className="mt-4 text-base md:text-lg font-medium text-primary-foreground/80 max-w-[50ch] mx-auto">
            Compila il form e ti rispondo entro 24 ore. Nessun impegno, solo una chiacchierata! 😊
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="rounded-[16px]"
        >
          <div ref={formRef}>
            <iframe
              data-tally-src="https://tally.so/embed/LZ0aQ2?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
              loading="lazy"
              width="100%"
              height={900}
              frameBorder={0}
              marginHeight={0}
              marginWidth={0}
              title="Contatti — Ludivine Clement"
              style={{ border: "none" }}
            />
          </div>
        </motion.div>
        <p className="mt-6 text-center text-sm font-medium text-primary-foreground/60">
          Oppure scrivimi:{" "}
          <a href="mailto:go.ludivineclement@gmail.com" className="underline text-primary-foreground/80">
            go.ludivineclement@gmail.com
          </a>
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
