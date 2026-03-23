import { useState, useEffect } from "react";

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setVisible(true);
    } else if (consent === "true") {
      if (typeof (window as any).gtag !== 'undefined') {
        (window as any).gtag('consent', 'update', {
          'analytics_storage': 'granted'
        });
      }
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookieConsent", "true");
    if (typeof (window as any).gtag !== 'undefined') {
      (window as any).gtag('consent', 'update', {
        'analytics_storage': 'granted'
      });
    }
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("cookieConsent", "false");
    if (typeof (window as any).gtag !== 'undefined') {
      (window as any).gtag('consent', 'update', {
        'analytics_storage': 'denied'
      });
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
      style={{ backgroundColor: "#0F172A" }}
    >
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <p style={{ color: "#E2E8F0", fontSize: "13px", lineHeight: "1.6" }}>
          Questo sito utilizza cookie tecnici e analitici per migliorare 
          la tua esperienza. Leggi la nostra{" "}
        <a href="https://ludivineclement.com/privacy-policy"
            style={{ color: "#F59E0B", textDecoration: "underline" }}
        >
            Privacy Policy
          </a>
          .
        </p>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={decline}
            className="px-4 py-2 rounded-full text-xs font-semibold"
            style={{ 
              backgroundColor: "transparent", 
              color: "#94A3B8",
              border: "1px solid #94A3B8"
            }}
          >
            Rifiuta
          </button>
          <button
            onClick={accept}
            className="px-4 py-2 rounded-full text-xs font-semibold"
            style={{ backgroundColor: "#F59E0B", color: "#FFFFFF" }}
          >
            Accetta
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
