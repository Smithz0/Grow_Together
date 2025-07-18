import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Clock, 
  BookOpen, 
  Star,
  MapPin,
  Calendar,
  Plus
} from "lucide-react";

const StudyGroups = () => {
  const groups = [
    {
      id: 1,
      title: "Advanced Calculus Study Circle",
      subject: "Mathematics",
      members: 8,
      maxMembers: 12,
      rating: 4.9,
      nextSession: "Tomorrow 7:00 PM",
      location: "Virtual",
      level: "Advanced",
      description: "Tackling differential equations and integration techniques together.",
      tags: ["Calculus", "Problem Solving", "Peer Teaching"]
    },
    {
      id: 2,
      title: "Organic Chemistry Lab Partners",
      subject: "Chemistry",
      members: 6,
      maxMembers: 8,
      rating: 4.8,
      nextSession: "Today 3:00 PM",
      location: "Library Room 204",
      level: "Intermediate",
      description: "Working through synthesis problems and reaction mechanisms.",
      tags: ["Organic Chemistry", "Lab Work", "MCAT Prep"]
    },
    {
      id: 3,
      title: "Data Structures & Algorithms",
      subject: "Computer Science",
      members: 10,
      maxMembers: 15,
      rating: 4.7,
      nextSession: "Wed 6:30 PM",
      location: "Virtual",
      level: "Intermediate",
      description: "Coding practice sessions and technical interview preparation.",
      tags: ["Programming", "Interviews", "Python", "Java"]
    },
    {
      id: 4,
      title: "Spanish Conversation Circle",
      subject: "Languages",
      members: 12,
      maxMembers: 12,
      rating: 4.9,
      nextSession: "Fri 5:00 PM",
      location: "Student Center",
      level: "Beginner",
      description: "Practice conversational Spanish in a supportive environment.",
      tags: ["Speaking", "Grammar", "Culture"]
    },
    {
      id: 5,
      title: "Psychology Research Methods",
      subject: "Psychology",
      members: 7,
      maxMembers: 10,
      rating: 4.6,
      nextSession: "Mon 4:00 PM",
      location: "Virtual",
      level: "Advanced",
      description: "Analyzing research papers and designing experiments together.",
      tags: ["Research", "Statistics", "Writing"]
    },
    {
      id: 6,
      title: "Business Case Study Group",
      subject: "Business",
      members: 9,
      maxMembers: 12,
      rating: 4.8,
      nextSession: "Thu 7:00 PM",
      location: "Business Building",
      level: "Advanced",
      description: "Harvard Business School case analysis and presentations.",
      tags: ["Strategy", "Finance", "Marketing"]
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Beginner": return "bg-success/10 text-success";
      case "Intermediate": return "bg-warning/10 text-warning";
      case "Advanced": return "bg-accent/10 text-accent";
      default: return "bg-muted/10 text-muted-foreground";
    }
  };

  return (
    <section id="groups" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Users className="h-4 w-4" />
            <span>Active Study Groups</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Find Your Perfect{" "}
            <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
              Study Community
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Join existing groups or create your own. Connect with students who share your academic goals 
            and learning style for maximum productivity.
          </p>

          <Button variant="hero" size="lg" className="group">
            <Plus className="mr-2 h-5 w-5" />
            Create New Group
          </Button>
        </div>

        {/* Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {groups.map((group) => (
            <Card key={group.id} className="hover-lift border-0 shadow-elegant hover:shadow-glow transition-smooth group">
              <CardContent className="p-6">
                <div className="space-y-4">
                  {/* Header */}
                  <div className="flex justify-between items-start">
                    <Badge variant="secondary" className="text-xs">
                      {group.subject}
                    </Badge>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-warning fill-warning" />
                      <span className="text-sm font-medium">{group.rating}</span>
                    </div>
                  </div>

                  {/* Title and Description */}
                  <div>
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-smooth">
                      {group.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      {group.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1">
                    {group.tags.map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span>{group.members}/{group.maxMembers} members</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge className={`text-xs ${getLevelColor(group.level)}`}>
                        {group.level}
                      </Badge>
                    </div>
                  </div>

                  {/* Next Session */}
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span>{group.nextSession}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span>{group.location}</span>
                    </div>
                  </div>

                  {/* Action Button */}
                  <Button 
                    className="w-full" 
                    variant={group.members === group.maxMembers ? "outline" : "default"}
                  >
                    {group.members === group.maxMembers ? "Join Waitlist" : "Join Group"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Groups
          </Button>
        </div>
      </div>
    </section>
  );
};

export default StudyGroups;