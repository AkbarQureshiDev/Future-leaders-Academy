import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About Us', href: '#' },
    { name: 'Our Projects', href: '#' },
    { name: 'What Makes Us KIPS', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Partner with Us', href: '#' },
    { name: 'Contact Us', href: '#' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${
        scrolled ? 'py-2 shadow-md border-b border-gray-100' : 'py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            {/* KIPS Shield Icon */}
            <div className="relative w-10 h-12 flex-shrink-0">
              <svg viewBox="0 0 100 120" className="w-full h-full">
                {/* Shield Outline */}
                <path
                  d="M10,5 L90,5 L90,65 C90,95 50,115 50,115 C50,115 10,95 10,65 Z"
                  fill="none"
                  stroke="#004B87"
                  strokeWidth="6"
                />
                {/* Crown/Book Motif inside shield */}
                <path
                  d="M30,55 L40,35 L50,45 L60,35 L70,55 L50,65 Z"
                  fill="#004B87"
                />
                <circle cx="50" cy="30" r="4" fill="#004B87" />
                <circle cx="34" cy="38" r="3.5" fill="#004B87" />
                <circle cx="66" cy="38" r="3.5" fill="#004B87" />
                {/* Book Base */}
                <path
                  d="M25,72 C35,68 45,72 50,75 C55,72 65,68 75,72 C75,72 65,78 50,78 C35,78 25,72 25,72 Z"
                  fill="#004B87"
                />
                {/* Text inside shield */}
                <text
                  x="50"
                  y="96"
                  textAnchor="middle"
                  fill="#004B87"
                  fontSize="16"
                  fontWeight="bold"
                  fontFamily="sans-serif"
                >
                  KIPS
                </text>
              </svg>
            </div>

            {/* Logo Text */}
            <div className="flex flex-col justify-center leading-tight">
              <span className="text-xl font-extrabold tracking-tight text-black font-sans">
                KIPS
              </span>
              <span className="text-[10px] font-bold text-gray-800 tracking-wider uppercase">
                Education
              </span>
              <span className="text-[10px] font-bold text-gray-800 tracking-wider uppercase">
                System
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold text-[#1a2b49] hover:text-[#004B87] transition-colors py-1"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Action Button */}
          <div className="hidden lg:flex items-center">
            <a
              href="#"
              className="px-7 py-3 bg-[#00427A] hover:bg-[#00315c] text-white font-bold text-sm uppercase tracking-wider rounded-tl-xl rounded-bl-xl rounded-tr-3xl rounded-br-3xl transition-all shadow-sm hover:shadow"
            >
              Apply Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-gray-700 hover:text-[#004B87] hover:bg-gray-100 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-gray-200 px-4 pt-2 pb-6 shadow-xl"
          >
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="py-2.5 text-base font-semibold text-[#1a2b49] hover:text-[#004B87] border-b border-gray-100"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4">
                <a
                  href="#"
                  className="block w-full py-3 bg-[#00427A] text-white font-bold text-center uppercase tracking-wider rounded-xl shadow"
                >
                  Apply Now
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;