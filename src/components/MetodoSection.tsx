import { motion } from "framer-motion";
import GlossaryTooltip from "@/components/GlossaryTooltip";

const pills = [
  "🎯 Approccio su misura",
  "🧠 Metodo pedagogico",
  "⚡ Risultati concreti",
  "🤍 Autonomia garantita",
];

const MetodoSection = () => (
<section id="il-metodo" className="py-16 md:py-20 bg-background">
  <div className="mx-auto max-w-[700px] px-6 text-center">
     <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-4"
      >
        <span className="block text-3xl md:text-5xl font-extrabold text-primary">
          Il Metodo{" "}
          <span className="font-normal italic">Sprint & Spark</span>
        </span>
        <span className="block text-xl md:text-3xl font-medium text-foreground/80 mt-2">
          Parto sempre da te. 🤍
        </span>
      </motion.h2>
    
    <p className="mb-6" style={{ fontSize: "15px", fontStyle: "italic", color: "#64748B", lineHeight: "1.7" }}>
          <span style={{ color: "#F59E0B", fontWeight: "700", fontStyle: "normal", borderBottom: "2px solid #F59E0B", paddingBottom: "1px" }}>Sprint</span>
          {" "}perché lavoriamo veloci, intensi e focalizzati.{" "}
          <span style={{ color: "#F59E0B", fontWeight: "700", fontStyle: "normal", borderBottom: "2px solid #F59E0B", paddingBottom: "1px" }}>Spark</span>
          {" "}
          <span style={{ fontSize: "13px", fontStyle: "italic", color: "#F59E0B", opacity: 0.7 }}>(it. scintilla)</span>
          {" "}— perché non porto io la luce. La luce è già tua. Io accendo solo la scintilla. ⚡
        </p>

      {/* New intro paragraph */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-base md:text-lg font-normal leading-relaxed text-foreground/70 space-y-4 text-left mb-8"
      >
        <p className="font-medium text-foreground/80">
          Ti stai chiedendo perché 14 giorni? Perché uno Sprint?
        </p>
        <p>
          Il concetto viene dal mondo{" "}
          <GlossaryTooltip term="Agile">agile</GlossaryTooltip>
          : un periodo intensivo e focalizzato, con un obiettivo chiaro e un risultato concreto. Niente riunioni infinite. Niente analisi paralizzanti. Solo lavoro vero, fatto insieme.
        </p>
       <p>
          Ma uno{" "}
          <GlossaryTooltip term="Sprint">Sprint</GlossaryTooltip>
          {" "}funziona solo se ci sei davvero. Se è il momento giusto. Se sei pronto/a a metterti in gioco.
        </p>
        <p>
          Io non sono qui per ricostruire la tua impresa al posto tuo. Sono la tua guida, la tua confidente, l'occhio esterno che vede quello che tu non riesci a vedere. Il tuo avvocato del diavolo e il tuo più grande sostenitore.
        </p>
        <p className="font-bold text-foreground">Ma non sono te.</p>
        <p>
          In 14 giorni intensi ti mostro come farlo. Poi vai al tuo ritmo. E magari, lungo la strada, mi insegni qualcosa anche tu. 😊⚡
        </p>
      </motion.div>

      {/* Amber separator */}
      <div className="w-24 h-1 bg-accent rounded-full mx-auto mb-8" />

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="text-lg md:text-xl font-medium text-foreground/80 mb-12"
      >
        Non esiste una formula magica. Esiste quella giusta per te.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-base md:text-lg font-medium leading-relaxed text-foreground/70 space-y-6 text-left"
      >
     <p>
  Vengo da una famiglia di insegnanti. Ho sempre creduto nel valore della pedagogia — nell'arte di insegnare in modo che le persone diventino indipendenti, non dipendenti.
</p>
<p>
  Ho cambiato 13 scuole prima di arrivare all'Università di Cambridge — una delle istituzioni più prestigiose al mondo.
</p>
<p>
  Ho vissuto in 3 paesi. Ho imparato ogni volta la lingua da zero. Mi sono adattata alla cultura, al modo di pensare, al modo di lavorare.
</p>
<p>
  Ho costruito una famiglia in un paese che non era il mio. Ho dato alla luce mia figlia in italiano. Lei per ora risponde nella sua lingua — stiamo ancora traducendo. 😄
</p>
<p className="text-xl font-bold text-foreground">
  Da ogni scuola, ogni paese, ogni lingua ho imparato la stessa cosa: non esistono due storie uguali. E non esiste un metodo unico che funziona per tutti.
</p>
<p>
  Ecco perché ogni Sprint inizia con una domanda semplice:
</p>
<p className="text-xl font-bold text-primary">
  Dove sei adesso — e dove vuoi arrivare?
</p>
<p>
  Il resto lo costruiamo insieme. ⚡
</p>
<p>
  Il mio obiettivo non è che tu abbia bisogno di me per sempre. È che alla fine del nostro Sprint tu sappia fare — e insegnare — quello che abbiamo costruito insieme.
</p>
<p>
  Perché la vera misura del mio lavoro non è quanto sei soddisfatto/a il giorno della consegna.
</p>
<p className="text-lg font-bold text-foreground">
  È quanto sei autonomo/a il giorno dopo. 🤍
</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-12 flex flex-wrap justify-center gap-3"
      >
        {pills.map((pill) => (
          <span
            key={pill}
            className="px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-bold"
          >
            {pill}
          </span>
        ))}
      </motion.div>
    </div>
  </section>
);

export default MetodoSection;
