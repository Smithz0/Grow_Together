import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Users, BookOpen, Target, TrendingUp } from "lucide-react";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen gradient-hero">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold gradient-primary bg-clip-text text-transparent mb-6">
            GrowTogether
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            Your AI-powered study companion for collaborative learning, smart planning, and academic success
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              onClick={() => navigate("/signup-supabase")}
              size="lg"
              className="gradient-primary text-primary-foreground hover-glow px-8 py-6 text-lg font-semibold rounded-xl shadow-elegant transition-smooth"
            >
              Get Started Free
            </Button>
            <Button 
              onClick={() => navigate("/signin-supabase")}
              variant="outline"
              size="lg"
              className="border-2 border-primary/30 text-primary hover:bg-primary/10 px-8 py-6 text-lg font-semibold rounded-xl shadow-elegant transition-smooth"
            >
              Login
            </Button>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            <div className="glass rounded-2xl p-6 shadow-elegant hover-lift transition-smooth">
              <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center mb-4 mx-auto shadow-glow">
                <Users className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Study Groups</h3>
              <p className="text-muted-foreground text-sm">Connect with peers and form collaborative study groups</p>
            </div>

            <div className="glass rounded-2xl p-6 shadow-elegant hover-lift transition-smooth">
              <div className="w-12 h-12 gradient-secondary rounded-xl flex items-center justify-center mb-4 mx-auto shadow-glow">
                <BookOpen className="h-6 w-6 text-secondary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">AI Flashcards</h3>
              <p className="text-muted-foreground text-sm">Generate smart flashcards powered by AI technology</p>
            </div>

            <div className="glass rounded-2xl p-6 shadow-elegant hover-lift transition-smooth">
              <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center mb-4 mx-auto shadow-glow">
                <Target className="h-6 w-6 text-accent-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Smart Planning</h3>
              <p className="text-muted-foreground text-sm">AI-powered exam planning and study schedules</p>
            </div>

            <div className="glass rounded-2xl p-6 shadow-elegant hover-lift transition-smooth">
              <div className="w-12 h-12 bg-success rounded-xl flex items-center justify-center mb-4 mx-auto shadow-glow">
                <TrendingUp className="h-6 w-6 text-success-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Progress Tracking</h3>
              <p className="text-muted-foreground text-sm">Visual progress walls and achievement tracking</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;