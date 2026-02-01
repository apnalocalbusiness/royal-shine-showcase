import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "919876543210"; // Replace with actual number
  const message = encodeURIComponent("Hello! I'm interested in your jewellery collection.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 group"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle size={28} className="text-white" fill="white" />
      
      {/* Tooltip */}
      <span className="absolute right-full mr-3 bg-foreground text-background text-sm px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
        Chat with us
      </span>
      
      {/* Pulse animation ring */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25"></span>
    </a>
  );
};

export default WhatsAppButton;
