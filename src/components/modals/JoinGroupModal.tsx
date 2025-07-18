import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { Users, Clock, BookOpen } from "lucide-react";

interface JoinGroupModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  group?: {
    id: string;
    name: string;
    subject: string;
    level: string;
    members: number;
    maxMembers: number;
    meetingFrequency: string;
    description: string;
  } | null;
}

const JoinGroupModal = ({ open, onOpenChange, group }: JoinGroupModalProps) => {
  const [message, setMessage] = useState("");
  const [isJoining, setIsJoining] = useState(false);
  const { toast } = useToast();

  const handleJoin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsJoining(true);

    // Simulate join request
    setTimeout(() => {
      toast({
        title: "Join Request Sent!",
        description: `Your request to join "${group?.name}" has been sent to the group admin. You'll be notified once it's approved.`,
      });
      
      setMessage("");
      setIsJoining(false);
      onOpenChange(false);
    }, 1000);
  };

  if (!group) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] glass border-white/20">
        <DialogHeader>
          <DialogTitle className="text-primary">Join Study Group</DialogTitle>
          <DialogDescription>
            Send a request to join this study group
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Group Info */}
          <div className="space-y-4 p-4 rounded-lg bg-white/5 border border-white/10">
            <div>
              <h3 className="text-lg font-semibold text-primary">{group.name}</h3>
              <p className="text-sm text-muted-foreground mt-1">{group.description}</p>
            </div>
            
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="flex items-center gap-1">
                <BookOpen className="h-3 w-3" />
                {group.subject}
              </Badge>
              <Badge variant="outline">{group.level}</Badge>
              <Badge variant="outline" className="flex items-center gap-1">
                <Users className="h-3 w-3" />
                {group.members}/{group.maxMembers} members
              </Badge>
              <Badge variant="outline" className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {group.meetingFrequency}
              </Badge>
            </div>
          </div>

          {/* Join Form */}
          <form onSubmit={handleJoin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="message">Introduction Message (Optional)</Label>
              <Textarea
                id="message"
                placeholder="Tell the group admin why you'd like to join and what you can contribute..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={3}
              />
            </div>

            <div className="flex gap-3 pt-4">
              <Button 
                type="button" 
                variant="outline" 
                onClick={() => onOpenChange(false)} 
                className="flex-1"
                disabled={isJoining}
              >
                Cancel
              </Button>
              <Button 
                type="submit" 
                variant="hero" 
                className="flex-1"
                disabled={isJoining}
              >
                {isJoining ? "Sending..." : "Send Join Request"}
              </Button>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default JoinGroupModal;