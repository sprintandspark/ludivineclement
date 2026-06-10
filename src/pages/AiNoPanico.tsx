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
    areaSer
