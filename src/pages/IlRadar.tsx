import { useState, useEffect } from "react";
import { ChevronDown, Check, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GlossaryTooltip from "@/components/GlossaryTooltip";
import { trackEvent } from "@/lib/analytics";

const TALLY_URL = "https://ludivineclement.com/prenota";

const quotes = [
  "Non so come presentarmi.",
  "Ho provato a fare i social ma non so cosa dire.",
  "I clienti arrivano per passaparola, ma come faccio a farmi trovare da chi ha bisogno di me?",
  "Ho un'idea, ma non so come raccontarla.",
];

const pillars = [
  {
    label: "Chi sei",
    text: "cosa fai davvero, cosa ti rende diversa/o, qual è il tuo punto di forza.",
  },
  {
    label: "Per chi lo fai",
    text: "chi è la persona giusta per quello che offri, come si comporta, dove si trova.",
  },
  {
    label: "Come farsi trovare",
    text: "quali canali, quale messaggio, quale sistema ha senso per te.",
  },
];

const yesItems = [
  "Hai un'attività, un progetto, o un'idea — e vuoi capire esattamente a chi ti stai rivolgendo e come raggiungerlo/a",
  "Non sapresti descrivere il tuo/a cliente ideale a qualcuno in 30 secondi",
  "Quando ti chiedono \"cosa fai?\" la risposta cambia ogni volta — e vorresti che non fosse più così",
  "Vuoi un piano operativo concreto — non un altro corso, non un altro PDF generico",
  "Stai partendo da zero e vuoi partire con le idee chiare, senza perdere mesi a procedere a tentoni",
];

const noItems = [
  "Non sei pronta/o a dedicare qualche ora al giorno al tuo business per 14 giorni — lo sprint è intenso, ma è anche così che funziona",
  "Vuoi delegare tutto senza essere coinvolta/o — lo sprint funziona solo se lavoriamo insieme",
];

const faqs = [
  {
    q: "Quanto dura Il Radar?",
    a: "14 giorni lavorativi. A seconda del ritmo che scegli, il calendario può essere di 14, 16 o 18 giorni — ma il lavoro è lo stesso.",
  },
  {
    q: "Lavoriamo in presenza o da remoto?",
    a: "Tutto da remoto. Le chiamate sono su Google Meet, il resto del lavoro avviene su Notion — un'area di lavoro condivisa dove trovi tutto, sempre aggiornato.",
  },
  {
    q: "Cosa serve per iniziare?",
    a: "Una Discovery Call gratuita di 30 minuti per capire se Il Radar è lo sprint giusto per te. Se lo è, ricevi un questionario, scegliamo le date, e si parte.",
  },
  {
    q: "Non ho ancora lanciato la mia attività — è troppo presto per Il Radar?",
    a: "No, anzi. Il Radar è pensato per funzionare a qualsiasi stadio. Se hai un'idea chiara ma non sai ancora come trasformarla in qualcosa di concreto, lo sprint ti aiuta a definire a chi ti rivolgi, come ti posizioni, e qual è il piano per i primi 90 giorni. Partire con le idee chiare ti fa risparmiare mesi di tentativi alla cieca.",
  },
  {
    q: "Devo avere già un sito o dei social attivi?",
    a: "No. Il Radar lavora sulla strategia, non sugli strumenti. Che tu abbia un sito, solo un profilo Instagram, o niente di tutto questo — partiamo da dove sei.",
  },
  {
    q: "Cosa succede dopo i 14 giorni?",
    a: "Hai il tuo Playbook e un piano per 90 giorni. Dopo 30 giorni dalla fine dello sprint, facciamo un check-in gratuito per vedere come sta andando e aggiustare il tiro se serve.",
  },
  {
    q: "Non ho ancora un nome, un logo o un sito — posso comunque fare Il Radar?",
    a: "Sì, assolutamente. Il Radar lavora sulla strategia, non sull'identità visiva. Ma se durante la Discovery Call emerge che hai bisogno anche di un nome, un logo, o una presenza visiva, possiamo aggiungere Brand da Zero (+€800) direttamente al tuo sprint. In quel caso estendiamo il percorso per lavorare su strategia e brand insieme — quanto tempo in più dipende da dove parti, e lo decidiamo insieme.",
  },
];

const CtaButton = ({ className = "", variant = "light", section = "hero" }: { className?: string; variant?: string; section?: "hero" | "mid_page" | "final" }) => (
  
    <a href={TALLY_URL}
    onClick={() => trackEvent("cta_click", { section, page: "il_radar" })}
    className={`inline-block rounded-full px-8 py-3.5 text-sm font-bold hover:scale-[1.02] hover:shadow-xl transition-all duration-300 ${
      variant === "dark" ? "bg-primary text-white" : "bg-background text-primary"
    } ${className}`}
  >
    Prenota una Discovery Call gratuita →
  </a>
);

const IlRadar = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    if (typeof (window as any).gtag !== 'undefined') {
    (window as any).gtag('config', 'G-VKZQQZT1D2', {
      'page_path': window.location.pathname
    });
  }
  document.title = "Il Radar — Strategia di Crescita in 14 Giorni | Sprint & Spark";
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) {
    metaDesc.setAttribute("content", "Il Radar è lo sprint di 14 giorni per capire dove stai andando, chi sono i tuoi clienti ideali, e costruire una strategia di crescita concreta. Per piccole imprese in Italia.");
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
            "name": "Il Radar",
            "description": "Sprint di 14 giorni per definire la tua strategia commerciale: chi sei, chi è il tuo cliente ideale, e come raggiungerlo.",
            "provider": {
              "@type": "Organization",
              "name": "Sprint & Spark",
              "url": "https://ludivineclement.com"
            },
            "areaServed": "Italia",
            "offers": {
              "@type": "Offer",
              "price": "1200",
              "priceCurrency": "EUR"
            }
          })
        }}
      />
      <Navbar />

      {/* SECTION 1 — Hero */}
      <section className="bg-primary text-primary-foreground pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h1 className="text-display text-4xl md:text-6xl mb-8">🎯 Il Radar</h1>
          <p className="max-w-2xl mx-auto text-base md:text-lg leading-relaxed mb-6">
            Sai cosa fai. Ma quando devi spiegarlo a un cliente, sui social, in una bio — le parole non vengono. O vengono, ma non funzionano.
          </p>
          <p className="max-w-2xl mx-auto text-base md:text-lg leading-relaxed mb-8">
            Il Radar è lo sprint di 14 giorni che parte da lì — e ti porta a una strategia che sai eseguire da sola/o.
          </p>
          <p className="text-sm font-semibold text-primary-foreground/80 mb-10">
            €1.200 · 14 giorni · Strategia ads inclusa
          </p>
          <CtaButton />
        </div>
      </section>

      {/* SECTION 2 — Il problema */}
      <section className="bg-background py-14 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground text-center mb-8">
            "So cosa faccio. Ma non so come dirlo."
          </h2>
          <p className="text-foreground text-base md:text-lg leading-relaxed mb-6">
            È la frase che sento più spesso. Mi viene detta in mille modi diversi:
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
            E sotto tutte queste frasi c'è la stessa domanda: perché è così difficile parlare di quello che faccio?
          </p>
          <p className="text-foreground text-base md:text-lg leading-relaxed mb-8">
            La risposta, quando ci lavoriamo insieme, arriva sempre in fretta:
          </p>

          <div className="bg-muted border-l-4 border-accent rounded-2xl p-6 md:p-8 mb-10">
            <p className="text-xl md:text-2xl font-bold text-foreground leading-snug">
              Il problema non è come vendi. Il problema è che non hai ancora definito tre cose che vengono prima.
            </p>
          </div>

          <div className="space-y-4 mb-8">
            {pillars.map((p) => (
              <div key={p.label} className="border border-border rounded-xl p-5">
                <span className="font-bold text-primary">{p.label}</span>
                <span className="text-foreground"> — {p.text}</span>
              </div>
            ))}
          </div>

          <p className="text-foreground text-base md:text-lg leading-relaxed">
            Quando queste tre cose sono chiare, sapere "cosa dire" non è più un problema. Le parole vengono da sole, perché sai esattamente a chi stai parlando e perché dovrebbe ascoltarti.
          </p>
        </div>
      </section>

      {/* SECTION 3 — Cos'è Il Radar */}
      <section className="bg-muted py-14 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-8">
            Cos'è Il Radar?
          </h2>
          <div className="space-y-5 text-foreground text-base md:text-lg leading-relaxed">
            <p>Il Radar è uno <GlossaryTooltip term="Sprint">sprint</GlossaryTooltip> di 14 giorni che affronta queste tre domande nell'ordine giusto.</p>
            <p>
              Prima settimana: <strong>chi sei e per chi lo fai</strong>. Partiamo dal tuo business — o dalla tua idea — e lo guardiamo dall'esterno. Analizziamo chi opera nello stesso spazio, definiamo cosa ti rende diversa/o, e costruiamo il profilo della persona giusta per quello che offri.
            </p>
            <p>
              Seconda settimana: <strong>come farsi trovare</strong>. Costruiamo il tuo messaggio, scegliamo i canali che hanno senso per te, creiamo un sistema settimanale che puoi gestire da sola/o, e mettiamo tutto in un piano concreto per i prossimi 90 giorni.
            </p>
            <p>
              Alla fine hai un <GlossaryTooltip term="Playbook">Playbook</GlossaryTooltip> personalizzato: un documento operativo con la tua strategia pronta da eseguire. Non un PDF generico. Il tuo, scritto per il tuo business, con il tuo nome sopra.
            </p>
            <p>
              Funziona sia che tu abbia un'attività con clienti, sia che tu stia partendo da zero. Il punto di partenza è diverso, il metodo è lo stesso.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4 — Come funziona */}
      <section className="bg-background py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground text-center mb-12">
            Come funziona
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="border border-border rounded-2xl p-8 bg-background">
              <h3 className="text-xl font-bold text-primary mb-4">
                Settimana 1 · Chi sei e per chi
              </h3>
              <p className="text-foreground leading-relaxed mb-4">
                Partiamo da una prima chiamata per capire dove sei oggi — che tu abbia già dei clienti o solo un'idea. Analizzo chi opera nello stesso spazio, definiamo insieme chi sei e cosa ti rende diversa/o, e costruiamo il profilo del tuo/a <GlossaryTooltip term="Target/ICP">cliente ideale</GlossaryTooltip> — chi è, come si comporta, dove lo/a trovi.
              </p>
              <p className="text-foreground leading-relaxed">
                A metà sprint ci ritroviamo per verificare tutto e riallinearci.
              </p>
            </div>
            <div className="border border-border rounded-2xl p-8 bg-background">
              <h3 className="text-xl font-bold text-primary mb-4">
                Settimana 2 · Come farsi trovare
              </h3>
              <p className="text-foreground leading-relaxed mb-4">
                Costruiamo il tuo messaggio — chi sei in 30 secondi. Scegliamo i canali giusti e creiamo un <GlossaryTooltip term="Sistema">sistema</GlossaryTooltip> settimanale che puoi gestire da sola/o. Configuriamo insieme gli strumenti <GlossaryTooltip term="IA (Intelligenza Artificiale)">IA</GlossaryTooltip> che hanno senso per te. E mettiamo tutto in un piano concreto per i prossimi 90 giorni.
              </p>
              <p className="text-foreground leading-relaxed">
                Ultima chiamata: revisione del Playbook pagina per pagina, consegna ufficiale.
              </p>
            </div>
          </div>
          <p className="text-center text-muted-foreground text-sm md:text-base">
            3 chiamate incluse (iniziale · metà sprint · consegna finale) + 1 check-in gratuito dopo 30 giorni.
          </p>
        </div>
      </section>

      {/* SECTION 5 — Per chi è */}
      <section className="bg-background py-14 md:py-20">
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
      <section className="bg-muted py-14 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground text-center mb-12">
            Alla fine dei 14 giorni
          </h2>
          <div className="space-y-6 mb-10">
            <div className="bg-background border border-border rounded-2xl p-6 md:p-8">
              <h3 className="text-lg font-bold text-primary mb-3">
                Il tuo Radar Playbook
              </h3>
              <p className="text-foreground leading-relaxed">
                Un documento personalizzato con la tua strategia commerciale, i tuoi canali, il tuo sistema settimanale, e un piano per i prossimi 90 giorni.
              </p>
              {/* Playbook mockup image placeholder */}
              <div className="mt-6 h-48 md:h-64 border-2 border-dashed border-border rounded-xl flex items-center justify-center text-muted-foreground text-sm">
                Playbook mockup image placeholder
              </div>
            </div>
            <div className="bg-background border border-border rounded-2xl p-6 md:p-8">
              <h3 className="text-lg font-bold text-primary mb-3">
                I tuoi strumenti IA configurati
              </h3>
              <p className="text-foreground leading-relaxed">
                Non una lista di app, ma gli strumenti giusti per te, già impostati e pronti da usare.
              </p>
            </div>
            <div className="bg-background border border-border rounded-2xl p-6 md:p-8">
              <h3 className="text-lg font-bold text-primary mb-3">
                Un metodo per andare avanti da sola/o
              </h3>
              <p className="text-foreground leading-relaxed">
                Non un file da rileggere una volta e dimenticare. Un sistema che sai usare, spiegare, e adattare.
              </p>
            </div>
          </div>
          <p className="text-center text-lg md:text-xl font-semibold text-foreground">
            La vera misura del mio lavoro è quanto sei autonoma/o dopo. ⚡
          </p>
        </div>
      </section>
      
        <div className="text-center py-10">
          <CtaButton variant="dark" section="mid_page" />
        </div>

      {/* SECTION 7 — FAQ */}
      <section className="bg-background py-14 md:py-20">
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
      <section className="bg-primary text-primary-foreground py-14 md:py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
            Pronta/o a sapere esattamente dove stai andando?
          </h2>
          <p className="text-base md:text-lg leading-relaxed mb-10">
            14 giorni. Niente paroloni. Solo il tuo Radar, su misura. ⚡
          </p>
          <CtaButton section="final" />
        </div>
      </section>

      <Footer />
    </>
  );
};

export default IlRadar;
