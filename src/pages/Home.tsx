import { useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ToolsSection from '@/components/ToolsSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import SkillsSection from '@/components/SkillsSection';
import PortfolioSection from '@/components/PortfolioSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import OrderModal from '@/components/OrderModal';
import PortfolioShowcaseModal from '@/components/PortfolioShowcaseModal';
import BackgroundAnimation from '@/components/BackgroundAnimation';
import '@/styles/style.css';
import Typed from 'typed.js';
import ScrollReveal from 'scrollreveal';

const Home = () => {
  useEffect(() => {
    // Initialize Typed.js
    const typed = new Typed('.multiple-text', {
      strings: ["Graphic Design", "Video Editing", "Tech Dev"],
      typeSpeed: 70,
      backSpeed: 30,
      backDelay: 1000,
      loop: true
    });

    // Initialize ScrollReveal
    ScrollReveal({
      reset: true,
      distance: '80px',
      duration: 2000,
      delay: 200
    });

    ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
    ScrollReveal().reveal('.home-img, .services-container', { origin: 'bottom' });
    ScrollReveal().reveal('.home-content h1', { origin: 'left' });
    ScrollReveal().reveal('.home-content p', { origin: 'left' });

    // Cleanup
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className="blur-overlay"></div>
      <BackgroundAnimation />
      <OrderModal />
      <PortfolioShowcaseModal />
      <Header />
      <HeroSection />
      <ToolsSection />
      <AboutSection />
      <ServicesSection />
      <SkillsSection />
      <PortfolioSection />
      <ContactSection />
      <Footer />
    </>
  );
};

export default Home;