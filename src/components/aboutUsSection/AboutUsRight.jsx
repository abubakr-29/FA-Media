import abu from "../../assets/AbuBakrAhmed_Profile.png";
import faraz from "../../assets/FarazKhan_Profile.jpeg";
import { motion } from "motion/react";

const teamMembers = [
  {
    name: "Faraz Khan",
    role: "Designer & Frontend Developer",
    description:
      "Faraz brings clarity to vision through elegant design and seamless interfaces. With a sharp eye for UI/UX and mastery in HTML, CSS, FIGMA, and frontend development, he creates digital experiences that feel as good as they look.",
    image: faraz,
  },
  {
    name: "Abu Bakr Ahmed",
    role: "Full Stack Developer",
    description:
      "Abu Bakr turns complexity into clean, scalable solutions. Specializing in React, Node.js, PostgreSQL, and MongoDB, he builds reliable full-stack systems that are fast, secure, and built to grow.",
    image: abu,
  },
];

const AboutUsRight = () => {
  return (
    <div className="flex flex-col gap-8">
      {teamMembers.map((member, index) => (
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: `0.${index}` }}
          key={index}
          className="bg-white/5 backdrop-blur-sm border border-stone-900 p-6 rounded-3xl shadow-xl hover:scale-[1.02] transition-all duration-500"
        >
          <div className="flex flex-row items-center gap-4">
            <img
              src={member.image}
              alt={member.name}
              className="w-20 h-20 rounded-full object-cover border-2 border-purple-500"
            />
            <div>
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-sm text-purple-400">{member.role}</p>
            </div>
          </div>
          <p className="text-sm text-stone-400 mt-4">{member.description}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default AboutUsRight;
