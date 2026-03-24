import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Check, ChevronDown, ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";
import GlossaryTooltip from "@/components/GlossaryTooltip";

const cards = [
  {
    emoji: "🎯",
    title: "Il Radar",
    shortDesc: "Non sai come trovare i clienti giusti? Costruiamo insieme la tua strategia commerciale. ⚡",
    bullets: [
      "Sessione di diagnosi approfondita del tuo business",
      { text: "Definizione del tuo cliente ideale (", term: "ICP", termDisplay: "ICP", rest: ")" },
      "Messaggio di vendita e canali giusti per te",
      "Valutazione ads (Meta, TikTok, Google)",
      { text: "", term: "Playbook", termDisplay: "Playbook", rest: " personalizzato consegnato a fine sprint" },
      "Un sistema che sapresti spiegare a chiunque",
    ],
    footnotes: [
      { term: "ICP", note: "il profilo del tuo cliente ideale — quella persona che ha esattamente il problema che tu risolvi." },
      { term: "Playbook", note: "il tuo manuale operativo — le procedure e strategie che funzionano per il tuo business, messe su carta." },
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
    footnotes: [],
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
      { text: "", term: "Playbook", termDisplay: "Playbook", rest: " consegnato a fine sprint — include strategia di ", term2: "Market Entry", termDisplay2: "market entry", rest2: "" },
    ],
    footnotes: [
      { term: "Playbook", note: "il tuo manuale operativo — le procedure e strategie che funzionano per il tuo business, messe su carta." },
      { term: "Market Entry", note: "la strategia con cui un'azienda entra in un mercato nuovo. Non si improvvisa." },
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
    shortDesc: "L'IA non è una moda — è il futuro del tuo lavoro quotidiano. Impara quello che serve a TE. 🤖",
    bullets: [
      "Sessione 1-to-1 da 90 minuti su misura per il tuo business",
      "Prima capiamo cosa stai cercando di fare",
      "Esploriamo insieme gli strumenti IA più utili per te",
      { text: "", term: "Prompt", termDisplay: "Prompt", rest: " templates pronti all'uso per il tuo settore" },
      "Check-in dopo 1 settimana per vedere come stai andando",
      "Video personalizzato con risorse per restare aggiornato/a",
      "Una guida su dove guardare per non restare mai indietro",
    ],
    footnotes: [
      { term: "Prompt", note: "un'istruzione che dai a uno strumento AI per ottenere un risultato specifico. Più è chiaro, migliore è l'output." },
    ],
    bonusLine: "1 check-in gratuito dopo 30 giorni 🤍",
    price: null,
    priceOld: "€250",
    priceNew: "€150",
    cta: "Voglio capire l'IA →",
    bg: "bg-[#F5F3FF]",
    border: "border border-[#7C3AED]",
    btnClass: "bg-[#7C3AED] text-white",
    badge: "🚀 Offerta lancio — solo 3 posti a €150",
    featured: false,
  },
];

const addOnIncludes = [
  "Logo e identità visiva",
  "Sito professionale",
  "Dominio e email",
  "Form e questionario",
  "Autonomia totale",
];

type Bullet = string | { text: string; term: string; termDisplay: string; rest: string; term2?: string; termDisplay2?: string; rest2?: string;
};
type Footnote = { term: string; note: string };

const renderBullet = (b: Bullet, isIndigo: boolean) => {
  if (typeof b === "string") return <span>{b}</span>;
  return (
    <span>
      {b.text}
      <span style={{ color: "#4F46E5", fontStyle: "italic" }}>
        {b.termDisplay}*
      </span>
      {b.rest}
      {b.term2 && (
        <span style={{ color: "#4F46E5", fontStyle: "italic" }}>
          {b.termDisplay2}*
        </span>
      )}
      {b.rest2}
    </span>
  );
};

const SprintCards = () => {
  const [expanded, setExpanded] = useState<Record<number, boolean>>({});
  const [accordionOpen, setAccordionOpen] = useState(false);

  const toggle = (i: number) =>
    setExpanded((prev) => ({ ...prev, [i]: !prev[i] }));

  return (
    <section id="sprint" className="py-24 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-display text-3xl md:text-5xl text-center mb-8"
        >
          Scegli il tuo Sprint
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center text-base font-medium text-foreground/80 max-w-[700px] mx-auto mb-4"
        >
          Uno Sprint è un percorso intensivo di 14 giorni con un obiettivo chiaro, un metodo preciso e un risultato concreto. Veloce, ma con significato. ⚡
        </motion.p>

        <motion.div
          id="sprint-definition"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-center mb-16 scroll-mt-24"
        >
          <button
            onClick={() => setAccordionOpen(!accordionOpen)}
            className="inline-flex items-center gap-1.5 text-[15px] font-medium text-primary hover:text-primary/80 transition-colors cursor-pointer"
          >
            {accordionOpen ? "Chiudi ↑" : "Cos'è uno Sprint? Scopri di più →"}
          </button>
          <AnimatePresence initial={false}>
            {accordionOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                className="overflow-hidden"
              >
                <div className="mt-6 max-w-[700px] mx-auto text-[15px] font-normal text-foreground/70 leading-relaxed space-y-4 text-left">
                  <p>
                    Il concetto di Sprint viene dal mondo{" "}
                    <GlossaryTooltip term="Agile">agile</GlossaryTooltip>
                    {" "}e tech: <strong>un periodo intensivo e focalizzato, con un obiettivo chiaro e un risultato concreto alla fine.</strong> Niente riunioni infinite. Niente analisi paralizzanti. Solo lavoro vero, fatto insieme.
                  </p>
                  <p>
                    Ma uno Sprint non funziona per tutti — funziona per chi è pronto. Per chi può dedicare tempo ed energia a questo percorso. Per chi vuole risposte ora, non tra tre mesi.
                  </p>
                  <p>
                    Io non sono qui per ricostruire la tua impresa al posto tuo. Sono la tua guida, la tua confidente, l'occhio esterno che vede quello che tu non riesci a vedere. Il tuo avvocato del diavolo e il tuo più grande sostenitore.
                  </p>
                  <p className="font-bold text-foreground">Ma non sono te.</p>
                  <p>
                    In 14 giorni intensi — un percorso vero, non un corso — ti mostro come farlo. Poi vai al tuo ritmo. E magari, lungo la strada, mi insegni qualcosa anche tu. 😊⚡
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

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
                        {card.bullets.map((b, bi) => (
                          <li
                            key={bi}
                            className={`flex items-start gap-2 text-sm ${
                              isIndigo ? "text-primary-foreground/90" : "text-foreground/80"
                            }`}
                          >
                            <Check
                              className={`w-4 h-4 mt-0.5 shrink-0 ${
                                isIndigo ? "text-primary-foreground" : "text-primary"
                              }`}
                            />
                            {renderBullet(b, isIndigo)}
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

                      {/* Footnotes */}
                      {card.footnotes.length > 0 && (
                        <div
                          className="mt-4 pt-3 space-y-1"
                          style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }}
                        >
                          {card.footnotes.map((fn: Footnote) => (
                            <p
                              key={fn.term}
                              style={{
                                fontSize: "11px",
                                color: isIndigo ? "rgba(255,255,255,0.6)" : "#64748B",
                                lineHeight: "1.5",
                              }}
                            >
                              *{" "}
                              <span style={{ fontStyle: "italic", color: isIndigo ? "rgba(255,255,255,0.8)" : "#4F46E5" }}>
                                {fn.term}
                              </span>
                              {" "}— {fn.note}{" "}
                              <Link
                                to="/glossario"
                                style={{
                                  color: isIndigo ? "rgba(255,255,255,0.8)" : "#4F46E5",
                                  fontWeight: 600,
                                  textDecoration: "underline",
                                }}
                              >
                                Vedi glossario →
                              </Link>
                            </p>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>

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
                 <a href="#contatti"
                  className={`mt-6 inline-block px-6 py-3 rounded-full font-bold text-sm ${card.btnClass} hover:scale-[1.02] hover:shadow-lg transition-all duration-300`}
                >
                  {card.cta}
                </a>
              </motion.div>
            );
          })}
        </div>

        {/* Brand da Zero Add-on Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 md:mt-16 rounded-[16px] bg-[#EEF2FF] border-l-4 border-primary p-6 md:p-8"
        >
          <div className="grid md:grid-cols-[1fr_auto] gap-8">
            <div>
              <p className="text-2xl mb-2">🚀</p>
              <h3 className="text-lg font-bold text-primary">
                Brand da Zero — Add-on
              </h3>
              <p className="mt-1 text-[18px] font-bold text-primary">
                Non hai ancora un sito o un brand?
              </p>
              <p className="mt-3 text-[15px] font-normal text-foreground/70 leading-relaxed max-w-[550px]">
                Durante il tuo Sprint costruiamo insieme la tua identità visiva, il tuo sito e tutto il setup digitale. Lo facciamo insieme — perché alla fine voglio che tu sappia farlo da solo/a. Nessuna dipendenza. Nessun costo di manutenzione. Solo autonomia. 🤍
              </p>
            </div>
            <div className="flex flex-col justify-between">
              <ul className="space-y-2">
                {addOnIncludes.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-foreground/70">
                    <Check className="w-4 h-4 text-primary shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <span className="mt-4 inline-block self-start md:self-end px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-bold">
                +€800 · aggiungibile a qualsiasi Sprint
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SprintCards;
