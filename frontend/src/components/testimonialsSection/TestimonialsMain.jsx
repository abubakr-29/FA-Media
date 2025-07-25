import React from "react";
import TestimonialsText from "./TestimonialsText";
import AllTestimonials from "./AllTestimonials";

const TestimonialsMain = () => {
  return (
    <div className="py-12 px-4 md:px-10 text-stone-300">
      <div className="text-center mb-16">
        <TestimonialsText />
      </div>
      <div>
        <AllTestimonials />
      </div>
    </div>
  );
};

export default TestimonialsMain;
