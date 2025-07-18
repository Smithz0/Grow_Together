import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MessageCircle, Users, TrendingUp, Calendar, Heart, MessageSquare, Share2 } from "lucide-react";
import NewPostModal from "@/components/modals/NewPostModal";
import CreateGroupModal from "@/components/modals/CreateGroupModal";

const Community = () => {
  const [newPostModalOpen, setNewPostModalOpen] = useState(false);
  const [createGroupModalOpen, setCreateGroupModalOpen] = useState(false);
  const discussions = [
    {
      id: 1,
      title: "Study Tips for Final Exams",
      author: "Sarah Chen",
      avatar: "/placeholder.svg",
      time: "2 hours ago",
      category: "Study Tips",
      replies: 24,
      likes: 45,
      content: "What are your best strategies for managing multiple final exams? I'm looking for effective time management techniques..."
    },
    {
      id: 2,
      title: "Math Study Group - Calculus II",
      author: "Alex Rodriguez",
      avatar: "/placeholder.svg",
      time: "4 hours ago",
      category: "Study Groups",
      replies: 12,
      likes: 28,
      content: "Looking for 2-3 more students to join our Calculus II study group. We meet twice a week and focus on problem-solving..."
    },
    {
      id: 3,
      title: "Best Apps for Note-taking",
      author: "Emily Johnson",
      avatar: "/placeholder.svg",
      time: "1 day ago",
      category: "Resources",
      replies: 36,
      likes: 62,
      content: "I've been experimenting with different note-taking apps. Here's my comparison of the top 5 options..."
    }
  ];

  const categories = [
    { name: "Study Tips", count: 128, icon: TrendingUp },
    { name: "Study Groups", count: 94, icon: Users },
    { name: "Resources", count: 156, icon: MessageCircle },
    { name: "Events", count: 42, icon: Calendar }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20">
      {/* Header */}
      <div className="glass border-b border-white/20 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Community Hub
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Connect with fellow students, share knowledge, and grow together
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Categories Sidebar */}
          <div className="lg:col-span-1">
            <Card className="glass border-white/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageCircle className="h-5 w-5" />
                  Categories
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {categories.map((category) => (
                  <div
                    key={category.name}
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-white/10 transition-smooth cursor-pointer"
                  >
                    <div className="flex items-center gap-2">
                      <category.icon className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium">{category.name}</span>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {category.count}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="glass border-white/20 mt-6">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full" variant="hero" onClick={() => setNewPostModalOpen(true)}>
                  Start Discussion
                </Button>
                <Button className="w-full" variant="outline" onClick={() => setCreateGroupModalOpen(true)}>
                  Find Study Group
                </Button>
                <Button className="w-full" variant="ghost">
                  Browse Resources
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-primary">Recent Discussions</h2>
              <Button variant="hero" onClick={() => setNewPostModalOpen(true)}>New Post</Button>
            </div>

            <div className="space-y-6">
              {discussions.map((discussion) => (
                <Card key={discussion.id} className="glass border-white/20 hover:shadow-elegant transition-smooth">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={discussion.avatar} alt={discussion.author} />
                        <AvatarFallback>{discussion.author.charAt(0)}</AvatarFallback>
                      </Avatar>
                      
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3 className="text-lg font-semibold text-primary hover:text-primary-glow transition-smooth cursor-pointer">
                              {discussion.title}
                            </h3>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <span>{discussion.author}</span>
                              <span>•</span>
                              <span>{discussion.time}</span>
                            </div>
                          </div>
                          <Badge variant="outline" className="ml-4">
                            {discussion.category}
                          </Badge>
                        </div>
                        
                        <p className="text-foreground/80 mb-4 line-clamp-2">
                          {discussion.content}
                        </p>
                        
                        <div className="flex items-center gap-6 text-sm text-muted-foreground">
                          <button className="flex items-center gap-1 hover:text-primary transition-smooth">
                            <Heart className="h-4 w-4" />
                            {discussion.likes}
                          </button>
                          <button className="flex items-center gap-1 hover:text-primary transition-smooth">
                            <MessageSquare className="h-4 w-4" />
                            {discussion.replies}
                          </button>
                          <button className="flex items-center gap-1 hover:text-primary transition-smooth">
                            <Share2 className="h-4 w-4" />
                            Share
                          </button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-8">
              <Button variant="outline" size="lg">
                Load More Discussions
              </Button>
            </div>
          </div>
        </div>
      </div>

      <NewPostModal 
        open={newPostModalOpen} 
        onOpenChange={setNewPostModalOpen} 
      />
      <CreateGroupModal 
        open={createGroupModalOpen} 
        onOpenChange={setCreateGroupModalOpen} 
      />
    </div>
  );
};

export default Community;