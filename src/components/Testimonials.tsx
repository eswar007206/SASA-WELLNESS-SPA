import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Priya Patel",
    role: "Regular Client",
    content: "SASA WELLNESS SPA has become my monthly sanctuary. The deep tissue massage is transformative, and the atmosphere is pure luxury. I always leave feeling completely renewed.",
    rating: 5,
  },
  {
    name: "Rahul Sharma",
    role: "Couples Retreat",
    content: "My partner and I celebrated our anniversary here. The private suite, the treatments, the attention to detail - everything was absolutely perfect. Can't recommend enough!",
    rating: 5,
  },
  {
    name: "Anjali Gupta",
    role: "First-Time Visitor",
    content: "From the moment I walked in, I felt the stress melt away. The aromatherapy session was incredibly healing. The staff truly cares about your wellbeing.",
    rating: 5,
  },
  {
    name: "Vikram Singh",
    role: "Corporate Member",
    content: "As a busy executive, I need a place to decompress. SASA delivers every time. The hot stone therapy is my go-to treatment. Worth every penny.",
    rating: 5,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goTo = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  return (
    <section id="testimonials" className="section-padding overflow-hidden">
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-medium tracking-widest uppercase text-sm">
            Testimonials
          </span>
          <h2 className="heading-lg text-foreground mt-2 mb-4">
            What Our Clients Say
          </h2>
          <div className="line-gold max-w-xs mx-auto" />
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-8 md:p-12 text-center relative"
          >
            <Quote className="w-12 h-12 text-accent/30 absolute top-6 left-6" />

            <div className="relative">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                {/* Stars */}
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-lg md:text-xl text-foreground/90 leading-relaxed mb-8 max-w-2xl mx-auto italic font-serif">
                  "{testimonials[currentIndex].content}"
                </p>

                {/* Author */}
                <div>
                  <p className="font-medium text-foreground">
                    {testimonials[currentIndex].name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prev}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 glass rounded-full hover:bg-white/80 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </button>
            <button
              onClick={next}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 glass rounded-full hover:bg-white/80 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 text-foreground" />
            </button>
          </motion.div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goTo(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-8 bg-accent"
                    : "bg-muted hover:bg-muted-foreground/50"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
