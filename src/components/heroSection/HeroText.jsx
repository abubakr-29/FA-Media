import { motion, stagger } from "motion/react";

const containerVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.5,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const HeroText = () => {
  return (
    <div className="w-full lg:w-1/2">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="flex flex-col items-center lg:items-start mt-10"
      >
        <motion.h2
          variants={childVariants}
          className="pb-2 text-4xl tracking-tighter lg:text-8xl md:text-5xl"
        >
          FA Media
        </motion.h2>
        <motion.span
          variants={childVariants}
          className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tighter text-transparent"
        >
          Grow Your Brand. Own Your Voice.
        </motion.span>
        <motion.p
          variants={childVariants}
          className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter"
        >
          We help creators, brands, and businesses thrive online through
          powerful website, branding, and marketing strategies.
        </motion.p>
        <motion.a
          variants={childVariants}
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          download
          className="bg-white rounded-full p-4 text-sm text-stone-800 mb-10 hover:bg-white/70"
        >
          Book a Free Call
        </motion.a>
      </motion.div>
    </div>
  );
};

export default HeroText;
