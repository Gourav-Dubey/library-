import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Gallery", path: "/gallery" },
  { name: "Facilities", path: "/facilities" },
  { name: "Contact", path: "/contact" },
];

function Navbar() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <motion.nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "backdrop-blur-xl bg-gray-900/95 border-b border-gray-800 shadow-lg"
          : "backdrop-blur-md bg-gray-900/80 border-b border-gray-900/20"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-white hidden sm:block">
              Rajsan Library
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  location.pathname === link.path
                    ? "text-blue-500 bg-blue-500/10"
                    : "text-gray-300 hover:text-white hover:bg-gray-800/50"
                }`}
              >
                {link.name}
                
                {/* Active underline */}
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="underline"
                    className="absolute -bottom-1 left-4 right-4 h-0.5 bg-blue-500 rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg transition-all duration-300"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 border-t border-gray-700 mt-3">
                <div className="flex flex-col space-y-2">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.path}
                      className={`px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                        location.pathname === link.path
                          ? "text-blue-500 bg-blue-500/10 border-l-4 border-blue-500"
                          : "text-gray-300 hover:text-white hover:bg-gray-800/50"
                      }`}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}

export default Navbar;