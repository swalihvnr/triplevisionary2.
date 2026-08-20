import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Logo from "../assets/Logo/Logo.png";

const navItems = [
  { name: "ShowCase", path: "/show" },
  { name: "Assets", path: "/assets" },
  { name: "Addon", path: "/addon" },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar({ currentPath, onPageChange }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, path) => {
    e.preventDefault();
    onPageChange(path);
  };

  return (
    <header className="fixed top-4 left-0 w-full z-50 px-3 md:px-6 flex justify-center">
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-6xl h-12 rounded-xl overflow-hidden relative"
        style={{
          background: 'linear-gradient(180deg, #063875 0%, #2d2f3c 100%)',
          backdropFilter: 'blur(20px) saturate(1.4)',
          WebkitBackdropFilter: 'blur(20px) saturate(1.4)',
          border: '1px solid rgba(42,175,242,0.25)',
          boxShadow: scrolled
            ? '0 10px 40px rgba(0,0,0,0.5), 0 2px 8px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05)'
            : '0 4px 16px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05)',
          transform: scrolled ? 'scale(0.98)' : 'scale(1)',
          transition: 'all 0.3s ease',
        }}
      >
        {/* Aero top highlight strip */}
        <div className="absolute top-0 left-0 right-0 h-[45%] pointer-events-none rounded-t-xl z-10"
          style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 40%, transparent 100%)' }} />

        <div className="flex items-center h-12 relative z-20">
          {/* Logo */}
          <a
            href="/show"
            onClick={(e) => handleNavClick(e, "/home")}
            className="flex-shrink-0 w-16 h-full flex items-center justify-center border-r"
            style={{
              borderColor: 'rgba(42,175,242,0.25)',
              background: 'linear-gradient(180deg, rgba(42,175,242,0.15), rgba(255,255,255,0.03))'
            }}
          >
            <img
              src={Logo}
              alt="Logo"
              className="w-7 h-9 object-contain"
              style={{ filter: 'drop-shadow(0 1px 3px rgba(42,175,242,0.3))' }}
            />
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex flex-1">
            {navItems.map((item) => {
              const active = currentPath === item.path;
              return (
                <a
                  key={item.name}
                  href={item.path}
                  onClick={(e) => handleNavClick(e, item.path)}
                  className={`relative flex-1 h-12 flex items-center justify-center text-[13px] font-semibold tracking-wide border-r last:border-r-0 transition-all duration-300 ${
                    active
                      ? "text-white"
                      : "hover:text-white"
                  }`}
                  style={{
                    borderColor: 'rgba(42,175,242,0.25)',
                    color: active ? 'white' : '#b0d4f1',
                    ...(active ? {
                      background: 'linear-gradient(180deg, #2aaff2 0%, #2aaff2 50%, #0352ae 100%)',
                      boxShadow: 'inset 0 -2px 0 rgba(0,0,0,0.2), 0 2px 6px rgba(42,175,242,0.25)',
                      textShadow: '0 1px 1px rgba(0,0,0,0.3)',
                    } : {}),
                  }}
                >
                  {item.name}
                </a>
              );
            })}
          </div>

          {/* Mobile Nav */}
          <div className="md:hidden flex-1 h-12 overflow-hidden">
            <div className="flex overflow-x-auto pb-5 overflow-y-hidden scrollbar-hide touch-pan-x whitespace-nowrap w-full">
              {navItems.map((item) => {
                const active = currentPath === item.path;
                return (
                  <a
                    key={item.name}
                    href={item.path}
                    onClick={(e) => handleNavClick(e, item.path)}
                    className="relative flex-shrink-0 px-5 h-12 flex items-center justify-center text-sm font-semibold border-r"
                    style={{
                      borderColor: 'rgba(42,175,242,0.25)',
                      color: active ? 'white' : '#b0d4f1',
                      ...(active ? {
                        background: 'linear-gradient(180deg, #2aaff2 0%, #2aaff2 50%, #0352ae 100%)',
                      } : {}),
                    }}
                  >
                    {item.name}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </motion.nav>
    </header>
  );
}
