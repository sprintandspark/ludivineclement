import { useState, useEffect } from "react";
import { ChevronDown, Check, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const TALLY_URL = "https://ludivineclement.com/prenota";

const problems = [
  "Usi ChatGPT come un motore di ricerca — e non capisci perché i risultati deludono.",
  "Hai provato 5 strumenti diversi ma non hai ancora un sistema che funziona davvero.",
  "Ogni tutorial che trovi è troppo tecnico, troppo generico, o già superato.",
];

const yesItems = [
  "Usi l'IA ogni tanto ma senza un sistema vero",
  "Vuoi capire quali strumenti vale davvero la pena imparare",
  "Hai poco tempo e vuoi evitare di testare tutto da sola/o",
  "Preferisci imparare facendo, non guardando video da 3 ore",
  "Gestisci un'attività da sola/o o con un piccolo team",
];

const noItems = [
  "Cerchi un corso con moduli, slide e certificato",
  "Vuoi una soluzione già pronta senza capire come funziona",
  "Hai già un flusso di lavoro IA strutturato e funzionante",
];

const deliverables = [
  {
    title: "I tuoi 3–5 strumenti IA configurati e pronti",
    body: "Selezionati per il tuo business, non per un business generico.",
  },
  {
    title: "Un metodo per valutare i nuovi strumenti da sola/o",
    body: "Così ogni volta che esce qualcosa di nuovo, sai come decidere se vale il tuo tempo.",
  },
  {
    title: "Un video personalizzato da rivedere quando vuoi",
    body: "La tua guida video su misura — non un tutorial di YouTube.",
  },
];

const faqs = [
  {
    q: "Devo avere già esperienza con l'IA?",
    a: "No. Puoi arrivare al primo incontro senza aver mai usato nulla — o con mesi di tentativi frustranti alle spalle. Il punto di partenza è il tuo.",
  },
  {
    q: "Quali strumenti usiamo?",
    a: "Dipende dal tuo business. ChatGPT, Notion AI, Canva AI, Perplexity, Make.com — ma decidiamo insieme durante il primo incontro, in base a cosa ti serve davvero.",
  },
  {
    q: "Come funziona il video personalizzato?",
    a: "Dopo l'ultimo incontro, registro un video su misura per te: ti mostro il tuo set-up, i tuoi strumenti configurati, e come usarli. Puoi riguardarlo ogni volta che ne hai bisogno.",
  },
  {
    q: "Quanto durano gli incontri?",
    a: "Il primo dura 90 minuti. I successivi 60–90 minuti, in base a quanto lavoriamo insieme.",
  },
  {
    q: "Quando posso iniziare?",
    a: "Dopo la Discovery Call gratuita, troviamo insieme le date che funzionano per te.",
  },
  {
    q: "Perché €150 e non di più?",
    a: "È il prezzo di lancio. I primi 3 posti servono a testare il formato con clienti reali. In cambio chiedo una testimonianza onesta al termine.",
  },
  {
    q: "È disponibile anche in francese o inglese?",
    a: "Sì. Gli incontri possono svolgersi in italiano, francese o inglese.",
  },
];

const CtaButton = ({ className = "", variant = "light" }: { className?: string; variant?: string }) => (
  
   <a href={TALLY_URL}
    className={`inline-block rounded-full px-8 py-3.5 text-sm font-bold hover:scale-[1.02] hover:shadow-xl transition-all duration-300 ${
      variant === "dark" ? "bg-primary text-white" : "bg-background text-primary"
    } ${className}`}
  >
    Prenota una Discovery Call gratuita →
  </a>
);

const AiNoPanico = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    document.title = "AI? No Panico! — Strumenti IA su Misura per il Tuo Business | Sprint & Spark";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "AI? No Panico! è la sessione personalizzata in 3 incontri per configurare gli strumenti IA giusti per il tuo business. Senza corsi generici. Su misura.");
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

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "AI? No Panico!",
    description: "Sessione di lavoro personalizzata in 3 incontri per configurare gli strumenti IA giusti per il tuo business.",
    provider: {
      "@type": "Organization",
      name: "Sprint & Spark",
      url: "https://ludivineclement.com",
    },
    areaServed: "Italia",
    offers: {
      "@type": "Offer",
      price: "150",
      priceCurrency: "EUR",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Navbar />

      {/* SECTION 1 — Hero */}
      <section className="bg-primary text-primary-foreground pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h1 className="text-display text-4xl md:text-6xl mb-8">🤖 AI? No Panico!</h1>
          <p className="max-w-2xl mx-auto text-base md:text-lg leading-relaxed mb-6">
            L'intelligenza artificiale spiegata nel modo che ha senso per te.
          </p>
          <p className="text-sm font-semibold text-primary-foreground/80 mb-10">
            €150 · 3 incontri · Offerta lancio 🚀
          </p>
          <CtaButton />
        </div>
      </section>

      {/* SECTION 2 — Il problema */}
      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground text-center mb-8">
            "Ogni settimana esce qualcosa di nuovo. Ho già smesso di stare al passo."
          </h2>

          <div className="bg-muted border-l-4 border-accent rounded-2xl p-6 md:p-8 mb-10">
            <p className="text-xl md:text-2xl font-bold text-foreground leading-snug">
              Non è che sei indietro. È che nessuno te lo ha mai spiegato nel modo giusto.
            </p>
          </div>

          <div className="space-y-4 mb-8">
            {problems.map((p, i) => (
              <div key={i} className="border border-border rounded-xl p-5 flex gap-4">
                <span className="font-bold text-primary shrink-0">{i + 1}.</span>
                <p className="text-foreground">{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — Cos'è */}
      <section className="bg-muted py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-8">
            Non un corso. Una sessione di lavoro su misura.
          </h2>
          <div className="space-y-5 text-foreground text-base md:text-lg leading-relaxed">
            <p>
              AI? No Panico! non è un corso. Non è una lista di strumenti da installare e dimenticare.
            </p>
            <p>
              È una sessione di lavoro personalizzata — tre incontri — in cui capiamo insieme quali strumenti IA hanno senso per il tuo business, li configuriamo in modo che funzionino davvero, e costruiamo un metodo per continuare a imparare da sola/o.
            </p>
            <p>
              Alla fine, sai esattamente cosa usare. E come farlo.
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
              <h3 className="text-xl font-bold text-primary mb-4">Incontro 1 · 90 minuti</h3>
              <p className="text-foreground leading-relaxed">
                Partiamo da dove sei. Analizziamo come lavori oggi, cosa fai già con l'IA (anche se poco), e cosa ti blocca. Poi ti mostro 3–5 strumenti rilevanti per il tuo business, li configuriamo insieme, e ti do 2–3 cose concrete da provare prima del prossimo incontro.
              </p>
            </div>
            <div className="border border-border rounded-2xl p-8 bg-background">
              <h3 className="text-xl font-bold text-primary mb-4">Incontri 2 + 3</h3>
              <p className="text-foreground leading-relaxed">
                Torniamo su quello che hai provato — cosa ha funzionato, cosa no. Approfondiamo, aggiungiamo nuovi strumenti se serve. Al termine ricevi un video personalizzato: una guida video su misura per il tuo set-up, da rivedere quando vuoi.
              </p>
            </div>
          </div>
          <p className="text-center text-muted-foreground text-sm md:text-base">
            Ogni incontro dura 60–90 minuti via Google Meet. Il ritmo tra gli incontri è tuo — decidiamo insieme.
          </p>
        </div>
      </section>

      {/* SECTION 5 — Per chi è */}
      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground text-center mb-12">
            È per te se…
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
            Cosa ricevi
          </h2>
          <div className="space-y-6 mb-10">
            {deliverables.map((d) => (
              <div key={d.title} className="bg-background border border-border rounded-2xl p-6 md:p-8">
                <h3 className="text-lg font-bold text-primary mb-3">{d.title}</h3>
                <p className="text-foreground leading-relaxed">{d.body}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-lg md:text-xl font-semibold text-foreground">
            Non un corso generico. Il tuo set-up, su misura. ⚡
          </p>
        </div>
      </section>

      <div className="text-center py-10">
        <CtaButton variant="dark" />
      </div>

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
            Solo il tuo AI? No Panico!, su misura. ⚡
          </h2>
          <p className="text-base md:text-lg leading-relaxed mb-10">
            Niente corsi infiniti. Niente tutorial da 3 ore.
          </p>
          <CtaButton />
        </div>
      </section>

      <Footer />
    </>
  );
};

export default AiNoPanico;
