import SadEmoji from "../../assets/whychooseus/sadface.png";
import React, { useRef, useLayoutEffect, useState } from "react";
import { motion, useInView } from "motion/react";

const cards = [
  {
    title: "Old, Boring Website",
    desc: "Your website feels outdated and uninspiring, failing to capture attention or reflect your brand's true potential. Visitors leave before they even get to know you.",
    position: "top-0 left-0",
    delay: 0.3,
  },
  {
    title: "No Focus on Pain Points",
    desc: "Your website doesn't address your audience's real challenges or offer clear, uplifting solutions. This disconnect keeps visitors from taking action.",
    position: "top-64 left-0",
    delay: 0.4,
  },
  {
    title: "Generic Templates That Blend In",
    desc: "Using cookie-cutter templates makes your site look like everyone else's. You're not standing out in a crowded market, and your unique value gets lost.",
    position: "top-32 right-0",
    delay: 0.5,
  },
  {
    title: "Lacking Optimistic Solutions and Impactful Copywriting",
    desc: "Without clear, uplifting solutions and compelling copywriting, your website fails to inspire confidence or motivate visitors to take action.",
    position: "top-96 right-0",
    delay: 0.6,
  },
];

const WhyChooseUsBottom = () => {
  const leftRefs = [useRef(null), useRef(null)];
  const rightRefs = [useRef(null), useRef(null)];
  const containerRef = useRef(null);
  const [lineData, setLineData] = useState(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.3 });

  useLayoutEffect(() => {
    const getCenter = (ref) => {
      const rect = ref.current.getBoundingClientRect();
      return {
        x: rect.right,
        y: rect.top + rect.height / 2,
        height: rect.height,
      };
    };
    const getRightCenter = (ref) => {
      const rect = ref.current.getBoundingClientRect();
      return {
        x: rect.left,
        y: rect.top + rect.height / 2,
        height: rect.height,
      };
    };
    const containerRect = containerRef.current.getBoundingClientRect();
    const lefts = leftRefs.map(getCenter);
    const rights = rightRefs.map(getRightCenter);

    const offset = 90;
    const verticalLine = {
      x: (containerRect.left + containerRect.right) / 2 - containerRect.left,
      y1: lefts[0].y - containerRect.top - offset,
      y2: rights[1].y - containerRect.top + offset,
    };

    const connectors = [
      {
        x1: lefts[0].x - containerRect.left,
        y: lefts[0].y - containerRect.top,
        x2: verticalLine.x,
      },

      {
        x1: lefts[1].x - containerRect.left,
        y: lefts[1].y - containerRect.top,
        x2: verticalLine.x,
      },

      {
        x1: verticalLine.x,
        y: rights[0].y - containerRect.top,
        x2: rights[0].x - containerRect.left,
      },

      {
        x1: verticalLine.x,
        y: rights[1].y - containerRect.top,
        x2: rights[1].x - containerRect.left,
      },
    ];
    setLineData({ verticalLine, connectors });
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-[1200px] mx-auto py-20"
      style={{ minHeight: 600 }}
    >
      {lineData && (
        <svg
          className="absolute left-0 top-0 w-full h-full pointer-events-none z-0"
          style={{ overflow: "visible" }}
        >
          <motion.line
            initial={{ pathLength: 0 }}
            animate={{ pathLength: isInView ? 1 : 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            x1={lineData.verticalLine.x}
            y1={lineData.verticalLine.y1}
            x2={lineData.verticalLine.x}
            y2={lineData.verticalLine.y2}
            stroke="#fff"
            strokeWidth={2}
          />

          {lineData.connectors.map((c, i) => (
            <motion.line
              key={i}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: isInView ? 1 : 0 }}
              transition={{
                duration: 0.5,
                delay: isInView ? 0.8 + i * 0.1 : 0,
                ease: "easeOut",
              }}
              x1={c.x1}
              y1={c.y}
              x2={c.x2}
              y2={c.y}
              stroke="#fff"
              strokeWidth={2}
            />
          ))}
        </svg>
      )}

      <div className="relative h-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.9 }}
          transition={{ duration: 0.5, delay: isInView ? cards[0].delay : 0 }}
          ref={leftRefs[0]}
          className="absolute top-0 left-0 w-[450px]"
        >
          <div className="bg-[#1a1a1a] rounded-2xl p-6 border-2 border-white">
            <div className="flex items-center gap-3 mb-2">
              <img src={SadEmoji} alt="Sad Emoji" className="w-10 h-10" />
              <h3 className="text-lg text-stone-300 font-semibold">
                {cards[0].title}
              </h3>
            </div>
            <p className="text-stone-400 text-sm">{cards[0].desc}</p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.9 }}
          transition={{ duration: 0.5, delay: isInView ? cards[1].delay : 0 }}
          ref={leftRefs[1]}
          className="absolute top-64 left-0 w-[450px]"
        >
          <div className="bg-[#1a1a1a] rounded-2xl p-6 border-2 border-white">
            <div className="flex items-center gap-3 mb-2">
              <img src={SadEmoji} alt="Sad Emoji" className="w-10 h-10" />
              <h3 className="text-lg text-stone-300 font-semibold">
                {cards[1].title}
              </h3>
            </div>
            <p className="text-stone-400 text-sm">{cards[1].desc}</p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.9 }}
          transition={{ duration: 0.5, delay: isInView ? cards[2].delay : 0 }}
          ref={rightRefs[0]}
          className="absolute top-32 right-0 w-[450px]"
        >
          <div className="bg-[#1a1a1a] rounded-2xl p-6 border-2 border-white">
            <div className="flex items-center gap-3 mb-2">
              <img src={SadEmoji} alt="Sad Emoji" className="w-10 h-10" />
              <h3 className="text-lg text-stone-300 font-semibold">
                {cards[2].title}
              </h3>
            </div>
            <p className="text-stone-400 text-sm">{cards[2].desc}</p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.9 }}
          transition={{ duration: 0.5, delay: isInView ? cards[3].delay : 0 }}
          ref={rightRefs[1]}
          className="absolute top-96 right-0 w-[450px]"
        >
          <div className="bg-[#1a1a1a] rounded-2xl p-6 border-2 border-white">
            <div className="flex items-center gap-3 mb-2">
              <img src={SadEmoji} alt="Sad Emoji" className="w-10 h-10" />
              <h3 className="text-lg text-stone-300 font-semibold">
                {cards[3].title}
              </h3>
            </div>
            <p className="text-stone-400 text-sm">{cards[3].desc}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WhyChooseUsBottom;
