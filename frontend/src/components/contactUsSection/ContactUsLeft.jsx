import ContactForm from "./ContactForm";
import ContactText from "./ContactText";

const ContactUsLeft = () => {
  return (
    <div className="flex flex-col gap-8 w-full">
      <ContactText />
      <ContactForm />
    </div>
  );
};

export default ContactUsLeft;
