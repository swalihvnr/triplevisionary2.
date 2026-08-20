import React from "react";
import { FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  const handleLinkClick = (e, href) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "auto" });
      }
    }
  };

  const services = [
    { name: "Video Editing", href: "#services" },
    { name: "Motion Graphics", href: "#services" },
    { name: "3D Animation", href: "#services" },
    { name: "VFX Production", href: "#services" },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-white/50 via-sky-50/60 to-green-50/40 border-t border-white/40 pt-16 pb-12 overflow-hidden backdrop-blur-sm">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        {/* Top Section: Brand */}
        <div className="flex flex-col items-center text-center mb-12 border-b border-sky-200/30 pb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient-aero mb-4">
            TripleVisionary
          </h2>
        </div>

        {/* Services & Contact */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12 border-b border-sky-200/30 pb-10">
          <div>
            <h4 className="font-display text-xs font-bold uppercase tracking-[0.15em] text-[#5DC8E8] mb-4">
              Services
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {services.map((service) => (
                <a
                  key={service.name}
                  href={service.href}
                  onClick={(e) => handleLinkClick(e, service.href)}
                  className="text-xs text-[#5A7089] hover:text-[#2B3A4E] transition-colors font-medium py-1"
                >
                  {service.name}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-xs font-bold uppercase tracking-[0.15em] text-[#5DC8E8] mb-4">
              Contact
            </h4>
            <span className="text-sm text-[#5A7089]">
              triplevisionary@protonmail.com
            </span>
          </div>
        </div>

        {/* Social Media */}
        <div className="flex flex-col items-center gap-6 mb-12 border-b border-sky-200/30 pb-10">
          <h4 className="font-display text-xs font-bold uppercase tracking-[0.15em] text-[#5DC8E8]">
            Follow Us
          </h4>
          <div className="flex items-center gap-8">
            <a
              href="https://wa.me/+91 9388121465"
              className="w-11 h-11 rounded-full bg-white/60 border border-white/80 flex items-center justify-center text-[#5A7089] hover:text-[#5DC8E8] hover:bg-white hover:shadow-[0_4px_16px_rgba(93,200,232,0.25)] transition-all duration-300 hover:scale-110"
              aria-label="WhatsApp"
              target="_blank"
            >
              <FaWhatsapp size={20} />
            </a>
            <a
              href="https://www.instagram.com/triplevisionary?igsh=MWF1c21zaWdnd2Vpbg=="
              className="w-11 h-11 rounded-full bg-white/60 border border-white/80 flex items-center justify-center text-[#5A7089] hover:text-[#5DC8E8] hover:bg-white hover:shadow-[0_4px_16px_rgba(93,200,232,0.25)] transition-all duration-300 hover:scale-110"
              aria-label="Instagram"
              target="_blank"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://www.youtube.com/@triplevisionary"
              className="w-11 h-11 rounded-full bg-white/60 border border-white/80 flex items-center justify-center text-[#5A7089] hover:text-[#5DC8E8] hover:bg-white hover:shadow-[0_4px_16px_rgba(93,200,232,0.25)] transition-all duration-300 hover:scale-110"
              aria-label="YouTube"
              target="_blank"
            >
              <FaYoutube size={20} />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-2 text-xs text-[#5A7089]">
          <span>&copy; {new Date().getFullYear()} TripleVisionary. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
