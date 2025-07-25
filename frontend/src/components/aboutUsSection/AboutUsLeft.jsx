import { motion } from "motion/react";

const AboutUsLeft = () => {
  return (
    <div>
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="text-3xl sm:text-4xl tracking-tight mb-8 text-center lg:text-left lg:mb-6 md:text-5xl"
      >
        Meet the <span className="text-purple-500">Founders</span>
      </motion.h2>
      <motion.p
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
        className="text-lg sm:text-xl text-stone-400 text-center lg:text-left sm:leading-relaxed tracking-tight"
      >
        We're a duo passionate about building beautiful, high-performing digital
        experiences. At FA Media, we combine creativity, technology, and
        strategy to help brands grow and shine online.
      </motion.p>
    </div>
  );
};

export default AboutUsLeft;
