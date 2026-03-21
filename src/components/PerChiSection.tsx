import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const yesItems = [
  "Hai un'impresa e vuoi farla crescere",
  "Hai un'idea e vuoi lanciarla nel modo giusto",
  "Sei un creativo/a con talento ma poca visibilità",
  "Vuoi entrare in nuovi mercati (Francia, UK)",
  "Vuoi capire l'AI prima che ti superi",
  "Sei pronto/a a lavorarci insieme — davvero",
];

const noItems = [
  "Vuoi che qualcuno faccia tutto al posto tuo",
  "Non hai tempo da dedicare al percorso",
  "Cerchi risultati senza impegno",
  "Hai bisogno di un'agenzia che gestisca i tuoi canali",
];

const PerChiSection = () => (
  <section className="py-20 md:py-28 bg-background px-6">
    <div className="mx-auto max-w-[700px]">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="text-3xl md:text-4xl font-extrabold text-primary text-center mb-3"
      >
        Scopri se è fatto per te
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
        className="text-base md:text-lg font-medium text-muted-foreground text-center mb-12"
      >
        Che tu stia lanciando qualcosa di nuovo o facendo crescere quello che hai già — c'è uno Sprint per te.
      </motion.p>

      <div className="grid md:grid-cols-2 gap-8 mb-10">
        {/* Yes column */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
        >
          <h3 className="text-lg font-bold text-primary mb-4">✅ È per te se:</h3>
          <ul className="space-y-3">
            {yesItems.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-[15px] text-foreground">
                <Check className="w-4 h-4 text-primary mt-1 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* No column */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
        >
          <h3 className="text-lg font-bold text-rose-500 mb-4">❌ Non è per te se:</h3>
          <ul className="space-y-3">
            {noItems.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-[15px] text-foreground">
                <X className="w-4 h-4 text-rose-400 mt-1 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Amber callout */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
        className="rounded-2xl bg-accent/15 border border-accent/30 px-6 py-5 text-center text-sm md:text-[15px] text-foreground leading-relaxed"
      >
        Una domanda che mi fanno spesso: <span className="font-semibold">"Puoi far crescere il mio Instagram?"</span> — Se Instagram fa parte della tua strategia, possiamo guardarlo insieme e capire se è il canale giusto. Ma non lo gestisco per te. 😊⚡
      </motion.div>
    </div>
  </section>
);

export default PerChiSection;
