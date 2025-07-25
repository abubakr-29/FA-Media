import { useEffect, useState } from "react";
import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
import NavbarLinksSM from "./NavbarLinksSM";

const NavbarMain = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`backdrop-blur-md border-b border-stone-900 fixed w-full z-40 py-2 px-6 md:px-12 text-stone-300 transition-all duration-500 ${
        scrolled ? "bg-stone-900/30" : ""
      }`}
    >
      <div className="max-w-[1400px] mx-auto flex justify-between items-center">
        <NavbarLogo />
        <NavbarLinks />
        <div className="lg:hidden md:block">
          <NavbarLinksSM />
        </div>
      </div>
    </nav>
  );
};

export default NavbarMain;
