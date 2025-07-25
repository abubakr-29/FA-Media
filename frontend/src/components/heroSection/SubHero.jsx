import { motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";

function CountUp({ end, duration = 1.2, suffix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef();

  useEffect(() => {
    let start = 0;
    let startTimestamp = null;
    const isInt = Number.isInteger(end);
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min(
        (timestamp - startTimestamp) / (duration * 1000),
        1
      );
      const value = isInt
        ? Math.floor(progress * (end - start) + start)
        : (progress * (end - start) + start).toFixed(1);
      setCount(value);
      if (progress < 1) {
        ref.current = requestAnimationFrame(step);
      } else {
        setCount(isInt ? end : end.toFixed(1));
      }
    };
    ref.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(ref.current);
  }, [end, duration]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

const information = [
  {
    value: 5,
    suffix: "+",
    text: "Projects Delivered",
    subtext: "Custom-built websites for real businesses",
    animate: true,
  },
  {
    value: 100,
    suffix: "%",
    text: "Custom Code",
    subtext: "No templates, no fluff. Real development.",
    animate: true,
  },
  {
    value: "Built for Scale",
    text: "",
    subtext: "Ready to implement AI & automations",
    animate: false,
  },
];

const SubHero = () => {
  return (
    <div className="w-full px-0 md:px-4 flex flex-col lg:flex-row justify-center items-center mt-20">
      <div className="flex flex-col sm:flex-row w-full max-w-5xl justify-between items-center text-center gap-8 sm:gap-0">
        {information.map((info, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            viewport={{ once: true, amount: 0.5 }}
            className="flex flex-col items-center w-full relative px-4"
          >
            <p
              className={`text-stone-200 text-2xl md:text-3xl font-bold mb-1 ${
                index === 2 ? "uppercase" : ""
              }`}
            >
              {info.animate ? (
                <CountUp end={info.value} suffix={info.suffix} />
              ) : (
                info.value
              )}
            </p>
            <p className="text-stone-300 text-base font-semibold mb-1 uppercase tracking-wide">
              {info.text}
            </p>
            <p className="text-stone-400 text-xs sm:text-sm md:text-md leading-snug">
              {info.subtext}
            </p>
            {index < information.length - 1 && (
              <span className="hidden sm:block absolute right-0 top-1/2 -translate-y-1/2 h-12 border-r-2 border-purple-500" />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SubHero;
