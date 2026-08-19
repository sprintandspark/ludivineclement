import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const MAILERLITE_ACTION =
  "https://assets.mailerlite.com/jsonp/2223881/forms/196240367419393975/subscribe";
const MAILERLITE_VIEW_PING =
  "https://assets.mailerlite.com/jsonp/2223881/forms/196240367419393975/takel";
const RECAPTCHA_SITE_KEY = "6Lf1KHQUAAAAAFNKEX1hdSWCS3mRMv4FlFaNslaD";

type SubmitStatus = "idle" | "submitting" | "success" | "error";

const Newsletter = () => {
  const [status, setStatus] = useState<SubmitStatus>("idle");

  useEffect(() => {
    if (typeof (window as any).gtag !== "undefined") {
      (window as any).gtag("config", "G-VKZQQZT1D2", {
        page_path: window.location.pathname,
      });
    }
    document.title = "Iscriviti alla Newsletter | Sprint & Spark";
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", "https://ludivineclement.com/newsletter");

    fetch(MAILERLITE_VIEW_PING).catch(() => {});

    return () => {
      document.title =
        "Sprint & Spark — Consulenza per Piccole Imprese in 14 Giorni | Ludivine Clement";
    };
  }, []);

  useEffect(() => {
    if (document.getElementById("ml-recaptcha-script")) return;
    const script = document.createElement("script");
    script.id = "ml-recaptcha-script";
    script.src = "https://www.google.com/recaptcha/api.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");
    const formData = new FormData(event.currentTarget);
    try {
      await fetch(MAILERLITE_ACTION, {
        method: "POST",
        body: formData,
        mode: "no-cors",
      });
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        {/* Header */}
        <section className="bg-primary text-white pt-32 pb-16 md:pt-40 md:pb-20 text-center px-6">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4">
            Iscriviti alla newsletter di Sprint &amp; Spark ⚡
          </h1>
          <p className="text-base md:text-lg max-w-xl mx-auto text-white/80">
            Riceverai informazioni sulle date di apertura per i prossimi sprint, qualche
            riflessione ogni tanto. Niente spam, promesso.
          </p>
        </section>

        {/* MailerLite embed */}
        <section className="py-16 px-6 max-w-3xl mx-auto">
          <button
            onClick={() => {
              if (window.history.length > 1) {
                window.history.back();
              } else {
                window.location.href = "https://ludivineclement.com";
              }
            }}
            className="inline-block text-sm text-primary font-semibold underline-offset-4 hover:underline mb-8"
          >
            ← Torna indietro
          </button>

          <div className="max-w-md mx-auto bg-background border border-border rounded-lg p-6 md:p-8">
            {status === "success" ? (
              <div className="text-center py-4">
                <h4 className="text-2xl font-bold text-foreground mb-2">Sei dentro! 🤍</h4>
                <p className="text-muted-foreground mb-1">
                  Controlla la tua inbox - a breve riceverai la conferma.
                </p>
                <p className="text-muted-foreground">A presto, Ludivine &lt;3</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="ml-email" className="sr-only">
                    Email
                  </label>
                  <input
                    id="ml-email"
                    aria-label="email"
                    required
                    type="email"
                    name="fields[email]"
                    placeholder="la tua mail"
                    autoComplete="email"
                    className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label htmlFor="ml-name" className="sr-only">
                    Nome
                  </label>
                  <input
                    id="ml-name"
                    aria-label="name"
                    type="text"
                    name="fields[name]"
                    placeholder="nome"
                    autoComplete="given-name"
                    className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label htmlFor="ml-last-name" className="sr-only">
                    Cognome
                  </label>
                  <input
                    id="ml-last-name"
                    aria-label="last_name"
                    type="text"
                    name="fields[last_name]"
                    placeholder="cognome"
                    autoComplete="family-name"
                    className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <p className="text-xs text-muted-foreground italic">
                  Puoi disiscriverti quando vuoi. Leggi la{" "}
                  <a
                    href="https://ludivineclement.com/privacy-policy"
                    target="_blank"
                    rel="noreferrer"
                    className="text-accent underline"
                  >
                    Privacy Policy
                  </a>
                  .
                </p>

                <label className="flex items-start gap-2 text-xs text-foreground">
                  <input type="checkbox" required className="mt-0.5" />
                  <span>
                    Acconsento al trattamento dei miei dati per finalità di marketing (invio di
                    email con aggiornamenti sui prossimi Sprint), come descritto nella Privacy
                    Policy.
                  </span>
                </label>

                <div className="g-recaptcha" data-sitekey={RECAPTCHA_SITE_KEY} />

                <input type="hidden" name="ml-submit" value="1" />
                <input type="hidden" name="anticsrf" value="true" />

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full rounded-full bg-primary text-white font-bold text-sm py-3 hover:bg-primary/90 transition-colors disabled:opacity-60"
                >
                  {status === "submitting" ? "Invio in corso…" : "Iscriviti"}
                </button>

                {status === "error" && (
                  <p className="text-xs text-center text-primary font-semibold">
                    Qualcosa è andato storto. Riprova tra poco.
                  </p>
                )}
              </form>
            )}
          </div>
        </section>

        {/* Back to home */}
        <section className="pb-16 text-center px-6">
          <a
            href="https://ludivineclement.com"
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

export default Newsletter;
