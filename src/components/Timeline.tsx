import { motion } from "framer-motion";

const steps = [
  {
    num: "1",
    emoji: "📞",
    title: "Discovery call gratuita",
    desc: "30 minuti per capire dove sei e dove vuoi arrivare. Nessun impegno. ☕",
  },
  {
    num: "2",
    emoji: "⚡",
    title: "14 giorni di Sprint",
    desc: "Lavoriamo insieme, intenso e focalizzato. Non è un corso — è un percorso. E lo facciamo insieme. 🤝",
  },
  {
    num: "3",
    emoji: "🎁",
    title: "Consegna & autonomia",
    desc: "Ricevi tutto il materiale. Sei autonomo/a — e sapresti spiegarlo a chiunque. 🤍",
  },
];

const Timeline = () => (
  <section id="come-funziona" className="py-24 md:py-28 bg-muted/30">
    <div className="mx-auto max-w-6xl px-6">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-display text-3xl md:text-5xl text-center mb-20"
      >
        Come funziona uno Sprint?
      </motion.h2>

      <div className="relative grid md:grid-cols-3 gap-16 md:gap-12">
        {/* Dashed connector line — desktop only */}
        <div className="hidden md:block absolute top-10 left-[16%] right-[16%] border-t-2 border-dashed border-foreground/10" />

        {steps.map((step, i) => (
          <motion.div
            key={step.num}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="relative text-center md:text-left"
          >
            <span className="text-7xl font-black text-foreground/[0.04] absolute -top-6 left-1/2 md:left-0 -translate-x-1/2 md:translate-x-0 select-none">
              {step.num}
            </span>
            <div className="relative">
              <span className="text-3xl">{step.emoji}</span>
              <h3 className="mt-3 text-lg font-extrabold text-foreground">{step.title}</h3>
              <p className="mt-2 text-sm font-medium leading-relaxed text-muted-foreground max-w-xs mx-auto md:mx-0">
                {step.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Timeline;
