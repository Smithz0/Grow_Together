import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingUp, 
  Clock, 
  Target, 
  Calendar,
  Award,
  Book,
  Users,
  Zap
} from "lucide-react";

const ProgressSection = () => {
  const stats = [
    {
      title: "Study Streak",
      value: "12 days",
      change: "+3 from last week",
      icon: Calendar,
      color: "text-success",
      bgColor: "bg-success/10"
    },
    {
      title: "Total Study Time",
      value: "47h 32m",
      change: "+12h this week",
      icon: Clock,
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      title: "Goals Completed",
      value: "23/30",
      change: "77% completion rate",
      icon: Target,
      color: "text-accent",
      bgColor: "bg-accent/10"
    },
    {
      title: "Group Sessions",
      value: "18",
      change: "+5 this week",
      icon: Users,
      color: "text-secondary",
      bgColor: "bg-secondary/10"
    }
  ];

  const weeklyProgress = [
    { day: "Mon", hours: 3.5, goal: 4 },
    { day: "Tue", hours: 4.2, goal: 4 },
    { day: "Wed", hours: 2.8, goal: 4 },
    { day: "Thu", hours: 4.5, goal: 4 },
    { day: "Fri", hours: 3.9, goal: 4 },
    { day: "Sat", hours: 5.2, goal: 4 },
    { day: "Sun", hours: 4.1, goal: 4 }
  ];

  const subjects = [
    { name: "Mathematics", progress: 85, hours: 12.5, color: "bg-primary" },
    { name: "Physics", progress: 72, hours: 8.3, color: "bg-secondary" },
    { name: "Chemistry", progress: 91, hours: 15.2, color: "bg-accent" },
    { name: "Biology", progress: 67, hours: 7.1, color: "bg-success" }
  ];

  const achievements = [
    { title: "Early Bird", description: "Studied before 7 AM for 5 days", icon: "🌅" },
    { title: "Team Player", description: "Joined 10 group study sessions", icon: "🤝" },
    { title: "Streak Master", description: "10-day study streak", icon: "🔥" },
    { title: "Goal Crusher", description: "Completed 20 weekly goals", icon: "🎯" }
  ];

  return (
    <section id="progress" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-4">
            <TrendingUp className="h-4 w-4" />
            <span>Track Your Success</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Visualize Your{" "}
            <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              Learning Journey
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive analytics and insights to help you understand your learning patterns, 
            celebrate achievements, and continuously improve your study habits.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <Card key={index} className="border-0 shadow-elegant hover:shadow-glow transition-smooth">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`${stat.bgColor} p-2 rounded-lg`}>
                    <stat.icon className={`h-5 w-5 ${stat.color}`} />
                  </div>
                  <TrendingUp className="h-4 w-4 text-success" />
                </div>
                <div>
                  <div className="text-2xl font-bold mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground mb-2">{stat.title}</div>
                  <div className="text-xs text-success font-medium">{stat.change}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Weekly Progress Chart */}
          <Card className="border-0 shadow-elegant">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-primary" />
                <span>Weekly Study Hours</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {weeklyProgress.map((day, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-12 text-sm font-medium">{day.day}</div>
                    <div className="flex-1">
                      <div className="flex justify-between text-sm mb-1">
                        <span>{day.hours}h</span>
                        <span className="text-muted-foreground">Goal: {day.goal}h</span>
                      </div>
                      <Progress 
                        value={(day.hours / day.goal) * 100} 
                        className="h-2"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Subject Progress */}
          <Card className="border-0 shadow-elegant">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Book className="h-5 w-5 text-secondary" />
                <span>Subject Progress</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {subjects.map((subject, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{subject.name}</span>
                      <span className="text-sm text-muted-foreground">{subject.hours}h studied</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Progress value={subject.progress} className="flex-1 h-2" />
                      <span className="text-sm font-medium w-12">{subject.progress}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Achievements */}
        <Card className="border-0 shadow-elegant">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Award className="h-5 w-5 text-warning" />
              <span>Recent Achievements</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center p-4 rounded-lg hover:bg-muted/50 transition-smooth">
                  <div className="text-3xl mb-2">{achievement.icon}</div>
                  <div className="font-semibold mb-1">{achievement.title}</div>
                  <div className="text-sm text-muted-foreground">{achievement.description}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ProgressSection;