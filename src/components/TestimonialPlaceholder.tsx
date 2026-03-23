import { motion } from "framer-motion";

const TestimonialPlaceholder = () => (
<section className="py-12 md:py-16">
  <div className="mx-auto max-w-3xl px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-3xl border-2 border-primary/20 p-10 md:p-14 text-center"
      >
        <p className="text-xl md:text-2xl font-bold text-foreground">
          Testimonial in arrivo... 👀
        </p>
        <p className="mt-2 text-base font-medium text-muted-foreground">
          Vuoi essere il primo?
        </p>
      </motion.div>
    </div>
  </section>
);

export default TestimonialPlaceholder;
