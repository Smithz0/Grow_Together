import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { supabase } from "./lib/supabaseClient";
import ChatDashboard from "./pages/ChatDashboard";
import Community from "./pages/Community";
import ExamPlanner from "./pages/ExamPlanner";
import FlashcardGenerator from "./pages/FlashcardGenerator";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ProgressWall from "./pages/ProgressWall";
import SignIn from "./pages/SignIn";
import SignInSupabase from "./pages/SignInSupabase";
import SignUpSupabase from "./pages/SignUpSupabase";
import StudyKitRecommendations from "./pages/StudyKitRecommendations";
import StudyRecap from "./pages/StudyRecap";

const queryClient = new QueryClient();

function ProtectedRoute({ children }: { children: JSX.Element }) {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getUser();
      setUser(data.user);
      setLoading(false);
    };
    getUser();
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });
    return () => {
      listener?.subscription.unsubscribe();
    };
  }, []);

  if (loading) return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  if (!user) return <Navigate to="/signin-supabase" replace />;
  return children;
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/signin-supabase" element={<SignInSupabase />} />
          <Route path="/signup-supabase" element={<SignUpSupabase />} />
          <Route path="/" element={<Index />} />
          <Route path="/community" element={<ProtectedRoute><Community /></ProtectedRoute>} />
          <Route path="/chat" element={<ProtectedRoute><ChatDashboard /></ProtectedRoute>} />
          <Route path="/flashcards" element={<ProtectedRoute><FlashcardGenerator /></ProtectedRoute>} />
          <Route path="/studykit" element={<ProtectedRoute><StudyKitRecommendations /></ProtectedRoute>} />
          <Route path="/planner" element={<ProtectedRoute><ExamPlanner /></ProtectedRoute>} />
          <Route path="/progress" element={<ProtectedRoute><ProgressWall /></ProtectedRoute>} />
          <Route path="/recap" element={<ProtectedRoute><StudyRecap /></ProtectedRoute>} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
