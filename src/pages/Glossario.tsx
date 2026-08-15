import  { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
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
      <h2 className="flex items-baseline gap-2" style={{ margin: 0 }}>
        <span
          className="font-bold text-primary"
          style={{ fontSize: "18px" }}
        >
          {item.term}
        </span>
        {item.italian && (
          <span
            className="italic font-normal"
            style={{ fontSize: "13px", color: "#64748B" }}
          >
            (it. {item.italian})
          </span>
        )}
      </h2>
      <ChevronDown
        size={20}
        className={`text-primary shrink-0 transition-transform duration-300 ${
          isOpen ? "rotate-180" : ""
        }`}
      />
    </button>
    <div
      style={{
        maxHeight: isOpen ? "600px" : "0",
        overflow: "hidden",
        transition: "max-height 0.3s ease-in-out",
      }}
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
    </div>
  </div>
);

const Glossario = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    document.title = "Glossario di Business | Sprint & Spark — Ludivine Clement";
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://ludivineclement.com/glossario');
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Cos'è un funnel? Cosa significa KPI? Dal funnel al posizionamento, dalla discovery call allo stack: 30 termini di business spiegati in italiano con esempi concreti. Senza paroloni.");
    }
    return () => {
      document.title = "Sprint & Spark — Consulenza per Piccole Imprese in 14 Giorni | Ludivine Clement";
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
          className="max-w-2xl mb-4"
          style={{ fontSize: "16px", color: "#64748B" }}
        >
          Le parole del business che usi (o che sentirai usare). Spiegate come
          si deve — senza paroloni.
        </p>
        <p
          className="max-w-2xl mb-16"
          style={{ fontSize: "15px", color: "#64748B" }}
        >
          Dal funnel al KPI, dal posizionamento alla discovery call: 30 termini di business spiegati in italiano con esempi concreti — per piccole imprese e professionisti.
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
          <a href="mailto:ciao@sprintandspark.com"
            className="underline hover:text-primary transition-colors"
          >
            ciao@sprintandspark.com
          </a>
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default Glossario;
