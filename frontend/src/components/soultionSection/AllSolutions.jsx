import Goal from "../../assets/whychooseus/goal.png";
import Research from "../../assets/whychooseus/research.png";
import Challenges from "../../assets/whychooseus/challenges.png";
import Copywriting from "../../assets/whychooseus/copywriting.png";
import Solutions from "../../assets/whychooseus/solutions.png";
import Custom from "../../assets/whychooseus/customdevelopment.png";
import React, { useRef } from "react";
import { motion, useInView } from "motion/react";

const cards = [
  {
    icon: Goal,
    title: "We Understand Your Goals",
    desc: "We start by diving deep into your business, vision, and objectives to ensure your website aligns perfectly with what you want to achieve.",
    delay: 0.2,
  },
  {
    icon: Research,
    title: "In-Depth User Research",
    desc: "We study your audience to understand their needs, behaviors, and preferences, creating a website that truly connects with the people you want to reach.",
    delay: 0.3,
  },
  {
    icon: Challenges,
    title: "Pinpoint Your Audience's Challenges",
    desc: "We pinpoint your audience's biggest challenges and address them with clear, positive solutions, turning doubts into confidence and visitors into customers.  ",
    delay: 0.4,
  },
  {
    icon: Copywriting,
    title: "Excellent Copywriting",
    desc: "Our words don't just inform—they inspire. We craft compelling copy that speaks directly to your audience, driving engagement and action.",
    delay: 0.5,
  },
  {
    icon: Solutions,
    title: "Positive Solutions That Convert",
    desc: "We provide clear, optimistic solutions that turn doubts into confidence, transforming visitors into loyal customers.",
    delay: 0.6,
  },
  {
    icon: Custom,
    title: "Custom Design & Development",
    desc: "From stunning visuals to seamless functionality, we design and build a fully customized website that's beautiful, user-friendly, and built to perform.",
    delay: 0.7,
  },
];

const AllSolutions = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.2 });

  return (
    <div className="w-full max-w-5xl mx-auto pt-12 lg:pt-0 px-2">
      <div
        ref={containerRef}
        className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full max-w-md lg:max-w-full mx-auto"
      >
        {cards.map((card) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.9 }}
            transition={{ duration: 0.5, delay: isInView ? card.delay : 0 }}
            className="bg-[#1a1a1a] rounded-2xl p-6 border-1 border-stone-500 flex flex-col shadow-lg"
          >
            <div className="flex flex-col sm:flex-row items-center gap-3 mb-2">
              <img src={card.icon} alt={card.title} className="w-16 sm:w-12" />
              <h3 className="text-lg text-stone-300 font-semibold text-center sm:text-left">
                {card.title}
              </h3>
            </div>
            <p className="text-stone-400 text-sm text-center sm:text-left">
              {card.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AllSolutions;
