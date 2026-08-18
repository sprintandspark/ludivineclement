import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Prenota = () => {
  useEffect(() => {
    if (typeof (window as any).gtag !== 'undefined') {
      (window as any).gtag('config', 'G-VKZQQZT1D2', {
        'page_path': window.location.pathname
      });
    }
    document.title = "Prenota una Discovery Call | Sprint & Spark";
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://ludivineclement.com/prenota')
    return () => {
      document.title = "Sprint & Spark — Consulenza per Piccole Imprese in 14 Giorni | Ludivine Clement";
    };
  }, []);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">

        {/* Header */}
        <section className="bg-primary text-white pt-32 pb-16 md:pt-40 md:pb-20 text-center px-6">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4">
            Prenota una Discovery Call gratuita ⚡
          </h1>
          <p className="text-base md:text-lg max-w-xl mx-auto text-white/80">
            30 minuti. Niente impegno. Capiamo insieme qual è lo sprint giusto per te.
          </p>
        </section>

        {/* Tally embed */}
        <section className="py-16 px-6 max-w-3xl mx-auto">
         <button
              onClick={() => {
                if (window.history.length > 1) {
                  window.history.back();
                } else {
                  window.location.href = "https://ludivineclement.com";
                }
              }}
              className="inline-block text-sm text-primary font-semibold underline-offset-4 hover:underline"
            >
              ← Torna indietro
            </button>
          <iframe
              src="https://tally.so/embed/kd8GyR?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
              width="100%"
              title="Discovery Call — Sprint & Spark"
              className="w-full border-0"
            />
        </section>

        {/* Back to home */}
        <section className="pb-16 text-center px-6">
          
            <a href="https://ludivineclement.com"
            className="inline-block text-sm text-primary font-semibold underline-offset-4 hover:underline"
          >
            ← Torna alla home
          </a>
        </section>

      </main>
      <Footer />
    </>
  );
};

export default Prenota;
