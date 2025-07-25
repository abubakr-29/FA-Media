import { motion } from "motion/react";
import { Link } from "react-scroll";

const AboutUsTop = () => {
  return (
    <div className="w-full max-w-5xl mx-auto flex flex-col items-center justify-center text-center py-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="text-4xl tracking-tight sm:tracking-tighter mb-8 lg:mb-6 md:text-5xl"
      >
        About Us
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
        className="text-lg sm:text-xl text-stone-400 sm:leading-relaxed tracking-tight sm:tracking-tighter space-y-8 max-w-4xl mx-auto px-4"
      >
        <p className="leading-relaxed">
          At FA Media, we solve a common challenge — websites that may look
          great, but fail to convert. Many sites struggle with low conversions,
          unclear messaging, and no strategy, leaving founders, creators, and
          personal brands frustrated. We're here to help change that.
        </p>
        <p className="leading-relaxed">
          Our goal is to create conversion-driven websites that engage visitors
          and build trust. We use conversion psychology, brand storytelling,
          strategic design, and custom development to craft online experiences
          that aim to drive better results. We focus on giving you a website
          that works harder for your goals.
        </p>
        <p className="mb-12 text-lg font-medium">
          Ready to improve your online presence? Let's get started.
        </p>
        <Link
          to="contact"
          smooth={true}
          spy={true}
          duration={500}
          offset={-120}
          className="inline-block bg-white rounded-full py-4 px-8 text-base text-black tracking-wide hover:bg-white/70 transition-all duration-500 cursor-pointer"
        >
          Get in Touch
        </Link>
      </motion.div>
    </div>
  );
};

export default AboutUsTop;
