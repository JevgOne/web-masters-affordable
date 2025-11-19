import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import Process from "@/components/Process";
import Portfolio from "@/components/Portfolio";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <Stats />
      <Process />
      <Portfolio />
      <Pricing />
      <Testimonials />
      <FAQ />
      <CTASection />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
