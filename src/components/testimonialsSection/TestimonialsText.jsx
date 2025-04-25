import { motion } from "motion/react";

const TestimonialsText = () => {
  return (
    <div>
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-5xl mb-4"
      >
        Testimonials
      </motion.h2>
      <motion.p
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
        className="text-stone-400 max-w-xl mx-auto text-lg"
      >
        Words from people we've worked with and helped grow online.
      </motion.p>
    </div>
  );
};

export default TestimonialsText;
