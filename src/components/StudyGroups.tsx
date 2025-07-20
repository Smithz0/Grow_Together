import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Clock, BookOpen, MapPin, Star } from "lucide-react";
import CreateGroupModal from "./modals/CreateGroupModal";
import JoinGroupModal from "./modals/JoinGroupModal";

const StudyGroups = () => {
  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [joinModalOpen, setJoinModalOpen] = useState(false);
  const [selectedGroup, setSelectedGroup] = useState<any>(null);
  const [showAllGroups, setShowAllGroups] = useState(false);
  const [studyGroups, setStudyGroups] = useState([
    {
      id: "1",
      name: "Advanced Calculus Masters",
      subject: "Mathematics",
      level: "Undergraduate",
      members: 8,
      maxMembers: 12,
      meetingFrequency: "Twice Weekly",
      location: "Online",
      rating: 4.8,
      tags: ["Problem Solving", "Exam Prep"],
      description: "Focused on mastering advanced calculus concepts with weekly problem-solving sessions and exam preparation.",
      nextMeeting: "Tomorrow 7:00 PM"
    },
    {
      id: "2", 
      name: "Physics Problem Solvers",
      subject: "Physics",
      level: "High School",
      members: 6,
      maxMembers: 10,
      meetingFrequency: "Weekly",
      location: "Hybrid",
      rating: 4.9,
      tags: ["Mechanics", "Thermodynamics"],
      description: "Weekly physics problem-solving sessions covering mechanics, thermodynamics, and electromagnetism.",
      nextMeeting: "Friday 3:00 PM"
    },
    {
      id: "3",
      name: "CS Algorithm Study Circle", 
      subject: "Computer Science",
      level: "Graduate",
      members: 5,
      maxMembers: 8,
      meetingFrequency: "Weekly",
      location: "Online",
      rating: 4.7,
      tags: ["Algorithms", "Data Structures"],
      description: "Graduate-level study group focusing on advanced algorithms and data structures for technical interviews.",
      nextMeeting: "Sunday 2:00 PM"
    }
  ]);

  const handleCreateGroup = (groupData: any) => {
    const newGroup = {
      id: String(studyGroups.length + 1),
      members: 1,
      rating: 5.0,
      nextMeeting: "TBD",
      ...groupData
    };
    setStudyGroups([...studyGroups, newGroup]);
  };

  const displayedGroups = showAllGroups ? studyGroups : studyGroups.slice(0, 6);

  const handleJoinGroup = (group: any) => {
    setSelectedGroup(group);
    setJoinModalOpen(true);
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

          <div className="flex gap-4 justify-center">
            <Button variant="hero" onClick={() => setCreateModalOpen(true)}>
              Create New Group
            </Button>
            <Button variant="outline" onClick={() => setShowAllGroups(!showAllGroups)}>
              {showAllGroups ? "Show Less" : "Browse All Groups"}
            </Button>
          </div>
        </div>

        {/* Study Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedGroups.map((group) => (
            <Card key={group.id} className="glass border-white/20 hover:shadow-elegant transition-smooth group">
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
                      {group.name}
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
                      <Badge variant="outline" className="text-xs">
                        {group.level}
                      </Badge>
                    </div>
                  </div>

                  {/* Next Meeting */}
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>{group.nextMeeting}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span>{group.location}</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 pt-4">
                    <Button 
                      variant="hero" 
                      className="flex-1"
                      onClick={() => handleJoinGroup(group)}
                    >
                      Join Group
                    </Button>
                    <Button variant="outline" className="flex-1">
                      View Details
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        {!showAllGroups && studyGroups.length > 6 && (
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" onClick={() => setShowAllGroups(true)}>
              View All {studyGroups.length} Groups
            </Button>
          </div>
        )}
      </div>

      <CreateGroupModal 
        open={createModalOpen} 
        onOpenChange={setCreateModalOpen} 
        onCreateGroup={handleCreateGroup}
      />
      <JoinGroupModal 
        open={joinModalOpen} 
        onOpenChange={setJoinModalOpen}
        group={selectedGroup}
      />
    </section>
  );
};

export default StudyGroups;