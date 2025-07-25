import { motion } from "motion/react";

const ServicesText = () => {
  return (
    <div>
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-5xl tracking-tight"
      >
        Our <span className="text-purple-500">Services</span>
      </motion.h2>
      <motion.p
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
        className="mt-4 text-stone-400 max-w-2xl mx-auto leading-relaxed tracking-tighter text-base md:text-lg"
      >
        We design digital solutions that are not just functional, but
        beautifully strategic — for startups, creatives, and established brands
        alike.
      </motion.p>
    </div>
  );
};

export default ServicesText;
