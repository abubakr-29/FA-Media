import React from "react";
import { Link } from "react-scroll";
import logo from "../../assets/FAMediaLogo.png";

const links = [
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

const FooterMain = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="px-4">
      <div className="w-full h-[1px] bg-stone-300 mt-24"></div>
      <div className="md:flex hidden justify-between mt-4 max-w-[1400px] mx-auto">
        <div className="flex flex-col flex-shrink-0 items-start z-50">
          <a href="/" aria-label="Home">
            <img src={logo} alt="FAMedia Logo" width={85} height={56} />
          </a>
          <p className="text-sm text-stone-300 mt-2">
            Elevating brands with stunning web experiences.
          </p>
        </div>

        <ul className="flex gap-4 text-stone-300 text-lg">
          {links.map((item, index) => {
            return (
              <li key={index}>
                <Link
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-120}
                  to={item.id}
                  className="hover:text-white transition-all duration-500 cursor-pointer"
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <p className="absolute mt-12 pb-8 left-[50%] -translate-x-[50%] text-sm text-stone-400">
        © {currentYear} FA Media | All Rights Reserved.
      </p>
    </div>
  );
};

export default FooterMain;
