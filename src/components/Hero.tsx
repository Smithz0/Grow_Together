import { Button } from "@/components/ui/button";
import { ArrowRight, Users, BookOpen, Target } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 gradient-subtle min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                <Users className="h-4 w-4" />
                <span>Join 10,000+ collaborative learners</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Learn{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Together
                </span>
                , Achieve More
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-2xl">
                Connect with fellow students, form study groups, track your progress, and unlock your full learning potential through collaborative education.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="group">
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-8">
              <div className="flex items-center space-x-2">
                <div className="bg-success/10 p-2 rounded-lg">
                  <BookOpen className="h-5 w-5 text-success" />
                </div>
                <div>
                  <div className="font-semibold">50K+</div>
                  <div className="text-sm text-muted-foreground">Study Sessions</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold">5K+</div>
                  <div className="text-sm text-muted-foreground">Study Groups</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <div className="bg-accent/10 p-2 rounded-lg">
                  <Target className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <div className="font-semibold">92%</div>
                  <div className="text-sm text-muted-foreground">Success Rate</div>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-glow">
              <img
                src={heroImage}
                alt="Students collaborating and studying together"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent"></div>
            </div>
            
            {/* Floating cards */}
            <div className="absolute -top-4 -right-4 glass p-4 rounded-xl shadow-elegant">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Live: 2,847 studying</span>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 glass p-4 rounded-xl shadow-elegant">
              <div className="text-sm">
                <div className="font-semibold">Today's Goal</div>
                <div className="text-muted-foreground">3 hours completed ✨</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;