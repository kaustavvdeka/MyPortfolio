import { useState } from "react";
import imgMenu from "../assets/menu.svg";
import imgClose from "../assets/close.svg";
import { motion, AnimatePresence } from 'motion/react';

function Navigation({ isMobile = false, onLinkClick }) {
  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#work", label: "Work" },
    { href: "#contact", label: "Contact" }
  ];

  const handleClick = () => {
    if (isMobile && onLinkClick) {
      onLinkClick();
    }
  };

  return (
    <ul className={`nav-ul ${isMobile ? 'flex flex-col space-y-6 py-8' : 'flex space-x-8'}`}>
      {navItems.map((item, index) => (
        <motion.li
          key={item.href}
          className="nav-li"
          initial={{ opacity: 0, y: isMobile ? 10 : 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <a
            className="nav-link relative group transition-all duration-300"
            href={item.href}
            onClick={handleClick}
          >
            {item.label}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </motion.li>
      ))}
    </ul>
  );
}

const NavBar = () => { 
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <div className="fixed inset-x-0 top-0 z-50 w-full backdrop-blur-lg bg-primary/80 border-b border-white/10 shadow-lg">
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between py-4 sm:py-3">
          {/* Logo/Brand */}
          <motion.a
            href="/"
            className="text-2xl font-bold bg-gradient-to-r from-white to-neutral-300 bg-clip-text text-transparent hover:from-blue-400 hover:to-purple-500 transition-all duration-300"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Kaustav Mani Deka
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden sm:block">
            <Navigation />
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="flex cursor-pointer p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300 sm:hidden"
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img 
              src={isOpen ? imgClose : imgMenu}
              className="h-6 w-6 filter brightness-0 invert"
              alt="toggle menu"
            />
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="block sm:hidden bg-primary/95 backdrop-blur-xl border-t border-white/10 mt-2 rounded-xl shadow-2xl"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <Navigation isMobile={true} onLinkClick={closeMenu} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default NavBar;