import ContactUsLeft from "./ContactUsLeft";
import ContactUsRight from "./ContactUsRight";

const ContactusMain = () => {
  return (
    <div
      id="contact"
      className="max-w-[1200px] mx-auto items-center justify-center mt-8 mb-20 px-2 text-stone-300"
    >
      <h2 className="text-4xl lg:text-5xl mb-12 text-center">Let's Connect</h2>
      <div className="flex flex-col lg:flex-row justify-between gap-16 bg-[#1e1e1e] p-6 sm:p-10 rounded-3xl shadow-2xl">
        <ContactUsLeft />
        <ContactUsRight />
      </div>
    </div>
  );
};

export default ContactusMain;
