import Navbar from "@/components/Navbar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Award, Calendar, Clock, Flame, Medal, Target, TrendingUp, Trophy, Users } from "lucide-react";
import { useState } from "react";

const ProgressWall = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("week");

  const achievements = [
    {
      id: 1,
      title: "Study Streak Master",
      description: "Maintained a 7-day study streak",
      icon: <Flame className="h-8 w-8" />,
      color: "from-orange-500 to-red-500",
      earned: true,
      date: "2 days ago",
      rarity: "rare"
    },
    {
      id: 2,
      title: "Calculus Conqueror", 
      description: "Completed 50 calculus problems",
      icon: <Target className="h-8 w-8" />,
      color: "from-blue-500 to-purple-500",
      earned: true,
      date: "1 week ago",
      rarity: "epic"
    },
    {
      id: 3,
      title: "Group Study Leader",
      description: "Led 5 study group sessions",
      icon: <Users className="h-8 w-8" />,
      color: "from-green-500 to-teal-500",
      earned: true,
      date: "3 days ago",
      rarity: "uncommon"
    },
    {
      id: 4,
      title: "Night Owl Scholar",
      description: "Study for 3 hours after 9 PM",
      icon: <Clock className="h-8 w-8" />,
      color: "from-indigo-500 to-purple-500",
      earned: false,
      progress: 2,
      total: 3,
      rarity: "common"
    }
  ];

  const studyStats = {
    totalHours: 127,
    streakDays: 12,
    completedGoals: 34,
    studyGroups: 3,
    weeklyGoal: 15,
    weeklyProgress: 12
  };

  const weeklyProgress = [
    { day: "Mon", hours: 2.5, goal: 2, completed: true },
    { day: "Tue", hours: 3.0, goal: 2, completed: true },
    { day: "Wed", hours: 1.5, goal: 2, completed: false },
    { day: "Thu", hours: 2.8, goal: 2, completed: true },
    { day: "Fri", hours: 2.2, goal: 2, completed: true },
    { day: "Sat", hours: 0, goal: 2, completed: false },
    { day: "Sun", hours: 0, goal: 2, completed: false }
  ];

  const leaderboard = [
    { rank: 1, name: "Alex Chen", points: 2890, hours: 45, avatar: "/placeholder.svg", trend: "+12%" },
    { rank: 2, name: "You", points: 2650, hours: 42, avatar: "/placeholder.svg", trend: "+8%" },
    { rank: 3, name: "Sarah Kim", points: 2480, hours: 38, avatar: "/placeholder.svg", trend: "+15%" },
    { rank: 4, name: "Mike Johnson", points: 2310, hours: 35, avatar: "/placeholder.svg", trend: "+5%" },
    { rank: 5, name: "Emma Wilson", points: 2180, hours: 33, avatar: "/placeholder.svg", trend: "+7%" }
  ];

  const milestones = [
    { title: "First Study Session", date: "Jan 15", completed: true },
    { title: "Join First Study Group", date: "Jan 18", completed: true },
    { title: "7-Day Study Streak", date: "Jan 25", completed: true },
    { title: "50 Hours Studied", date: "Feb 2", completed: true },
    { title: "Lead Study Group", date: "Feb 5", completed: true },
    { title: "100 Hours Studied", date: "Feb 20", completed: false, progress: 76 },
    { title: "Master 3 Subjects", date: "Mar 1", completed: false, progress: 33 }
  ];

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case "common": return "border-gray-400 bg-gray-400/20";
      case "uncommon": return "border-green-400 bg-green-400/20";
      case "rare": return "border-blue-400 bg-blue-400/20";
      case "epic": return "border-purple-400 bg-purple-400/20";
      case "legendary": return "border-yellow-400 bg-yellow-400/20";
      default: return "border-gray-400 bg-gray-400/20";
    }
  };

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1: return <Trophy className="h-6 w-6 text-yellow-500" />;
      case 2: return <Medal className="h-6 w-6 text-gray-400" />;
      case 3: return <Medal className="h-6 w-6 text-amber-600" />;
      default: return <span className="text-lg font-bold text-muted-foreground">#{rank}</span>;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 pt-16">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 rounded-full bg-gradient-to-r from-primary to-primary-glow">
              <Trophy className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              Progress Wall
            </h1>
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Track your achievements, compete with friends, and celebrate your learning journey.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card className="glass border-white/20 text-center">
            <CardContent className="p-4">
              <div className="text-3xl font-bold text-primary mb-1">{studyStats.totalHours}</div>
              <div className="text-sm text-muted-foreground">Total Hours</div>
            </CardContent>
          </Card>
          <Card className="glass border-white/20 text-center">
            <CardContent className="p-4">
              <div className="text-3xl font-bold text-orange-500 mb-1">{studyStats.streakDays}</div>
              <div className="text-sm text-muted-foreground">Day Streak</div>
            </CardContent>
          </Card>
          <Card className="glass border-white/20 text-center">
            <CardContent className="p-4">
              <div className="text-3xl font-bold text-green-500 mb-1">{studyStats.completedGoals}</div>
              <div className="text-sm text-muted-foreground">Goals Met</div>
            </CardContent>
          </Card>
          <Card className="glass border-white/20 text-center">
            <CardContent className="p-4">
              <div className="text-3xl font-bold text-purple-500 mb-1">{studyStats.studyGroups}</div>
              <div className="text-sm text-muted-foreground">Study Groups</div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="achievements" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 glass">
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
            <TabsTrigger value="progress">Progress</TabsTrigger>
            <TabsTrigger value="leaderboard">Leaderboard</TabsTrigger>
            <TabsTrigger value="milestones">Milestones</TabsTrigger>
          </TabsList>

          {/* Achievements Tab */}
          <TabsContent value="achievements" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {achievements.map((achievement) => (
                <Card 
                  key={achievement.id} 
                  className={`glass border-white/20 hover:shadow-elegant transition-smooth relative overflow-hidden ${
                    achievement.earned ? '' : 'opacity-75'
                  }`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-10`} />
                  <CardHeader className="relative">
                    <div className="flex items-center justify-between">
                      <div className={`p-3 rounded-full bg-gradient-to-br ${achievement.color} text-white`}>
                        {achievement.icon}
                      </div>
                      <Badge className={getRarityColor(achievement.rarity)}>
                        {achievement.rarity}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg">{achievement.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="relative space-y-4">
                    <p className="text-sm text-muted-foreground">{achievement.description}</p>
                    
                    {achievement.earned ? (
                      <div className="flex items-center gap-2 text-green-500">
                        <Award className="h-4 w-4" />
                        <span className="text-sm font-medium">Earned {achievement.date}</span>
                      </div>
                    ) : (
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Progress</span>
                          <span>{achievement.progress}/{achievement.total}</span>
                        </div>
                        <Progress value={(achievement.progress! / achievement.total!) * 100} />
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Progress Tab */}
          <TabsContent value="progress" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              
              {/* Weekly Progress */}
              <Card className="glass border-white/20">
                <CardHeader>
                  <CardTitle className="text-primary flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    Weekly Progress
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Weekly Goal</span>
                      <span>{studyStats.weeklyProgress}/{studyStats.weeklyGoal} hours</span>
                    </div>
                    <Progress value={(studyStats.weeklyProgress / studyStats.weeklyGoal) * 100} />
                  </div>
                  
                  <div className="space-y-3">
                    {weeklyProgress.map((day, index) => (
                      <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-white/5">
                        <div className="flex items-center gap-3">
                          <div className="w-8 text-sm font-medium">{day.day}</div>
                          <div className={`w-3 h-3 rounded-full ${
                            day.completed ? 'bg-green-500' : day.hours > 0 ? 'bg-yellow-500' : 'bg-gray-400'
                          }`} />
                        </div>
                        <div className="text-sm">
                          <span className="font-medium">{day.hours}h</span>
                          <span className="text-muted-foreground ml-1">/ {day.goal}h</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Study Analytics */}
              <Card className="glass border-white/20">
                <CardHeader>
                  <CardTitle className="text-primary flex items-center gap-2">
                    <TrendingUp className="h-5 w-5" />
                    Study Analytics
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="p-4 rounded-lg bg-primary/10">
                      <div className="text-2xl font-bold text-primary">24</div>
                      <div className="text-xs text-muted-foreground">Avg Sessions/Week</div>
                    </div>
                    <div className="p-4 rounded-lg bg-secondary/10">
                      <div className="text-2xl font-bold">2.1h</div>
                      <div className="text-xs text-muted-foreground">Avg Session Length</div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Mathematics</span>
                      <div className="flex items-center gap-2">
                        <Progress value={85} className="w-20" />
                        <span className="text-sm">85%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Physics</span>
                      <div className="flex items-center gap-2">
                        <Progress value={65} className="w-20" />
                        <span className="text-sm">65%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Chemistry</span>
                      <div className="flex items-center gap-2">
                        <Progress value={45} className="w-20" />
                        <span className="text-sm">45%</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Leaderboard Tab */}
          <TabsContent value="leaderboard" className="space-y-6">
            <Card className="glass border-white/20">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-primary">Study Group Leaderboard</CardTitle>
                  <div className="flex gap-2">
                    {["week", "month", "all"].map((period) => (
                      <Button
                        key={period}
                        variant={selectedPeriod === period ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedPeriod(period)}
                        className="capitalize"
                      >
                        {period}
                      </Button>
                    ))}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {leaderboard.map((user, index) => (
                    <div 
                      key={index} 
                      className={`flex items-center gap-4 p-4 rounded-lg border transition-smooth ${
                        user.name === "You" 
                          ? "bg-primary/10 border-primary/20" 
                          : "bg-white/5 border-white/10"
                      }`}
                    >
                      <div className="flex items-center justify-center w-10">
                        {getRankIcon(user.rank)}
                      </div>
                      
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-secondary" />
                      
                      <div className="flex-1">
                        <div className="font-medium">{user.name}</div>
                        <div className="text-sm text-muted-foreground">{user.hours} hours studied</div>
                      </div>
                      
                      <div className="text-right">
                        <div className="font-bold text-lg">{user.points}</div>
                        <div className="text-sm text-green-500">{user.trend}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Milestones Tab */}
          <TabsContent value="milestones" className="space-y-6">
            <Card className="glass border-white/20">
              <CardHeader>
                <CardTitle className="text-primary">Learning Journey</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {milestones.map((milestone, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 rounded-lg bg-white/5">
                      <div className={`w-4 h-4 rounded-full border-2 ${
                        milestone.completed 
                          ? 'bg-green-500 border-green-500' 
                          : 'border-gray-400'
                      }`}>
                        {milestone.completed && (
                          <div className="w-full h-full flex items-center justify-center">
                            <div className="w-2 h-2 bg-white rounded-full" />
                          </div>
                        )}
                      </div>
                      
                      <div className="flex-1">
                        <div className={`font-medium ${
                          milestone.completed ? 'text-green-500' : ''
                        }`}>
                          {milestone.title}
                        </div>
                        <div className="text-sm text-muted-foreground">{milestone.date}</div>
                      </div>
                      
                      {!milestone.completed && milestone.progress && (
                        <div className="w-24">
                          <Progress value={milestone.progress} />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ProgressWall;