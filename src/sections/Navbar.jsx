import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
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
  const [mobileOpen, setMobileOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, path) => {
    e.preventDefault();
    setMobileOpen(false);
    onPageChange(path);
  };

  return (
    <header className="fixed top-3 left-0 w-full z-50 px-2 md:px-4 flex justify-center">
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-5xl rounded-xl overflow-hidden relative"
        style={{
          background: 'linear-gradient(180deg, rgba(200,235,245,0.92) 0%, rgba(195,235,235,0.90) 40%, rgba(190,235,215,0.88) 100%)',
          border: '1px solid rgba(26,51,68,0.10)',
          boxShadow: `
            inset 0 1px 0 rgba(255,255,255,0.40),
            0 0 30px rgba(18,153,202,0.10),
            0 4px 24px rgba(26,51,68,0.08),
            0 8px 36px rgba(0,0,0,0.06)
          `,
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          transform: scrolled ? 'scale(0.985)' : 'scale(1)',
          transition: 'all 0.3s ease',
        }}
      >
        {/* Glossy highlight strip across the top */}
        <div
          className="absolute top-0 left-0 right-0 pointer-events-none rounded-t-xl z-10"
          style={{
            height: '50%',
            background: 'linear-gradient(180deg, rgba(255,255,255,0.40) 0%, rgba(255,255,255,0.10) 40%, transparent 100%)',
          }}
        />

        <div className="flex items-center relative z-20" style={{ height: '48px' }}>
          {/* Logo */}
          <a
            href="/show"
            onClick={(e) => handleNavClick(e, "/show")}
            className="flex-shrink-0 h-full flex items-center justify-center relative overflow-hidden"
            style={{
              width: 60,
              borderRight: '1px solid rgba(26,51,68,0.08)',
            }}
          >
            <img
              src={Logo}
              alt="Logo"
              className="w-8 h-10 object-contain relative z-10"
            />
          </a>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex flex-1 h-full">
            {navItems.map((item) => {
              const active = currentPath === item.path;
              return (
                <a
                  key={item.name}
                  href={item.path}
                  onClick={(e) => handleNavClick(e, item.path)}
                  className="relative flex-1 h-full flex items-center justify-center text-[12px] font-bold tracking-wider transition-all duration-200"
                  style={{
                    borderRight: '1px solid rgba(26,51,68,0.05)',
                  }}
                >
                  {active && (
                    <div
                      className="absolute inset-0 z-0"
                      style={{
                        background: 'linear-gradient(180deg, #1299CA 0%, #1088B8 50%, #0E7AAA 100%)',
                        boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.30), inset 0 -1px 0 rgba(0,0,0,0.15)',
                      }}
                    />
                  )}
                  <span
                    className="relative z-10"
                    style={{
                      color: active ? '#ffffff' : '#4A7080',
                      textShadow: active ? '0 1px 2px rgba(0,0,0,0.2)' : 'none',
                    }}
                  >
                    {item.name}
                  </span>
                </a>
              );
            })}
          </div>

          {/* Mobile */}
          <div className="md:hidden flex-1 flex items-center h-full">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="ml-auto mr-3 p-1.5 rounded-md transition-colors cursor-pointer"
              style={{ color: '#4A7080' }}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden relative z-20 border-t"
            style={{
              background: 'linear-gradient(180deg, rgba(200,235,245,0.95) 0%, rgba(195,235,235,0.93) 100%)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              borderColor: 'rgba(26,51,68,0.08)',
            }}
          >
            {navItems.map((item) => {
              const active = currentPath === item.path;
              return (
                <a
                  key={item.name}
                  href={item.path}
                  onClick={(e) => handleNavClick(e, item.path)}
                  className="flex items-center px-5 py-3 text-[13px] font-bold tracking-wider border-b transition-all"
                  style={{
                    borderColor: 'rgba(26,51,68,0.06)',
                    color: active ? '#ffffff' : '#4A7080',
                    background: active
                      ? 'linear-gradient(180deg, #1299CA, #1088B8)'
                      : 'transparent',
                    textShadow: active ? '0 1px 2px rgba(0,0,0,0.2)' : 'none',
                  }}
                >
                  {item.name}
                </a>
              );
            })}
          </motion.div>
        )}
      </motion.nav>
    </header>
  );
}
