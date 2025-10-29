import ContactForm from "@/components/features/contactme";
import Navbar from "@/components/features/Navbar";
import CalendlyWidget from "@/components/features/homepage/CalendlyWidget";
import ContactHeader from "@/components/features/ContactHeader";
import ContactFooter from "@/components/features/ContactFooter";

import ChatbotWidget from "../../components/chatbotui/chat-widget/page";
import ContactFormMain from "@/components/features/contactmemain";

export default function Page() {
  return (
    <div className="w-full min-h-screen bg-[linear-gradient(90deg,_white_0%,_white_40%,_#EFF6FF_60%,_#DBEAFE_100%)]">
      <Navbar />

      <ContactHeader />

      {/* Main content container */}
      <div className="relative grid lg:grid-cols-2 gap-0">
        {/* Grid Content */}
        <div className="flex items-center justify-center p-4 lg:p-8">
          <div className="w-full max-w-4xl lg:-mr-20">
          <ContactFormMain />
          </div>
        </div>
        <div
          id="contact-me"
          className="flex items-center justify-center p-4 lg:p-8"
        >
          <div className="w-full max-w-xl lg:-ml-20">
            <CalendlyWidget />
          </div>
        </div>
        
      </div>
      <ContactFooter />

      <ChatbotWidget />

     
    </div>
  );
}