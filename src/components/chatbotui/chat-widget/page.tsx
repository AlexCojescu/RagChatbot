"use client";

import { useState, useRef, useEffect } from "react";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";

interface ChatbotOption {
  id: string;
  name: string;
  description: string;
  icon: string;
  useCase: string;
  features: string[];
  color: string;
  path: string;
}

const chatbotOptions: ChatbotOption[] = [
  {
    id: "chat",
    name: "General Chat",
    description: "Basic conversational AI for general inquiries and support",
    icon: "💬",
    useCase: "Customer Support & General Queries",
    features: ["Natural Language Processing", "Context Awareness", "Multi-turn Conversations"],
    color: "bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200",
    path: "/api/chat"
  },
  {
    id: "api-tool",
    name: "API Assistant",
    description: "Intelligent assistant for API integration and development",
    icon: "🔧",
    useCase: "Developer Tools & API Integration",
    features: ["Code Generation", "API Documentation", "Integration Support"],
    color: "bg-gradient-to-br from-emerald-50 to-emerald-100 border-emerald-200",
    path: "/api/api-tool"
  },
  {
    id: "completion",
    name: "Text Completion",
    description: "Advanced text completion and writing assistance",
    icon: "✍️",
    useCase: "Content Creation & Writing",
    features: ["Auto-completion", "Grammar Check", "Style Suggestions"],
    color: "bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200",
    path: "/api/completion"
  },
  {
    id: "generate-image",
    name: "Image Generator",
    description: "AI-powered image generation and visual content creation",
    icon: "🎨",
    useCase: "Creative & Visual Design",
    features: ["AI Image Generation", "Style Transfer", "Custom Prompts"],
    color: "bg-gradient-to-br from-rose-50 to-rose-100 border-rose-200",
    path: "/api/generate-image"
  },
  {
    id: "multi-modal-chat",
    name: "Multi-Modal Chat",
    description: "Advanced chat supporting text, images, and multimedia",
    icon: "🌟",
    useCase: "Rich Media Conversations",
    features: ["Image Understanding", "File Analysis", "Mixed Media Support"],
    color: "bg-gradient-to-br from-indigo-50 to-indigo-100 border-indigo-200",
    path: "/api/multi-modal-chat"
  }
];

// Refined SVG Icons
const XIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m18 6-12 12"/>
    <path d="m6 6 12 12"/>
  </svg>
);

const BotIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="18" height="10" x="3" y="11" rx="2" ry="2"/>
    <circle cx="12" cy="5" r="2"/>
    <path d="m12 7v4"/>
    <line x1="8" x2="8" y1="16" y2="16"/>
    <line x1="16" x2="16" y1="16" y2="16"/>
  </svg>
);

const ChevronUpIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="18,15 12,9 6,15"></polyline>
  </svg>
);

const ArrowLeftIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m12 19-7-7 7-7"/>
    <path d="m19 12H5"/>
  </svg>
);

const SendIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m22 2-7 20-4-9-9-4Z"/>
    <path d="M22 2 11 13"/>
  </svg>
);

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedBot, setSelectedBot] = useState<ChatbotOption | null>(null);
  const [showChat, setShowChat] = useState(false);
  const [input, setInput] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const { messages, sendMessage, status, error, stop } = useChat({
    transport: new DefaultChatTransport({
      api: selectedBot?.path || '/api/chat'
    })
  });

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleChat = () => {
    if (showChat) {
      setShowChat(false);
      setSelectedBot(null);
      setIsOpen(false);
    } else {
      setIsOpen(!isOpen);
    }
  };

  const handleSelectBot = (bot: ChatbotOption) => {
    setSelectedBot(bot);
    setShowChat(true);
    setIsOpen(false);
  };

  const handleBackToSelector = () => {
    setShowChat(false);
    setSelectedBot(null);
    setIsOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      sendMessage({ text: input });
      setInput("");
    }
  };

  return (
    <>
      {/* Add custom scrollbar hiding styles */}
      <style jsx global>{`
        .scrollbar-hidden::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hidden {
          scrollbar-width: none; /* Firefox */
          -ms-overflow-style: none; /* IE and Edge */
        }
      `}</style>

      <div className="fixed bottom-6 right-6 z-50" ref={dropdownRef}>
        {/* Chat Interface */}
        {showChat && selectedBot && (
          <div className="absolute bottom-16 right-0 w-96 h-[32rem] bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-100 mb-2 flex flex-col overflow-hidden">
            {/* Chat Header */}
            <div className="bg-white/80 backdrop-blur-md border-b border-gray-100 p-4 flex items-center justify-between">
              <button
                onClick={handleBackToSelector}
                className="p-2 hover:bg-gray-100 rounded-xl transition-all duration-200 text-gray-600"
              >
                <ArrowLeftIcon />
              </button>
              <div className="flex items-center space-x-3">
                <div className="text-xl">{selectedBot.icon}</div>
                <div className="text-center">
                  <h3 className="font-semibold text-gray-900 text-sm">{selectedBot.name}</h3>
                  <p className="text-xs text-gray-500">{selectedBot.useCase}</p>
                </div>
              </div>
              <button
                onClick={() => {setShowChat(false); setSelectedBot(null); setIsOpen(false);}}
                className="p-2 hover:bg-gray-100 rounded-xl transition-all duration-200 text-gray-600"
              >
                <XIcon />
              </button>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50/50 scrollbar-hidden">
              {error && (
                <div className="text-red-600 bg-red-50 border border-red-200 p-3 rounded-xl text-sm">
                  {error.message}
                </div>
              )}

              {messages.map((message) => (
                <div key={message.id} className="flex flex-col space-y-1">
                  {message.parts?.map((part, index) => {
                    switch (part.type) {
                      case "text":
                        return (
                          <div
                            key={`${message.id}-${index}`}
                            className={`max-w-xs p-3 rounded-2xl text-sm ${
                              message.role === "user"
                                ? "bg-blue-600 text-white ml-auto rounded-br-md"
                                : "bg-white border border-gray-200 text-gray-800 shadow-sm rounded-bl-md"
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
                <div className="flex items-center justify-center gap-2 text-gray-500 py-4">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              )}
            </div>

            {/* Chat Input */}
            <form
              onSubmit={handleSubmit}
              className="p-4 bg-white/80 backdrop-blur-md border-t border-gray-100"
            >
              <div className="flex gap-3 items-end">
                <input
                  className="flex-1 p-3 border border-gray-200 bg-gray-50 focus:bg-white text-gray-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-gray-500"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your message..."
                  disabled={status === "submitted" || status === "streaming"}
                />
                {status === "submitted" || status === "streaming" ? (
                  <button
                    type="button"
                    onClick={stop}
                    className="bg-red-500 text-white p-3 rounded-xl hover:bg-red-600 transition-all duration-200 shadow-sm"
                  >
                    <XIcon />
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="bg-blue-600 text-white p-3 rounded-xl hover:bg-blue-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
                    disabled={!input.trim()}
                  >
                    <SendIcon />
                  </button>
                )}
              </div>
            </form>
          </div>
        )}

        {/* Dropdown Menu - Bot Selector */}
        {isOpen && !showChat && (
          <div className="absolute bottom-16 right-0 w-80 max-h-96 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-100 mb-2 overflow-hidden">
            {/* Header */}
            <div className="p-6 bg-white/80 backdrop-blur-md border-b border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">Choose Assistant</h3>
              <p className="text-sm text-gray-500">Select the perfect AI for your task</p>
            </div>

            {/* Bot Options - Hidden scrollbar but still scrollable */}
            <div className="py-2 max-h-64 overflow-y-auto scrollbar-hidden">
              {chatbotOptions.map((bot) => (
                <button
                  key={bot.id}
                  onClick={() => handleSelectBot(bot)}
                  className="w-full px-6 py-4 text-left hover:bg-gray-50 transition-all duration-200 border-b border-gray-50 last:border-b-0 group"
                >
                  <div className="flex items-start space-x-4">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-2xl ${bot.color} border-2 flex items-center justify-center text-lg shadow-sm group-hover:shadow-md transition-all duration-200`}>
                      {bot.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-semibold text-gray-900 mb-1">
                        {bot.name}
                      </h4>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        {bot.description}
                      </p>
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-400">
                        <polyline points="9,18 15,12 9,6"></polyline>
                      </svg>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Footer */}
            <div className="p-4 bg-gray-50/50 border-t border-gray-100">
              <p className="text-xs text-gray-400 text-center font-medium">
                Powered by AI • Choose wisely
              </p>
            </div>
          </div>
        )}

        {/* Main Widget Button - Keeping the original blue design */}
        <button
          onClick={toggleChat}
          className={`
            relative flex items-center justify-center w-14 h-14 rounded-full shadow-lg transition-all duration-300 
            ${showChat || isOpen
              ? 'bg-blue-600 hover:bg-blue-700 scale-110' 
              : 'bg-blue-500 hover:bg-blue-600 hover:scale-105'
            }
            text-white focus:outline-none focus:ring-4 focus:ring-blue-500/20
          `}
          aria-label="Toggle AI Assistant"
        >
          {showChat ? <XIcon /> : (isOpen ? <ChevronUpIcon /> : <BotIcon />)}
          
          {/* Notification Badge */}
          {selectedBot && !showChat && !isOpen && (
            <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
              <span className="text-xs text-white">✓</span>
            </div>
          )}
        </button>

        {/* Pulse animation when closed */}
        {!isOpen && !showChat && (
          <div className="absolute inset-0 w-14 h-14 rounded-full bg-blue-400 animate-ping opacity-20 pointer-events-none"></div>
        )}
      </div>
    </>
  );
}