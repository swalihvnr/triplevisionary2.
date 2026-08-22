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

          <div
            className="flex flex-1 h-full overflow-x-auto scrollbar-hide"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {navItems.map((item) => {
              const active = currentPath === item.path;
              return (
                <a
                  key={item.name}
                  href={item.path}
                  onClick={(e) => handleNavClick(e, item.path)}
                  className="relative h-full flex items-center justify-center text-[11px] sm:text-[12px] font-bold tracking-wider transition-all duration-150 px-3 sm:px-4 flex-1 md:flex-1 flex-shrink-0 md:flex-shrink"
                  style={{
                    borderRight: '1px solid #2c2c2e',
                    scrollSnapAlign: 'start',
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
                    className="relative z-10 whitespace-nowrap"
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
        </div>
      </motion.nav>
    </header>
  );
}
