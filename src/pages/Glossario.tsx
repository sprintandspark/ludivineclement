import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const terms = [
  {
    term: "Sprint",
    it: "scatto / corsa intensiva",
    definition: "Un periodo di lavoro intensivo e focalizzato su un obiettivo preciso, con una durata definita. Si lavora su una cosa sola, si elimina il superfluo, si arriva a un risultato concreto.",
    example: "Come quando ti prepari per un matrimonio: non pensi a tutto in una volta — prima il vestito, poi il catering, poi i fiori. Un obiettivo alla volta, in un tempo definito.",
    when: "Si usa quando si vuole avanzare rapidamente su un progetto senza perdersi in mille direzioni contemporaneamente.",
  },
  {
    term: "Agile",
    it: "agile / flessibile",
    definition: "Un modo di lavorare che privilegia la flessibilità e il miglioramento continuo rispetto alla pianificazione rigida. Si impara facendo, si aggiusta in corsa.",
    example: "Come imparare a cucinare: non aspetti di aver letto tutti i libri di ricette del mondo prima di accendere il fuoco. Provi, assaggi, aggiusti il sale.",
    when: "Si usa per descrivere un approccio al lavoro iterativo, dove la perfezione non è il nemico del bene — è il nemico del fatto.",
  },
  {
    term: "Target / ICP",
    it: "cliente ideale",
    definition: "Il profilo del cliente ideale — quella persona che ha esattamente il problema che tu risolvi, è disposta a pagare, e con cui il lavoro funziona davvero bene. Non è \"tutti\", è qualcuno di molto specifico.",
    example: "Come cercare casa: non dici \"voglio una casa\". Dici: centro città, massimo terzo piano, luce naturale, niente condomini grandi. Più sei specifico, prima trovi quella giusta.",
    when: "Si usa nella strategia commerciale per smettere di parlare a tutti — e iniziare a parlare a chi conta davvero.",
  },
  {
    term: "Playbook",
    it: "manuale operativo",
    definition: "Un documento operativo che raccoglie le procedure, i messaggi e le strategie che funzionano per il tuo business. È la ricetta scritta, quella che puoi replicare, delegare o migliorare.",
    example: "Come il libro di ricette di tua nonna: lei sapeva a memoria come fare il ragù, ma se non l'ha mai scritto, quella ricetta muore con lei. Il playbook è quel ragù messo su carta — così chiunque può farlo, ogni volta uguale.",
    when: "Si usa per sistematizzare ciò che funziona, così il tuo business non dipende solo da te ogni singolo giorno.",
  },
  {
    term: "KPI",
    it: "indicatore chiave di performance",
    definition: "Un numero che misura se stai davvero andando nella direzione giusta. Non tutti i numeri sono KPI — un KPI è quello che conta per capire se il business avanza.",
    example: "Come l'ago della benzina in macchina: non guardi quante volte hai girato il volante, né quante canzoni hai ascoltato. Guardi quel numero lì, perché è quello che ti dice se arrivi a destinazione o ti fermi in autostrada.",
    when: "Si usa per prendere decisioni basate sui fatti, non sull'istinto o sull'umore della settimana.",
  },
  {
    term: "Funnel",
    it: "imbuto",
    definition: "Il percorso che fa un potenziale cliente dal momento in cui scopre il tuo business fino all'acquisto. Si chiama imbuto perché molte persone entrano, ma solo alcune arrivano in fondo.",
    example: "Come trovare l'anima gemella: parti da tutti gli esseri umani sul pianeta. Togli chi vive a 10.000 km. Togli chi non ti interessa fisicamente. Togli chi non ti fa ridere. Togli chi non vuole figli se tu li vuoi. A ogni filtro l'imbuto si stringe — e alla fine rimane qualcuno di molto specifico. Nel business funziona esattamente così.",
    when: "Si usa per capire dove si perdono i potenziali clienti e dove concentrare gli sforzi per convertirne di più.",
  },
  {
    term: "Startup / Scale-up",
    it: "avvio / fase di crescita",
    definition: "Una startup sta cercando il suo modello di business. Una scale-up l'ha già trovato e sta crescendo rapidamente. Due fasi diverse, due problemi diversi.",
    example: "Come aprire un ristorante: all'inizio stai ancora capendo quale cucina fare, chi è il tuo cliente, come si chiama il locale. Quella è la fase startup. Quando hai la fila fuori dalla porta e devi decidere se aprire un secondo locale — quella è la scale-up.",
    when: "Si usa per capire in quale fase si trova un'azienda — perché i consigli giusti per una startup possono essere sbagliati per una scale-up, e viceversa.",
  },
  {
    term: "Market Entry",
    it: "ingresso in un nuovo mercato",
    definition: "La strategia con cui un'azienda entra in un mercato nuovo — un paese straniero, un nuovo settore, un nuovo tipo di cliente. Non si improvvisa.",
    example: "Come trasferirsi in una nuova città: non arrivi senza sapere dove dormire, senza conoscere nessuno e senza capire come funziona il quartiere. Ti informi, capisci le regole non scritte, trovi le persone giuste. Chi arriva impreparato torna a casa dopo sei mesi.",
    when: "Si usa quando si vuole espandere il business oltre i confini attuali, senza bruciare budget e tempo su errori evitabili.",
  },
  {
    term: "Conversion Rate",
    it: "tasso di conversione",
    definition: "La percentuale di persone che compiono l'azione che desideri — comprare, iscriversi, rispondere, fissare una call. È il numero che ti dice quanto è efficace quello che stai facendo.",
    example: "Come invitare gente a una festa: se inviti 100 persone e ne vengono 3, o la festa è noiosa, o hai invitato le persone sbagliate, o il giorno era sbagliato. Il tasso di conversione ti dice che qualcosa non funziona — sta a te capire cosa.",
    when: "Si usa per misurare l'efficacia di una pagina, un'offerta o un messaggio — e capire dove migliorare invece di fare di più della stessa cosa.",
  },
  {
    term: "Follow-up",
    it: "ricontatto",
    definition: "Il contatto successivo al primo — dopo una riunione, un preventivo, una fiera. È il gesto più semplice e più trascurato nel business. La maggior parte delle vendite si chiude al follow-up, non al primo contatto.",
    example: "Come annaffiare una pianta: puoi comprare il vaso più bello, la terra migliore, il seme più raro — ma se poi non la annaffi, muore. Il follow-up è quell'acqua. La relazione non si coltiva da sola.",
    when: "Si usa in ogni fase del processo commerciale, per mantenere viva la relazione senza risultare invadenti.",
  },
  {
    term: "Prompt",
    it: "istruzione",
    definition: "Un'istruzione che dai a uno strumento di intelligenza artificiale per ottenere un risultato specifico. Più è chiaro e contestualizzato, migliore sarà l'output.",
    example: "Come ordinare al ristorante: se dici \"portami qualcosa di buono\" ti portano quello che capita. Se dici \"pasta, niente glutammato, porzione piccola, qualcosa di leggero\" ottieni esattamente quello che vuoi. L'AI funziona allo stesso modo.",
    when: "Si usa ogni volta che si lavora con strumenti AI — la qualità del prompt determina direttamente la qualità del risultato.",
  },
  {
    term: "Elevator Pitch",
    it: "presentazione lampo",
    definition: "Una presentazione sintetica e convincente del tuo business in 30-60 secondi. L'obiettivo non è spiegare tutto, ma incuriosire abbastanza da far venire voglia di saperne di più.",
    example: "Come il titolo di un libro: non racconta tutta la storia, ma deve farti venire voglia di aprirlo. Se il titolo è noioso, il libro resta sullo scaffale — anche se dentro è straordinario.",
    when: "Si usa in networking, fiere, presentazioni spontanee, bio sui social — ogni volta che hai pochissimo tempo per fare una prima impressione che vale.",
  },
];

