import { motion } from "framer-motion";

const ContactSection = () => (
  <section id="contatti" className="py-24 md:py-48 bg-primary">
    <div className="mx-auto max-w-4xl px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-display text-3xl md:text-5xl text-primary-foreground">
          Pronta a correre?
        </h2>
        <p className="mt-6 text-base md:text-lg font-medium leading-relaxed text-primary-foreground/80 max-w-[55ch] mx-auto">
          Prenota una discovery call gratuita da 30 minuti. Nessun impegno, nessuna sorpresa.
          Solo una chiacchierata per capire se posso aiutarti.
        </p>
        <a
          href="#"
          className="mt-10 inline-block px-10 py-4 rounded-full bg-background text-primary font-bold text-base hover:scale-[1.02] hover:shadow-xl transition-all duration-300"
        >
          Prenota la tua call gratuita →
        </a>
        <p className="mt-4 text-sm font-medium text-primary-foreground/60">
          Oppure scrivimi:{" "}
          <a href="mailto:hello@ludivine.com" className="underline text-primary-foreground/80">
            hello@ludivine.com
          </a>
        </p>
      </motion.div>
    </div>
  </section>
);

export default ContactSection;
