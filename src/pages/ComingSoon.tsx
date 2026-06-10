import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const TALLY_URL = "https://tally.so/r/LZ0aQ2";

const ComingSoon = () => {
  useEffect(() => {
    document.title = "In arrivo | Sprint & Spark";
    return () => {
      document.title = "Sprint & Spark — Consulenza per Piccole Imprese in 14 Giorni | Ludivine Clement";
    };
  }, []);

  return (
    <>
      <Navbar />
      <main className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6 py-24">
        <div className="text-5xl mb-6">⚡</div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
          Stiamo costruendo qualcosa.
        </h1>
        <p className="text-muted-foreground text-base md:text-lg max-w-md mb-10">
          Questa pagina è in arrivo. Torna presto — o{" "}
  
           <a href="mailto:ciao@sprintandspark.com"
              className="text-primary underline-offset-4 hover:underline"
            >
              scrivici
            </a>{" "}
            per saperne di più.
          </p>
                  
          <a href="https://ludivineclement.com"
          className="inline-block rounded-full bg-primary px-8 py-3.5 text-sm font-bold text-white hover:scale-[1.02] hover:shadow-xl transition-all duration-300 mb-6"
        >
          Torna alla home →
        </a>
        
          <a href={TALLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-primary underline-offset-4 hover:underline"
        >
          Oppure prenota una Discovery Call gratuita →
        </a>
      </main>
      <Footer />
    </>
  );
};

export default ComingSoon;
