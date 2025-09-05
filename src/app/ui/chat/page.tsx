"use client";

import { useState } from "react";
import { useChat } from "@ai-sdk/react";

// Simple SVG icon components
const MessageCircleIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
  </svg>
);

const XIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="m18 6-12 12"/>
    <path d="m6 6 12 12"/>
  </svg>
);

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");

  const { messages, sendMessage, status, error, stop } = useChat();

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendMessage({ text: input });
    setInput("");
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 bg-white dark:bg-zinc-900 rounded-lg shadow-2xl border border-gray-200 dark:border-zinc-700 w-96 h-[32rem] overflow-hidden flex flex-col">
          {/* Header */}
          <div className="bg-blue-500 text-white p-4 flex justify-between items-center rounded-t-lg">
            <h3 className="font-semibold">Chat Support</h3>
            <button
              onClick={toggleChat}
              className="text-white hover:text-gray-200 transition-colors"
            >
              <XIcon />
            </button>
          </div>
          
          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-zinc-50 dark:bg-zinc-950">
            {error && (
              <div className="text-red-500 bg-red-50 dark:bg-red-900/20 p-2 rounded">
                {error.message}
              </div>
            )}

            {messages.map((message) => (
              <div key={message.id} className="mb-4">
                <div className="font-semibold text-sm text-gray-600 dark:text-gray-300 mb-1">
                  {message.role === "user" ? "You:" : "AI:"}
                </div>
                {message.parts.map((part, index) => {
                  switch (part.type) {
                    case "text":
                      return (
                        <div
                          key={`${message.id}-${index}`}
                          className={`p-3 rounded-lg max-w-xs whitespace-pre-wrap ${
                            message.role === "user"
                              ? "bg-blue-500 text-white ml-auto"
                              : "bg-white dark:bg-zinc-800 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-zinc-700"
                          }`}
                        >
                          {part.text}
                        </div>
                      );
                    default:
                      return null;
                  }
                })}
              </div>
            ))}

            {(status === "submitted" || status === "streaming") && (
              <div className="mb-4">
                <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-400"></div>
                  <span className="text-sm">AI is typing...</span>
                </div>
              </div>
            )}
          </div>

          {/* Input Form */}
          <form
            onSubmit={handleSubmit}
            className="p-4 bg-white dark:bg-zinc-900 border-t border-gray-200 dark:border-zinc-700 rounded-b-lg"
          >
            <div className="flex gap-2">
              <input
                className="flex-1 dark:bg-zinc-800 p-2 border border-zinc-300 dark:border-zinc-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="How can I help you?"
              />
              {status === "submitted" || status === "streaming" ? (
                <button
                  onClick={stop}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors"
                >
                  Stop
                </button>
              ) : (
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={status !== "ready"}
                >
                  Send
                </button>
              )}
            </div>
          </form>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={toggleChat}
        className="bg-blue-500 hover:bg-blue-600 text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-105"
        style={{ minWidth: '56px', minHeight: '56px' }}
      >
        {isOpen ? <XIcon /> : <MessageCircleIcon />}
      </button>
    </div>
  );
}
