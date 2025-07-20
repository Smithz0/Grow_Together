import { Button } from "@/components/ui/button";
import { BarChart3, BookOpen, Calendar, ChevronDown, Layers, Menu, MessageCircle, Users, Video, X, Zap } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const anchorLinks = [
  { name: "Features", href: "#features", icon: BookOpen },
  { name: "Study Groups", href: "#groups", icon: Users },
  { name: "Progress", href: "#progress", icon: BarChart3 },
];

const studyTools = [
  { name: "Community", href: "/community", icon: MessageCircle },
  { name: "Chat", href: "/chat", icon: Users },
  { name: "Flashcards", href: "/flashcards", icon: Zap },
  { name: "StudyKit", href: "/studykit", icon: Layers },
  { name: "Planner", href: "/planner", icon: Calendar },
  { name: "Progress Wall", href: "/progress", icon: BarChart3 },
  { name: "Recap", href: "/recap", icon: Video },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [toolsOpen, setToolsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="gradient-primary p-2 rounded-lg">
              <BookOpen className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-primary">GrowTogether</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Anchor Links */}
            {anchorLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center space-x-1 text-foreground hover:text-primary transition-smooth"
              >
                <item.icon className="h-4 w-4" />
                <span>{item.name}</span>
              </a>
            ))}
            {/* Study Tools Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center space-x-1 text-foreground hover:text-primary transition-smooth focus:outline-none"
                onClick={() => setToolsOpen((open) => !open)}
                onMouseEnter={() => setToolsOpen(true)}
                onMouseLeave={() => setToolsOpen(false)}
                type="button"
              >
                <Layers className="h-4 w-4" />
                <span>Study Tools</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              {toolsOpen && (
                <div
                  className="absolute left-0 mt-2 w-56 bg-white rounded shadow-lg py-2 z-50"
                  onMouseEnter={() => setToolsOpen(true)}
                  onMouseLeave={() => setToolsOpen(false)}
                >
                  {studyTools.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="flex items-center gap-2 px-4 py-2 text-foreground hover:bg-gray-100 hover:text-primary transition-smooth"
                      onClick={() => setToolsOpen(false)}
                    >
                      <item.icon className="h-4 w-4" />
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" asChild>
              <Link to="/signin">Sign In</Link>
            </Button>
            <Button variant="hero" size="sm">Get Started</Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-lg rounded-lg mt-2 p-4 space-y-4 shadow-elegant">
            {/* Anchor Links */}
            {anchorLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center space-x-2 text-foreground hover:text-primary transition-smooth py-2"
                onClick={() => setIsOpen(false)}
              >
                <item.icon className="h-4 w-4" />
                <span>{item.name}</span>
              </a>
            ))}
            {/* Collapsible Study Tools */}
            <div>
              <button
                className="flex items-center space-x-2 w-full text-left text-foreground hover:text-primary transition-smooth py-2 focus:outline-none"
                onClick={() => setToolsOpen((open) => !open)}
                type="button"
              >
                <Layers className="h-4 w-4" />
                <span>Study Tools</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${toolsOpen ? 'rotate-180' : ''}`} />
              </button>
              {toolsOpen && (
                <div className="pl-4 mt-2 space-y-2">
                  {studyTools.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="flex items-center gap-2 text-foreground hover:text-primary transition-smooth py-2"
                      onClick={() => { setIsOpen(false); setToolsOpen(false); }}
                    >
                      <item.icon className="h-4 w-4" />
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <div className="pt-4 border-t border-border space-y-2">
              <Button variant="ghost" className="w-full" asChild>
                <Link to="/signin">Sign In</Link>
              </Button>
              <Button variant="hero" className="w-full">Get Started</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;