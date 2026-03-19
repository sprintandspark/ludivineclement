import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-24 md:pt-44 md:pb-48">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid md:grid-cols-[1fr_auto] gap-12 md:gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.2, 1, 0.3, 1] }}
          >
            <h1 className="text-display text-[clamp(2.5rem,8vw,4.5rem)]">
              Diamo una scossa{" "}
              <span className="text-primary">al tuo business.</span>{" "}
              <motion.span
                className="inline-block"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              >
                ⚡
              </motion.span>
            </h1>
            <p className="mt-4 text-2xl md:text-3xl font-bold tracking-tight text-foreground/60">
              In soli 14 giorni.
            </p>
            <p className="mt-6 max-w-[65ch] text-base md:text-lg font-medium leading-relaxed text-muted-foreground">
              Mi sono adattata a 3 paesi, 3 lingue e una neonata. Se ho sopravvissuta a tutto questo — posso sicuramente aiutare la tua impresa a crescere. 😄⚡
            </p>
            <p className="mt-3 max-w-[65ch] text-base md:text-lg font-medium leading-relaxed text-muted-foreground">
              Niente paroloni. Niente template. Solo il tuo Sprint, su misura. ⚡
            </p>
            <p className="mt-3 max-w-[65ch] text-base md:text-lg font-medium leading-relaxed text-muted-foreground">
              Ti va di correre? 🏃‍♀️
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#sprint"
                className="px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-bold text-sm hover:scale-[1.02] hover:shadow-xl transition-all duration-300"
              >
                Scegli il tuo Sprint →
              </a>
              <a
                href="#come-funziona"
                className="px-8 py-3.5 rounded-full border-2 border-primary text-primary font-bold text-sm hover:bg-primary/5 transition-all duration-300"
              >
                Scopri di più
              </a>
            </div>
            <a
              href="#sprint"
              className="mt-4 inline-block text-sm font-medium text-primary hover:text-primary/80 transition-colors"
            >
              Scopri cosa sono gli Sprint ↓
            </a>
          </motion.div>

          {/* Photo placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.2, 1, 0.3, 1] }}
            className="hidden md:flex items-center justify-center"
          >
            <div
              className="w-[340px] h-[340px] lg:w-[400px] lg:h-[400px] rounded-full border border-dashed border-primary/40"
              style={{
                background:
                  "radial-gradient(circle at 30% 40%, hsl(243 75% 59% / 0.15), hsl(38 92% 50% / 0.1) 70%, transparent)",
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
