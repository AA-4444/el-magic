import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import Services from '@/components/Services';
import WhyChooseUs from '@/components/WhyChooseUs';
import Pricing from '@/components/Pricing';
import Testimonials from '@/components/Testimonials';
import About from '@/components/About';
import Blog from '@/components/Blog';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';



const Index = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -20px 0px' }
    );

    const observe = () => {
      document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));
    };
    observe();
    // Re-observe after accordion opens
    const interval = setInterval(observe, 1000);
    return () => { observer.disconnect(); clearInterval(interval); };
  }, []);

  return (
    <div className="bg-background text-foreground min-h-screen relative">
     
     
        <Navbar />
        <Hero />
        <Stats />
        <Services />
        <WhyChooseUs />
        <Pricing />
        <Testimonials />
        <About />
       
        <ContactSection />
        <Footer />
     
    </div>
  );
};

export default Index;
