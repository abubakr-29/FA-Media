import { motion } from "motion/react";

const ProjectsText = () => {
  return (
    <div>
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="mt-16 text-center text-4xl md:text-5xl tracking-tight"
      >
        Projects
      </motion.h2>
      <motion.p
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
        className="mt-5 mb-15 text-stone-400 text-center max-w-2xl mx-auto leading-relaxed tracking-tighter text-base md:text-lg"
      >
        We have worked on a variety of web development projects, ranging from
        responsive websites for small businesses to full-stack applications and
        complex front-end interfaces.
      </motion.p>
    </div>
  );
};

export default ProjectsText;
