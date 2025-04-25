import project1 from "../../assets/projects/project1.png";
import project2 from "../../assets/projects/project2.png";
import project3 from "../../assets/projects/project3.png";
import project4 from "../../assets/projects/project4.png";
import project5 from "../../assets/projects/project5.png";
import project6 from "../../assets/projects/project6.png";
import { motion } from "motion/react";

const PROJECTS = [
  {
    title: "The Combat Gym",
    subtitle: "Gym Management Web App",
    image: project5,
    description:
      "A comprehensive gym management application designed for The Combat Gym in Kolkata. This full-stack project includes features like a secure, password-protected student database and an integrated contact system.",
    technologies: [
      "EJS",
      "CSS3",
      "Bootstrap",
      "Node.js",
      "Express.js",
      "PostgreSQL",
    ],
    link: "https://the-combat-gym.onrender.com/",
  },
  {
    title: "FurryFriends",
    subtitle: "Pet E-commerce Platform",
    image: project3,
    description:
      "An engaging e-commerce site for pet enthusiasts, allowing users to browse and purchase purebred dogs with ease and confidence.",
    technologies: [
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "StripeAPI",
      "OAuth",
      "HTML5",
      "CSS3",
    ],
    link: "https://furry-friends-91t1.onrender.com/",
  },
  {
    title: "Abu Bakr Ahmed",
    subtitle: "Developer Portfolio",
    image: project6,
    description:
      "A personal portfolio showcasing Abu Bakr Ahmed's projects, skills, and contact information, reflecting his journey and expertise as a Full Stack Web Developer.",
    technologies: ["HTML5", "CSS3", "JavaScript", "TailwindCSS"],
    link: "https://abu-bakr-ahmed.onrender.com/",
  },
  {
    title: "Local Roofing",
    subtitle: "Service-Based Website",
    image: project4,
    description:
      "A static website for a local roofing and handyman service provider, featuring clear service listings and contact information for potential clients.",
    technologies: ["HTML5", "CSS3", "JavaScript", "GSAP"],
    link: "https://localroofinghandyman.com/",
  },
  {
    title: "Faraz Khan",
    subtitle: "Copywriter & Designer Portfolio",
    image: project2,
    description:
      "A professional portfolio highlighting Faraz Khan's work in copywriting and design, including services like LinkedIn profile optimization and branding.",
    technologies: ["HTML5", "CSS5", "JavaScript", "Bootstrap"],
    link: "https://farazkhan.onrender.com/",
  },
  {
    title: "Abu Bakr Ahmed",
    subtitle: " Copywriting Portfolio",
    image: project1,
    description:
      "A dedicated portfolio presenting Abu Bakr Ahmed's copywriting projects, showcasing his ability to craft persuasive and high-converting content.",
    technologies: ["HTML5", "CSS5", "JavaScript", "Bootstrap"],
    link: "https://abubakr-29.github.io/abubakr/",
  },
];

const AllProjects = () => {
  return (
    <div>
      {PROJECTS.map((project, index) => (
        <div
          key={index}
          className="mb-8 flex flex-wrap gap-8 lg:justify-center"
        >
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/4"
          >
            <img
              src={project.image}
              width={250}
              height={250}
              alt={project.title}
              className="mb-6 rounded"
            />
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="w-full max-w-xl lg:w-3/4"
          >
            <h3 className="font-semibold text-2xl">{project.title}</h3>
            <p className="mb-2 font-medium text-sm text-stone-500">
              {project.subtitle}
            </p>
            <p className="mb-4 text-stone-400">{project.description}</p>
            <div className="flex flex-wrap">
              {project.technologies.map((tech, index) => (
                <span
                  className="mr-2 mb-2 rounded bg-stone-900 p-2 text-sm font-medium text-stone-300"
                  key={index}
                >
                  {tech}
                </span>
              ))}
            </div>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-sm px-4 py-2 mt-2 rounded-full border border-stone-600 text-stone-300 hover:bg-stone-800 transition-all duration-500"
              >
                View Project
              </a>
            )}
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default AllProjects;
