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
    <footer
      className="relative pt-16 pb-12 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #052a50 0%, #063875 50%, #052a50 100%)',
        borderTop: '1px solid rgba(42,175,242,0.25)',
      }}
    >
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        {/* Top Section: Brand */}
        <div className="flex flex-col items-center text-center mb-12 border-b pb-10"
          style={{ borderColor: 'rgba(42,175,242,0.25)' }}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient-aero">
            TripleVisionary
          </h2>
        </div>

        {/* Services & Contact */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12 border-b pb-10"
          style={{ borderColor: 'rgba(42,175,242,0.25)' }}>
          <div>
            <h4 className="font-display text-xs font-bold uppercase tracking-[0.15em] mb-4" style={{ color: '#2aaff2' }}>
              Services
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {services.map((service) => (
                <a
                  key={service.name}
                  href={service.href}
                  onClick={(e) => handleLinkClick(e, service.href)}
                  className="text-xs hover:text-[#31b1ee] transition-colors font-medium py-1"
                  style={{ color: '#b0d4f1' }}
                >
                  {service.name}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-xs font-bold uppercase tracking-[0.15em] mb-4" style={{ color: '#2aaff2' }}>
              Contact
            </h4>
            <span className="text-sm" style={{ color: '#b0d4f1' }}>
              triplevisionary@protonmail.com
            </span>
          </div>
        </div>

        {/* Social Media */}
        <div className="flex flex-col items-center gap-6 mb-12 border-b pb-10"
          style={{ borderColor: 'rgba(42,175,242,0.25)' }}>
          <h4 className="font-display text-xs font-bold uppercase tracking-[0.15em]" style={{ color: '#2aaff2' }}>
            Follow Us
          </h4>
          <div className="flex items-center gap-8">
            {[
              { icon: FaWhatsapp, href: "https://wa.me/+91 9388121465", label: "WhatsApp" },
              { icon: FaInstagram, href: "https://www.instagram.com/triplevisionary?igsh=MWF1c21zaWdnd2Vpbg==", label: "Instagram" },
              { icon: FaYoutube, href: "https://www.youtube.com/@triplevisionary", label: "YouTube" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{
                  background: 'linear-gradient(180deg, rgba(13,42,74,0.7), rgba(6,56,117,0.6))',
                  border: '1px solid rgba(42,175,242,0.25)',
                  color: '#b0d4f1',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#2aaff2';
                  e.currentTarget.style.boxShadow = '0 4px 16px rgba(42,175,242,0.2), inset 0 1px 0 rgba(255,255,255,0.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#b0d4f1';
                  e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05)';
                }}
                aria-label={label}
                target="_blank"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-2 text-xs" style={{ color: '#b0d4f1' }}>
          <span>&copy; {new Date().getFullYear()} TripleVisionary. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
