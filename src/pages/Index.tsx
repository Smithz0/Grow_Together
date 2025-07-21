import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ProgressSection from "@/components/ProgressSection";
import StudyGroups from "@/components/StudyGroups";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { supabase } from "@/lib/supabaseClient";

const Index = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getUser();
      setUser(data.user);
      setLoading(false);
      if (!data.user) {
        navigate("/signin-supabase");
      }
    };
    getUser();
    
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      if (!session?.user) {
        navigate("/signin-supabase");
      }
    });
    
    return () => {
      listener?.subscription.unsubscribe();
    };
  }, [navigate]);

  useEffect(() => {
    if (location.state && location.state.scrollTo) {
      const el = document.getElementById(location.state.scrollTo);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  if (loading) return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
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
