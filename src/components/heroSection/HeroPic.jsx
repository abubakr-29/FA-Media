import React from "react";
import heroImage from "../../assets/hero-image.jpeg";
import { motion, stagger } from "motion/react";

const HeroPic = () => {
  return (
    <div className="w-full lg:w-1/2">
      <div className="flex justify-center lg:p-8">
        <motion.img
          src={heroImage}
          alt="Image"
          className="border border-stone-900 rounded-3xl"
          width={650}
          height={650}
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        />
      </div>
    </div>
  );
};

export default HeroPic;
