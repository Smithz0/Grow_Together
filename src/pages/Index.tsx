import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import StudyGroups from "@/components/StudyGroups";
import ProgressSection from "@/components/ProgressSection";
import Footer from "@/components/Footer";

const Index = () => {
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
