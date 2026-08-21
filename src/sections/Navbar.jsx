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
        className="w-full max-w-5xl rounded-lg overflow-hidden relative"
        style={{
          background: '#161618',
          border: '1px solid #38383a',
          transform: scrolled ? 'scale(0.985)' : 'scale(1)',
          transition: 'all 0.3s ease',
        }}
      >
        <div className="flex items-center relative z-20" style={{ height: '48px' }}>
          <a
            href="/show"
            onClick={(e) => handleNavClick(e, "/show")}
            className="flex-shrink-0 h-full flex items-center justify-center relative overflow-hidden"
            style={{
              width: 60,
              borderRight: '1px solid #2c2c2e',
            }}
          >
            <img
              src={Logo}
              alt="Logo"
              className="w-8 h-10 object-contain relative z-10"
            />
          </a>

          <div className="hidden md:flex flex-1 h-full">
            {navItems.map((item) => {
              const active = currentPath === item.path;
              return (
                <a
                  key={item.name}
                  href={item.path}
                  onClick={(e) => handleNavClick(e, item.path)}
                  className="relative flex-1 h-full flex items-center justify-center text-[12px] font-bold tracking-wider transition-all duration-150"
                  style={{
                    borderRight: '1px solid #2c2c2e',
                  }}
                >
                  {active && (
                    <div className="absolute inset-0 z-0">
                      <div
                        className="absolute inset-0"
                        style={{ background: '#1c1c1f' }}
                      />
                      <div
                        className="absolute left-[5%] right-[5%] pointer-events-none"
                        style={{
                          bottom: 0,
                          height: 2,
                          background: '#007aff',
                        }}
                      />
                    </div>
                  )}
                  <span
                    className="relative z-10"
                    style={{
                      color: active ? '#ffffff' : '#a1a1a6',
                    }}
                  >
                    {item.name}
                  </span>
                </a>
              );
            })}
          </div>

          <div className="md:hidden flex-1 flex items-center h-full">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="ml-auto mr-3 p-1.5 rounded-md transition-colors cursor-pointer"
              style={{ color: '#a1a1a6' }}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden relative z-20 border-t"
            style={{
              background: '#161618',
              borderColor: '#38383a',
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
                      borderColor: '#2c2c2e',
                      color: active ? '#ffffff' : '#a1a1a6',
                      background: active ? '#1c1c1f' : 'transparent',
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
