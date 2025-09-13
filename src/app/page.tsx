import CalendlyWidget from "@/components/features/homepage/CalendlyWidget";

import HeroSection from "@/components/features/HeroSection";
import Navbar from "@/components/features/Navbar";

import ProcessSection from "@/components/features/homepage/ProcessSection";
import QuoteSection from "@/components/features/homepage/QuoteSection";
import SCS02 from "@/components/features/homepage/SCS02";
import SCS03 from "@/components/features/homepage/SCS03";
import { Separator } from "@/components/features/Seperator";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import SCS01 from "@/components/features/homepage/SCS01";
import SCS04 from "@/components/features/homepage/SCS04";
import Contactme from "@/components/features/contactme";
import CalmImageSection from "@/components/features/CalmImageSection";
import ChatbotWidget from "../components/chatbotui/chat-widget/page";







export default function Page() {
  return (
    <div className="w-full">



      <Navbar />
      <HeroSection />
      
      {/* Main content container that scrolls OVER the hero */}
      <div className="relative z-10 bg-white">
        {/* Original grid container */}
        <div className="relative grid lg:grid-cols-2 gap-0 min-h-screen overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,_white_0%,_white_40%,_#EFF6FF_60%,_#DBEAFE_100%)]" />

          <div className="flex items-center justify-center p-4 lg:p-8">
            <div className="w-full max-w-4xl lg:-mr-20">
              <ProcessSection />
            </div>
          </div>
          <div
            id="contact-me"
            className="flex items-center justify-center p-4 lg:p-8"
          > 
            <div className="w-full max-w-xl lg:-ml-20">
            <CalmImageSection
  src="/HeaderImage.png"
  alt="Your image description"
  width={1400}
  height={1050}
  priority={true}
  className="my-8"
/>

            </div>
          </div>
        </div>

        {/* SCS Sections */}
        <QuoteSection />
        <div className="py-6" />

        <SCS01 />
        
        <SCS02 />
       
        <SCS03 />
        
        <SCS04 />

        <Separator />


        

        {/* OPTIMIZED CONTACT SECTION */}
        <div className="bg-white py-16 px-4">
          <div className="max-w-7xl mx-auto">
            {/* Centered Title */}
            <div className="text-center mb-12">
              <TypingAnimation
                as="h2"
                className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl"
                startOnView={true}
                delay={200}
                duration={50}
              >
                Book Your Free Consultation
              </TypingAnimation>
            </div>

            {/* Flexible Layout for Contact and Calendly */}
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Calendly Widget Container */}
              <div className="w-full">
                <div className="max-w-xl mx-auto">
                  <CalendlyWidget />
                </div>
              </div>

              {/* Contact Me Container */}
              <div className="w-full">
                <div className="max-w-xl mx-auto">
                  <Contactme />



                  <ChatbotWidget />

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
