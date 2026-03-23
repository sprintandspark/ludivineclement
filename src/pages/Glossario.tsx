import  { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import { glossaryTerms } from "@/data/glossaryTerms";

const AccordionItem = ({
  item,
  isOpen,
  onToggle,
}: {
  item: (typeof glossaryTerms)[0];
  isOpen: boolean;
  onToggle: () => void;
}) => (
  <div className="border-b" style={{ borderColor: "#E2E8F0" }}>
    <button
      onClick={onToggle}
      className="w-full flex items-center justify-between py-5 text-left"
    >
      <span className="flex items-baseline gap-2">
        <span
          className="font-bold text-primary"
          style={{ fontSize: "18px" }}
        >
          {item.term}
        </span>
        <span
          className="italic"
          style={{ fontSize: "13px", color: "#64748B" }}
        >
          (it. {item.italian})
        </span>
      </span>
      <ChevronDown
        size={20}
        className={`text-primary shrink-0 transition-transform duration-300 ${
          isOpen ? "rotate-180" : ""
        }`}
      />
    </button>
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="overflow-hidden"
        >
          <div className="pb-6 space-y-4">
            <p style={{ fontSize: "16px", color: "#0F172A" }}>
              {item.definition}
            </p>
            <div className="pl-4">
              <span
                className="font-bold"
                style={{ fontSize: "15px", color: "#F59E0B" }}
              >
                Esempio:{" "}
              </span>
              <span
                className="italic"
                style={{ fontSize: "15px", color: "#0F172A" }}
              >
                {item.example}
              </span>
            </div>
            <div>
              <span
                className="font-medium"
                style={{ fontSize: "13px", color: "#64748B" }}
              >
                Quando si usa:{" "}
              </span>
              <span style={{ fontSize: "13px", color: "#64748B" }}>
                {item.when}
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

const Glossario = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
useEffect(() => {
    document.title = "Glossario di Business | Sprint & Spark — Ludivine Clement";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Cos'è un funnel? Cosa significa KPI? Il glossario dei termini business spiegati in italiano, con esempi concreti. Senza paroloni.");
    }
    return () => {
      document.title = "Ludivine Clement | Strategia di crescita in 14 Giorni";
    };
  }, []);
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": glossaryTerms.map((item) => ({
      "@type": "Question",
      "name": `Cos'è ${item.term}?`,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.definition + " Esempio: " + item.example,
      },
    })),
  };
  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="mx-auto max-w-3xl px-6 py-12 md:py-20">
        <Link
          to="/"
          className="inline-flex items-center text-sm font-semibold text-primary hover:underline mb-10"
        >
          ← Torna al sito
        </Link>

        <h1
          className="font-bold text-4xl md:text-5xl mb-4"
          style={{ color: "#0F172A" }}
        >
          Glossario ⚡
        </h1>
        <p
          className="max-w-2xl mb-16"
          style={{ fontSize: "16px", color: "#64748B" }}
        >
          Le parole del business che usi (o che sentirai usare). Spiegate come
          si deve — senza paroloni.
        </p>

        {glossaryTerms.map((item, i) => (
          <AccordionItem
            key={item.term}
            item={item}
            isOpen={openIndex === i}
            onToggle={() => setOpenIndex(openIndex === i ? null : i)}
          />
        ))}

        <p
          className="text-center mt-12"
          style={{ fontSize: "13px", color: "#64748B" }}
        >
          Manca un termine? Scrivimi →{" "}
          
            <a href="mailto:go.ludivineclement@gmail.com"
            className="underline hover:text-primary transition-colors"
          >
            go.ludivineclement@gmail.com
          </a>
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default Glossario;
