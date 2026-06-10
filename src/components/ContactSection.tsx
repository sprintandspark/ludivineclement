import { trackEvent } from "@/lib/analytics";

const ContactSection = () => {
  return (
    <section id="contatti" className="bg-primary text-primary-foreground py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
          Parliamo. ⚡
        </h2>
        <p className="text-base md:text-lg leading-relaxed mb-10 text-primary-foreground/80">
          Prenota una Discovery Call gratuita di 30 minuti — o scrivimi direttamente.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          
            href="https://ludivineclement.com/prenota"
            onClick={() => trackEvent("cta_click", { cta_id: "contact_prenota" })}
            className="inline-block rounded-full bg-background px-8 py-3.5 text-sm font-bold text-primary hover:scale-[1.02] hover:shadow-xl transition-all duration-300"
          >
            Prenota una Discovery Call gratuita →
          </a>
          
            href="mailto:ciao@sprintandspark.com"
            onClick={() => trackEvent("cta_click", { cta_id: "contact_email" })}
            className="inline-block rounded-full border-2 border-primary-foreground/40 px-8 py-3.5 text-sm font-bold text-primary-foreground hover:border-primary-foreground hover:scale-[1.02] transition-all duration-300"
          >
            Scrivimi →
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
