import { useState, useEffect } from "react";
import { ChevronDown, Check, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GlossaryTooltip from "@/components/GlossaryTooltip";

const TALLY_URL = "https://ludivineclement.com/prenota";

const quotes = [
  "Ho i clienti su WhatsApp, i preventivi su Google Drive, le fatture in un'altra app, e le scadenze nella mia testa.",
  "So che dovrei essere più organizzata/o ma non so da dove partire.",
  "Ho provato tre app diverse il mese scorso. Non uso più nessuna delle tre.",
  "Mi dimentico di fare follow-up e perdo clienti che erano quasi pronti.",
];

const pillars = [
  {
    label: "Gli strumenti giusti",
    text: "pochi, semplici, che parlano tra loro.",
  },
  {
    label: "Un sistema che li collega",
    text: "così le informazioni non si perdono e le cose succedono nell'ordine giusto.",
  },
  {
    label: "Una routine che regge",
    text: "costruita intorno alla tua vita vera, non a una giornata ideale che non esiste.",
  },
];

const yesItems = [
  "Passi più tempo a gestire il lavoro che a farlo — e senti che qualcosa deve cambiare",
  "Usi cinque strumenti diversi che non comunicano tra loro — e sei tu il collegamento manuale",
  "Hai provato a organizzarti da sola/o ma ogni sistema che crei dura due settimane e poi crolla",
  "Perdi clienti o opportunità perché le cose ti sfuggono — follow-up dimenticati, messaggi persi, scadenze saltate",
  "Stai partendo con una nuova attività e vuoi costruire un sistema solido fin dall'inizio, senza accumulare caos",
];

const noItems = [
  "Non sei pronta/o a dedicare qualche ora al giorno al tuo business per 14 giorni — lo sprint è intenso, ma è anche così che funziona",
  "Vuoi delegare tutto senza essere coinvolta/o — lo sprint funziona solo se lavoriamo insieme",
];

const faqs = [
  {
    q: "Quanto dura Zero Caos?",
    a: "14 giorni lavorativi. A seconda del ritmo che scegli, il calendario può essere di 14, 16 o 18 giorni — ma il lavoro è lo stesso.",
  },
  {
    q: "Lavoriamo in presenza o da remoto?",
    a: "Tutto da remoto. Le chiamate sono su Google Meet, il resto del lavoro avviene su Notion — un'area di lavoro condivisa dove trovi tutto, sempre aggiornato.",
  },
  {
    q: "Cosa serve per iniziare?",
    a: "Una Discovery Call gratuita di 30 minuti per capire se Zero Caos è lo sprint giusto per te. Se lo è, ricevi un questionario, scegliamo le date, e si parte.",
  },
  {
    q: "Non sono una persona tecnologica — ce la faccio?",
    a: "Sì. Non devi essere esperta/o di tecnologia. Gli strumenti che scegliamo sono semplici, e li configuriamo insieme passo per passo. Alla fine hai anche dei video Loom personalizzati da rivedere quando vuoi — così non devi ricordare tutto a memoria.",
  },
  {
    q: "Ho già provato a organizzarmi con app e strumenti, ma non ha funzionato. Perché questa volta è diverso?",
    a: "Perché non ti do una lista di app da provare. Costruiamo un sistema intero — strumenti collegati tra loro, routine realistiche, procedure chiare. E lo facciamo insieme, intorno al tuo modo di lavorare. È per questo che regge.",
  },
  {
    q: "Cosa succede dopo i 14 giorni?",
    a: "Hai il tuo Manuale Operativo, il tuo sistema attivo, e le tue routine. Dopo 30 giorni dalla fine dello sprint, facciamo un check-in gratuito per vedere come sta andando e aggiustare il tiro se serve.",
  },
  {
    q: "Non ho ancora un nome, un logo o un sito — posso comunque fare Zero Caos?",
    a: "Sì. Zero Caos lavora sull'organizzazione e sui sistemi, non sull'identità visiva. Ma se durante la Discovery Call emerge che hai bisogno anche di un nome, un logo, o una presenza visiva, possiamo aggiungere Brand da Zero (+€800) direttamente al tuo sprint. In quel caso estendiamo il percorso — quanto tempo in più dipende da dove parti, e lo decidiamo insieme.",
  },
];

const CtaButton = ({ className = "" }: { className?: string }) => (
  <a
    href={TALLY_URL}
    target="_blank"
    rel="noopener noreferrer"
    className={`inline-block rounded-full bg-background px-8 py-3.5 text-sm font-bold text-primary hover:scale-[1.02] hover:shadow-xl transition-all duration-300 ${className}`}
  >
    Prenota una Discovery Call gratuita →
  </a>
);

const ZeroCaos = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
  document.title = "Zero Caos — Organizzazione e Sistema di Lavoro in 14 Giorni | Sprint & Spark";
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) {
    metaDesc.setAttribute("content", "Zero Caos è lo sprint di 14 giorni per organizzare il tuo business: strumenti giusti, sistema connesso, routine che regge. Per piccole imprese e professionisti in Italia.");
  }
  return () => {
    document.title = "Sprint & Spark — Consulenza per Piccole Imprese in 14 Giorni | Ludivine Clement";
  };
}, []);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Zero Caos",
            "description": "Sprint di 14 giorni per organizzare il tuo business: strumenti giusti, sistema connesso, routine che regge.",
            "provider": {
              "@type": "Organization",
              "name": "Sprint & Spark",
              "url": "https://ludivineclement.com"
            },
            "areaServed": "Italia",
            "offers": {
              "@type": "Offer",
              "price": "1500",
              "priceCurrency": "EUR"
            }
          })
        }}
      />
      <Navbar />

      {/* SECTION 1 — Hero */}
      <section className="bg-primary text-primary-foreground pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h1 className="text-display text-4xl md:text-6xl mb-8">🧘 Zero Caos</h1>
          <p className="max-w-2xl mx-auto text-base md:text-lg leading-relaxed mb-6">
            Sai cosa dovresti fare. Ma tra i clienti da seguire, i messaggi da mandare, i file sparsi ovunque e le cose che dimentichi — il tempo finisce sempre prima della lista.
          </p>
          <p className="max-w-2xl mx-auto text-base md:text-lg leading-relaxed mb-8">
            Zero Caos è lo sprint di 14 giorni che ti dà un sistema che funziona come funzioni tu.
          </p>
          <p className="text-sm font-semibold text-primary-foreground/80 mb-10">
            €1.500 · 14 giorni · ⭐ Più richiesto
          </p>
          <CtaButton />
        </div>
      </section>

      {/* SECTION 2 — Il problema */}
      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground text-center mb-8">
            "Passo più tempo a rincorrere le cose che a farle."
          </h2>
          <p className="text-foreground text-base md:text-lg leading-relaxed mb-6">
            È la frase che sento più spesso. Arriva detta in mille modi diversi:
          </p>

          <div className="space-y-3 mb-8">
            {quotes.map((q) => (
              <p
                key={q}
                className="italic text-foreground border-l-4 border-primary pl-4 py-1"
              >
                "{q}"
              </p>
            ))}
          </div>

          <p className="text-foreground text-base md:text-lg leading-relaxed mb-4">
            E sotto tutte queste frasi c'è la stessa sensazione: il caos non è perché lavori male. È perché non hai mai avuto il tempo di fermarti e costruire un sistema.
          </p>
          <p className="text-foreground text-base md:text-lg leading-relaxed mb-8">
            La verità è che
          </p>

          <div className="bg-muted border-l-4 border-accent rounded-2xl p-6 md:p-8 mb-10">
            <p className="text-xl md:text-2xl font-bold text-foreground leading-snug">
              Il problema non è la disciplina. Il problema è che nessuno ti ha mai costruito un sistema intorno a come lavori tu.
            </p>
          </div>

          <p className="text-foreground text-base md:text-lg leading-relaxed mb-8">
            Non serve un gestionale da grande azienda. Non serve l'app perfetta. Servono tre cose:
          </p>

          <div className="space-y-4 mb-8">
            {pillars.map((p) => (
              <div key={p.label} className="border border-border rounded-xl p-5">
                <span className="font-bold text-primary">{p.label}</span>
                <span className="text-foreground"> — {p.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — Cos'è Zero Caos */}
      <section className="bg-muted py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-8">
            Cos'è Zero Caos?
          </h2>
          <div className="space-y-5 text-foreground text-base md:text-lg leading-relaxed">
            <p>
              Zero Caos è uno <GlossaryTooltip term="Sprint">sprint</GlossaryTooltip> di 14 giorni in cui prendiamo il tuo modo di lavorare — quello vero, con tutto il caos — e lo trasformiamo in un sistema che funziona.
            </p>
            <p>
              Prima settimana: <strong>analizziamo e scegliamo</strong>. Mappiamo tutto quello che usi oggi, capiamo cosa funziona e cosa no, e selezioniamo gli strumenti giusti per te — non i più famosi, quelli che hanno senso per il tuo lavoro.
            </p>
            <p>
              Seconda settimana: <strong>configuriamo e costruiamo</strong>. Ogni strumento viene configurato insieme, collegato agli altri, e integrato in una routine settimanale che puoi gestire da sola/o. Niente rimane teorico — alla fine, il sistema è attivo e funzionante.
            </p>
            <p>
              Alla fine hai il tuo <GlossaryTooltip term="Manuale Operativo">Manuale Operativo</GlossaryTooltip>: un documento che spiega il tuo sistema passo per passo, con video Loom personalizzati per ogni strumento. Non un manuale generico. Il tuo, costruito intorno al tuo business.
            </p>
            <p>
              Funziona sia che tu abbia un'attività avviata nel caos, sia che tu stia partendo e voglia partire organizzata/o fin dal primo giorno.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4 — Come funziona */}
      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground text-center mb-12">
            Come funziona
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="border border-border rounded-2xl p-8 bg-background">
              <h3 className="text-xl font-bold text-primary mb-4">
                Settimana 1 · Analisi & Setup
              </h3>
              <p className="text-foreground leading-relaxed mb-4">
                Partiamo da una prima chiamata per capire come lavori oggi — ogni strumento, ogni passaggio, ogni cosa che perdi per strada. Faccio un <GlossaryTooltip term="Audit">audit</GlossaryTooltip> completo dei tuoi processi e dei tuoi strumenti, e insieme scegliamo lo <GlossaryTooltip term="Stack">stack</GlossaryTooltip> definitivo: gli strumenti che terrai, quelli nuovi, e quelli da eliminare.
              </p>
              <p className="text-foreground leading-relaxed">
                A metà sprint ci ritroviamo per verificare come ti trovi con i nuovi strumenti e confermare la direzione.
              </p>
            </div>
            <div className="border border-border rounded-2xl p-8 bg-background">
              <h3 className="text-xl font-bold text-primary mb-4">
                Settimana 2 · Configurazione & Consegna
              </h3>
              <p className="text-foreground leading-relaxed mb-4">
                Configuriamo ogni strumento insieme — il tuo <GlossaryTooltip term="Gestionale clienti">gestionale clienti</GlossaryTooltip>, il sistema di prenotazione, i pagamenti, la comunicazione. Costruiamo le connessioni tra gli strumenti, definiamo le tue <GlossaryTooltip term="Routine">routine</GlossaryTooltip> settimanali, e mettiamo tutto in un <GlossaryTooltip term="Sistema">sistema</GlossaryTooltip> completo che gira da solo.
              </p>
              <p className="text-foreground leading-relaxed">
                Ultima chiamata: revisione del Manuale Operativo pagina per pagina, consegna ufficiale.
              </p>
            </div>
          </div>
          <p className="text-center text-muted-foreground text-sm md:text-base">
            3 chiamate incluse (iniziale · metà sprint · consegna finale) + 1 check-in gratuito dopo 30 giorni.
          </p>
        </div>
      </section>

      {/* SECTION 5 — Per chi è */}
      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground text-center mb-12">
            È per te se...
          </h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-lg font-bold text-primary mb-4">✅ È per te se:</h3>
              <ul className="space-y-3">
                {yesItems.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-[15px] text-foreground">
                    <Check className="w-4 h-4 text-primary mt-1 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold text-rose-500 mb-4">❌ Non è per te se:</h3>
              <ul className="space-y-3">
                {noItems.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-[15px] text-foreground">
                    <X className="w-4 h-4 text-rose-400 mt-1 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — Cosa ricevi */}
      <section className="bg-muted py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground text-center mb-12">
            Alla fine dei 14 giorni
          </h2>
          <div className="space-y-6 mb-10">
            <div className="bg-background border border-border rounded-2xl p-6 md:p-8">
              <h3 className="text-lg font-bold text-primary mb-3">
                Il tuo Manuale Operativo
              </h3>
              <p className="text-foreground leading-relaxed">
                Un documento personalizzato che descrive il tuo sistema passo per passo: strumenti, connessioni, routine, e procedure operative. Con video Loom per ogni strumento, da rivedere quando vuoi.
              </p>
              {/* Manuale Operativo mockup image placeholder */}
              <div className="mt-6 h-48 md:h-64 border-2 border-dashed border-border rounded-xl flex items-center justify-center text-muted-foreground text-sm">
                Manuale Operativo mockup image placeholder
              </div>
            </div>
            <div className="bg-background border border-border rounded-2xl p-6 md:p-8">
              <h3 className="text-lg font-bold text-primary mb-3">
                Il tuo sistema configurato e funzionante
              </h3>
              <p className="text-foreground leading-relaxed">
                Non una lista di raccomandazioni, ma gli strumenti veri, già impostati, collegati tra loro, e pronti da usare dal giorno dopo.
              </p>
            </div>
            <div className="bg-background border border-border rounded-2xl p-6 md:p-8">
              <h3 className="text-lg font-bold text-primary mb-3">
                Un metodo per mantenerlo da sola/o
              </h3>
              <p className="text-foreground leading-relaxed">
                Routine settimanali costruite intorno alla tua vita reale, non a una giornata ideale. Il sistema regge perché è fatto su misura per te.
              </p>
            </div>
          </div>
          <p className="text-center text-lg md:text-xl font-semibold text-foreground">
            La vera misura del mio lavoro è quanto sei autonoma/o dopo. ⚡
          </p>
        </div>
      </section>

            {/* CTA before FAQ */}
      <section className="bg-primary py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="text-white text-lg font-semibold mb-6">
            Pronta/o a iniziare? Prenota una chiamata gratuita. ⚡
          </p>
          <CtaButton />
        </div>
      </section>

      {/* SECTION 7 — FAQ */}
      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary text-center mb-3">
            Domande frequenti
          </h2>
          <div className="mx-auto mb-10 h-1 w-16 rounded-full bg-accent" />
          <div>
            {faqs.map((item, i) => (
              <div key={i} className="border-b border-border">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="flex w-full items-center justify-between py-5 text-left"
                >
                  <span className="font-bold text-foreground pr-4" style={{ fontSize: "17px" }}>
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
                      <p className="pb-5 text-muted-foreground leading-relaxed" style={{ fontSize: "15px" }}>
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8 — CTA finale */}
      <section className="bg-primary text-primary-foreground py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
            Pronta/o a smettere di rincorrere e iniziare a lavorare con un sistema?
          </h2>
          <p className="text-base md:text-lg leading-relaxed mb-10">
            14 giorni. Niente paroloni. Solo il tuo Zero Caos, su misura. ⚡
          </p>
          <CtaButton />
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ZeroCaos;
