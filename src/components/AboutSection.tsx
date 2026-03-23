import { motion } from "framer-motion";
import headshot from "@/assets/ludivine-headshot.jpeg";

const badges = [
  "📍 Based in Italy",
  "🎓 Cambridge",
  "🏙️ London experience",
  "🌍 IT · FR · EN",
];

const AboutSection = () => (
<section id="chi-sono" className="py-16 md:py-24">
  <div className="mx-auto max-w-6xl px-6">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-display text-3xl md:text-5xl mb-16"
      >
        Chi sono
      </motion.h2>

      <div className="grid md:grid-cols-[1fr_auto] gap-12 md:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-5">
            <p className="max-w-[65ch] text-base md:text-lg font-medium leading-relaxed text-muted-foreground">
              Anni a Londra ad aiutare startup e scale-up a crescere — con metodo, dati e gli strumenti digitali giusti. Mercati UK, Francia e Italia.
            </p>
            <p className="max-w-[65ch] text-base md:text-lg font-medium leading-relaxed text-muted-foreground">
              Una cosa l'ho vista ovunque: prodotti fantastici, processi commerciali improvvisati.
            </p>
            <p className="max-w-[65ch] text-base md:text-lg font-medium leading-relaxed text-muted-foreground">
              Ho scelto Roma per portare il cambiamento. Sprint di 14 giorni, niente contratti infiniti e zero paroloni.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {badges.map((b) => (
              <span
                key={b}
                className="px-4 py-2 rounded-full bg-muted text-sm font-bold text-foreground/70"
              >
                {b}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center order-first md:order-last"
        >
          <img
            src={headshot}
            alt="Ludivine Clement"
            className="w-64 h-auto md:w-80 rounded-[16px] object-cover shadow-lg"
          />
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
