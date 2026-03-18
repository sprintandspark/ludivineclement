import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Check } from "lucide-react";

const cards = [
  {
    emoji: "🎯",
    title: "Il Radar",
    shortDesc: "Non sai come trovare i clienti giusti? Costruiamo insieme la tua strategia commerciale. ⚡",
    bullets: [
      "Sessione di diagnosi approfondita del tuo business",
      "Definizione del tuo cliente ideale (ICP)",
      "Messaggio di vendita e canali giusti per te",
      "Valutazione ads (Meta, TikTok, Google)",
      "Playbook personalizzato consegnato a fine sprint",
      "Un sistema che sapresti spiegare a chiunque",
    ],
    bonusLine: "1 check-in gratuito dopo 30 giorni 🤍",
    price: "€1.200",
    cta: "Voglio il Radar →",
    bg: "bg-amber-50",
    border: "border border-amber-100",
    btnClass: "bg-accent text-accent-foreground",
    badge: "💡 Include strategia ads",
    featured: false,
  },
  {
    emoji: "🧘",
    title: "Zero Caos",
    shortDesc: "La tua impresa funziona ma il caos ti frena? Costruiamo il tuo sistema. 🧘",
    bullets: [
      "Audit completo dei tuoi processi attuali",
      "Selezione degli strumenti giusti per te",
      "Setup e configurazione fatto insieme",
      "Panoramica costi (gratuito vs pagamento)",
      "Sistema organizzato e scalabile pronto all'uso",
      "Un sistema che sapresti spiegare a chiunque",
    ],
    bonusLine: "1 check-in gratuito dopo 30 giorni 🤍",
    price: "€1.500",
    cta: "Addio stress →",
    bg: "bg-primary",
    border: "",
    btnClass: "bg-background text-primary",
    badge: "⭐ Più richiesto",
    featured: true,
  },
  {
    emoji: "🇫🇷",
    title: "Ciao France!",
    shortDesc: "La tua impresa funziona in Italia — ed è ora di portarla altrove. Ti accompagno io. 🇫🇷",
    bullets: [
      "Analisi approfondita del mercato target (Francia, UK o altri mercati francofoni/anglofoni)",
      "Adattamento offerta e pricing per il mercato estero",
      "Piano completo: cosa fare, come farlo, quanto costa e quanto tempo ci vuole",
      "Valutazione: hai bisogno di un team locale? Supporto legale? Un partner?",
      "Lista di 30 contatti qualificati nel mercato target",
      "Localizzazione materiali di vendita",
      "Playbook di market entry consegnato a fine sprint",
    ],
    bonusLine: "1 check-in gratuito dopo 2-3 mesi 🤍",
    price: "€2.200",
    cta: "Andiamo in Francia →",
    bg: "bg-emerald-50",
    border: "border border-emerald-100",
    btnClass: "bg-success text-success-foreground",
    badge: "💎 Premium",
    featured: false,
  },
  {
    emoji: "🤖",
    title: "AI? No Panico!",
    shortDesc: "L'AI non è una moda — è il futuro del tuo lavoro quotidiano. Impara quello che serve a TE. 🤖",
    bullets: [
      "Sessione 1-to-1 da 90 minuti su misura per il tuo business",
      "Prima capiamo cosa stai cercando di fare",
      "Esploriamo insieme gli strumenti AI più utili per te",
      "Prompt templates pronti all'uso per il tuo settore",
      "Check-in dopo 1 settimana per vedere come stai andando",
      "Video personalizzato con risorse per restare aggiornato/a",
      "Una guida su dove guardare per non restare mai indietro",
    ],
    bonusLine: "1 check-in gratuito dopo 30 giorni 🤍",
    price: null,
    priceOld: "€250",
    priceNew: "€150",
    cta: "Voglio capire l'AI →",
    bg: "bg-[#F5F3FF]",
    border: "border border-[#7C3AED]",
    btnClass: "bg-[#7C3AED] text-white",
    badge: "🚀 Prezzo di lancio",
    featured: false,
  },
];

const SprintCards = () => {
  const [expanded, setExpanded] = useState<Record<number, boolean>>({});

  const toggle = (i: number) =>
    setExpanded((prev) => ({ ...prev, [i]: !prev[i] }));

  return (
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {cards.map((card, i) => {
            const isIndigo = card.featured;
            const isOpen = !!expanded[i];
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.2, 1, 0.3, 1] }}
                className={`relative p-8 md:p-10 rounded-[2rem] ${card.bg} ${card.border} transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                  isIndigo ? "shadow-xl md:scale-[1.02]" : ""
                }`}
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
                  {card.shortDesc}
                </p>

                {/* Expand/collapse content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                      className="overflow-hidden"
                    >
                      <ul className="mt-4 space-y-2">
                        {card.bullets.map((b) => (
                          <li
                            key={b}
                            className={`flex items-start gap-2 text-sm ${
                              isIndigo ? "text-primary-foreground/90" : "text-foreground/80"
                            }`}
                          >
                            <Check
                              className={`w-4 h-4 mt-0.5 shrink-0 ${
                                isIndigo ? "text-primary-foreground" : "text-primary"
                              }`}
                            />
                            <span>{b}</span>
                          </li>
                        ))}
                        <li
                          className={`flex items-start gap-2 text-sm italic ${
                            isIndigo ? "text-primary-foreground/60" : "text-muted-foreground/70"
                          }`}
                        >
                          <Check
                            className={`w-4 h-4 mt-0.5 shrink-0 ${
                              isIndigo ? "text-primary-foreground/60" : "text-muted-foreground/60"
                            }`}
                          />
                          <span>{card.bonusLine}</span>
                        </li>
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Toggle link */}
                <button
                  onClick={() => toggle(i)}
                  className={`mt-4 text-xs font-semibold cursor-pointer transition-colors ${
                    isIndigo
                      ? "text-primary-foreground/70 hover:text-primary-foreground"
                      : "text-primary hover:text-primary/80"
                  }`}
                >
                  {isOpen ? "Chiudi ↑" : "Scopri di più ↓"}
                </button>

                {/* Price */}
                <div className="mt-6">
                  {card.price ? (
                    <p
                      className={`text-3xl font-extrabold ${
                        isIndigo ? "text-primary-foreground" : "text-foreground"
                      }`}
                    >
                      {card.price}
                    </p>
                  ) : (
                    <p className="flex items-baseline gap-3">
                      <span
                        className={`text-lg line-through ${
                          isIndigo ? "text-primary-foreground/50" : "text-muted-foreground"
                        }`}
                      >
                        {card.priceOld}
                      </span>
                      <span className="text-3xl font-extrabold text-amber-500">
                        {card.priceNew}
                      </span>
                    </p>
                  )}
                </div>

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
};

export default SprintCards;
