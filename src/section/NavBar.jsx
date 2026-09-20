import { useState, useEffect } from "react";
import imgMenu from "../assets/menu.svg";
import imgClose from "../assets/close.svg";
import { motion, AnimatePresence } from "motion/react";
import { ThemeToggle } from "../components/ThemeToggle";

const navItems = [
  { href: "#home", label: "Home", id: "home" },
  { href: "#about", label: "About", id: "about" },
  { href: "#career", label: "Journey", id: "career" },
  { href: "#whatido", label: "What I Do", id: "whatido" },
  { href: "#techstack", label: "Tech Stack", id: "techstack" },
  { href: "#work", label: "Projects", id: "work" },
];

function NavLink({ item, isActive, onClick }) {
  return (
    <motion.li
      className="relative"
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.95 }}
    >
      <a
        href={item.href}
        onClick={(e) => {
          e.preventDefault();
          onClick(item.href);
        }}
        className={`relative px-3.5 py-1.5 text-xs lg:text-sm font-medium transition-colors duration-300 rounded-full flex items-center z-10 ${
          isActive ? "text-white font-semibold" : "text-neutral-400 hover:text-neutral-100"
        }`}
      >
        {/* 3D Floating Active Pill Indicator */}
        {isActive && (
          <motion.div
            layoutId="active-nav-pill"
            transition={{ type: "spring", stiffness: 380, damping: 30 }}
            className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-indigo-500/25 to-purple-500/20 border border-cyan-400/40 rounded-full shadow-[0_0_15px_rgba(56,189,248,0.3)] -z-10"
          />
        )}
        <span className="relative z-10">{item.label}</span>
      </a>
    </motion.li>
  );
}

const NavBar = ({ onOpenContact }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ["home", "about", "career", "whatido", "techstack", "work"];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 250 && rect.bottom >= 250) {
            setActiveSection(`#${sectionId}`);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setActiveSection(href);
    setIsOpen(false);
    const id = href.replace("#", "");
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleTalkClick = (e) => {
    e.preventDefault();
    setIsOpen(false);
    if (onOpenContact) {
      onOpenContact();
    } else {
      handleNavClick("#about");
    }
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2 sm:py-2.5" : "py-3 sm:py-4"
      }`}
    >
      <div className="mx-auto c-space max-w-7xl">
        <div className="relative flex items-center justify-between px-4 sm:px-5 py-2.5 rounded-2xl backdrop-blur-2xl bg-[#030412]/80 border border-white/10 shadow-[0_15px_35px_rgba(0,0,0,0.6),0_0_20px_rgba(56,189,248,0.08)]">
          {/* Top Subtle Light Reflection Line */}
          <div className="absolute inset-x-6 top-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent pointer-events-none" />

          {/* 3D Brand Logo */}
          <motion.a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#home");
            }}
            whileHover={{ scale: 1.05, rotateY: 8 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 sm:gap-2.5 group cursor-pointer"
            style={{ perspective: 800 }}
          >
            {/* Holographic Glowing Badge */}
            <div className="relative flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-gradient-to-br from-cyan-500/25 to-purple-600/25 border border-cyan-400/50 shadow-[0_0_12px_rgba(56,189,248,0.35)] group-hover:border-cyan-300 transition-colors">
              <span className="font-extrabold text-[11px] sm:text-xs text-cyan-300 tracking-wider">K</span>
              <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#38bdf8] animate-pulse" />
            </div>

            <span className="font-bold text-sm sm:text-base lg:text-lg tracking-wide bg-gradient-to-r from-white via-neutral-200 to-neutral-400 bg-clip-text text-transparent group-hover:from-cyan-300 group-hover:to-purple-400 transition-all duration-300">
              Kaustav Mani Deka
            </span>
          </motion.a>

          {/* Desktop 3D Navigation Dock */}
          <nav className="hidden md:flex items-center gap-1 bg-white/[0.03] p-1 rounded-full border border-white/[0.08]">
            <ul className="flex items-center gap-0.5">
              {navItems.map((item) => (
                <NavLink
                  key={item.id}
                  item={item}
                  isActive={activeSection === item.href}
                  onClick={handleNavClick}
                />
              ))}
            </ul>
          </nav>

          {/* Desktop Controls: Theme Toggle & 3D CTA "Let's Talk" Button */}
          <div className="hidden sm:flex items-center gap-2.5">
            <ThemeToggle />

            <motion.button
              onClick={handleTalkClick}
              whileHover={{ scale: 1.05, y: -1 }}
              whileTap={{ scale: 0.95 }}
              className="relative group overflow-hidden px-4 py-2 rounded-xl text-xs uppercase tracking-widest font-bold text-white bg-gradient-to-r from-cyan-500/20 via-indigo-500/25 to-purple-500/20 hover:from-cyan-500/30 hover:to-purple-500/30 border border-cyan-400/50 hover:border-cyan-300 shadow-[0_0_15px_rgba(56,189,248,0.25)] hover:shadow-[0_0_25px_rgba(56,189,248,0.4)] backdrop-blur-xl transition-all duration-300 cursor-pointer"
            >
              {/* Glossy sweep effect */}
              <span className="absolute inset-0 w-1/2 h-full bg-white/20 skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-700 ease-in-out pointer-events-none" />
              <span className="relative z-10 flex items-center gap-1.5">
                <span>Let's Talk</span>
                <svg className="w-3.5 h-3.5 text-cyan-300 group-hover:rotate-45 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </motion.button>
          </div>

          {/* Mobile Menu Button & Mobile Theme Toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <ThemeToggle />
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.9, rotate: 90 }}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors text-white cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              <img
                src={isOpen ? imgClose : imgMenu}
                className="w-5 h-5 filter brightness-0 invert"
                alt="Toggle navigation"
              />
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown with 3D Flip */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, rotateX: -15 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              exit={{ opacity: 0, y: -20, rotateX: -15 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="block md:hidden mt-3 p-4 rounded-2xl backdrop-blur-2xl bg-[#030412]/95 border border-cyan-500/20 shadow-2xl overflow-hidden"
              style={{ perspective: 1000 }}
            >
              <ul className="flex flex-col space-y-2">
                {navItems.map((item, index) => (
                  <motion.li
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <a
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(item.href);
                      }}
                      className={`block px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                        activeSection === item.href
                          ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30"
                          : "text-neutral-300 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      {item.label}
                    </a>
                  </motion.li>
                ))}
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navItems.length * 0.05 }}
                  className="pt-2"
                >
                  <button
                    onClick={handleTalkClick}
                    className="w-full text-center py-2.5 rounded-xl bg-gradient-to-r from-cyan-500/25 via-indigo-500/30 to-purple-500/25 border border-cyan-400/50 text-white font-bold text-xs shadow-lg shadow-cyan-500/20 uppercase tracking-wider cursor-pointer"
                  >
                    Let's Talk
                  </button>
                </motion.li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default NavBar;