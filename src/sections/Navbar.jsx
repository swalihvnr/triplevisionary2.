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
          background: 'rgba(8, 24, 52, 0.45)',
          border: '1px solid rgba(60, 127, 177, 0.4)',
          boxShadow: `
            inset 0 1px 0 rgba(255,255,255,0.18),
            inset 0 -1px 0 rgba(0,0,0,0.25),
            0 4px 20px rgba(0,0,0,0.4)
          `,
          transform: scrolled ? 'scale(0.985)' : 'scale(1)',
          transition: 'all 0.3s ease',
        }}
      >
        {/* Aero glossy highlight strip across the top */}
        <div
          className="absolute top-0 left-0 right-0 pointer-events-none rounded-t-xl z-10"
          style={{
            height: '50%',
            background: 'linear-gradient(180deg, rgba(255,255,255,0.22) 0%, rgba(200,225,255,0.1) 30%, transparent 100%)',
          }}
        />

        <div className="flex items-center relative z-20" style={{ height: '48px' }}>
          {/* Logo */}
          <a
            href="/show"
            onClick={(e) => handleNavClick(e, "/home")}
            className="flex-shrink-0 h-full flex items-center justify-center relative overflow-hidden"
            style={{
              width: 60,
              borderRight: '1px solid rgba(60, 127, 177, 0.3)',
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
                    borderRight: '1px solid rgba(60, 127, 177, 0.2)',
                  }}
                >
                  {active && (
                    <div
                      className="absolute inset-0 z-0"
                      style={{
                        background: 'linear-gradient(180deg, #3cd6fd 0%, #22cffd 20%, #3c7fb1 80%, #2a5f8a 100%)',
                        boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.3), inset 0 -1px 0 rgba(0,0,0,0.2)',
                      }}
                    />
                  )}
                  <span
                    className="relative z-10"
                    style={{
                      color: active ? '#ffffff' : 'rgba(170,200,240,0.7)',
                      textShadow: active ? '0 1px 2px rgba(0,0,0,0.4)' : 'none',
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
              style={{ color: 'rgba(170,200,240,0.8)' }}
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
              background: 'rgba(8, 24, 52, 0.8)',
              borderColor: 'rgba(60, 127, 177, 0.3)',
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
                    borderColor: 'rgba(60, 127, 177, 0.15)',
                    color: active ? '#ffffff' : 'rgba(170,200,240,0.7)',
                    background: active
                      ? 'linear-gradient(90deg, #3cd6fd, #22cffd, #3c7fb1)'
                      : 'transparent',
                    textShadow: active ? '0 1px 2px rgba(0,0,0,0.4)' : 'none',
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
