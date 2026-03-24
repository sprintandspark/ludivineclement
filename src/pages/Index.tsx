import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import PerChiSection from "@/components/PerChiSection";
import SprintCards from "@/components/SprintCards";
import MetodoSection from "@/components/MetodoSection";
import QuizSection from "@/components/QuizSection";
import Timeline from "@/components/Timeline";
import AboutSection from "@/components/AboutSection";
import TestimonialPlaceholder from "@/components/TestimonialPlaceholder";
import ContactSection from "@/components/ContactSection";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

const Index = () => {
  useEffect(() => {
    if (typeof (window as any).gtag !== 'undefined') {
      (window as any).gtag('config', 'G-VKZQQZT1D2', {
        'page_path': window.location.pathname,
      });
    }
  }, []);

  return (
    <>
      <Navbar />
      <HeroSection />
      <TrustBar />
      <PerChiSection />
      <SprintCards />
      <Timeline />
      <QuizSection />
      <MetodoSection />
      <AboutSection />
      <TestimonialPlaceholder />
      <ContactSection />
      <FaqSection />
      <CookieBanner />
      <Footer />
    </>
  );
};

export default Index;
