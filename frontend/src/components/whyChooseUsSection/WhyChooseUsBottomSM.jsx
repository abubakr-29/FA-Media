import React from "react";
import SadEmoji from "../../assets/whychooseus/sadface.png";
import { motion } from "motion/react";

const cards = [
  {
    title: "Old, Boring Website",
    desc: "Your website feels outdated and uninspiring, failing to capture attention or reflect your brand's true potential. Visitors leave before they even get to know you.",
  },
  {
    title: "No Focus on Pain Points",
    desc: "Your website doesn't address your audience's real challenges or offer clear, uplifting solutions. This disconnect keeps visitors from taking action.",
  },
  {
    title: "Generic Templates That Blend In",
    desc: "Using cookie-cutter templates makes your site look like everyone else's. You're not standing out in a crowded market, and your unique value gets lost.",
  },
  {
    title: "Lacking Optimistic Solutions and Impactful Copywriting",
    desc: "Without clear, uplifting solutions and compelling copywriting, your website fails to inspire confidence or motivate visitors to take action.",
  },
];

const WhyChooseUsBottomSM = () => {
  return (
    <div className="w-full max-w-md mx-auto py-10 flex flex-col gap-6">
      {cards.map((card, i) => (
        <motion.div
          key={card.title}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5, delay: i * 0.15 }}
          className="bg-[#1a1a1a] rounded-2xl p-6 border-2 border-white flex flex-col items-center shadow-lg"
        >
          <div className="flex flex-col items-center gap-2 mb-2">
            <img src={SadEmoji} alt="Sad Emoji" className="w-10 h-10" />
            <h3 className="text-lg text-stone-300 font-semibold text-center">
              {card.title}
            </h3>
          </div>
          <p className="text-stone-400 text-sm text-center">{card.desc}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default WhyChooseUsBottomSM;
