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
    link: "https://mail.google.com/mail/?view=cm&fs=1&to=support@famedia.co.in&su=Inquiry%20from%20FA%20Media%20Website&body=Hi%20FA%20Media%20Team%2C%0D%0A%0D%0AI%20came%20across%20your%20website%20and%20I'm%20interested%20in%20working%20with%20you.%20Please%20let%20me%20know%20how%20we%20can%20proceed.%0D%0A%0D%0ABest%20regards%2C%0D%0A%5BYour%20Name%5D",
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
