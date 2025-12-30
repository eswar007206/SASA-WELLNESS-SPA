import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Droplets, Flower2, Hand, Heart, Sparkles, Wind } from "lucide-react";

const services = [
  {
    icon: Droplets,
    title: "Aromatherapy",
    description: "Immerse yourself in healing essential oils that calm your senses and restore inner peace.",
  },
  {
    icon: Hand,
    title: "Deep Tissue Massage",
    description: "Release tension and rejuvenate your muscles with our expert therapeutic techniques.",
  },
  {
    icon: Flower2,
    title: "Facial Treatments",
    description: "Reveal your natural glow with our premium organic skincare and facial therapies.",
  },
  {
    icon: Heart,
    title: "Couples Retreat",
    description: "Share a blissful experience with your loved one in our private couple suites.",
  },
  {
    icon: Wind,
    title: "Hot Stone Therapy",
    description: "Experience deep relaxation as warm basalt stones melt away stress and tension.",
  },
  {
    icon: Sparkles,
    title: "Body Scrub & Wrap",
    description: "Renew your skin with exfoliating scrubs and nourishing body wraps.",
  },
];

const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      className="group glass-card p-8 text-center hover:shadow-glass-lg transition-all duration-500 hover:-translate-y-2"
    >
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-sage-light mb-6 group-hover:scale-110 transition-transform duration-300">
        <service.icon className="w-8 h-8 text-primary" />
      </div>
      <h3 className="heading-md text-foreground mb-3">{service.title}</h3>
      <p className="text-body text-sm">{service.description}</p>
    </motion.div>
  );
};

const Services = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-medium tracking-widest uppercase text-sm">
            Our Services
          </span>
          <h2 className="heading-lg text-foreground mt-2 mb-4">
            Treatments Designed for You
          </h2>
          <div className="line-gold max-w-xs mx-auto" />
          <p className="text-body max-w-2xl mx-auto mt-6">
            Every treatment is thoughtfully crafted to provide the ultimate relaxation 
            and rejuvenation experience for your mind, body, and spirit.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
