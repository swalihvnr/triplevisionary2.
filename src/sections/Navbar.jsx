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
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
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
        className={`
          w-full max-w-6xl h-12
          rounded-2xl
          border border-white/60
          bg-gradient-to-b from-white/70 via-white/50 to-white/40
          backdrop-blur-xl
          shadow-[0_4px_24px_rgba(93,200,232,0.12),0_1px_4px_rgba(0,0,0,0.04)]
          relative overflow-hidden
          ${scrolled
            ? "shadow-[0_8px_32px_rgba(93,200,232,0.18)] scale-[0.98]"
            : "shadow-[0_4px_24px_rgba(93,200,232,0.12)]"
          }
        `}
      >
        {/* Glossy highlight strip */}
        <div className="absolute top-0 left-0 right-0 h-[45%] bg-gradient-to-b from-white/60 to-transparent pointer-events-none rounded-t-2xl z-10" />

        <div className="flex items-center h-12 relative z-20">
          {/* Logo */}
          <a
            href="/show"
            onClick={(e) => handleNavClick(e, "/home")}
            className="flex-shrink-0 w-16 h-full flex items-center justify-center border-r border-white/40 bg-gradient-to-b from-sky-100/60 to-white/30"
          >
            <img
              src={Logo}
              alt="Logo"
              className="w-7 h-9 object-contain"
              style={{
                filter: 'drop-shadow(0 1px 3px rgba(93,200,232,0.4))',
              }}
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
                  className={`
                    relative flex-1 h-12 flex items-center justify-center
                    text-[13px] font-semibold tracking-wide
                    border-r border-white/30 last:border-r-0
                    transition-all duration-300
                    ${active
                      ? "bg-gradient-to-b from-[#5DC8E8]/30 to-[#5DC8E8]/15 text-[#2B6E8A] shadow-[inset_0_-2px_0_#5DC8E8]"
                      : "text-[#5A7089] hover:bg-white/40 hover:text-[#2B3A4E]"
                    }
                  `}
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
                    className={`
                      relative flex-shrink-0 px-5 h-12
                      flex items-center justify-center
                      text-sm font-semibold border-r border-white/30
                      ${active
                        ? "bg-gradient-to-b from-[#5DC8E8]/30 to-[#5DC8E8]/15 text-[#2B6E8A]"
                        : "text-[#5A7089] bg-white/20"
                      }
                    `}
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
