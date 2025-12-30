import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, Crown } from "lucide-react";

const packages = [
  {
    name: "Serenity",
    price: "1,500",
    duration: "60 min",
    features: [
      "Swedish Massage",
      "Aromatherapy Session",
      "Herbal Tea Service",
      "Relaxation Lounge Access",
    ],
    popular: false,
  },
  {
    name: "Bliss",
    price: "2,500",
    duration: "90 min",
    features: [
      "Deep Tissue Massage",
      "Hot Stone Therapy",
      "Organic Facial Treatment",
      "Body Scrub",
      "Premium Refreshments",
      "Private Suite",
    ],
    popular: true,
  },
  {
    name: "Harmony",
    price: "4,000",
    duration: "120 min",
    features: [
      "Full Body Massage",
      "Aromatherapy Facial",
      "Body Wrap Treatment",
      "Manicure & Pedicure",
      "Gourmet Lunch",
      "VIP Lounge Access",
    ],
    popular: false,
  },
];

const PackageCard = ({ pkg, index }: { pkg: typeof packages[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
      className={`relative glass-card p-8 text-center transition-all duration-500 hover:-translate-y-2 ${
        pkg.popular ? "ring-2 ring-accent shadow-glow-gold" : "hover:shadow-glass-lg"
      }`}
    >
      {pkg.popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="inline-flex items-center gap-1 bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-medium">
            <Crown size={14} />
            Most Popular
          </span>
        </div>
      )}

      <h3 className="heading-md text-foreground mb-2">{pkg.name}</h3>
      <p className="text-sm text-muted-foreground mb-4">{pkg.duration}</p>

      <div className="mb-6">
        <span className="text-sm text-muted-foreground">Starting at</span>
        <div className="flex items-baseline justify-center gap-1 mt-1">
          <span className="text-lg text-muted-foreground">₹</span>
          <span className="text-5xl font-serif font-bold text-foreground">{pkg.price}</span>
        </div>
      </div>

      <div className="line-gold mb-6" />

      <ul className="space-y-3 mb-8 text-left">
        {pkg.features.map((feature) => (
          <li key={feature} className="flex items-center gap-3 text-sm text-foreground/80">
            <Check className="w-4 h-4 text-primary flex-shrink-0" />
            {feature}
          </li>
        ))}
      </ul>

      <a
        href="#contact"
        className={pkg.popular ? "btn-gold w-full block" : "btn-glass w-full block"}
      >
        Choose {pkg.name}
      </a>
    </motion.div>
  );
};

const Packages = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section id="packages" className="section-padding bg-secondary/30">
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
            Packages
          </span>
          <h2 className="heading-lg text-foreground mt-2 mb-4">
            Choose Your Journey
          </h2>
          <div className="line-gold max-w-xs mx-auto" />
          <p className="text-body max-w-2xl mx-auto mt-6">
            Select the perfect package for your wellness needs. Each experience 
            is designed to provide complete rejuvenation and lasting tranquility.
          </p>
        </motion.div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {packages.map((pkg, index) => (
            <PackageCard key={pkg.name} pkg={pkg} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;
