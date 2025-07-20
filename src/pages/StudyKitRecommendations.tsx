import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Star, BookOpen, Video, FileText, Headphones, ExternalLink, Search, Filter, Heart, Share2, Download } from "lucide-react";

const StudyKitRecommendations = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Resources", count: 156 },
    { id: "textbooks", name: "Textbooks", count: 45 },
    { id: "videos", name: "Video Courses", count: 38 },
    { id: "podcasts", name: "Podcasts", count: 22 },
    { id: "articles", name: "Articles", count: 51 }
  ];

  const personalizedRecommendations = [
    {
      id: 1,
      title: "Calculus: Early Transcendentals",
      author: "James Stewart",
      type: "textbook",
      rating: 4.8,
      reviews: 2340,
      description: "Comprehensive calculus textbook perfect for your current Advanced Calculus study group",
      price: "$299",
      freeAlternative: true,
      tags: ["Mathematics", "Calculus", "University Level"],
      matchReason: "Based on your Advanced Calculus study group",
      thumbnail: "/placeholder.svg",
      difficulty: "Intermediate"
    },
    {
      id: 2,
      title: "3Blue1Brown - Essence of Calculus",
      author: "Grant Sanderson", 
      type: "video",
      rating: 4.9,
      reviews: 15600,
      description: "Visual and intuitive approach to understanding calculus concepts",
      price: "Free",
      freeAlternative: false,
      tags: ["Mathematics", "Visual Learning", "YouTube"],
      matchReason: "Matches your visual learning preference",
      thumbnail: "/placeholder.svg",
      difficulty: "Beginner"
    },
    {
      id: 3,
      title: "The Calculus Lifesaver",
      author: "Adrian Banner",
      type: "textbook",
      rating: 4.7,
      reviews: 892,
      description: "Student-friendly guide to conquering calculus with clear explanations",
      price: "$89",
      freeAlternative: true,
      tags: ["Mathematics", "Study Guide", "Problem Solving"],
      matchReason: "Popular among students in similar study groups",
      thumbnail: "/placeholder.svg", 
      difficulty: "Beginner"
    }
  ];

  const trendingResources = [
    {
      id: 4,
      title: "Khan Academy Physics",
      type: "video",
      rating: 4.6,
      popularity: 95,
      description: "Free comprehensive physics course"
    },
    {
      id: 5,
      title: "Organic Chemistry Tutor",
      type: "video", 
      rating: 4.8,
      popularity: 92,
      description: "Popular chemistry and math tutorials"
    },
    {
      id: 6,
      title: "MIT OpenCourseWare",
      type: "article",
      rating: 4.9,
      popularity: 88,
      description: "Free MIT course materials"
    }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "textbook": return <BookOpen className="h-4 w-4" />;
      case "video": return <Video className="h-4 w-4" />;
      case "article": return <FileText className="h-4 w-4" />;
      case "podcast": return <Headphones className="h-4 w-4" />;
      default: return <BookOpen className="h-4 w-4" />;
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner": return "bg-green-500/20 text-green-500";
      case "Intermediate": return "bg-yellow-500/20 text-yellow-500";
      case "Advanced": return "bg-red-500/20 text-red-500";
      default: return "bg-gray-500/20 text-gray-500";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
      <div className="container mx-auto px-4 py-8">
        
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 rounded-full bg-gradient-to-r from-primary to-primary-glow">
              <BookOpen className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              StudyKit Recommendations
            </h1>
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover personalized study resources powered by AI. Get recommendations based on your study groups and learning preferences.
          </p>
        </div>

        {/* Search and Filters */}
        <Card className="glass border-white/20 mb-8">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Search for textbooks, videos, articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Filter className="h-4 w-4 mr-2" />
                  Filters
                </Button>
                <Button variant="outline" size="sm">
                  Free Only
                </Button>
              </div>
            </div>
            
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 mt-4">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                >
                  {category.name} ({category.count})
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="personalized" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 glass">
            <TabsTrigger value="personalized">For You</TabsTrigger>
            <TabsTrigger value="trending">Trending</TabsTrigger>
            <TabsTrigger value="saved">Saved</TabsTrigger>
          </TabsList>

          {/* Personalized Recommendations */}
          <TabsContent value="personalized" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {personalizedRecommendations.map((resource) => (
                <Card key={resource.id} className="glass border-white/20 hover:shadow-elegant transition-smooth group">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-2">
                        {getTypeIcon(resource.type)}
                        <Badge variant="secondary" className="capitalize">
                          {resource.type}
                        </Badge>
                      </div>
                      <div className="flex gap-1">
                        <Button variant="ghost" size="sm">
                          <Heart className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Share2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <CardTitle className="text-lg leading-tight">{resource.title}</CardTitle>
                      <p className="text-sm text-muted-foreground">by {resource.author}</p>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {resource.description}
                    </p>

                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-medium">{resource.rating}</span>
                        <span className="text-muted-foreground">({resource.reviews})</span>
                      </div>
                      <Badge className={getDifficultyColor(resource.difficulty)}>
                        {resource.difficulty}
                      </Badge>
                    </div>

                    <div className="flex flex-wrap gap-1">
                      {resource.tags.slice(0, 3).map((tag, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="bg-primary/10 rounded-lg p-3">
                      <p className="text-xs text-primary font-medium">
                        💡 {resource.matchReason}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <div>
                        <span className="font-bold text-lg">{resource.price}</span>
                        {resource.freeAlternative && (
                          <span className="text-xs text-green-600 ml-2">Free version available</span>
                        )}
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                        <Button variant="hero" size="sm">
                          View Details
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Trending Resources */}
          <TabsContent value="trending" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {trendingResources.map((resource, index) => (
                <Card key={resource.id} className="glass border-white/20 hover:shadow-elegant transition-smooth">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="text-2xl font-bold text-primary">#{index + 1}</div>
                        {getTypeIcon(resource.type)}
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium">Popularity</div>
                        <Progress value={resource.popularity} className="w-16" />
                      </div>
                    </div>
                    <CardTitle className="text-lg">{resource.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">{resource.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-medium">{resource.rating}</span>
                      </div>
                      <Button variant="hero" size="sm">
                        Explore
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Saved Resources */}
          <TabsContent value="saved" className="space-y-6">
            <div className="text-center py-12">
              <BookOpen className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-primary mb-2">No Saved Resources Yet</h3>
              <p className="text-muted-foreground max-w-md mx-auto mb-6">
                Start saving resources by clicking the heart icon on any recommendation. 
                Build your personal study library!
              </p>
              <Button variant="hero">
                Explore Recommendations
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default StudyKitRecommendations;