import { Card, CardContent } from "@/components/ui/card";
import { 
  Users, 
  MessageSquare, 
  BarChart3, 
  Calendar, 
  Target, 
  Brain,
  Clock,
  Award,
  Zap
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Users,
      title: "Smart Group Matching",
      description: "AI-powered algorithm matches you with compatible study partners based on subjects, goals, and learning styles.",
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      icon: MessageSquare,
      title: "Real-time Collaboration",
      description: "Instant messaging, video calls, and shared whiteboards for seamless group study sessions.",
      color: "text-secondary",
      bgColor: "bg-secondary/10"
    },
    {
      icon: BarChart3,
      title: "Progress Analytics",
      description: "Detailed insights into your learning patterns, study habits, and achievement milestones.",
      color: "text-accent",
      bgColor: "bg-accent/10"
    },
    {
      icon: Calendar,
      title: "Study Scheduling",
      description: "Coordinate group sessions with smart calendar integration and automatic reminders.",
      color: "text-success",
      bgColor: "bg-success/10"
    },
    {
      icon: Target,
      title: "Goal Setting",
      description: "Set personal and group learning objectives with milestone tracking and celebration.",
      color: "text-warning",
      bgColor: "bg-warning/10"
    },
    {
      icon: Brain,
      title: "Adaptive Learning",
      description: "Personalized study recommendations based on your performance and learning preferences.",
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      icon: Clock,
      title: "Time Management",
      description: "Pomodoro timers, focus sessions, and productivity tracking to maximize study efficiency.",
      color: "text-secondary",
      bgColor: "bg-secondary/10"
    },
    {
      icon: Award,
      title: "Achievement System",
      description: "Earn badges, compete in leaderboards, and celebrate learning milestones with your peers.",
      color: "text-accent",
      bgColor: "bg-accent/10"
    },
    {
      icon: Zap,
      title: "Quick Actions",
      description: "One-click study room creation, instant group invites, and rapid resource sharing.",
      color: "text-success",
      bgColor: "bg-success/10"
    }
  ];

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Zap className="h-4 w-4" />
            <span>Powerful Features</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Everything You Need to{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Excel Together
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive platform combines cutting-edge technology with proven learning methodologies 
            to create the ultimate collaborative study experience.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="hover-lift border-0 shadow-elegant hover:shadow-glow transition-smooth group"
            >
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className={`${feature.bgColor} p-3 rounded-xl w-fit`}>
                    <feature.icon className={`h-6 w-6 ${feature.color}`} />
                  </div>
                  
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-smooth">
                    {feature.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;