const GlossarioItem = ({ item, index }: { item: typeof terms[0]; index: number }) => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.03, duration: 0.4 }}
      className="border-b border-border/50"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left gap-4"
      >
        <div>
          <span className="font-['Poppins'] font-bold text-primary text-lg">{item.term}</span>
          <span className="ml-2 text-sm italic text-[#9CA3AF]">(it. {item.it})</span>
        </div>
        <ChevronDown
          size={18}
          className={`shrink-0 text-primary transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-6 space-y-3">
              <p className="font-['Poppins'] text-[#1a1a2e] text-[15px] leading-relaxed">
                {item.definition}
              </p>
              <p className="font-['Poppins'] text-[#1a1a2e] text-[15px] italic leading-relaxed pl-4 border-l-2 border-accent/40">
                {item.example}
              </p>
              <p className="font-['Poppins'] text-[#9CA3AF] text-sm font-light leading-relaxed">
                {item.when}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Glossario = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FAFAF7" }}>
      <Navbar />
      {/* Hero */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-['Poppins'] font-bold text-[clamp(2rem,6vw,3.5rem)] tracking-tight"
            style={{ color: "#1a1a2e" }}
          >
            Glossario ⚡
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-4 text-base md:text-lg font-medium text-muted-foreground max-w-2xl mx-auto"
            style={{ fontFamily: "Poppins" }}
          >
            Le parole del business che usi (o che sentirai usare). Spiegate come si deve — senza paroloni.
          </motion.p>
        </div>
      </section>

      {/* Accordion */}
      <section className="pb-24">
        <div className="mx-auto max-w-3xl px-6">
          {terms.map((item, i) => (
            <GlossarioItem key={item.term} item={item} index={i} />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Glossario;
