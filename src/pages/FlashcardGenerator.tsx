import Navbar from "@/components/Navbar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { BookOpen, Brain, CheckCircle, Plus, RotateCcw, Sparkles, Target, XCircle } from "lucide-react";
import { useState } from "react";

const FlashcardGenerator = () => {
  const [topic, setTopic] = useState("");
  const [difficulty, setDifficulty] = useState("medium");
  const [currentCard, setCurrentCard] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [studyProgress, setStudyProgress] = useState(65);
  const { toast } = useToast();

  const flashcards = [
    {
      id: 1,
      question: "What is the derivative of sin(x)?",
      answer: "cos(x)",
      subject: "Calculus",
      difficulty: "Easy",
      confidence: 85
    },
    {
      id: 2,
      question: "Explain the concept of limits in calculus",
      answer: "A limit describes the value that a function approaches as the input approaches some value. It's fundamental to defining derivatives and integrals.",
      subject: "Calculus", 
      difficulty: "Medium",
      confidence: 60
    },
    {
      id: 3,
      question: "What is integration by parts?",
      answer: "∫u dv = uv - ∫v du. It's a technique for evaluating integrals where the integrand is a product of two functions.",
      subject: "Calculus",
      difficulty: "Hard", 
      confidence: 40
    }
  ];

  const recentSets = [
    { name: "Calculus Derivatives", cards: 15, lastStudied: "2 hours ago", progress: 80 },
    { name: "Physics Mechanics", cards: 20, lastStudied: "Yesterday", progress: 65 },
    { name: "Chemistry Bonds", cards: 12, lastStudied: "3 days ago", progress: 90 }
  ];

  const handleGenerateCards = () => {
    if (!topic.trim()) {
      toast({
        title: "Topic Required",
        description: "Please enter a topic to generate flashcards",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Generating Flashcards",
      description: `Creating AI-powered flashcards for "${topic}"...`,
    });

    // Simulate AI generation
    setTimeout(() => {
      toast({
        title: "Flashcards Generated!",
        description: `Created 10 new flashcards for ${topic}`,
      });
    }, 2000);
  };

  const handleCardAction = (action: "easy" | "medium" | "hard") => {
    const actions = {
      easy: "Easy! This card will appear less frequently.",
      medium: "Good! This card will appear at regular intervals.", 
      hard: "Keep practicing! This card will appear more often."
    };

    toast({
      description: actions[action],
    });

    // Move to next card
    if (currentCard < flashcards.length - 1) {
      setCurrentCard(currentCard + 1);
    } else {
      setCurrentCard(0);
    }
    setShowAnswer(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 pt-16">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 rounded-full bg-gradient-to-r from-primary to-primary-glow">
              <Brain className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              AI Flashcard Generator
            </h1>
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Create intelligent flashcards powered by AI. Study smarter with adaptive learning algorithms.
          </p>
        </div>

        <Tabs defaultValue="study" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 glass">
            <TabsTrigger value="study">Study Session</TabsTrigger>
            <TabsTrigger value="generate">Generate Cards</TabsTrigger>
            <TabsTrigger value="library">My Library</TabsTrigger>
          </TabsList>

          {/* Study Session Tab */}
          <TabsContent value="study" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              
              {/* Study Progress */}
              <div className="lg:col-span-1">
                <Card className="glass border-white/20">
                  <CardHeader>
                    <CardTitle className="text-primary flex items-center gap-2">
                      <Target className="h-5 w-5" />
                      Session Progress
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary mb-2">
                        {currentCard + 1}/{flashcards.length}
                      </div>
                      <Progress value={(currentCard + 1) / flashcards.length * 100} className="mb-4" />
                      <p className="text-sm text-muted-foreground">Cards Reviewed</p>
                    </div>

                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Overall Progress</span>
                        <span className="font-medium">{studyProgress}%</span>
                      </div>
                      <Progress value={studyProgress} />
                    </div>

                    <div className="grid grid-cols-3 gap-2 text-center">
                      <div className="p-3 rounded-lg bg-green-500/10">
                        <div className="text-green-500 font-bold">12</div>
                        <div className="text-xs text-muted-foreground">Easy</div>
                      </div>
                      <div className="p-3 rounded-lg bg-yellow-500/10">
                        <div className="text-yellow-500 font-bold">8</div>
                        <div className="text-xs text-muted-foreground">Medium</div>
                      </div>
                      <div className="p-3 rounded-lg bg-red-500/10">
                        <div className="text-red-500 font-bold">5</div>
                        <div className="text-xs text-muted-foreground">Hard</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Flashcard */}
              <div className="lg:col-span-2">
                <Card className="glass border-white/20 min-h-[500px] flex flex-col">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary">{flashcards[currentCard]?.subject}</Badge>
                        <Badge variant="outline">{flashcards[currentCard]?.difficulty}</Badge>
                      </div>
                      <Button variant="ghost" size="sm">
                        <RotateCcw className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="flex-1 flex flex-col justify-center text-center p-8">
                    <div className="space-y-6">
                      <div className="text-lg font-medium text-primary mb-4">
                        {showAnswer ? "Answer" : "Question"}
                      </div>
                      
                      <div className="text-xl leading-relaxed min-h-[100px] flex items-center justify-center">
                        {showAnswer 
                          ? flashcards[currentCard]?.answer 
                          : flashcards[currentCard]?.question
                        }
                      </div>

                      {!showAnswer ? (
                        <Button 
                          onClick={() => setShowAnswer(true)}
                          variant="hero"
                          size="lg"
                          className="mt-8"
                        >
                          Show Answer
                        </Button>
                      ) : (
                        <div className="space-y-4 mt-8">
                          <p className="text-sm text-muted-foreground">How well did you know this?</p>
                          <div className="flex gap-3 justify-center">
                            <Button 
                              onClick={() => handleCardAction("hard")}
                              variant="outline"
                              className="text-red-500 border-red-500/20 hover:bg-red-500/10"
                            >
                              <XCircle className="h-4 w-4 mr-2" />
                              Hard
                            </Button>
                            <Button 
                              onClick={() => handleCardAction("medium")}
                              variant="outline"
                              className="text-yellow-500 border-yellow-500/20 hover:bg-yellow-500/10"
                            >
                              <RotateCcw className="h-4 w-4 mr-2" />
                              Medium
                            </Button>
                            <Button 
                              onClick={() => handleCardAction("easy")}
                              variant="outline" 
                              className="text-green-500 border-green-500/20 hover:bg-green-500/10"
                            >
                              <CheckCircle className="h-4 w-4 mr-2" />
                              Easy
                            </Button>
                          </div>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Generate Cards Tab */}
          <TabsContent value="generate" className="space-y-6">
            <Card className="glass border-white/20">
              <CardHeader>
                <CardTitle className="text-primary flex items-center gap-2">
                  <Sparkles className="h-5 w-5" />
                  AI Flashcard Generator
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Topic</label>
                      <Input 
                        placeholder="e.g., Calculus Derivatives, World War II, Cell Biology"
                        value={topic}
                        onChange={(e) => setTopic(e.target.value)}
                      />
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium mb-2 block">Additional Context (Optional)</label>
                      <Textarea 
                        placeholder="Add any specific concepts, formulas, or areas you want to focus on..."
                        rows={3}
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Difficulty Level</label>
                      <div className="grid grid-cols-3 gap-2">
                        {["easy", "medium", "hard"].map((level) => (
                          <Button
                            key={level}
                            variant={difficulty === level ? "default" : "outline"}
                            onClick={() => setDifficulty(level)}
                            className="capitalize"
                          >
                            {level}
                          </Button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-2 block">Number of Cards</label>
                      <Input type="number" defaultValue="10" min="5" max="50" />
                    </div>
                  </div>
                </div>

                <Button 
                  onClick={handleGenerateCards}
                  variant="hero" 
                  size="lg"
                  className="w-full"
                  disabled={!topic.trim()}
                >
                  <Sparkles className="h-5 w-5 mr-2" />
                  Generate Flashcards with AI
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Library Tab */}
          <TabsContent value="library" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-primary">My Flashcard Library</h2>
              <Button variant="hero">
                <Plus className="h-4 w-4 mr-2" />
                Create Set
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recentSets.map((set, index) => (
                <Card key={index} className="glass border-white/20 hover:shadow-elegant transition-smooth">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{set.name}</CardTitle>
                      <BookOpen className="h-5 w-5 text-primary" />
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between text-sm">
                      <span>{set.cards} cards</span>
                      <span className="text-muted-foreground">{set.lastStudied}</span>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Progress</span>
                        <span>{set.progress}%</span>
                      </div>
                      <Progress value={set.progress} />
                    </div>

                    <Button variant="outline" className="w-full">
                      Continue Studying
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default FlashcardGenerator;