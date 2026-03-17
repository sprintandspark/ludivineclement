import { motion } from "framer-motion";

const stats = [
  { emoji: "⚡", text: "14 giorni per sprint" },
  { emoji: "🌍", text: "IT · FR · EN" },
  { emoji: "📊", text: "80% conversion rate" },
  { emoji: "🏙️", text: "London-trained" },
];

const TrustBar = () => (
  <section className="border-y border-border/50 bg-muted/50">
    <div className="mx-auto max-w-6xl px-6 py-6">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
      >
        {stats.map((s) => (
          <div key={s.text} className="flex items-center justify-center gap-2">
            <span className="text-lg">{s.emoji}</span>
            <span className="text-sm font-bold text-foreground/70">{s.text}</span>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default TrustBar;
