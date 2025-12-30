import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, MessageCircle } from "lucide-react";

const CTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-primary relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-foreground rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="heading-lg text-primary-foreground mb-6"
          >
            Ready to Begin Your
            <span className="block">Wellness Journey?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-primary-foreground/80 text-lg mb-10"
          >
            Book your appointment today and experience the luxury of Serenité. 
            Our wellness experts are ready to guide you to complete relaxation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-accent/40 hover:scale-105 active:scale-95"
            >
              <MessageCircle size={20} />
              Book via WhatsApp
            </a>
            <a
              href="tel:+1234567890"
              className="inline-flex items-center justify-center gap-2 bg-primary-foreground/20 text-primary-foreground border border-primary-foreground/30 px-8 py-4 rounded-full font-medium transition-all duration-300 hover:bg-primary-foreground/30 hover:scale-105 active:scale-95"
            >
              <Phone size={20} />
              Call Us Now
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
