"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";

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
    path: "/components/chatbotUI/chat"
  },
  {
    id: "api-tool",
    name: "API Assistant", 
    description: "Intelligent assistant for API integration and development",
    icon: "🔧",
    useCase: "Developer Tools & API Integration",
    features: ["Code Generation", "API Documentation", "Integration Support"],
    color: "from-green-500 to-green-600",
    path: "/ui/api-tool"
  },
  {
    id: "completion",
    name: "Text Completion",
    description: "Advanced text completion and writing assistance",
    icon: "✍️",
    useCase: "Content Creation & Writing",
    features: ["Auto-completion", "Grammar Check", "Style Suggestions"],
    color: "from-purple-500 to-purple-600",
    path: "/ui/completion"
  },
  {
    id: "generate-image",
    name: "Image Generator",
    description: "AI-powered image generation and visual content creation",
    icon: "🎨",
    useCase: "Creative & Visual Design",
    features: ["AI Image Generation", "Style Transfer", "Custom Prompts"],
    color: "from-pink-500 to-pink-600",
    path: "/ui/generate-image"
  },
  {
    id: "generate-speech",
    name: "Speech Generator",
    description: "Text-to-speech conversion with natural voice synthesis",
    icon: "🗣️",
    useCase: "Audio Content & Accessibility",
    features: ["Voice Synthesis", "Multiple Languages", "Audio Export"],
    color: "from-orange-500 to-orange-600",
    path: "/ui/generate-speech"
  },
  {
    id: "multi-modal-chat",
    name: "Multi-Modal Chat",
    description: "Advanced chat supporting text, images, and multimedia",
    icon: "🌟",
    useCase: "Rich Media Conversations",
    features: ["Image Understanding", "File Analysis", "Mixed Media Support"],
    color: "from-indigo-500 to-indigo-600",
    path: "/ui/multi-modal-chat"
  },
  {
    id: "structured-data",
    name: "Data Processor",
    description: "Intelligent data analysis and structured information extraction",
    icon: "📊",
    useCase: "Data Analysis & Processing",
    features: ["Data Parsing", "Pattern Recognition", "Export Options"],
    color: "from-teal-500 to-teal-600",
    path: "/ui/structured-data"
  },
  {
    id: "web-search-tool",
    name: "Web Search Assistant",
    description: "AI-powered web search and information retrieval",
    icon: "🔍",
    useCase: "Research & Information Gathering",
    features: ["Real-time Search", "Source Verification", "Summary Generation"],
    color: "from-red-500 to-red-600",
    path: "/ui/web-search-tool"
  }
];

// Simple SVG icons
const ChevronUpIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="18,15 12,9 6,15"></polyline>
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

export default function ChatbotSelectorWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedBot, setSelectedBot] = useState<ChatbotOption | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

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

  const handleSelectBot = (bot: ChatbotOption) => {
    setSelectedBot(bot);
    setIsOpen(false);
    // Navigate to the selected chatbot
    router.push(bot.path);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50" ref={dropdownRef}>
      {/* Dropdown Menu - Appears above the button */}
      {isOpen && (
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
                  {/* Icon */}
                  <div className={`flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-r ${bot.color} flex items-center justify-center text-white text-lg`}>
                    {bot.icon}
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-medium text-gray-900 dark:text-white truncate">
                        {bot.name}
                      </h4>
                      {selectedBot?.id === bot.id && (
                        <span className="ml-2 text-blue-500">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                          </svg>
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-300 mt-1 line-clamp-2">
                      {bot.description}
                    </p>
                    <div className="flex items-center mt-2">
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-gray-100 dark:bg-gray-600 text-gray-800 dark:text-gray-200">
                        {bot.useCase.split(' & ')[0]}
                      </span>
                    </div>
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
        onClick={toggleDropdown}
        className={`
          relative flex items-center justify-center w-14 h-14 rounded-full shadow-lg transition-all duration-300 
          ${isOpen 
            ? 'bg-blue-600 hover:bg-blue-700 scale-110' 
            : 'bg-blue-500 hover:bg-blue-600 hover:scale-105'
          }
          text-white
        `}
      >
        {isOpen ? (
          <ChevronUpIcon />
        ) : (
          <BotIcon />
        )}
        
        {/* Notification Badge */}
        {selectedBot && (
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
            <span className="text-xs text-white">✓</span>
          </div>
        )}
      </button>

      {/* Pulse animation when closed */}
      {!isOpen && (
        <div className="absolute inset-0 w-14 h-14 rounded-full bg-blue-400 animate-ping opacity-20"></div>
      )}
    </div>
  );
}
