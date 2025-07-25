import React from "react";
import { Link } from "react-scroll";
import logo from "../../assets/FAMediaLogo.png";
import { useLocation, useNavigate } from "react-router";
import { useScroll } from "../../context/ScrollContext";
import { Link as RouterLink } from "react-router";

const links = [
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

const FooterMain = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const navigate = useNavigate();
  const { setScrollTarget } = useScroll();

  const isHomePage = location.pathname === "/";

  const handleNavClick = (id) => {
    if (!isHomePage) {
      setScrollTarget(id);
      navigate("/");
    } else {
      // On home page, react-scroll link handles it (not applicable for footer links that navigate)
      // For footer links that scroll on the home page, react-scroll is used directly in JSX
    }
  };

  return (
    <footer className="px-4 pt-24 pb-22 lg:pb-8 relative z-10">
      <div className="container mx-auto">
        <div className="w-full h-[1px] bg-stone-700 mb-12"></div>

        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-12 mb-16">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left flex-shrink-0">
            {isHomePage ? (
              <Link
                to="hero"
                smooth={true}
                spy={true}
                duration={500}
                offset={-120}
                className="cursor-pointer"
              >
                <img src={logo} alt="FAMedia Logo" width={90} height={60} />
              </Link>
            ) : (
              <RouterLink
                to={"/"}
                onClick={() => handleNavClick("hero")}
                className="cursor-pointer"
              >
                <img src={logo} alt="FAMedia Logo" width={90} height={60} />
              </RouterLink>
            )}
            <p className="text-sm text-stone-400 mt-4 max-w-xs font-light">
              Elevating brands with stunning web experiences.
            </p>
          </div>

          <ul className="flex flex-wrap justify-center md:justify-start gap-x-8 gap-y-3 text-stone-300 text-base font-medium mt-8 md:mt-0">
            {links.map((item, index) => {
              if (item.type === "scroll") {
                return (
                  <li key={index}>
                    {isHomePage ? (
                      <Link
                        spy={true}
                        smooth={true}
                        duration={500}
                        offset={-120}
                        to={item.id}
                        className="hover:text-white transition-colors duration-500 cursor-pointer"
                      >
                        {item.name}
                      </Link>
                    ) : (
                      <RouterLink
                        to={"/"}
                        onClick={() => handleNavClick(item.id)}
                        className="hover:text-white transition-colors duration-500 cursor-pointer"
                      >
                        {item.name}
                      </RouterLink>
                    )}
                  </li>
                );
              }
              return null;
            })}
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-4 text-stone-400 text-sm font-light">
          <p className="text-center sm:text-left mb-2 sm:mb-0">
            © {currentYear} FA Media. All Rights Reserved.
          </p>

          <div className="flex justify-center sm:justify-start gap-x-4">
            <RouterLink
              to="/terms-of-service"
              className="hover:text-white transition-colors duration-500 cursor-pointer underline-offset-4 underline"
            >
              Terms of Service
            </RouterLink>
            <RouterLink
              to="/privacy-policy"
              className="hover:text-white transition-colors duration-500 cursor-pointer underline-offset-4 underline"
            >
              Privacy Policy
            </RouterLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterMain;
