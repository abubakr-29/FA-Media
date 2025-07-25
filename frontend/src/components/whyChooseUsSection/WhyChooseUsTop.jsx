import { motion } from "motion/react";
import Sad from "../../assets/whychooseus/sad.png";

const WhyChooseUsTop = () => {
  return (
    <div className="text-center">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="text-4xl tracking-tighter mb-10 lg:mb-6 md:text-5xl font-special uppercase"
      >
        Is That You? Facing the{" "}
        <span className="text-purple-500">Same Problem?</span>
      </motion.h2>
      <motion.p
        className="text-stone-300 tracking-wide sm:tracking-wider text-xl sm:text-2xl mb-10 mt-12"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
      >
        The Problems Holding Your Website Back
      </motion.p>
      <motion.p
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
        className="text-lg sm:text-xl text-stone-400 sm:leading-relaxed tracking-tighter"
      >
        Your online presence should work as hard as you do, but these
        <br className="hidden md:block" /> common issues might be standing in
        your way:
      </motion.p>
      <motion.img
        src={Sad}
        alt="Sad stick figure illustration"
        width={250}
        className="mx-auto mt-2"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      />
    </div>
  );
};

export default WhyChooseUsTop;
