import { motion } from "framer-motion";
import { useState } from "react";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    nome: "",
    cognome: "",
    azienda: "",
    sito: "",
    telefono: "",
    email: "",
    messaggio: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const labelClass = "block text-sm font-bold text-primary mb-1";
  const inputClass =
    "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition";

  return (
    <section id="contatti" className="py-24 md:py-48 bg-primary">
      <div className="mx-auto max-w-2xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-display text-3xl md:text-5xl text-primary-foreground">
            Pronta a correre? ⚡
          </h2>
          <p className="mt-4 text-base md:text-lg font-medium text-primary-foreground/80 max-w-[50ch] mx-auto">
            Compila il form e ti rispondo entro 24 ore. Nessun impegno, solo una chiacchierata! 😊
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="rounded-[16px] bg-background p-8 md:p-10 shadow-xl"
        >
          {submitted ? (
            <div className="text-center py-12">
              <p className="text-2xl md:text-3xl font-bold text-primary">
                Perfetto! 🎉
              </p>
              <p className="mt-4 text-base md:text-lg text-muted-foreground font-[Poppins]">
                Ti rispondo al più presto. Intanto... preparati a correre! 🏃‍♀️⚡
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Nome */}
                <div>
                  <label className={labelClass}>
                    Nome <span className="text-accent">✱</span>
                  </label>
                  <input
                    type="text"
                    name="nome"
                    required
                    placeholder="Il tuo nome"
                    value={form.nome}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
                {/* Cognome */}
                <div>
                  <label className={labelClass}>
                    Cognome <span className="text-accent">✱</span>
                  </label>
                  <input
                    type="text"
                    name="cognome"
                    required
                    placeholder="Il tuo cognome"
                    value={form.cognome}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Azienda */}
                <div>
                  <label className={labelClass}>
                    Nome dell'azienda{" "}
                    <span className="text-muted-foreground font-normal text-xs">(opzionale)</span>
                  </label>
                  <input
                    type="text"
                    name="azienda"
                    placeholder="Il nome della tua azienda (opzionale)"
                    value={form.azienda}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
                {/* Sito web */}
                <div>
                  <label className={labelClass}>
                    Sito web{" "}
                    <span className="text-muted-foreground font-normal text-xs">(opzionale)</span>
                  </label>
                  <input
                    type="text"
                    name="sito"
                    placeholder="www.tuosito.com (opzionale)"
                    value={form.sito}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Telefono */}
                <div>
                  <label className={labelClass}>
                    Numero di telefono{" "}
                    <span className="text-muted-foreground font-normal text-xs">(opzionale)</span>
                  </label>
                  <input
                    type="text"
                    name="telefono"
                    placeholder="Il tuo numero di telefono"
                    value={form.telefono}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
                {/* Email */}
                <div>
                  <label className={labelClass}>
                    Indirizzo email <span className="text-accent">✱</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="la tua email"
                    value={form.email}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
              </div>

              {/* Messaggio */}
              <div>
                <label className={labelClass}>
                  Come ti posso aiutare?{" "}
                  <span className="text-muted-foreground font-normal text-xs">(opzionale)</span>
                </label>
                <textarea
                  name="messaggio"
                  rows={4}
                  placeholder="Raccontami un po'... di cosa hai bisogno? Nessun impegno, solo una chiacchierata! 😊"
                  value={form.messaggio}
                  onChange={handleChange}
                  className={`${inputClass} resize-none`}
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-accent py-4 text-base font-bold text-foreground font-[Poppins] hover:brightness-90 transition-all duration-200 cursor-pointer"
              >
                Andiamo! ⚡
              </button>
            </form>
          )}
        </motion.div>

        <p className="mt-6 text-center text-sm font-medium text-primary-foreground/60">
          Oppure scrivimi:{" "}
          <a href="mailto:hello@ludivine.com" className="underline text-primary-foreground/80">
            hello@ludivine.com
          </a>
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
