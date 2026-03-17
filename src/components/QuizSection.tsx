import { useEffect } from "react";

const QuizSection = () => {
  useEffect(() => {
    const w = "https://tally.so/widgets/embed.js";
    const v = () => {
      if (typeof (window as any).Tally !== "undefined") {
        (window as any).Tally.loadEmbeds();
      } else {
        document.querySelectorAll("iframe[data-tally-src]:not([src])").forEach((e) => {
          (e as HTMLIFrameElement).src = (e as HTMLIFrameElement).dataset.tallySrc || "";
        });
      }
    };
    if (typeof (window as any).Tally !== "undefined") {
      v();
    } else if (!document.querySelector(`script[src="${w}"]`)) {
      const s = document.createElement("script");
      s.src = w;
      s.onload = v;
      s.onerror = v;
      document.body.appendChild(s);
    }
  }, []);

  return (
    <section className="py-20 md:py-28 px-6">
      <div className="mx-auto max-w-3xl text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-3">
          Non sai da dove iniziare? ⚡
        </h2>
        <p className="text-lg text-foreground">
          Rispondi a 8 domande e ti dico quale Sprint fa per te.
        </p>
      </div>
      <div className="mx-auto max-w-3xl">
        <iframe
          data-tally-src="https://tally.so/embed/RGLB19?alignLeft=1&transparentBackground=1&dynamicHeight=1"
          loading="lazy"
          width="100%"
          height={700}
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}
          title="Trova il tuo Sprint ⚡"
        />
      </div>
    </section>
  );
};

export default QuizSection;
