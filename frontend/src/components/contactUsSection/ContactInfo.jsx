import { HiOutlineMail } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4 text-white">
      <SingleInfo text="support@famedia.co.in" Image={HiOutlineMail} />
      <SingleInfo text="+91 62917 61817" Image={FaWhatsapp} />
      <SingleInfo text="Kolkata, India" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
