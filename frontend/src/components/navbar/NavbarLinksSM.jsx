import { useEffect, useState } from "react";
import {
  FaArrowRight,
  FaHome,
  FaStar,
  FaCog,
  FaBriefcase,
  FaEnvelope,
} from "react-icons/fa";
import NavbarSocial from "./NavbarSocial";
import { Link as ScrollLink } from "react-scroll";
import { useLocation, useNavigate } from "react-router";
import { useScroll } from "../../context/ScrollContext";
import { Link as RouterLink } from "react-router";

const links = [
  {
    name: "Home",
    id: "hero",
    icon: <FaHome className="mr-4 text-blue-400 w-6 text-center" />,
  },
  {
    name: "About",
    id: "about",
    icon: <FaStar className="mr-4 text-purple-400 w-6 text-center" />,
  },
  {
    name: "Services",
    id: "services",
    icon: <FaCog className="mr-4 text-blue-400 w-6 text-center" />,
  },
  {
    name: "Projects",
    id: "projects",
    icon: <FaBriefcase className="mr-4 text-purple-400 w-6 text-center" />,
  },
  {
    name: "Contact",
    id: "contact",
    icon: <FaEnvelope className="mr-4 text-blue-400 w-6 text-center" />,
  },
];

const NavbarLinksSM = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { setScrollTarget } = useScroll();

  const isHomePage = location.pathname === "/";

  const handleNavClick = (id) => {
    setIsOpen(false); // Close the mobile menu
    if (!isHomePage) {
      setScrollTarget(id);
      navigate("/");
    } else {
      // On home page, react-scroll link handles it
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  return (
    <div>
      <div className="lg:hidden md:block">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative z-50 w-8 h-8 flex items-center justify-center cursor-pointer"
        >
          <span
            className={`absolute block w-6 h-0.5 bg-white transition-all duration-500 ${
              isOpen ? "rotate-45 translate-y-0" : "-translate-y-2"
            }`}
          ></span>
          <span
            className={`absolute block w-6 h-0.5 bg-white transition-all duration-500 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`absolute block w-6 h-0.5 bg-white transition-all duration-500 ${
              isOpen ? "-rotate-45 translate-y-0" : "translate-y-2"
            }`}
          ></span>
        </button>
      </div>

      <div
        className={`lg:hidden md:block mobile-menu fixed inset-0 z-40 pt-30 px-10 sm:px-14 h-[100vh] w-[100%] bg-black transition-all duration-500 ${
          isOpen ? "open" : "pointer-events-none"
        }`}
      >
        {links.map((link, index) => (
          <div className="space-y-6" key={index}>
            {isHomePage ? (
              <ScrollLink
                to={link.id}
                smooth={true}
                spy={true}
                duration={500}
                offset={-120}
                activeClass="animate-pulse"
                className="flex items-center relative py-3 transition-all duration-500 text-lg font-medium hover:animate-pulse cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                {link.icon}
                {link.name}
              </ScrollLink>
            ) : (
              <RouterLink
                to={"/"}
                onClick={() => handleNavClick(link.id)}
                activeClass="animate-pulse"
                className="flex items-center relative py-3 transition-all duration-500 text-lg font-medium hover:animate-pulse cursor-pointer"
              >
                {link.icon}
                {link.name}
              </RouterLink>
            )}
          </div>
        ))}

        {isHomePage ? (
          <ScrollLink
            to="contact"
            smooth={true}
            spy={true}
            duration={500}
            offset={-120}
            className="flex items-center justify-center gap-1 btn-glow w-full mt-8 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-medium text-lg cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            Get Started <FaArrowRight className="ml-2" />
          </ScrollLink>
        ) : (
          <RouterLink
            to={"/"}
            onClick={() => handleNavClick("contact")}
            className="flex items-center justify-center gap-1 btn-glow w-full mt-8 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-medium text-lg cursor-pointer"
          >
            Get Started <FaArrowRight className="ml-2" />
          </RouterLink>
        )}
        <NavbarSocial />
      </div>
    </div>
  );
};

export default NavbarLinksSM;
