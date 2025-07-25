import React, { useState, useEffect } from "react";
import Logo from "../../assets/FAMedia Logo Dark.png";
import { FiChevronDown, FiX } from "react-icons/fi";

const ChatLauncher = ({ onClick, isOpen }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

  const messages = [
    "Need any help? I'm here to assist you!",
    "Hi there! How can I help you today?",
    "Have questions? Let's chat!",
    "I'm your virtual assistant. Need anything?",
  ];

  useEffect(() => {
    if (!isOpen) {
      // Show popup every 15 seconds
      const showInterval = setInterval(() => {
        setPopupMessage(messages[Math.floor(Math.random() * messages.length)]);
        setShowPopup(true);
        // Hide after 5 seconds
        setTimeout(() => setShowPopup(false), 5000);
      }, 15000);
      // Show immediately on mount
      setPopupMessage(messages[Math.floor(Math.random() * messages.length)]);
      setShowPopup(true);
      const initialTimeout = setTimeout(() => setShowPopup(false), 5000);
      return () => {
        clearInterval(showInterval);
        clearTimeout(initialTimeout);
      };
    } else {
      setShowPopup(false);
    }
  }, [isOpen]);

  return (
    <>
      {/* Popup Notification */}
      {showPopup && !isOpen && (
        <div className="fixed bottom-24 right-6 bg-white p-4 rounded-lg shadow-lg z-20 max-w-[250px] animate-fade-in">
          <div className="flex justify-between items-start gap-4">
            <p className="text-sm text-stone-700">{popupMessage}</p>
            <button
              onClick={() => setShowPopup(false)}
              className="text-stone-400 hover:text-stone-700"
            >
              <FiX size={16} className="cursor-pointer" />
            </button>
          </div>
          <div className="absolute bottom-[-8px] right-6 w-4 h-4 bg-white transform rotate-45"></div>
        </div>
      )}

      {/* Chat Launcher Button */}
      <button
        onClick={onClick}
        className={`fixed bottom-6 right-6 bg-white p-3 rounded-full shadow-lg hover:scale-105 transition flex items-center justify-center w-12 h-12 z-20 cursor-pointer ${
          isOpen ? "hidden sm:flex" : ""
        }`}
        aria-label="Open Chat"
      >
        {/* Logo: visible when closed */}
        <img
          src={Logo}
          alt="Chat Logo"
          className={`w-6 h-6 object-contain transition-all duration-500 absolute ${
            isOpen
              ? "opacity-0 scale-0 pointer-events-none"
              : "opacity-100 scale-100 pointer-events-auto"
          }`}
        />
        {/* Arrow: visible when open */}
        <span
          className={`transition-all duration-300 absolute flex items-center justify-center ${
            isOpen
              ? "opacity-100 scale-100 rotate-0"
              : "opacity-0 scale-75 -rotate-90 pointer-events-none"
          }`}
        >
          <FiChevronDown size={24} className="text-black" />
        </span>
      </button>
    </>
  );
};

export default ChatLauncher;
