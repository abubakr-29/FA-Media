import avatar from "/FAMediaLogo.svg";

const RecentMessages = ({
  conversations,
  activeConversationId,
  setActiveConversationId,
}) => {
  return (
    <div className="flex-1 overflow-y-auto px-2 py-2 w-[90%] mx-auto mt-6">
      {conversations.length === 0 && (
        <div className="text-center text-gray-400 py-8">
          No conversations yet.
        </div>
      )}
      {conversations.map((conv) => {
        const lastMsg =
          conv.messages.length > 0
            ? conv.messages[conv.messages.length - 1]
            : null;
        return (
          <div
            key={conv.id}
            className={`flex items-start gap-3 p-5 rounded-md border shadow-md cursor-pointer mb-3 border-gray-200 hover:border-transparent hover:shadow-lg
            ${
              conv.id === activeConversationId
                ? "bg-gray-100 shadow-lg"
                : "bg-white"
            } transition`}
            onClick={() => setActiveConversationId(conv.id)}
          >
            <img
              src={avatar}
              alt="User Avatar"
              className="w-8 h-8 rounded-full"
            />
            <div className="flex-1">
              <div className="flex justify-between items-center">
                <h4 className="font-semibold text-sm">FA Media</h4>
                <span className="text-xs text-gray-400">
                  {lastMsg ? (lastMsg.time ? lastMsg.time : "") : ""}
                </span>
              </div>
              <p className="text-sm text-gray-600 truncate whitespace-nowrap overflow-hidden">
                {lastMsg
                  ? lastMsg.text.length > 28
                    ? lastMsg.text.slice(0, 28) + "..."
                    : lastMsg.text
                  : "No messages yet."}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RecentMessages;
