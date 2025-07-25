import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSuccess("");
    setError("");

    try {
      await emailjs.sendForm(
        "service_40s17kx",
        "template_tgkq7rg",
        form.current,
        {
          publicKey: "MM5GK3DJkVyEu12nu",
        }
      );

      await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/leads`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone: "", // optional
          message,
        }),
      });

      setName("");
      setEmail("");
      setMessage("");
      setSuccess("✅ Message sent and saved successfully!");
    } catch (error) {
      console.error("FAILED...", error);
      setError("❌ Failed to send message. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col gap-4 text-white w-full"
      >
        <input type="hidden" name="date" value={new Date().toLocaleString()} />
        <input
          name="from_name"
          type="text"
          placeholder="Your Name"
          required
          className="h-12 rounded-xl bg-[#2c2c2c] px-4 focus:outline-none focus:ring-2 focus:ring-stone-300"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          name="from_email"
          type="email"
          placeholder="Your Email"
          required
          className="h-12 rounded-xl bg-[#2c2c2c] px-4 focus:outline-none focus:ring-2 focus:ring-stone-300"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="6"
          required
          className="rounded-xl bg-[#2c2c2c] p-4 resize-none focus:outline-none focus:ring-2 focus:ring-stone-300"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          type="submit"
          disabled={isLoading}
          className={`w-full rounded-xl h-12 font-medium text-md md:text-lg transition-all duration-500 cursor-pointer ${
            isLoading
              ? "bg-gray-400 text-white cursor-not-allowed"
              : "bg-white hover:bg-white/70 text-stone-800"
          }`}
        >
          {isLoading ? "Sending..." : "Send Message"}
        </button>

        {success && <p className="text-green-400">{success}</p>}
        {error && <p className="text-red-400">{error}</p>}
      </form>
    </div>
  );
};

export default ContactForm;
