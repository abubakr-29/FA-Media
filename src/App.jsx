import React from "react";
import NavbarMain from "./components/navbar/NavbarMain";
import HeroMain from "./components/heroSection/HeroMain";
import AboutUsMain from "./components/aboutUsSection/AboutUsMain";
import TechnologiesMain from "./components/technologiesSection/TechnologiesMain";
import ServicesMain from "./components/servicesSection/ServicesMain";
import ProjectsMain from "./components/projectsSection/ProjectsMain";
import TestimonialsMain from "./components/testimonialsSection/TestimonialsMain";
import ContactUsMain from "./components/contactUsSection/ContactUsMain";
import FooterMain from "./components/footer/FooterMain";

const App = () => {
  return (
    <main className="overflow-x-hidden text-stone-300 antialiased">
      <div className="fixed inset-0 -z-10">
        <div class="relative h-full w-full bg-black">
          <div class="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
          <div class="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div>
        </div>
      </div>

      <NavbarMain />
      <div className="container mx-auto px-8">
        <HeroMain />
        <TechnologiesMain />
        <AboutUsMain />
        <ServicesMain />
        <ProjectsMain />
        <TestimonialsMain />
        <ContactUsMain />
        <FooterMain />
      </div>
    </main>
  );
};

export default App;
