import Navbar from "@/components/Navbar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { BookOpen, Brain, CalendarDays, CheckCircle, Clock, Plus, Target, TrendingUp } from "lucide-react";
import { useState } from "react";

const ExamPlanner = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [selectedExam, setSelectedExam] = useState("calculus");

  const upcomingExams = [
    {
      id: "calculus",
      subject: "Advanced Calculus",
      date: "2024-02-15",
      daysLeft: 12,
      progress: 68,
      priority: "high",
      topics: ["Derivatives", "Integrals", "Limits", "Series"],
      studyHours: 45,
      targetHours: 60
    },
    {
      id: "physics",
      subject: "Physics Mechanics", 
      date: "2024-02-22",
      daysLeft: 19,
      progress: 45,
      priority: "medium",
      topics: ["Kinematics", "Dynamics", "Energy", "Momentum"],
      studyHours: 28,
      targetHours: 50
    },
    {
      id: "chemistry",
      subject: "Organic Chemistry",
      date: "2024-03-01",
      daysLeft: 26,
      progress: 30,
      priority: "low",
      topics: ["Reactions", "Mechanisms", "Stereochemistry"],
      studyHours: 15,
      targetHours: 40
    }
  ];

  const todaysTasks = [
    {
      id: 1,
      title: "Review Integration by Parts",
      subject: "Calculus",
      duration: "45 min",
      priority: "high",
      completed: false,
      type: "practice"
    },
    {
      id: 2,
      title: "Watch Momentum Conservation Video",
      subject: "Physics",
      duration: "30 min", 
      priority: "medium",
      completed: true,
      type: "video"
    },
    {
      id: 3,
      title: "Flashcards: Organic Reactions",
      subject: "Chemistry",
      duration: "20 min",
      priority: "low",
      completed: false,
      type: "flashcards"
    }
  ];

  const weeklySchedule = [
    { day: "Monday", tasks: 3, hours: 2.5, completed: 2 },
    { day: "Tuesday", tasks: 4, hours: 3, completed: 4 },
    { day: "Wednesday", tasks: 2, hours: 1.5, completed: 1 },
    { day: "Thursday", tasks: 5, hours: 4, completed: 0 },
    { day: "Friday", tasks: 3, hours: 2, completed: 0 },
    { day: "Saturday", tasks: 6, hours: 5, completed: 0 },
    { day: "Sunday", tasks: 4, hours: 3, completed: 0 }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "text-red-500 bg-red-500/20";
      case "medium": return "text-yellow-500 bg-yellow-500/20";
      case "low": return "text-green-500 bg-green-500/20";
      default: return "text-gray-500 bg-gray-500/20";
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "practice": return <Brain className="h-4 w-4" />;
      case "video": return <BookOpen className="h-4 w-4" />;
      case "flashcards": return <Target className="h-4 w-4" />;
      default: return <BookOpen className="h-4 w-4" />;
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
              <CalendarDays className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              Smart Exam Planner
            </h1>
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            AI-powered exam preparation with personalized study schedules and progress tracking.
          </p>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 glass">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="schedule">Schedule</TabsTrigger>
            <TabsTrigger value="progress">Progress</TabsTrigger>
            <TabsTrigger value="calendar">Calendar</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              
              {/* Upcoming Exams */}
              <div className="lg:col-span-2 space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-primary">Upcoming Exams</h2>
                  <Button variant="hero">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Exam
                  </Button>
                </div>

                {upcomingExams.map((exam) => (
                  <Card 
                    key={exam.id} 
                    className={cn(
                      "glass border-white/20 hover:shadow-elegant transition-smooth cursor-pointer",
                      selectedExam === exam.id && "ring-2 ring-primary"
                    )}
                    onClick={() => setSelectedExam(exam.id)}
                  >
                    <CardHeader className="pb-4">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-xl">{exam.subject}</CardTitle>
                        <div className="flex items-center gap-2">
                          <Badge className={getPriorityColor(exam.priority)}>
                            {exam.priority} priority
                          </Badge>
                          <Badge variant="outline">
                            {exam.daysLeft} days left
                          </Badge>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                        <div>
                          <div className="text-2xl font-bold text-primary">{exam.progress}%</div>
                          <div className="text-xs text-muted-foreground">Progress</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold">{exam.studyHours}</div>
                          <div className="text-xs text-muted-foreground">Hours Studied</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold">{exam.targetHours}</div>
                          <div className="text-xs text-muted-foreground">Target Hours</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold">{exam.topics.length}</div>
                          <div className="text-xs text-muted-foreground">Topics</div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Study Progress</span>
                          <span>{exam.studyHours}/{exam.targetHours} hours</span>
                        </div>
                        <Progress value={(exam.studyHours / exam.targetHours) * 100} />
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {exam.topics.map((topic, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {topic}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Today's Tasks */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-primary">Today's Tasks</h2>
                
                <Card className="glass border-white/20">
                  <CardContent className="p-4 space-y-4">
                    {todaysTasks.map((task) => (
                      <div 
                        key={task.id} 
                        className={cn(
                          "flex items-center gap-3 p-3 rounded-lg border border-white/10 transition-smooth",
                          task.completed && "opacity-60"
                        )}
                      >
                        <Button
                          variant="ghost"
                          size="sm"
                          className={cn(
                            "p-0 h-6 w-6 rounded-full",
                            task.completed && "text-green-500"
                          )}
                        >
                          <CheckCircle className="h-4 w-4" />
                        </Button>
                        
                        <div className="flex-1">
                          <div className={cn(
                            "font-medium text-sm",
                            task.completed && "line-through"
                          )}>
                            {task.title}
                          </div>
                          <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            {getTypeIcon(task.type)}
                            <span>{task.subject}</span>
                            <Clock className="h-3 w-3" />
                            <span>{task.duration}</span>
                          </div>
                        </div>
                        
                        <Badge className={getPriorityColor(task.priority)}>
                          {task.priority}
                        </Badge>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Study Stats */}
                <Card className="glass border-white/20">
                  <CardHeader>
                    <CardTitle className="text-lg">Today's Progress</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-3xl font-bold text-primary">2.5</div>
                        <div className="text-xs text-muted-foreground">Hours Studied</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold">7</div>
                        <div className="text-xs text-muted-foreground">Tasks Left</div>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Daily Goal</span>
                        <span>2.5/4 hours</span>
                      </div>
                      <Progress value={62.5} />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Schedule Tab */}
          <TabsContent value="schedule" className="space-y-6">
            <Card className="glass border-white/20">
              <CardHeader>
                <CardTitle className="text-primary">Weekly Schedule</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {weeklySchedule.map((day, index) => (
                    <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/10">
                      <div className="flex items-center gap-4">
                        <div className="w-20 font-medium">{day.day}</div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span>{day.tasks} tasks</span>
                          <span>{day.hours} hours</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Progress value={(day.completed / day.tasks) * 100} className="w-20" />
                        <span className="text-sm font-medium">{day.completed}/{day.tasks}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Progress Tab */}
          <TabsContent value="progress" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingExams.map((exam) => (
                <Card key={exam.id} className="glass border-white/20">
                  <CardHeader>
                    <CardTitle className="text-lg">{exam.subject}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Overall Progress</span>
                        <span>{exam.progress}%</span>
                      </div>
                      <Progress value={exam.progress} />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div className="p-3 rounded-lg bg-primary/10">
                        <div className="text-xl font-bold text-primary">{exam.studyHours}</div>
                        <div className="text-xs text-muted-foreground">Hours</div>
                      </div>
                      <div className="p-3 rounded-lg bg-secondary/10">
                        <div className="text-xl font-bold">{exam.daysLeft}</div>
                        <div className="text-xs text-muted-foreground">Days Left</div>
                      </div>
                    </div>
                    
                    <Button variant="outline" className="w-full">
                      <TrendingUp className="h-4 w-4 mr-2" />
                      View Detailed Analytics
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Calendar Tab */}
          <TabsContent value="calendar" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="glass border-white/20">
                <CardHeader>
                  <CardTitle className="text-primary">Study Calendar</CardTitle>
                </CardHeader>
                <CardContent>
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className={cn("w-full pointer-events-auto")}
                  />
                </CardContent>
              </Card>
              
              <Card className="glass border-white/20">
                <CardHeader>
                  <CardTitle className="text-primary">Exam Dates</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {upcomingExams.map((exam) => (
                    <div key={exam.id} className="flex items-center justify-between p-3 rounded-lg bg-white/5">
                      <div>
                        <div className="font-medium">{exam.subject}</div>
                        <div className="text-sm text-muted-foreground">{exam.date}</div>
                      </div>
                      <Badge className={getPriorityColor(exam.priority)}>
                        {exam.daysLeft} days
                      </Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ExamPlanner;