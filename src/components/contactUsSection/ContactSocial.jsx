import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const socialIcons = [
  {
    link: "#",
    icon: FaLinkedinIn,
    label: "LinkedIn",
  },
  {
    link: "https://wa.me/+916291761817?text=Hi%2C%20I%20saw%20your%20website%20and%20I'm%20interested%20in%20your%20services.",
    icon: FaWhatsapp,
    label: "Whatsapp",
  },
  {
    link: "#",
    icon: FaInstagram,
    label: "Instagram",
  },
  {
    link: "https://mail.google.com/mail/?view=cm&fs=1&to=abubakrahmed051@gmail.com",
    icon: SiGmail,
    label: "Gmail",
  },
];

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      {socialIcons.map((social, index) => (
        <SingleContactSocial
          key={index}
          link={social.link}
          Icon={social.icon}
          label={social.label}
        />
      ))}
    </div>
  );
};

export default ContactSocial;
