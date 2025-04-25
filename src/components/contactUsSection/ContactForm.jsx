import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_vv377kl", "template_1seik7q", form.current, {
        publicKey: "jPJ7te5peYNWT47y8",
      })
      .then(
        () => {
          setName("");
          setEmail("");
          setMessage("");
          setSuccess("Message Sent!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col gap-4 text-white w-full"
      >
        <input
          name="from_name"
          type="text"
          placeholder="Your Name"
          required
          className="h-12 rounded-xl bg-[#2c2c2c] px-4 focus:outline-none focus:ring-2 focus:ring-stone-300"
          value={name}
          onChange={handleName}
        />
        <input
          name="from_email"
          type="email"
          placeholder="Your Email"
          required
          className="h-12 rounded-xl bg-[#2c2c2c] px-4 focus:outline-none focus:ring-2 focus:ring-stone-300"
          value={email}
          onChange={handleEmail}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="6"
          required
          className="rounded-xl bg-[#2c2c2c] p-4 resize-none focus:outline-none focus:ring-2 focus:ring-stone-300"
          value={message}
          onChange={handleMessage}
        />
        <button
          type="submit"
          className="w-full rounded-xl bg-white hover:bg-white/70 text-stone-800 h-12 font-medium text-md md:text-lg transition-all duration-500"
        >
          Send Message
        </button>
        <p className="text-green-400">{success}</p>
      </form>
    </div>
  );
};

export default ContactForm;
