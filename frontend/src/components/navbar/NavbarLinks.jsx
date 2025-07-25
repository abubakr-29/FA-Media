import { FaArrowRight } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useLocation, useNavigate } from "react-router";
import { useScroll } from "../../context/ScrollContext";

const LINKS = [
  {
    name: "Home",
    id: "hero",
    type: "scroll",
  },
  {
    name: "About",
    id: "about",
    type: "scroll",
  },
  {
    name: "Services",
    id: "services",
    type: "scroll",
  },
  {
    name: "Projects",
    id: "projects",
    type: "scroll",
  },
  {
    name: "Contact",
    id: "contact",
    type: "scroll",
  },
];

const NavbarLink = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { setScrollTarget } = useScroll();

  const isHomePage = location.pathname === "/";

  const handleNavClick = (id) => {
    if (!isHomePage) {
      setScrollTarget(id);
      navigate("/");
    } else {
      // For home page, use react-scroll link (handled in JSX)
    }
  };

  return (
    <div>
      <ul className="lg:flex hidden gap-8 items-center">
        {LINKS.map((link, index) => (
          <li key={index} className="group">
            {isHomePage ? (
              <ScrollLink
                to={link.id}
                smooth={true}
                spy={true}
                duration={500}
                offset={-120}
                className="cursor-pointer transition-all duration-500"
              >
                {link.name}
              </ScrollLink>
            ) : (
              <RouterLink
                to={"/"}
                onClick={() => handleNavClick(link.id)}
                className="cursor-pointer transition-all duration-500"
              >
                {link.name}
              </RouterLink>
            )}
            <div className="mx-auto bg-white w-0 group-hover:w-full h-[1px] transition-all duration-500"></div>
          </li>
        ))}

        {isHomePage ? (
          <ScrollLink
            to="contact"
            smooth={true}
            spy={true}
            duration={500}
            offset={-120}
            className="flex items-center justify-center gap-1 btn-glow px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-medium hover:from-blue-600 hover:to-purple-700 transition duration-500 ml-4 cursor-pointer"
          >
            Get Started <FaArrowRight />
          </ScrollLink>
        ) : (
          <RouterLink
            to={"/"}
            onClick={() => handleNavClick("contact")}
            className="flex items-center justify-center gap-1 btn-glow px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-medium hover:from-blue-600 hover:to-purple-700 transition duration-500 ml-4 cursor-pointer"
          >
            Get Started <FaArrowRight />
          </RouterLink>
        )}
      </ul>
    </div>
  );
};

export default NavbarLink;
