import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookieConsent");
    if (!accepted) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("cookieConsent", "true");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("cookieConsent", "false");
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
          <Link
            to="/privacy-policy"
            style={{ color: "#F59E0B", textDecoration: "underline" }}
          >
            Privacy Policy
          </Link>
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
