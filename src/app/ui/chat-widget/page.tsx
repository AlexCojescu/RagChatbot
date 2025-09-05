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
    color: "from-blue-500 to-blue-600",
    path: "/api/chat" // API endpoint for this chatbot
  },
  {
    id: "api-tool",
    name: "API Assistant",
    description: "Intelligent assistant for API integration and development",
    icon: "🔧",
    useCase: "Developer Tools & API Integration",
    features: ["Code Generation", "API Documentation", "Integration Support"],
    color: "from-green-500 to-green-600",
    path: "/api/api-tool"
  },
  {
    id: "completion",
    name: "Text Completion",
    description: "Advanced text completion and writing assistance",
    icon: "✍️",
    useCase: "Content Creation & Writing",
    features: ["Auto-completion", "Grammar Check", "Style Suggestions"],
    color: "from-purple-500 to-purple-600",
    path: "/api/completion"
  },
  {
    id: "generate-image",
    name: "Image Generator",
    description: "AI-powered image generation and visual content creation",
    icon: "🎨",
    useCase: "Creative & Visual Design",
    features: ["AI Image Generation", "Style Transfer", "Custom Prompts"],
    color: "from-pink-500 to-pink-600",
    path: "/api/generate-image"
  },
  {
    id: "multi-modal-chat",
    name: "Multi-Modal Chat",
    description: "Advanced chat supporting text, images, and multimedia",
    icon: "🌟",
    useCase: "Rich Media Conversations",
    features: ["Image Understanding", "File Analysis", "Mixed Media Support"],
    color: "from-indigo-500 to-indigo-600",
    path: "/api/multi-modal-chat"
  }
];

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

const BotIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect width="18" height="10" x="3" y="11" rx="2" ry="2"/>
    <circle cx="12" cy="5" r="2"/>
    <path d="m12 7v4"/>
    <line x1="8" x2="8" y1="16" y2="16"/>
    <line x1="16" x2="16" y1="16" y2="16"/>
  </svg>
);

const ChevronUpIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="18,15 12,9 6,15"></polyline>
  </svg>
);

const ArrowLeftIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="m12 19-7-7 7-7"/>
    <path d="m19 12H5"/>
  </svg>
);

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedBot, setSelectedBot] = useState<ChatbotOption | null>(null);
  const [showChat, setShowChat] = useState(false);
  const [input, setInput] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Initialize chat with dynamic API endpoint
  const { messages, sendMessage, status, error, stop } = useChat({
    transport: new DefaultChatTransport({
      api: selectedBot?.path || '/api/chat' // Use transport.api instead
    })
  });

  // Close dropdown when clicking outside
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
      // If chat is open, close everything
      setShowChat(false);
      setSelectedBot(null);
      setIsOpen(false);
    } else {
      // If closed, open the bot selector
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
    <div className="fixed bottom-6 right-6 z-50" ref={dropdownRef}>
      {/* Chat Interface */}
      {showChat && selectedBot && (
        <div className="absolute bottom-16 right-0 w-96 h-[32rem] bg-white dark:bg-gray-800 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700 mb-2 flex flex-col">
          {/* Chat Header */}
          <div className={`bg-gradient-to-r ${selectedBot.color} text-white p-4 rounded-t-lg flex items-center justify-between`}>
            <button
              onClick={handleBackToSelector}
              className="p-1 hover:bg-white/20 rounded transition-colors"
            >
              <ArrowLeftIcon />
            </button>
            <div className="flex items-center space-x-2">
              <span className="text-lg">{selectedBot.icon}</span>
              <h3 className="font-semibold">{selectedBot.name}</h3>
            </div>
            <button
              onClick={() => {setShowChat(false); setSelectedBot(null); setIsOpen(false);}}
              className="p-1 hover:bg-white/20 rounded transition-colors"
            >
              <XIcon />
            </button>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 dark:bg-gray-900">
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
                {message.parts?.map((part, index) => {
                  switch (part.type) {
                    case "text":
                      return (
                        <div
                          key={`${message.id}-${index}`}
                          className={`p-3 rounded-lg max-w-xs whitespace-pre-wrap ${
                            message.role === "user"
                              ? "bg-blue-500 text-white ml-auto"
                              : "bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-700"
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
              <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-400"></div>
                <span className="text-sm">AI is typing...</span>
              </div>
            )}
          </div>

          {/* Chat Input */}
          <form
            onSubmit={handleSubmit}
            className="p-4 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 rounded-b-lg"
          >
            <div className="flex gap-2">
              <input
                className="flex-1 p-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                disabled={status === "submitted" || status === "streaming"}
              />
              {status === "submitted" || status === "streaming" ? (
                <button
                  type="button"
                  onClick={stop}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors"
                >
                  Stop
                </button>
              ) : (
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={!input.trim()}
                >
                  Send
                </button>
              )}
            </div>
          </form>
        </div>
      )}

      {/* Dropdown Menu - Bot Selector */}
      {isOpen && !showChat && (
        <div className="absolute bottom-16 right-0 w-80 max-h-96 overflow-y-auto bg-white dark:bg-gray-800 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700 mb-2">
          {/* Header */}
          <div className="p-4 border-b border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Choose AI Assistant</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">Select the perfect bot for your task</p>
          </div>

          {/* Bot Options */}
          <div className="py-2">
            {chatbotOptions.map((bot) => (
              <button
                key={bot.id}
                onClick={() => handleSelectBot(bot)}
                className="w-full px-4 py-3 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 border-b border-gray-100 dark:border-gray-600 last:border-b-0"
              >
                <div className="flex items-start space-x-3">
                  <div className={`flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-r ${bot.color} flex items-center justify-center text-white text-lg`}>
                    {bot.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-medium text-gray-900 dark:text-white truncate">
                      {bot.name}
                    </h4>
                    <p className="text-xs text-gray-600 dark:text-gray-300 mt-1 line-clamp-2">
                      {bot.description}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Footer */}
          <div className="p-3 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700/50">
            <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
              Click any option to start chatting
            </p>
          </div>
        </div>
      )}

      {/* Main Widget Button */}
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
  );
}
