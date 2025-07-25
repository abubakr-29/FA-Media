import project2 from "../../assets/projects/project2.png";
import project3 from "../../assets/projects/project3.png";
import project4 from "../../assets/projects/project4.png";
import project5 from "../../assets/projects/project5.png";
import project6 from "../../assets/projects/project6.png";
import project7 from "../../assets/projects/project7.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const PROJECTS = [
  {
    title: "MH Interiors",
    subtitle: "Interior Design Portfolio Website",
    image: project7,
    description:
      "A sleek portfolio website highlighting MH Interiors' design projects with high-quality visuals and an intuitive layout.",
    technologies: ["React.js", "Tailwind CSS", "JavaScript"],
    link: "https://mh-interiors.in/",
  },
  {
    title: "The Combat Gym",
    subtitle: "Gym Management Web App",
    image: project5,
    description:
      "A full-stack application tailored for The Combat Gym in Kolkata, featuring a secure student database and an integrated contact system for efficient gym management.",
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
      "Stripe API",
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
    technologies: ["ReactJs", "JavaScript", "TailwindCSS"],
    link: "https://abu-bakr-ahmed.vercel.app/",
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
];

const AllProjects = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-2 relative">
      <button
        className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-stone-900/70 hover:bg-stone-800/90 text-stone-300 rounded-full p-2 shadow transition-all duration-300 hidden sm:flex cursor-pointer"
        aria-label="Previous slide"
      >
        <svg
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-chevron-left"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>
      <button
        className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-stone-900/70 hover:bg-stone-800/90 text-stone-300 rounded-full p-2 shadow transition-all duration-300 hidden sm:flex cursor-pointer"
        aria-label="Next slide"
      >
        <svg
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-chevron-right"
        >
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>
      <Swiper
        modules={[Pagination, Autoplay, Navigation]}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ el: ".custom-swiper-pagination", clickable: true }}
        navigation={{
          prevEl: ".swiper-button-prev-custom",
          nextEl: ".swiper-button-next-custom",
        }}
        spaceBetween={24}
        breakpoints={{
          0: { slidesPerView: 1, spaceBetween: 16 },
          640: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 24 },
        }}
        className="pb-0"
      >
        {PROJECTS.map((project, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col h-[600px] sm:h-[640px] bg-stone-950 rounded-xl border-1 border-stone-700 p-4 sm:p-6 shadow-lg">
              <div className="w-full flex justify-center mb-6">
                <img
                  src={project.image}
                  width={300}
                  alt={project.title}
                  className="rounded-lg object-cover w-full"
                />
              </div>
              <div className="flex-grow">
                <h3 className="font-bold text-lg text-stone-300 mb-2">
                  {project.title}
                </h3>
                <p className="mb-2 font-medium text-sm text-stone-500">
                  {project.subtitle}
                </p>
                <p className="mb-4 text-stone-400 text-sm sm:text-base">
                  {project.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, index) => (
                  <span
                    className="rounded bg-stone-900 p-1.5 text-xs sm:text-sm font-medium"
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
                  className="w-full mt-auto inline-block text-sm sm:text-base px-0 py-2.5 rounded-lg border border-stone-600 text-stone-300 font-semibold text-center hover:bg-stone-800 transition-all duration-500"
                >
                  View Project
                </a>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="custom-swiper-pagination flex justify-center mt-6" />
    </div>
  );
};

export default AllProjects;
