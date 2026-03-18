import { Link } from "react-router-dom";

const sections = [
  {
    title: "1. Titolare del trattamento",
    content: (
      <>
        <p>Il titolare del trattamento dei dati personali è:</p>
        <p><strong>Ludivine Clement</strong></p>
        <p>Email: <a href="mailto:go.ludivineclement@gmail.com" className="text-primary underline">go.ludivineclement@gmail.com</a></p>
        <p>(P.IVA: in fase di registrazione)</p>
      </>
    ),
  },
  {
    title: "2. Quali dati raccogliamo",
    content: (
      <>
        <p>Raccogliamo i seguenti dati personali quando compili un form sul nostro sito:</p>
        <ul>
          <li>Nome e cognome</li>
          <li>Indirizzo email</li>
          <li>Numero di telefono (opzionale)</li>
          <li>Nome e sito web dell'azienda (opzionale)</li>
          <li>Messaggi e informazioni che scegli di condividere volontariamente</li>
        </ul>
      </>
    ),
  },
  {
    title: "3. Perché raccogliamo i tuoi dati",
    content: (
      <>
        <p>I tuoi dati vengono raccolti esclusivamente per:</p>
        <ul>
          <li>Rispondere alle tue richieste di informazioni</li>
          <li>Contattarti in merito ai servizi Sprint offerti da Ludivine Clement</li>
          <li>Inviarti comunicazioni commerciali e newsletter, solo se hai dato il tuo consenso esplicito</li>
        </ul>
        <p>La base giuridica del trattamento è:</p>
        <ul>
          <li>Il tuo consenso esplicito (Art. 6(1)(a) GDPR)</li>
          <li>L'esecuzione di misure precontrattuali su tua richiesta (Art. 6(1)(b) GDPR)</li>
        </ul>
      </>
    ),
  },
  {
    title: "4. Come utilizziamo i tuoi dati",
    content: (
      <>
        <p>I tuoi dati non vengono mai:</p>
        <ul>
          <li>Venduti a terzi</li>
          <li>Condivisi con agenzie pubblicitarie</li>
          <li>Utilizzati per finalità diverse da quelle indicate</li>
        </ul>
        <p>I tuoi dati possono essere condivisi con:</p>
          <ul>
            <li>Google LLC (Google Sheets, Gmail) per la gestione delle comunicazioni e l'archiviazione dei dati — privacy policy disponibile su <a href="https://policies.google.com" target="_blank" rel="noopener noreferrer" className="text-primary underline">policies.google.com</a></li>
            <li>Tally BV per la raccolta dei dati tramite form (Belgio) — privacy policy disponibile su <a href="https://tally.so/privacy" target="_blank" rel="noopener noreferrer" className="text-primary underline">tally.so/privacy</a></li>
            <li>GitHub Inc. per l'hosting del sito (Stati Uniti) — privacy policy disponibile su <a href="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement" target="_blank" rel="noopener noreferrer" className="text-primary underline">GitHub Privacy Statement</a></li>
            <li>Google Ireland Limited per Google Fonts (Irlanda)</li>
          </ul>
        </>
    ),
  },
  {
    title: "5. Per quanto tempo conserviamo i tuoi dati",
    content: (
      <p>I tuoi dati vengono conservati per un massimo di 2 anni dalla data di raccolta, dopodiché vengono eliminati in modo sicuro, salvo obblighi di legge che richiedano una conservazione più lunga.</p>
    ),
  },
  {
    title: "6. I tuoi diritti (GDPR)",
    content: (
      <>
        <p>In qualità di residente nell'Unione Europea, hai il diritto di:</p>
        <ul>
          <li><strong>Accesso</strong> — richiedere una copia dei tuoi dati personali</li>
          <li><strong>Rettifica</strong> — correggere dati inesatti o incompleti</li>
          <li><strong>Cancellazione</strong> — richiedere la cancellazione dei tuoi dati ("diritto all'oblio")</li>
          <li><strong>Portabilità</strong> — ricevere i tuoi dati in formato leggibile</li>
          <li><strong>Opposizione</strong> — opporti al trattamento dei tuoi dati</li>
          <li><strong>Revoca del consenso</strong> — revocare il consenso in qualsiasi momento senza pregiudizio</li>
        </ul>
        <p>Per esercitare i tuoi diritti scrivi a: <a href="mailto:go.ludivineclement@gmail.com" className="text-primary underline">go.ludivineclement@gmail.com</a></p>
        <p>Risponderemo entro 30 giorni.</p>
      </>
    ),
  },
  {
    title: "7. Cookie",
    content: (
      <>
       <p>Questo sito utilizza cookie tecnici essenziali per il funzionamento del sito. Per informazioni dettagliate sui cookie utilizzati, consulta la nostra <a href="https://www.iubenda.com/privacy-policy/31082620/cookie-policy" target="_blank" rel="noopener noreferrer" className="text-primary underline">Cookie Policy</a>.</p>
      </>
    ),
  },
  {
    title: "8. Modifiche alla Privacy Policy",
    content: (
      <p>Ci riserviamo il diritto di aggiornare questa Privacy Policy in qualsiasi momento. In caso di modifiche sostanziali ti informeremo via email se sei iscritto/a alla nostra newsletter. La data di ultimo aggiornamento è sempre indicata in cima a questa pagina.</p>
    ),
  },
  {
    title: "9. Reclami",
    content: (
      <p>Hai il diritto di presentare un reclamo al Garante per la Protezione dei Dati Personali (<a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer" className="text-primary underline">www.garanteprivacy.it</a>) se ritieni che il trattamento dei tuoi dati violi il GDPR.</p>
    ),
  },
];

const PrivacyPolicy = () => (
  <div className="min-h-screen bg-background">
    <div className="mx-auto max-w-3xl px-6 py-12 md:py-20">
      <Link
        to="/"
        className="inline-flex items-center text-sm font-semibold text-primary hover:underline mb-10"
      >
        ← Torna al sito
      </Link>

      <h1 className="text-3xl md:text-4xl font-extrabold text-primary mb-1">
        INFORMATIVA SULLA PRIVACY
      </h1>
      <p className="text-lg font-semibold text-muted-foreground mb-2">(Privacy Policy)</p>
      <p className="text-sm text-muted-foreground mb-12">Ultimo aggiornamento: marzo 2026</p>

      <div className="space-y-10">
        {sections.map((s) => (
          <section key={s.title}>
            <h2 className="text-xl font-bold text-primary mb-3">{s.title}</h2>
            <div className="text-foreground leading-relaxed space-y-3 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-1.5 [&_strong]:font-semibold">
              {s.content}
            </div>
          </section>
        ))}
      </div>
    </div>
  </div>
);

export default PrivacyPolicy;
