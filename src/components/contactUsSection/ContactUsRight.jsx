import ContactInfo from "./ContactInfo";
import ContactSocial from "./ContactSocial";
import email from "../../assets/email-image.png";

const ContactUsRight = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-10">
      <img
        src={email}
        alt="email visual"
        className="w-full max-w-[250px] h-auto drop-shadow-lg"
      />

      <ContactInfo />
      <ContactSocial />
    </div>
  );
};

export default ContactUsRight;
