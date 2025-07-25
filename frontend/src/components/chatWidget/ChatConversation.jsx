import React, { useEffect, useRef, useState } from "react";
import { FiSend, FiPaperclip, FiMoreHorizontal, FiMic } from "react-icons/fi";
import { BsEmojiSmile } from "react-icons/bs";
import avatar from "/FAMediaLogo.svg";
import Picker from "@emoji-mart/react";
import data from "@emoji-mart/data";

// At the top of your component (or in a shared context)
const getSessionId = () => {
  let id = localStorage.getItem("chatSessionId");
  if (!id) {
    id = `user-${Date.now()}-${Math.floor(Math.random() * 10000)}`;
    localStorage.setItem("chatSessionId", id);
  }
  return id;
};
const sessionId = getSessionId();

const ChatConversation = ({ conversation, onSendMessage }) => {
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const chatRef = useRef(null);
  const inputRef = useRef(null);
  const [showMenu, setShowMenu] = useState(false);
  const [showEmoji, setShowEmoji] = useState(false);

  // Function to sanitize and format message text
  const formatMessage = (text) => {
    const sanitizedText = text
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
    return sanitizedText
      .replace(/\n/g, "<br>")
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
      .replace(/\*(.*?)\*/g, "<em>$1</em>")
      .replace(/`(.*?)`/g, "<code>$1</code>");
  };

  const formatDateHeader = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
    });
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  useEffect(() => {
    chatRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [conversation]);

  const handleSend = async () => {
    if (input.trim() === "") return;

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

    const messageToSend = input;
    const newMsg = {
      sender: "user",
      text: messageToSend,
      timestamp,
      time,
      date,
    };

    setInput("");
    setIsLoading(true);
    onSendMessage(newMsg);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/chat`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ message: messageToSend, sessionId }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to get response");
      }

      const botMsg = {
        sender: "bot",
        text: data.reply,
        timestamp,
        time,
        date,
      };
      onSendMessage(botMsg);
    } catch (error) {
      console.error("Fetch error:", error);
      const botMsg = {
        sender: "bot",
        text: "Apologies! Our AI assistant is currently unavailable. The FA Media team will be right with you.",
        timestamp,
        time,
        date,
      };
      onSendMessage(botMsg);
    } finally {
      setIsLoading(false);
      requestAnimationFrame(() => {
        if (inputRef.current) {
          inputRef.current.focus();
        }
      });
    }
  };

  return (
    <div className="h-full flex flex-col">
      <div className="flex-1 overflow-y-auto px-4 py-6 space-y-4">
        {(() => {
          let lastDate = null;
          return conversation && conversation.messages.length > 0 ? (
            conversation.messages.map((msg, index) => {
              // Use timestamp for date header
              const msgDateObj = msg.timestamp ? new Date(msg.timestamp) : null;
              const msgDate = msgDateObj
                ? msgDateObj.toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })
                : msg.date;
              const showDate = !lastDate || msgDate !== lastDate;
              lastDate = msgDate;
              return (
                <React.Fragment key={index}>
                  {showDate && (
                    <div className="text-center text-xs font-semibold text-gray-500">
                      {msgDateObj
                        ? msgDateObj.toLocaleDateString("en-US", {
                            weekday: "long",
                            month: "long",
                            day: "numeric",
                          })
                        : formatDateHeader(msg.date)}
                    </div>
                  )}
                  <div
                    className={`flex mb-2 ${
                      msg.sender === "user"
                        ? "justify-end"
                        : "justify-start items-start"
                    }`}
                  >
                    {msg.sender === "bot" && (
                      <img
                        src={avatar}
                        alt="Bot"
                        className="w-8 h-8 rounded-full mr-2"
                      />
                    )}
                    <div>
                      <div
                        className={`rounded-2xl px-4 py-3 text-sm max-w-xs shadow
                ${
                  msg.sender === "user"
                    ? "bg-[#323232] text-white"
                    : "bg-gray-100 text-gray-800"
                }
              `}
                      >
                        {msg.sender === "bot" ? (
                          <div
                            className="prose prose-sm max-w-none"
                            dangerouslySetInnerHTML={{
                              __html: formatMessage(msg.text),
                            }}
                          />
                        ) : (
                          <span className="break-words whitespace-pre-line max-w-md block">
                            {msg.text}
                          </span>
                        )}
                      </div>
                      <div
                        className={`text-[10px] mt-1 text-gray-400 ${
                          msg.sender === "user"
                            ? "text-right pr-2"
                            : "text-left"
                        }`}
                      >
                        {msgDateObj
                          ? msgDateObj.toLocaleTimeString([], {
                              hour: "2-digit",
                              minute: "2-digit",
                            })
                          : msg.time}
                      </div>
                    </div>
                  </div>
                </React.Fragment>
              );
            })
          ) : (
            <div className="text-center text-gray-400 py-8">
              No messages yet.
            </div>
          );
        })()}
        {isLoading && (
          <div className="flex justify-start">
            <img
              src={avatar}
              alt="Bot"
              className="w-6 h-6 rounded-full mt-1 mr-2"
            />
            <div className="flex space-x-4 fade-in">
              <div className="flex-1 min-w-0">
                <div className="bg-gray-200 rounded-xl p-4 w-full">
                  <div className="typing-indicator text-gray-600">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        <div ref={chatRef} />
      </div>

      <div className="w-full flex items-center bg-white py-2 px-4 mt-2 sticky bottom-0 shadow-[0_-4px_12px_rgba(0,0,0,0.08)]">
        {/* Attachment (Three Dots) */}
        <div className="relative mx-1">
          <button
            className="py-2 px-1 rounded-full hover:bg-gray-100 transition cursor-pointer"
            onClick={() => setShowMenu((prev) => !prev)}
            type="button"
          >
            <FiMoreHorizontal className="text-xl text-gray-500" />
          </button>
          {showMenu && (
            <div className="absolute left-0 bottom-10 bg-white rounded shadow-lg z-10 w-40">
              <button
                className="block w-full text-left px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                  setShowMenu(false);
                  alert("Attach File (placeholder)");
                }}
              >
                Attach File
              </button>
              <button
                className="block w-full text-left px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                  setShowMenu(false);
                  alert("Attach Image (placeholder)");
                }}
              >
                Attach Image
              </button>
            </div>
          )}
        </div>
        {/* Emoji Picker */}
        <button
          className="py-2 px-1 rounded-full hover:bg-gray-100 transition mx-1 cursor-pointer"
          onClick={() => setShowEmoji((prev) => !prev)}
          type="button"
        >
          <BsEmojiSmile className="text-xl text-gray-500" />
        </button>
        {showEmoji && (
          <div className="absolute left-1/2 bottom-13 z-10 transform -translate-x-1/2 bg-white rounded-b-xl shadow-lg border border-gray-200 overflow-hidden max-w-[400px] w-full">
            <div className="flex justify-end p-1 mr-4">
              <button
                className="text-gray-400 hover:text-gray-700 text-2xl"
                onClick={() => setShowEmoji(false)}
                aria-label="Close emoji picker"
              >
                &times;
              </button>
            </div>
            <Picker
              data={data}
              onEmojiSelect={(emoji) => setInput(input + emoji.native)}
              theme="light"
              previewPosition="none"
              skinTonePosition="none"
            />
          </div>
        )}
        {/* Voice Sender */}
        <button
          className="py-2 px-1 rounded-full hover:bg-gray-100 transition mx-1 cursor-pointer"
          onClick={() => alert("Voice input (placeholder)")}
          type="button"
        >
          <FiMic className="text-xl text-gray-500" />
        </button>
        {/* Input Field with Floating Send Button */}
        <div className="relative flex-1">
          <input
            ref={inputRef}
            type="text"
            placeholder="Your message"
            className="w-full bg-transparent border-none outline-none px-3 py-2 text-sm rounded-full pr-10"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && !isLoading && handleSend()}
            disabled={isLoading}
            autoFocus
          />
          <button
            onClick={handleSend}
            disabled={isLoading || !input.trim()}
            className="absolute right-2 top-1/2 -translate-y-1/2 py-2 px-1 rounded-full hover:bg-blue-100 transition cursor-pointer"
            type="button"
          >
            <FiSend
              className={`text-xl ${
                isLoading || !input.trim() ? "text-gray-300" : "text-gray-800"
              }`}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatConversation;
