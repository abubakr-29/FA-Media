import { motion } from "motion/react";
import React, { useEffect, useState } from "react";

const childVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
};

const AnimatedText = ({ line1, line2 }) => {
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    setAnimate(true);
  }, []);

  const renderLine = (text, lineKey) => {
    const words = text.split(" ");
    return (
      <span className="block w-full">
        {words.map((word, wordIndex) => (
          <span key={wordIndex} className="inline-block">
            {word.split("").map((char, charIndex) => (
              <motion.span
                key={charIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={animate ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.7,
                  delay:
                    wordIndex * 0.1 +
                    charIndex * 0.05 +
                    (lineKey === 1 ? 0 : 0.5),
                }}
                className="inline-block"
              >
                {char}
              </motion.span>
            ))}
            <span className="inline-block">&nbsp;</span>
          </span>
        ))}
      </span>
    );
  };

  return (
    <h1 className="uppercase font-special font-bold tracking-tigther sm:tracking-normal text-4xl md:text-6xl lg:text-7xl leading-tight text-white mb-2 text-center">
      {/* Desktop: two lines, Mobile: one line */}
      <span className="hidden md:inline">
        {renderLine(line1, 1)}
        {renderLine(line2, 2)}
      </span>
      <span className="md:hidden">{renderLine(`${line1} ${line2}`, 1)}</span>
    </h1>
  );
};

const HeroText = () => {
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div className="w-full flex flex-col items-center justify-center text-center">
      <motion.p
        className="uppercase text-stone-300 tracking-widest text-xs sm:text-sm md:text-base mb-6 mt-8 lg:mt-0"
        variants={childVariants}
        initial="hidden"
        animate={animate ? "visible" : "hidden"}
      >
        Grow your brand. Own your voice.
      </motion.p>
      <AnimatedText
        line1="We design websites that"
        line2="demand attention & trust"
      />
      <motion.p
        className="text-base md:text-lg text-stone-300 max-w-xl my-8"
        variants={childVariants}
        initial="hidden"
        animate={animate ? "visible" : "hidden"}
      >
        You focus on your growth. FA Media will handle everything
        <br className="hidden md:block" />- design, copy, and strategy.
      </motion.p>
      <motion.a
        href="https://calendly.com/famediacoin"
        className="p-[3px] relative mt-4 group cursor-pointer inline-block"
        variants={childVariants}
        initial="hidden"
        animate={animate ? "visible" : "hidden"}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg transition duration-500" />
        <div className="px-4 sm:px-6 py-2 text-sm sm:text-lg bg-white rounded-[6px] relative text-black transition duration-500 group-hover:bg-transparent group-hover:text-white">
          BOOK A CALL NOW
        </div>
      </motion.a>
    </div>
  );
};

export default HeroText;
