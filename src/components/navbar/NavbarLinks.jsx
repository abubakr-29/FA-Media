import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-scroll";

const LINKS = [
  {
    name: "Home",
    id: "hero",
  },
  {
    name: "About",
    id: "about",
  },
  {
    name: "Services",
    id: "services",
  },
  {
    name: "Projects",
    id: "projects",
  },
  {
    name: "Contact",
    id: "contact",
  },
];

const NavbarLink = () => {
  return (
    <div>
      <ul className="lg:flex hidden gap-8 items-center">
        {LINKS.map((link, index) => (
          <li key={index} className="group">
            <Link
              to={link.id}
              smooth={true}
              spy={true}
              duration={500}
              offset={-120}
              className="cursor-pointer transition-all duration-500"
            >
              {link.name}
            </Link>
            <div className="mx-auto bg-white w-0 group-hover:w-full h-[1px] transition-all duration-500"></div>
          </li>
        ))}

        <Link
          to="contact"
          smooth={true}
          spy={true}
          duration={500}
          offset={-120}
          className="flex items-center justify-center gap-1 btn-glow px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-medium hover:from-blue-600 hover:to-purple-700 transition duration-500 ml-4 cursor-pointer"
        >
          Get Started <FaArrowRight />
        </Link>
      </ul>
    </div>
  );
};

export default NavbarLink;
