import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ProgressSection from "@/components/ProgressSection";
import StudyGroups from "@/components/StudyGroups";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Index = () => {
  const location = useLocation();
  useEffect(() => {
    if (location.state && location.state.scrollTo) {
      const el = document.getElementById(location.state.scrollTo);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <StudyGroups />
      <ProgressSection />
      <Footer />
    </div>
  );
};

export default Index;
