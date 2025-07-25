import React, { useState, useEffect } from "react";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-6 left-6 z-50">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="w-10 h-10 flex items-center justify-center bg-white border rounded-tr-lg rounded-tl-2xl rounded-br-2xl border-stone-700 shadow-lg hover:bg-stone-100 hover:shadow-stone-400/30 transition-all duration-500 cursor-pointer focus:outline-none focus:ring-2 focus:ring-stone-400"
          aria-label="Back to top"
        >
          <svg
            className="w-6 h-6 text-black"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 15l6-6 6 6"
            />
          </svg>
        </button>
      )}
    </div>
  );
};

export default BackToTop;
