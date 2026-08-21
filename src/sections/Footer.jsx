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
        background: 'linear-gradient(180deg, rgba(200,235,245,0.85) 0%, rgba(195,235,235,0.80) 40%, rgba(190,235,215,0.82) 100%)',
        borderTop: '1px solid rgba(26,51,68,0.08)',
      }}
    >
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        {/* Top Section: Brand */}
        <div className="flex flex-col items-center text-center mb-12 border-b pb-10"
          style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient-aero">
            TripleVisionary
          </h2>
        </div>

        {/* Services & Contact */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12 border-b pb-10"
          style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
          <div>
            <h4 className="font-display text-xs font-bold uppercase tracking-[0.15em] mb-4" style={{ color: '#1A3344' }}>
              Services
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {services.map((service) => (
                <a
                  key={service.name}
                  href={service.href}
                  onClick={(e) => handleLinkClick(e, service.href)}
                  className="text-xs hover:text-[#ffffff] transition-colors font-medium py-1"
                  style={{ color: '#6A8A9A' }}
                >
                  {service.name}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-xs font-bold uppercase tracking-[0.15em] mb-4" style={{ color: '#1A3344' }}>
              Contact
            </h4>
            <span className="text-sm" style={{ color: '#6A8A9A' }}>
              triplevisionary@protonmail.com
            </span>
          </div>
        </div>

        {/* Social Media */}
        <div className="flex flex-col items-center gap-6 mb-12 border-b pb-10"
          style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
          <h4 className="font-display text-xs font-bold uppercase tracking-[0.15em]" style={{ color: '#1A3344' }}>
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
                  background: 'linear-gradient(180deg, rgba(255,255,255,0.06))',
                  border: '1px solid rgba(255,255,255,0.08)',
                  color: '#6A8A9A',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.03)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#ffffff';
                  e.currentTarget.style.boxShadow = '0 4px 16px rgba(255,255,255,0.15), inset 0 1px 0 rgba(255,255,255,0.03)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'rgba(255,255,255,0.75)';
                  e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.03)';
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
        <div className="flex flex-col md:flex-row items-center justify-center gap-2 text-xs" style={{ color: '#4A7080' }}>
          <span>&copy; {new Date().getFullYear()} TripleVisionary. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
