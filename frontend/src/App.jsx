import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router";
import NavbarMain from "./components/navbar/NavbarMain";
import HeroMain from "./components/heroSection/HeroMain";
import AboutUsMain from "./components/aboutUsSection/AboutUsMain";
import TechnologiesMain from "./components/technologiesSection/TechnologiesMain";
import ServicesMain from "./components/servicesSection/ServicesMain";
import ProjectsMain from "./components/projectsSection/ProjectsMain";
import TestimonialsMain from "./components/testimonialsSection/TestimonialsMain";
import ContactUsMain from "./components/contactUsSection/ContactUsMain";
import FooterMain from "./components/footer/FooterMain";
import ChatLauncher from "./components/chatWidget/ChatLauncher";
import ChatWindow from "./components/chatWidget/ChatWindow";
import WhyChooseUsMain from "./components/whyChooseUsSection/WhyChooseUsMain";
import SolutionMain from "./components/soultionSection/SolutionMain";
import BackToTop from "./components/BackToTop";
import TermsOfService from "./components/footer/TermsOfService";
import PrivacyPolicy from "./components/footer/PrivacyPolicy";
import { ScrollProvider, useScroll } from "./context/ScrollContext";
import FAQs from "./components/faqsSection/FAQs";

const App = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <BrowserRouter
      future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
    >
      <ScrollProvider>
        <main className="overflow-x-hidden antialiased">
          <div className="fixed inset-0 -z-10">
            <div className="relative h-full w-full bg-black">
              <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
              <div className="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div>
            </div>
          </div>
          <NavbarMain />
          <div className="container mx-auto px-8">
            <Routes>
              <Route path="/" element={<HomeContent />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            </Routes>
            <BackToTop />
            <FooterMain />
            {isChatOpen && <ChatWindow onClose={() => setIsChatOpen(false)} />}
            <ChatLauncher
              onClick={() => setIsChatOpen(!isChatOpen)}
              isOpen={isChatOpen}
            />
          </div>
        </main>
      </ScrollProvider>
    </BrowserRouter>
  );
};

const HomeContent = () => {
  const { scrollTarget, setScrollTarget } = useScroll();
  const location = useLocation();

  useEffect(() => {
    if (scrollTarget) {
      // Allow time for the page to render after navigation
      const timer = setTimeout(() => {
        const element = document.getElementById(scrollTarget);
        if (element) {
          const offsetPosition = element.offsetTop - 120; // Adjust offset as needed
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
          setScrollTarget(null); // Clear the target after scrolling
        }
      }, 100); // Small delay to ensure element is in DOM
      return () => clearTimeout(timer);
    }
  }, [scrollTarget, setScrollTarget, location.pathname]); // Rerun when scrollTarget or pathname changes

  return (
    <>
      <HeroMain />
      <WhyChooseUsMain />
      <SolutionMain />
      <AboutUsMain />
      <TechnologiesMain />
      <ServicesMain />
      <ProjectsMain />
      <TestimonialsMain />
      <ContactUsMain />
      <FAQs />
    </>
  );
};

export default App;
