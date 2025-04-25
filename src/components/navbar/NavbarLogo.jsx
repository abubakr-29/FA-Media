import logo from "../../assets/FAMediaLogo.png";

const NavbarLogo = () => {
  return (
    <div className="flex flex-shrink-0 items-center z-50">
      <a href="/" aria-label="Home">
        <img src={logo} alt="FAMedia Logo" width={85} height={56} />
      </a>
    </div>
  );
};

export default NavbarLogo;
