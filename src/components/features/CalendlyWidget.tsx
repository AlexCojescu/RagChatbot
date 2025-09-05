"use client";

import React, { useEffect } from "react";
import { InlineWidget } from "react-calendly";

const CalendlyWidget = () => {
  useEffect(() => {
    // Ensure Calendly script is loaded
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="calendly-container h-[700px] w-full">
      <InlineWidget 
        url="https://calendly.com/alexcojescu/automation-strategy"
        styles={{
          height: '100%',
          width: '100%',
          minWidth: '320px'
        }}
        pageSettings={{
          backgroundColor: 'ffffff',
          hideEventTypeDetails: false,
          hideLandingPageDetails: false,
          primaryColor: '00a2ff',
          textColor: '4d5055'
        }}
      />
    </div>
  );
};

export default CalendlyWidget;