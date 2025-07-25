import { motion } from "motion/react";
import Arrow from "../../assets/whychooseus/arrow.png";

const SolutionText = () => {
  return (
    <div className="text-center">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="text-3xl tracking-tighter mb-10 lg:mb-6 md:text-5xl"
      >
        Our Solution: A Website That{" "}
        <span className="text-purple-500">Wins</span>
      </motion.h2>
      <motion.p
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
        className="text-lg sm:text-xl text-stone-400 sm:leading-relaxed tracking-tighter"
      >
        At FA Media, we turn these problems into opportunities with a proven,{" "}
        <br className="hidden md:block" /> personalized process. Here's how we
        do it:
      </motion.p>
      <motion.img
        src={Arrow}
        alt="Arrow"
        width={250}
        className="mx-auto hidden lg:block"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      />
    </div>
  );
};

export default SolutionText;
