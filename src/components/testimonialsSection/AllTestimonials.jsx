import { motion } from "motion/react";

const testimonials = [
  {
    name: "Faraz Khan",
    title: "Copywriter & Client",
    feedback:
      "Abu Bakr delivered beyond expectations. Sleek design, fast performance, and a deep understanding of brand identity. My portfolio now truly reflects me.",
  },
  {
    name: "Ayaan Rahman",
    title: "Founder, Local Roofing Co.",
    feedback:
      "Professional, prompt, and pixel-perfect. Our service website helped us gain trust with clients instantly.",
  },
  {
    name: "Maria Fernandes",
    title: "Pet Enthusiast & FurryFriends Customer",
    feedback:
      "The site felt premium and easy to use. It made purchasing my pup a total breeze — and safe, which matters most.",
  },
];

const AllTestimonials = () => {
  return (
    <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
      {testimonials.map((testimonial, index) => (
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          key={index}
          className="relative border border-stone-800 bg-stone-900/40 backdrop-blur-md p-6 rounded-2xl shadow-xl hover:shadow-purple-800/40 transition duration-300"
        >
          <p className="text-stone-300 mb-6 text-base leading-relaxed italic">
            “{testimonial.feedback}”
          </p>
          <div className="border-t border-stone-700 pt-4">
            <h4 className="text-lg font-semibold text-white">
              {testimonial.name}
            </h4>
            <span className="text-sm text-stone-500">{testimonial.title}</span>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default AllTestimonials;
