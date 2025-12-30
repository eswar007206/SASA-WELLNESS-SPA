import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Leaf } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Packages", href: "#packages" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "glass border-b border-white/30 shadow-glass"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-2 group">
              <img src="/favicon.ico" alt="SASA Logo" className="w-8 h-8 rounded-full transition-transform duration-300 group-hover:rotate-12" />
              <span className="font-serif text-xl font-medium text-foreground">
                SASA WELLNESS SPA
              </span>
            </a>

            {/* Desktop Navigation */}
            <ul className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-foreground/80 hover:text-primary font-medium text-sm tracking-wide transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <a
              href="#contact"
              className="hidden lg:block btn-primary text-sm"
            >
              Book Now
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-foreground/20 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              className="absolute right-0 top-0 bottom-0 w-72 glass-panel"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="pt-24 px-6">
                <ul className="space-y-4">
                  {navLinks.map((link, index) => (
                    <motion.li
                      key={link.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <a
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block py-3 text-lg font-medium text-foreground hover:text-primary transition-colors border-b border-border/50"
                      >
                        {link.name}
                      </a>
                    </motion.li>
                  ))}
                </ul>
                <motion.a
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="btn-primary block text-center mt-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  Book Now
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
