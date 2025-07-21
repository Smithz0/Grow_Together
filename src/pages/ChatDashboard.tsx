import Navbar from "@/components/Navbar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MessageCircle, MoreVertical, Paperclip, Phone, Search, Send, Smile, Users, Video } from "lucide-react";
import { useState } from "react";

const ChatDashboard = () => {
  const [selectedChat, setSelectedChat] = useState("1");
  const [newMessage, setNewMessage] = useState("");

  const chatRooms = [
    {
      id: "1",
      name: "Advanced Calculus Masters",
      type: "study-group",
      members: 12,
      lastMessage: "Anyone free for practice session tomorrow?",
      lastTime: "2 min ago",
      unread: 3,
      avatar: "/placeholder.svg",
      online: true
    },
    {
      id: "2", 
      name: "Physics Problem Solvers",
      type: "study-group",
      members: 8,
      lastMessage: "Great explanation on quantum mechanics!",
      lastTime: "15 min ago",
      unread: 0,
      avatar: "/placeholder.svg",
      online: true
    },
    {
      id: "3",
      name: "Computer Science Hub",
      type: "study-group", 
      members: 15,
      lastMessage: "Check out this algorithm visualization",
      lastTime: "1 hour ago",
      unread: 1,
      avatar: "/placeholder.svg",
      online: false
    }
  ];

  const messages = [
    {
      id: "1",
      sender: "Alex Chen",
      message: "Hey everyone! Ready for tomorrow's study session?",
      time: "10:30 AM",
      avatar: "/placeholder.svg",
      isMe: false
    },
    {
      id: "2", 
      sender: "You",
      message: "Absolutely! I've prepared some practice problems",
      time: "10:32 AM",
      avatar: "/placeholder.svg",
      isMe: true
    },
    {
      id: "3",
      sender: "Sarah Kim",
      message: "Perfect! Should we meet in the library or online?",
      time: "10:35 AM", 
      avatar: "/placeholder.svg",
      isMe: false
    }
  ];

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // Add message logic here
      setNewMessage("");
    }
  };

  return (
    <div className="min-h-screen pt-16">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-12 h-[calc(100vh-8rem)] gap-6">
          
          {/* Chat Sidebar */}
          <div className="col-span-12 lg:col-span-4 xl:col-span-3">
            <Card className="h-full glass border-white/20">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-primary flex items-center gap-2">
                    <MessageCircle className="h-5 w-5" />
                    Study Chats
                  </CardTitle>
                  <Button variant="ghost" size="sm">
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </div>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search chats..." className="pl-10" />
                </div>
              </CardHeader>
              
              <CardContent className="p-0">
                <ScrollArea className="h-[calc(100vh-16rem)]">
                  {chatRooms.map((chat) => (
                    <div
                      key={chat.id}
                      className={`p-4 cursor-pointer transition-all hover:bg-white/5 border-b border-white/10 ${
                        selectedChat === chat.id ? "bg-primary/10" : ""
                      }`}
                      onClick={() => setSelectedChat(chat.id)}
                    >
                      <div className="flex items-center gap-3">
                        <div className="relative">
                          <Avatar className="h-12 w-12">
                            <AvatarImage src={chat.avatar} />
                            <AvatarFallback>{chat.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          {chat.online && (
                            <div className="absolute -bottom-1 -right-1 h-4 w-4 bg-green-500 border-2 border-background rounded-full" />
                          )}
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <h3 className="font-medium text-sm truncate">{chat.name}</h3>
                            <span className="text-xs text-muted-foreground">{chat.lastTime}</span>
                          </div>
                          
                          <div className="flex items-center gap-2 mt-1">
                            <Badge variant="secondary" className="text-xs">
                              <Users className="h-3 w-3 mr-1" />
                              {chat.members}
                            </Badge>
                            {chat.unread > 0 && (
                              <Badge variant="destructive" className="text-xs">
                                {chat.unread}
                              </Badge>
                            )}
                          </div>
                          
                          <p className="text-xs text-muted-foreground truncate mt-1">
                            {chat.lastMessage}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </ScrollArea>
              </CardContent>
            </Card>
          </div>

          {/* Main Chat Area */}
          <div className="col-span-12 lg:col-span-8 xl:col-span-9">
            <Card className="h-full glass border-white/20 flex flex-col">
              
              {/* Chat Header */}
              <CardHeader className="pb-4 border-b border-white/10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src="/placeholder.svg" />
                      <AvatarFallback>AC</AvatarFallback>
                    </Avatar>
                    <div>
                      <h2 className="font-semibold text-primary">Advanced Calculus Masters</h2>
                      <p className="text-sm text-muted-foreground">12 members • 8 online</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="sm">
                      <Phone className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Video className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>

              {/* Messages Area */}
              <CardContent className="flex-1 p-0">
                <ScrollArea className="h-[calc(100vh-20rem)] p-4">
                  <div className="space-y-4">
                    {messages.map((message) => (
                      <div
                        key={message.id}
                        className={`flex items-start gap-3 ${
                          message.isMe ? "justify-end" : ""
                        }`}
                      >
                        {!message.isMe && (
                          <Avatar className="h-8 w-8">
                            <AvatarImage src={message.avatar} />
                            <AvatarFallback>{message.sender.charAt(0)}</AvatarFallback>
                          </Avatar>
                        )}
                        
                        <div className={`max-w-[70%] ${message.isMe ? "text-right" : ""}`}>
                          {!message.isMe && (
                            <p className="text-xs font-medium text-primary mb-1">
                              {message.sender}
                            </p>
                          )}
                          <div
                            className={`rounded-lg p-3 ${
                              message.isMe
                                ? "bg-primary text-primary-foreground"
                                : "bg-muted"
                            }`}
                          >
                            <p className="text-sm">{message.message}</p>
                          </div>
                          <p className="text-xs text-muted-foreground mt-1">
                            {message.time}
                          </p>
                        </div>
                        
                        {message.isMe && (
                          <Avatar className="h-8 w-8">
                            <AvatarImage src={message.avatar} />
                            <AvatarFallback>You</AvatarFallback>
                          </Avatar>
                        )}
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>

              {/* Message Input */}
              <div className="p-4 border-t border-white/10">
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="sm">
                    <Paperclip className="h-4 w-4" />
                  </Button>
                  <div className="flex-1 relative">
                    <Input
                      placeholder="Type your message..."
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                      className="pr-10"
                    />
                    <Button
                      variant="ghost"
                      size="sm"
                      className="absolute right-1 top-1/2 transform -translate-y-1/2"
                    >
                      <Smile className="h-4 w-4" />
                    </Button>
                  </div>
                  <Button 
                    onClick={handleSendMessage}
                    disabled={!newMessage.trim()}
                    variant="hero"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatDashboard;