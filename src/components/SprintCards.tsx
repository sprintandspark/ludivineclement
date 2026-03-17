import { motion } from "framer-motion";

const cards = [
  {
    emoji: "🎯",
    title: "Il Radar",
    description:
      "Trova nuovi clienti in 14 giorni. Definiamo insieme il tuo cliente ideale, il messaggio giusto e i canali da usare. Ti consegno il playbook completo per partire da solo.",
    price: "€1.200",
    cta: "Voglio il Radar →",
    bg: "bg-amber-50",
    border: "border border-amber-100",
    btnClass: "bg-accent text-accent-foreground",
    badge: null,
  },
  {
    emoji: "👋",
    title: "Bye Bye Excel",
    description:
      "Installa un sistema di vendita moderno in 14 giorni. CRM, Apollo, email automatiche. Basta fogli caotici.",
    price: "€1.800",
    cta: "Addio Excel →",
    bg: "bg-primary",
    border: "",
    btnClass: "bg-background text-primary",
    badge: "⭐ Più richiesto",
  },
  {
    emoji: "🇫🇷",
    title: "Ciao France!",
    description:
      "Entra nel mercato francese o UK in 14 giorni. Localizziamo l'offerta, troviamo i primi 30 contatti e partiamo.",
    price: "€2.200",
    cta: "Andiamo in Francia →",
    bg: "bg-emerald-50",
    border: "border border-emerald-100",
    btnClass: "bg-success text-success-foreground",
    badge: null,
  },
];

const SprintCards = () => (
  <section id="sprint" className="py-24 md:py-48">
    <div className="mx-auto max-w-6xl px-6">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-display text-3xl md:text-5xl text-center mb-16"
      >
        Scegli il tuo Sprint
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {cards.map((card, i) => {
          const isIndigo = i === 1;
          return (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.2, 1, 0.3, 1] }}
              className={`relative p-8 md:p-10 rounded-[2rem] ${card.bg} ${card.border} transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl`}
            >
              {card.badge && (
                <span className="absolute top-6 right-6 px-3 py-1 rounded-full bg-background text-primary text-xs font-bold">
                  {card.badge}
                </span>
              )}
              <span className="text-4xl">{card.emoji}</span>
              <h3
                className={`mt-4 text-2xl font-extrabold tracking-tight ${
                  isIndigo ? "text-primary-foreground" : "text-foreground"
                }`}
              >
                {card.title}
              </h3>
              <p
                className={`mt-3 text-sm font-medium leading-relaxed ${
                  isIndigo ? "text-primary-foreground/80" : "text-muted-foreground"
                }`}
              >
                {card.description}
              </p>
              <p
                className={`mt-6 text-3xl font-extrabold ${
                  isIndigo ? "text-primary-foreground" : "text-foreground"
                }`}
              >
                {card.price}
              </p>
              <a
                href="#contatti"
                className={`mt-6 inline-block px-6 py-3 rounded-full font-bold text-sm ${card.btnClass} hover:scale-[1.02] hover:shadow-lg transition-all duration-300`}
              >
                {card.cta}
              </a>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default SprintCards;
