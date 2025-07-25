import React, { useState, useEffect } from "react";
import Background from "../../assets/chatbg.jpg";
import Overlay from "../../assets/blur-overlay.png";
import { FiX, FiHome, FiMoreHorizontal } from "react-icons/fi";
import { LuMessageSquareText } from "react-icons/lu";
import { FaLocationArrow, FaChevronRight } from "react-icons/fa6";
import { IoIosArrowBack } from "react-icons/io";
import RecentMessages from "./RecentMessages";
import ChatConversation from "./ChatConversation";
import avatar from "/FAMediaLogo.svg";

const getConversations = () => {
  const stored = localStorage.getItem("conversations");
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch {
      return [];
    }
  }
  return [];
};

const saveConversations = (convos) => {
  localStorage.setItem("conversations", JSON.stringify(convos));
};

function HeaderMenu({ onClearHistory }) {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="relative">
      <button
        className="p-2 rounded-full hover:bg-gray-100 cursor-pointer"
        onClick={() => setOpen((v) => !v)}
        aria-label="More options"
      >
        <FiMoreHorizontal className="text-xl text-gray-700" />
      </button>
      <div
        className={`absolute right-0 mt-2 w-40 bg-white p-2 rounded shadow-lg z-50 transition-all duration-200
          ${open ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      >
        <button
          className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-sm cursor-pointer"
          onClick={() => {
            setOpen(false);
            onClearHistory();
          }}
        >
          Clear history
        </button>
      </div>
    </div>
  );
}

const ChatWindow = ({ onClose }) => {
  const [view, setView] = useState("home");
  const [isOpen, setIsOpen] = useState(false);
  const [conversations, setConversations] = useState(getConversations());
  const [activeConversationId, setActiveConversationId] = useState(() => {
    const convos = getConversations();
    return convos.length > 0 ? convos[convos.length - 1].id : null;
  });

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 50);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    saveConversations(conversations);
  }, [conversations]);

  // Handle browser back button
  useEffect(() => {
    const handlePopState = () => {
      if (view === "chat") {
        setView("messages");
      } else if (view === "messages") {
        setView("home");
      } else if (view === "home") {
        onClose();
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [view, onClose]);

  // Push state when view changes
  useEffect(() => {
    if (isOpen) {
      window.history.pushState({ view }, "");
    }
  }, [view, isOpen]);

  const handleStartNewConversation = () => {
    const newId = Date.now().toString();
    const now = new Date();
    const timestamp = now.toISOString();
    const date =
      now.getFullYear() +
      "-" +
      String(now.getMonth() + 1).padStart(2, "0") +
      "-" +
      String(now.getDate()).padStart(2, "0");
    const time = now.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    const greeting = {
      sender: "bot",
      text: "Hello! Welcome to FA Media. How can I help you today?",
      timestamp,
      time,
      date,
    };
    const newConvo = { id: newId, messages: [greeting] };
    const updatedConvos = [...conversations, newConvo];
    setConversations(updatedConvos);
    setActiveConversationId(newId);
    setView("chat");
  };

  const handleSendMessage = (msg) => {
    setConversations((prev) =>
      prev.map((c) =>
        c.id === activeConversationId
          ? { ...c, messages: [...c.messages, msg] }
          : c
      )
    );
  };

  const handleViewChange = (newView) => {
    setView(newView);
    window.history.pushState({ view: newView }, "");
  };

  return (
    <div
      className={`fixed overflow-y-auto inset-0 sm:inset-auto sm:bottom-22 sm:right-6 w-full h-full sm:w-[400px] sm:max-h-[640px] bg-white rounded-none sm:rounded-2xl shadow-2xl flex flex-col z-50 transition-all duration-300 ease-in-out ${
        isOpen
          ? "opacity-100 transform scale-100"
          : "opacity-0 transform scale-95"
      }`}
    >
      {/* Conditional Top Background for Home Only */}
      {view === "home" && (
        <div className="relative w-full h-[220px] overflow-hidden">
          <img
            src={Background}
            alt="Chatbot Welcome"
            className="absolute inset-0 w-full h-full object-cover z-0"
          />
          <img
            src={Overlay}
            alt="Blur Overlay"
            className="absolute inset-0 w-full h-full object-cover z-10 pointer-events-none"
          />
          <button
            onClick={onClose}
            className="absolute top-2 right-2 rounded-full p-1.5 hover:bg-opacity-100 transition shadow z-20"
          >
            <FiX className="text-stone-300 text-lg cursor-pointer" />
          </button>
        </div>
      )}

      {/* Main Content Area */}
      <div
        className={`flex-1 flex flex-col w-full z-20 ${
          view === "home" ? "mt-[-50px]" : "mt-0"
        }`}
      >
        {view === "home" && (
          <div className="flex-1 flex flex-col items-center justify-start w-full">
            {/* Recent message card, only if there is at least one conversation */}
            {conversations.length > 0 &&
              (() => {
                const lastConvo = conversations[conversations.length - 1];
                const lastMsg =
                  lastConvo.messages[lastConvo.messages.length - 1];
                const msgDate = lastMsg.timestamp
                  ? new Date(lastMsg.timestamp)
                  : new Date();
                const now = new Date();
                const diffMs = now - msgDate;
                const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
                const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
                const diffMinutes = Math.floor(diffMs / (1000 * 60));
                let relative = "";
                if (diffDays > 0) {
                  relative = `${diffDays}d ago`;
                } else if (diffHours > 0) {
                  relative = `${diffHours}h ago`;
                } else if (diffMinutes > 0) {
                  relative = `${diffMinutes}m ago`;
                } else {
                  relative = "just now";
                }
                return (
                  <div
                    onClick={() => {
                      setActiveConversationId(lastConvo.id);
                      handleViewChange("chat");
                    }}
                    className="w-[90%] bg-white rounded-xl shadow-lg border border-stone-300 hover:border-stone-400 transition p-4 flex flex-col gap-2 mt-3 cursor-pointer"
                  >
                    <div className="font-medium text-xs text-gray-500 mb-1">
                      Recent message
                    </div>
                    <div className="flex items-center gap-3">
                      <img
                        src={avatar}
                        alt="Avatar"
                        className="w-8 h-8 rounded-full"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="text-sm text-gray-900 truncate">
                          {lastMsg.text.length > 40
                            ? lastMsg.text.slice(0, 40) + "..."
                            : lastMsg.text}
                        </div>
                        <div className="text-xs text-gray-500 mt-0.5 flex items-center gap-1">
                          FA Media <span className="mx-1">•</span> {relative}
                        </div>
                      </div>
                      <FaChevronRight className="text-black text-sm" />
                    </div>
                  </div>
                );
              })()}
            <div
              onClick={handleStartNewConversation}
              className="w-[90%] bg-white rounded-xl shadow-lg border border-stone-300 hover:border-stone-400 transition p-4 flex items-center justify-between mt-2 cursor-pointer"
            >
              <div className="space-y-1">
                <div className="font-medium text-sm text-gray-900">
                  Send us a message
                </div>
                <div className="text-xs text-gray-500">
                  We typically reply in under a minute
                </div>
              </div>
              <FaLocationArrow className="text-black text-xl ml-2" />
            </div>
          </div>
        )}

        {view === "messages" && (
          <div className="flex-1 flex flex-col w-full ">
            <div className="flex items-center justify-between p-4 sticky top-0 left-0 bg-white z-10 border-b border-gray-100">
              <div className="flex-1 flex justify-start items-center">
                <h2 className="text-md font-semibold">Conversations</h2>
              </div>
              <div className="absolute right-4 flex items-center gap-2">
                <HeaderMenu
                  onClearHistory={() => {
                    localStorage.removeItem("chatSessionId");
                    localStorage.removeItem("conversations");
                    setConversations([]);
                    setActiveConversationId(null);
                  }}
                />
                <button onClick={onClose}>
                  <FiX className="text-gray-500 hover:text-black text-xl cursor-pointer" />
                </button>
              </div>
            </div>
            <RecentMessages
              conversations={conversations}
              activeConversationId={activeConversationId}
              setActiveConversationId={(id) => {
                setActiveConversationId(id);
                handleViewChange("chat");
              }}
            />
            <button
              className="w-fit bg-[#212121] text-white text-sm font-medium rounded-md p-4 mt-4 hover:bg-[#323232] transition-all duration-300 cursor-pointer sticky left-1/2 bottom-23 transform -translate-x-1/2"
              onClick={handleStartNewConversation}
            >
              Start new conversation
            </button>
          </div>
        )}

        {view === "chat" && (
          <div className="flex-1 flex flex-col w-full h-full">
            <div className="bg-black text-white p-4 flex items-center justify-between space-x-2 sticky top-0">
              <button onClick={() => handleViewChange("messages")}>
                <IoIosArrowBack className="text-white text-xl cursor-pointer" />
              </button>
              <div className="flex items-center justify-center gap-1">
                <img src={avatar} alt="Bot" className="w-8 h-8 rounded-full" />
                <span className="font-medium">FA Media</span>
              </div>
              <button onClick={onClose}>
                <FiX className="text-white text-xl cursor-pointer" />
              </button>
            </div>
            <ChatConversation
              conversation={conversations.find(
                (c) => c.id === activeConversationId
              )}
              onSendMessage={handleSendMessage}
            />
          </div>
        )}
      </div>

      {/* Bottom Navigation - hidden during chat */}
      {view !== "chat" && (
        <div className="w-full bg-white flex items-center justify-around p-4 shadow-[0_-4px_12px_rgba(0,0,0,0.1)] sticky bottom-0 z-50">
          <button
            className={`flex flex-col items-center flex-1 cursor-pointer ${
              view === "home" ? "text-black" : "text-gray-400"
            }`}
            onClick={() => handleViewChange("home")}
          >
            <FiHome className="text-xl mb-0.5" />
            <span className="text-xs font-medium">Home</span>
          </button>
          <button
            className={`flex flex-col items-center flex-1 cursor-pointer ${
              view === "messages" ? "text-black" : "text-gray-400"
            }`}
            onClick={() => handleViewChange("messages")}
          >
            <LuMessageSquareText className="text-xl mb-0.5" />
            <span className="text-xs font-medium">Messages</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default ChatWindow;
