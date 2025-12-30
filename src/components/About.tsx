import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Clock, Users, Smile } from "lucide-react";
import aboutImage from "@/assets/about-spa.jpg";

const stats = [
  { icon: Award, value: "Premium", label: "Quality Service" },
  { icon: Users, value: "Expert", label: "Therapists" },
  { icon: Clock, value: "50+", label: "Treatments" },
  { icon: Smile, value: "100%", label: "Satisfaction" },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding overflow-hidden">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="glass-card p-4 inline-block">
              <img
                src={aboutImage}
                alt="Spa treatment room with orchid and massage table"
                className="rounded-xl w-full h-auto max-h-[500px] object-cover"
              />
            </div>
            {/* Floating Accent */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -right-6 glass-card p-6 hidden md:block"
            >
              <span className="text-4xl font-serif font-bold text-gradient-gold">100%</span>
              <p className="text-sm text-muted-foreground mt-1">Satisfaction Guaranteed</p>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <span className="text-accent font-medium tracking-widest uppercase text-sm">
              About Us
            </span>
            <h2 className="heading-lg text-foreground mt-2 mb-6">
              A Sanctuary of
              <span className="text-gradient-gold"> Tranquility</span>
            </h2>
            <p className="text-body mb-6">
              At SASA WELLNESS SPA, we believe in the transformative power of self-care. 
              Our sanctuary was created to provide an escape from the stresses of 
              everyday life, offering a haven where you can reconnect with your 
              inner calm.
            </p>
            <p className="text-body mb-8">
              Our team of expert therapists combines ancient healing traditions 
              with modern techniques, using only the finest organic products to 
              deliver treatments that nurture your body and soul.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="glass-card p-4 text-center"
                >
                  <stat.icon className="w-6 h-6 text-accent mx-auto mb-2" />
                  <span className="block text-2xl font-serif font-bold text-foreground">
                    {stat.value}
                  </span>
                  <span className="text-xs text-muted-foreground">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
