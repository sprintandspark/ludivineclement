import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import GlossaryTooltip from "@/components/GlossaryTooltip";

const faqItems = [
  {
    q: "Cosa succede esattamente durante i 14 giorni?",
    a: (
      <>
        Lavoriamo insieme in modo intensivo su un obiettivo preciso. La maggior parte degli Sprint dura 14 giorni, ma la durata può variare in base allo Sprint scelto. Ogni percorso inizia con una sessione di diagnosi approfondita, seguita da sessioni di lavoro, feedback e revisioni. Alla fine ricevi qualcosa di concreto — che sia un{" "}
        <GlossaryTooltip term="Playbook">playbook</GlossaryTooltip>
        , una strategia o un sistema — pronto da usare il giorno dopo.
      </>
    ),
  },
  {
    q: "Quanto tempo devo dedicare ogni giorno?",
    a: (
      <>
        Durante lo Sprint, ti consiglio di riservare almeno 1-2 ore al giorno — ma puoi fare di più se vuoi! L'idea è che io ti accompagni con task quotidiani e promemoria per mantenere il ritmo. Una volta finito lo Sprint, trovi il tuo passo in base alle tue disponibilità. L'obiettivo non è stravolgerti la vita — è farti avanzare, un passo alla volta. 😊⚡
      </>
    ),
  },
  {
    q: "Cosa ricevo alla fine dello Sprint?",
    a: (
      <>
        Ogni Sprint prevede un risultato specifico — un{" "}
        <GlossaryTooltip term="Playbook">playbook</GlossaryTooltip>
        {" "}personalizzato, una strategia di mercato, un sistema organizzativo o una sessione IA su misura. Non consulenza generica: qualcosa di concreto che puoi usare subito.
      </>
    ),
  },
  {
    q: "Posso fare uno Sprint se ho appena aperto la mia attività?",
    a: (
      <>
        Assolutamente sì — ma dipende da dove sei. Se stai partendo da zero, il percorso ideale potrebbe essere il Brand da Zero + Il Radar: costruiamo insieme la tua identità e la tua strategia commerciale fin dall'inizio. Se invece hai già qualcosa ma non sai come farlo crescere, c'è uno Sprint fatto apposta per te. Scrivimi — troviamo insieme il punto di partenza giusto.
      </>
    ),
  },
  {
    q: "Lavori solo con aziende italiane?",
    a: (
      <>
        No — lavoro in italiano, francese e inglese. Se hai un business in Italia ma vuoi espanderti in Francia o nel mondo anglofono, sono la persona giusta.
      </>
    ),
  },
  {
    q: "Cosa ti rende diversa da un consulente tradizionale?",
    a: (
      <>
        I consulenti tradizionali fanno analisi lunghe e consegnano report. Io lavoro con te, non per te. L'obiettivo non è che tu abbia bisogno di me per sempre — è che alla fine dello Sprint tu sappia fare da solo/a quello che abbiamo costruito insieme.
      </>
    ),
  },
  {
    q: "Come funziona il pagamento?",
    a: (
      <>
        Il pagamento avviene prima dell'inizio dello Sprint. Accetto bonifico bancario. Se hai domande sul pricing o vuoi discutere le opzioni, scrivimi — troviamo la soluzione giusta.
      </>
    ),
  },
  {
    q: "Ho bisogno di esperienza con l'IA per partecipare al sprint AI? No Panico!?",
    a: (
      <>
        Assolutamente no — è pensato proprio per chi parte da zero. Prima capiamo insieme cosa stai cercando di fare, poi esploriamo gli strumenti più utili per il tuo business specifico — inclusi i{" "}
        <GlossaryTooltip term="Prompt">prompt</GlossaryTooltip>
        {" "}giusti per il tuo settore. Niente teoria astratta, solo pratica.
      </>
    ),
  },
  {
    q: "Il check-in gratuito dopo 30 giorni è incluso in tutti gli Sprint?",
    a: (
      <>
        Sì — ogni Sprint include un check-in gratuito dopo 30 giorni (o 2-3 mesi per Ciao France!). Perché il mio lavoro non finisce il giorno della consegna — voglio sapere come stai andando. 🤍
      </>
    ),
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);
  const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqItems.map((item) => ({
        "@type": "Question",
        "name": typeof item.q === "string" ? item.q : "",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": typeof item.a === "string" ? item.a : item.q,
        },
      })),
    };
  return (
    <section id="faq" className="py-20 bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="mx-auto w-full max-w-6xl px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-primary mb-3">
          Domande frequenti
        </h2>
        <p className="text-center text-muted-foreground text-base mb-4">
          Tutto quello che vuoi sapere prima di iniziare. ⚡
        </p>
        <div className="mx-auto mb-10 h-1 w-16 rounded-full bg-accent" />

        <div className="mx-auto max-w-[700px]">
          {faqItems.map((item, i) => (
            <div key={i} className="border-b border-border">
              <button
                onClick={() => toggle(i)}
                className="flex w-full items-center justify-between py-5 text-left"
              >
                <span
                  className="font-bold text-foreground pr-4"
                  style={{ fontSize: "17px" }}
                >
                  {item.q}
                </span>
                <motion.span
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="shrink-0"
                >
                  <ChevronDown className="h-5 w-5 text-muted-foreground" />
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p
                      className="pb-5 text-muted-foreground leading-relaxed"
                      style={{ fontSize: "15px" }}
                    >
                      {item.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}

          <p className="mt-8 text-center text-sm text-muted-foreground">
            Hai altre domande? Scrivimi →{" "}
            
             <a href="mailto:ciao@sprintandspark.com"
              className="text-accent underline hover:text-accent/80 transition-colors"
            >
              ciao@sprintandspark.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
