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
          background: `linear-gradient(180deg,
            rgba(120,170,230,0.15) 0%,
            rgba(60,110,180,0.12) 2%,
            rgba(15,45,90,0.65) 3%,
            rgba(10,35,75,0.72) 50%,
            rgba(6,28,60,0.78) 100%
          )`,
          backdropFilter: 'blur(28px) saturate(1.8)',
          WebkitBackdropFilter: 'blur(28px) saturate(1.8)',
          border: '1px solid rgba(120,180,240,0.3)',
          boxShadow: scrolled
            ? '0 0 1px rgba(255,255,255,0.12) inset, 0 1px 0 rgba(255,255,255,0.18) inset, 0 -1px 0 rgba(0,0,0,0.25) inset, 0 12px 40px rgba(0,0,0,0.5), 0 2px 8px rgba(0,0,0,0.3)'
            : '0 0 1px rgba(255,255,255,0.12) inset, 0 1px 0 rgba(255,255,255,0.18) inset, 0 -1px 0 rgba(0,0,0,0.25) inset, 0 4px 20px rgba(0,0,0,0.4)',
          transform: scrolled ? 'scale(0.985)' : 'scale(1)',
          transition: 'all 0.3s ease',
        }}
      >
        {/* THE Aero glossy highlight — thick white gradient across the top 50% */}
        <div
          className="absolute top-0 left-0 right-0 pointer-events-none rounded-t-xl z-10"
          style={{
            height: '50%',
            background: `linear-gradient(180deg,
              rgba(255,255,255,0.22) 0%,
              rgba(200,225,255,0.12) 20%,
              rgba(150,200,240,0.06) 45%,
              transparent 100%
            )`,
          }}
        />

        {/* Bottom dark edge */}
        <div
          className="absolute bottom-0 left-0 right-0 h-px pointer-events-none z-10"
          style={{ background: 'rgba(0,0,0,0.4)' }}
        />

        <div className="flex items-center relative z-20" style={{ height: '48px' }}>
          {/* Logo */}
          <a
            href="/show"
            onClick={(e) => handleNavClick(e, "/home")}
            className="flex-shrink-0 h-full flex items-center justify-center relative overflow-hidden"
            style={{
              width: 60,
              borderRight: '1px solid rgba(120,180,240,0.25)',
              background: 'linear-gradient(180deg, rgba(100,170,240,0.1) 0%, rgba(30,80,150,0.08) 50%, rgba(10,40,80,0.1) 100%)',
            }}
          >
            {/* Button gloss */}
            <div className="absolute top-0 left-0 right-0 h-1/2 pointer-events-none"
              style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.12), transparent)' }} />
            <img
              src={Logo}
              alt="Logo"
              className="w-8 h-10 object-contain relative z-10"
              style={{ filter: 'drop-shadow(0 1px 4px rgba(40,140,220,0.4))' }}
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
                    borderRight: '1px solid rgba(120,180,240,0.15)',
                    textShadow: active ? '0 1px 3px rgba(0,0,0,0.5)' : 'none',
                  }}
                >
                  {active && (
                    <div
                      className="absolute inset-0 z-0"
                      style={{
                        background: `linear-gradient(180deg,
                          rgba(100,200,250,0.2) 0%,
                          rgba(50,150,230,0.3) 30%,
                          rgba(30,120,200,0.25) 60%,
                          rgba(20,80,160,0.15) 100%
                        )`,
                        boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.15), inset 0 -1px 0 rgba(0,0,0,0.2)',
                      }}
                    />
                  )}
                  {active && (
                    <div className="absolute bottom-0 left-1/4 right-1/4 h-[2px] z-20 rounded-t-full"
                      style={{
                        background: 'linear-gradient(90deg, transparent, rgba(100,200,255,0.8), transparent)',
                        boxShadow: '0 0 8px rgba(80,180,250,0.6)',
                      }}
                    />
                  )}
                  <span className="relative z-10" style={{ color: active ? '#ffffff' : 'rgba(170,200,240,0.7)' }}>
                    {item.name}
                  </span>
                </a>
              );
            })}
          </div>

          {/* Mobile: Hamburger + Scrollable */}
          <div className="md:hidden flex-1 flex items-center h-full">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="ml-auto mr-3 p-1.5 rounded-md transition-colors cursor-pointer"
              style={{
                color: 'rgba(170,200,240,0.8)',
                background: mobileOpen ? 'rgba(100,180,240,0.15)' : 'transparent',
              }}
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
              background: 'linear-gradient(180deg, rgba(15,45,90,0.95), rgba(8,30,65,0.98))',
              borderColor: 'rgba(120,180,240,0.2)',
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
                    borderColor: 'rgba(120,180,240,0.1)',
                    color: active ? '#ffffff' : 'rgba(170,200,240,0.7)',
                    background: active ? 'rgba(50,140,220,0.15)' : 'transparent',
                    textShadow: active ? '0 1px 2px rgba(0,0,0,0.4)' : 'none',
                  }}
                >
                  {active && (
                    <span className="w-1 h-4 rounded-full mr-3" style={{ background: '#3cb8f5', boxShadow: '0 0 6px rgba(60,184,245,0.5)' }} />
                  )}
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
