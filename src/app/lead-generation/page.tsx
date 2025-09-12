
import Navbar from "@/components/features/Navbar";

import LeadGen from "@/components/features/servicepage/LeadGen";

import TechStackSection from "@/components/features/servicepage/TechStackSection";

import ChatbotWidget from "../../components/chatbotui/chat-widget/page";

export default function Page() {
  return (
   
      <>
      
      <Navbar />
      
      <LeadGen />

      <TechStackSection />

      <ChatbotWidget />
      
      </>
     
 
  );
}