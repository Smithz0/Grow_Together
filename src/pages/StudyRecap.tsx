import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Brain, Clock, Target, TrendingUp, BookOpen, Lightbulb, RefreshCw, Download, Share2, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const StudyRecap = () => {
  const [selectedSession, setSelectedSession] = useState("today");
  const [isGenerating, setIsGenerating] = useState(false);
  const { toast } = useToast();

  const todaysRecap = {
    totalTime: "3h 45m",
    subjects: ["Calculus", "Physics"],
    keyTopics: ["Integration by Parts", "Momentum Conservation", "Limit Theorems"],
    productivity: 85,
    focusTime: "2h 12m",
    breakTime: "33m",
    achievements: ["Completed 5 practice problems", "Maintained 90% focus rate"],
    nextSteps: ["Review chain rule applications", "Practice momentum problems", "Join tomorrow's study group"]
  };

  const weeklyRecap = {
    totalTime: "18h 30m",
    subjects: ["Calculus", "Physics", "Chemistry"],
    avgDaily: "3h 42m",
    productivity: 78,
    topicsMastered: 12,
    studyGoalProgress: 92,
    achievements: ["7-day study streak", "Joined 3 study groups", "Completed 25 flashcard sets"],
    insights: ["Most productive time: 2-4 PM", "Best subject performance: Mathematics", "Suggested: More chemistry practice"]
  };

  const monthlyRecap = {
    totalTime: "72h 15m",
    subjects: ["Calculus", "Physics", "Chemistry", "Biology"],
    productivity: 82,
    topicsMastered: 48,
    studyGoalProgress: 89,
    achievements: ["Maintained 85%+ productivity", "Led 5 study sessions", "Created 8 flashcard sets"],
    insights: ["Strongest skill: Problem solving", "Growth area: Time management", "Recommendation: Focus on weak topics"]
  };

  const aiInsights = [
    {
      type: "strength",
      title: "Mathematical Problem Solving",
      description: "You excel at breaking down complex calculus problems into manageable steps",
      confidence: 92
    },
    {
      type: "improvement",
      title: "Physics Concept Application",
      description: "Consider spending more time connecting theoretical concepts to real-world examples",
      confidence: 78
    },
    {
      type: "strategy",
      title: "Study Schedule Optimization",
      description: "Your peak focus hours are 2-4 PM. Consider scheduling challenging topics during this time",
      confidence: 85
    }
  ];

  const studySessions = [
    {
      id: 1,
      date: "Today",
      subject: "Advanced Calculus",
      duration: "2h 15m",
      topics: ["Integration by Parts", "Partial Fractions"],
      efficiency: 88,
      notes: "Made significant progress on integration techniques"
    },
    {
      id: 2,
      date: "Yesterday", 
      subject: "Physics Mechanics",
      duration: "1h 30m",
      topics: ["Momentum Conservation", "Elastic Collisions"],
      efficiency: 82,
      notes: "Need to review collision formulas"
    },
    {
      id: 3,
      date: "2 days ago",
      subject: "Organic Chemistry",
      duration: "45m",
      topics: ["Reaction Mechanisms", "Stereochemistry"],
      efficiency: 75,
      notes: "Struggled with mechanism arrows"
    }
  ];

  const handleGenerateRecap = async () => {
    setIsGenerating(true);
    
    // Simulate AI generation
    setTimeout(() => {
      toast({
        title: "Study Recap Generated!",
        description: "Your personalized AI study summary is ready.",
      });
      setIsGenerating(false);
    }, 3000);
  };

  const getInsightIcon = (type: string) => {
    switch (type) {
      case "strength": return <Target className="h-5 w-5 text-green-500" />;
      case "improvement": return <TrendingUp className="h-5 w-5 text-yellow-500" />;
      case "strategy": return <Lightbulb className="h-5 w-5 text-blue-500" />;
      default: return <Brain className="h-5 w-5" />;
    }
  };

  const getRecapData = () => {
    switch (selectedSession) {
      case "today": return todaysRecap;
      case "week": return weeklyRecap;
      case "month": return monthlyRecap;
      default: return todaysRecap;
    }
  };

  const recapData = getRecapData();

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
      <div className="container mx-auto px-4 py-8">
        
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 rounded-full bg-gradient-to-r from-primary to-primary-glow">
              <Brain className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              AI Study Recap
            </h1>
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Get personalized insights and summaries of your study sessions powered by AI.
          </p>
        </div>

        {/* Period Selector */}
        <div className="flex justify-center mb-8">
          <div className="flex gap-2 p-1 rounded-lg bg-white/10 border border-white/20">
            {[
              { id: "today", label: "Today" },
              { id: "week", label: "This Week" },
              { id: "month", label: "This Month" }
            ].map((period) => (
              <Button
                key={period.id}
                variant={selectedSession === period.id ? "default" : "ghost"}
                onClick={() => setSelectedSession(period.id)}
                className="px-6"
              >
                {period.label}
              </Button>
            ))}
          </div>
        </div>

        <Tabs defaultValue="summary" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 glass">
            <TabsTrigger value="summary">Summary</TabsTrigger>
            <TabsTrigger value="insights">AI Insights</TabsTrigger>
            <TabsTrigger value="sessions">Sessions</TabsTrigger>
            <TabsTrigger value="generator">Generate</TabsTrigger>
          </TabsList>

          {/* Summary Tab */}
          <TabsContent value="summary" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              
              {/* Study Overview */}
              <Card className="glass border-white/20">
                <CardHeader>
                  <CardTitle className="text-primary flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    Study Overview
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="p-4 rounded-lg bg-primary/10">
                      <div className="text-3xl font-bold text-primary">{recapData.totalTime}</div>
                      <div className="text-sm text-muted-foreground">Total Time</div>
                    </div>
                    <div className="p-4 rounded-lg bg-secondary/10">
                      <div className="text-3xl font-bold">{recapData.productivity}%</div>
                      <div className="text-sm text-muted-foreground">Productivity</div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Productivity Score</span>
                        <span>{recapData.productivity}%</span>
                      </div>
                      <Progress value={recapData.productivity} />
                    </div>

                    {selectedSession === "today" && (
                      <>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="text-muted-foreground">Focus Time</span>
                            <div className="font-medium">{(recapData as any).focusTime}</div>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Break Time</span>
                            <div className="font-medium">{(recapData as any).breakTime}</div>
                          </div>
                        </div>
                      </>
                    )}

                    {(selectedSession === "week" || selectedSession === "month") && (
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Study Goal Progress</span>
                          <span>{recapData.studyGoalProgress}%</span>
                        </div>
                        <Progress value={recapData.studyGoalProgress} />
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Subjects & Topics */}
              <Card className="glass border-white/20">
                <CardHeader>
                  <CardTitle className="text-primary flex items-center gap-2">
                    <BookOpen className="h-5 w-5" />
                    Subjects & Topics
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-medium mb-3">Subjects Studied</h4>
                    <div className="flex flex-wrap gap-2">
                      {recapData.subjects.map((subject, index) => (
                        <Badge key={index} variant="secondary">
                          {subject}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {selectedSession === "today" && recapData.keyTopics && (
                    <div>
                      <h4 className="font-medium mb-3">Key Topics</h4>
                      <div className="space-y-2">
                        {recapData.keyTopics.map((topic, index) => (
                          <div key={index} className="flex items-center gap-2 text-sm">
                            <div className="w-2 h-2 bg-primary rounded-full" />
                            {topic}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {selectedSession !== "today" && (
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div className="p-3 rounded-lg bg-white/5">
                        <div className="text-xl font-bold">{recapData.topicsMastered}</div>
                        <div className="text-xs text-muted-foreground">Topics Mastered</div>
                      </div>
                      {selectedSession === "week" && (
                        <div className="p-3 rounded-lg bg-white/5">
                          <div className="text-xl font-bold">{recapData.avgDaily}</div>
                          <div className="text-xs text-muted-foreground">Avg Daily</div>
                        </div>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Achievements */}
              <Card className="glass border-white/20">
                <CardHeader>
                  <CardTitle className="text-primary flex items-center gap-2">
                    <Target className="h-5 w-5" />
                    Achievements
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {recapData.achievements.map((achievement, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-white/5">
                        <div className="w-2 h-2 bg-green-500 rounded-full" />
                        <span className="text-sm">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Next Steps / Insights */}
              <Card className="glass border-white/20">
                <CardHeader>
                  <CardTitle className="text-primary flex items-center gap-2">
                    <Lightbulb className="h-5 w-5" />
                    {selectedSession === "today" ? "Next Steps" : "Key Insights"}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {(selectedSession === "today" ? recapData.nextSteps : recapData.insights).map((item, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-primary/10">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* AI Insights Tab */}
          <TabsContent value="insights" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {aiInsights.map((insight, index) => (
                <Card key={index} className="glass border-white/20">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      {getInsightIcon(insight.type)}
                      <CardTitle className="text-lg capitalize">{insight.type}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <h3 className="font-medium">{insight.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {insight.description}
                    </p>
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs">
                        <span>AI Confidence</span>
                        <span>{insight.confidence}%</span>
                      </div>
                      <Progress value={insight.confidence} />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Sessions Tab */}
          <TabsContent value="sessions" className="space-y-6">
            <div className="space-y-4">
              {studySessions.map((session) => (
                <Card key={session.id} className="glass border-white/20">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-semibold">{session.subject}</h3>
                        <p className="text-sm text-muted-foreground">{session.date} • {session.duration}</p>
                      </div>
                      <Badge variant="secondary">
                        {session.efficiency}% efficiency
                      </Badge>
                    </div>
                    
                    <div className="space-y-3">
                      <div>
                        <h4 className="text-sm font-medium mb-2">Topics Covered</h4>
                        <div className="flex flex-wrap gap-2">
                          {session.topics.map((topic, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {topic}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-medium mb-1">Session Notes</h4>
                        <p className="text-sm text-muted-foreground">{session.notes}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Generator Tab */}
          <TabsContent value="generator" className="space-y-6">
            <Card className="glass border-white/20">
              <CardHeader>
                <CardTitle className="text-primary flex items-center gap-2">
                  <Sparkles className="h-5 w-5" />
                  AI Study Recap Generator
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center space-y-4">
                  <div className="p-8 rounded-lg bg-gradient-to-r from-primary/10 to-secondary/10 border border-white/20">
                    <Brain className="h-16 w-16 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Generate Personalized Study Recap</h3>
                    <p className="text-muted-foreground max-w-md mx-auto">
                      Our AI will analyze your recent study sessions and create a detailed, personalized summary with insights and recommendations.
                    </p>
                  </div>

                  <div className="flex justify-center gap-4">
                    <Button 
                      onClick={handleGenerateRecap}
                      disabled={isGenerating}
                      variant="hero"
                      size="lg"
                    >
                      {isGenerating ? (
                        <>
                          <RefreshCw className="h-5 w-5 mr-2 animate-spin" />
                          Generating...
                        </>
                      ) : (
                        <>
                          <Sparkles className="h-5 w-5 mr-2" />
                          Generate AI Recap
                        </>
                      )}
                    </Button>
                    
                    <Button variant="outline" size="lg">
                      <Download className="h-5 w-5 mr-2" />
                      Export PDF
                    </Button>
                    
                    <Button variant="outline" size="lg">
                      <Share2 className="h-5 w-5 mr-2" />
                      Share
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default StudyRecap;