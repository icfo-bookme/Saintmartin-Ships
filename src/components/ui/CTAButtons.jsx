"use client";

import PrimaryButton from "@/components/ui/Button";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

const CTAButtons = () => {
  const handleCall = () => {
    window.location.href = "tel:+8801841666644";
  };

  const handleWhatsApp = () => {
    const message = "Hello, I'm interested in booking a package on MV The Wave.";
    const url = `https://wa.me/8801841666644?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="flex flex-row items-center justify-center gap-4 mt-5 mb-10">
      <a
       href="tel:01841999922"
        className="flex items-center text-white px-4 py-2 rounded-lg transition-colors shadow-sm hover:shadow-md"
        style={{
          background: "linear-gradient(90deg, #313881, #0678B4)",
        }}
      >
        <FaPhoneAlt className="mr-2" />
        Call Now
      </a>

      <PrimaryButton
        onClick={() => {
          if (typeof window !== "undefined") {
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
              event: "whatsapp_click",
              click_location: "cta_whatsapp_button",
              phone: "+8801841666644",
            });
          }
          handleWhatsApp();
        }}
        style={{
          background: "linear-gradient(90deg, #313881, #0678B4)",
        }}
        bgColor="bg-green-800"
        hoverColor="hover:bg-green-600"
        icon={FaWhatsapp}
      >
        Book Now
      </PrimaryButton>
    </div>
  );
};

export default CTAButtons;
