import {
  MonitorSmartphone,
  UserCircle2,
  LayoutDashboard,
  CloudUpload,
} from "lucide-react";
import { BsRobot } from "react-icons/bs";
import { Link } from "react-scroll";

const services = [
  {
    title: "Custom Landing Pages",
    tagline: "Launch-ready. Optimized. High-converting.",
    description:
      "We build lightning-fast, mobile-first landing pages designed to convert. Perfect for product launches, lead capture, social media campaigns, and more — with built-in SEO, CTAs, forms, countdowns, and analytics integrations.",
    icon: <LayoutDashboard className="h-8 w-8 text-purple-500" />,
  },
  {
    title: "Custom Chatbot",
    tagline: "Always-on support. Smarter conversations. Real results.",
    description:
      "Turn visitors into leads and questions into conversions — even while you sleep. Enjoy 24/7 instant replies, lead capture, and pre-built flows for FAQs, bookings, and more.",
    icon: <BsRobot className="h-8 w-8 text-purple-500" />,
  },
  {
    title: "Portfolio Websites",
    tagline: "Showcase your craft with elegance.",
    description:
      "Whether you're a designer, developer, or creator — we craft custom portfolio sites with filterable galleries, CMS-backed blogs, and seamless booking or contact flows. Built to impress and easy to update.",
    icon: <MonitorSmartphone className="h-8 w-8 text-purple-500" />,
  },
  {
    title: "Personal Brand Websites",
    tagline: "Grow your influence, beautifully.",
    description:
      "For coaches, influencers, and consultants — we design personal brand hubs with bio, services, newsletter opt-ins, testimonials, blogs, and even merch stores. All under your own branded domain.",
    icon: <UserCircle2 className="h-8 w-8 text-purple-500" />,
  },
  {
    title: "Hosting & Deployment",
    tagline: "Secure. Fast. Always up.",
    description:
      "We handle everything from domain setup to deployment with platforms like Vercel, Netlify, or Cloudflare. Includes SSL, performance tuning, backups, and ongoing support — so you never worry about downtime.",
    icon: <CloudUpload className="h-8 w-8 text-purple-500" />,
  },
];

const AllServices = () => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="w-full bg-gradient-to-br from-neutral-900 to-black border border-stone-900 rounded-2xl p-6 shadow-lg hover:shadow-violet-500/20 transition-shadow duration-500"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-neutral-800 p-3 rounded-full">
                {service.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="text-sm text-purple-500">{service.tagline}</p>
              </div>
            </div>
            <p className="text-stone-400 leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-14 text-center">
        <h2 className="text-lg sm:text-xl font-semibold mb-6">
          Ready to transform your online presence?
        </h2>
        <Link
          to="contact"
          smooth={true}
          spy={true}
          duration={500}
          offset={-120}
          className="inline-block bg-white rounded-full py-4 px-6 text-base text-black tracking-tight hover:bg-white/70 transition-all duration-500 cursor-pointer"
        >
          Start Now - It's Free
        </Link>
      </div>
    </div>
  );
};

export default AllServices;
