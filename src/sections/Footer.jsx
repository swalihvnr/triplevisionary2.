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
        background: '#161618',
        borderTop: '1px solid #38383a',
      }}
    >
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="flex flex-col items-center text-center mb-12 border-b pb-10"
          style={{ borderColor: '#2c2c2e' }}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient-aero">
            TripleVisionary
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12 border-b pb-10"
          style={{ borderColor: '#2c2c2e' }}>
          <div>
            <h4 className="font-display text-xs font-bold uppercase tracking-[0.15em] mb-4" style={{ color: '#ffffff' }}>
              Services
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {services.map((service) => (
                <a
                  key={service.name}
                  href={service.href}
                  onClick={(e) => handleLinkClick(e, service.href)}
                  className="text-xs hover:text-white transition-colors py-1"
                  style={{ color: '#a1a1a6' }}
                >
                  {service.name}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-xs font-bold uppercase tracking-[0.15em] mb-4" style={{ color: '#ffffff' }}>
              Contact
            </h4>
            <span className="text-sm" style={{ color: '#a1a1a6' }}>
              triplevisionary@protonmail.com
            </span>
          </div>
        </div>

        <div className="flex flex-col items-center gap-6 mb-12 border-b pb-10"
          style={{ borderColor: '#2c2c2e' }}>
          <h4 className="font-display text-xs font-bold uppercase tracking-[0.15em]" style={{ color: '#ffffff' }}>
            Follow Us
          </h4>
          <div className="flex items-center gap-8">
            {[
              { icon: FaWhatsapp, href: "https://wa.me/+91 9388121465", label: "WhatsApp" },
              { icon: FaInstagram, href: "https://www.instagram.com/triplevisionary?igsh=MWF1c21zaWdnd2Vpbg==", label: "Instagram" },
              { icon: FaYoutube, href: "https://www.youtube.com/@triplevisionary", label: "YouTube" },
              { href: "https://upscrolled.com/@triplevisionary", label: "Upscrolled" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                className="w-11 h-11 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
                style={{
                  background: '#1c1c1f',
                  border: '1px solid #38383a',
                  color: '#a1a1a6',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#ffffff';
                  e.currentTarget.style.borderColor = '#48484a';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#a1a1a6';
                  e.currentTarget.style.borderColor = '#38383a';
                }}
                aria-label={label}
                target="_blank"
              >
                {Icon ? <Icon size={20} /> : <img src="/assets/upscrolled.svg" alt={label} className="w-7 h-7 object-contain opacity-60" />}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-2 text-xs" style={{ color: '#68686f' }}>
          <span>&copy; {new Date().getFullYear()} TripleVisionary. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
