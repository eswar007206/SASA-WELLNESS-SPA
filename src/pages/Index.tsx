import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Packages from "@/components/Packages";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Packages />
      <Testimonials />
      <CTA />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
