import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-spa.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Luxury spa interior with zen stones and bamboo"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 via-foreground/20 to-foreground/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="glass-card max-w-3xl mx-auto p-8 md:p-12 lg:p-16"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="inline-block text-accent font-medium tracking-widest uppercase text-sm mb-4"
          >
            Welcome to SASA WELLNESS SPA
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="heading-xl text-foreground mb-6"
          >
            Luxury Spa
            <span className="block text-gradient-gold">Experience</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-body max-w-xl mx-auto mb-8"
          >
            Escape the ordinary and discover a sanctuary of tranquility. 
            Our world-class treatments restore balance to your mind, body, and soul.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a href="#contact" className="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-4 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 hover:scale-105">
              Book Appointment
            </a>
            <a href="#services" className="inline-flex items-center justify-center bg-foreground/10 backdrop-blur-sm border border-foreground/20 text-foreground px-8 py-4 rounded-full font-medium transition-all duration-300 hover:bg-foreground/20 hover:scale-105">
              Explore Services
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.a
          href="#services"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown size={32} />
          </motion.div>
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
