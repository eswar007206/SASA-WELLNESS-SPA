import { motion } from "framer-motion";
import { Leaf, Instagram, Facebook, Twitter, Youtube } from "lucide-react";

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center"
        >
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 mb-6 group">
            <img src="/favicon.ico" alt="SASA Logo" className="w-8 h-8 rounded-full transition-transform duration-300 group-hover:rotate-12" />
            <span className="font-serif text-2xl font-medium">SASA WELLNESS SPA</span>
          </a>

          {/* Tagline */}
          <p className="text-primary-foreground/70 max-w-md mb-8">
            Your sanctuary of tranquility. Experience luxury wellness and 
            rejuvenating treatments for mind, body, and soul.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4 mb-8">
            {socialLinks.filter(link => link.label !== 'Twitter').map((social) => (
              <a
                key={social.label}
                href={social.label === 'Instagram' ? 'https://www.instagram.com/sasawellness_spa?igsh=MXV0cnNhaDhseGw0dA==' : social.href}
                aria-label={social.label}
                className="p-3 rounded-full bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-110"
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="w-full max-w-xs h-px bg-gradient-to-r from-transparent via-primary-foreground/30 to-transparent mb-8" />

          {/* Copyright */}
          <p className="text-sm text-primary-foreground/50">
            © {currentYear} SASA WELLNESS SPA. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
