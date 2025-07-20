import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    ArrowRight,
    BookOpen,
    Instagram,
    Mail,
    Twitter,
    Youtube
} from "lucide-react";

const Footer = () => {
  const navigation = {
    platform: [
      { name: "Features", href: "#features" },
      { name: "Study Groups", href: "#groups" },
      { name: "Progress Tracking", href: "#progress" },
      { name: "Pricing", href: "#pricing" }
    ],
    support: [
      { name: "Help Center", href: "#" },
      { name: "Community Guidelines", href: "#" },
      { name: "Contact Support", href: "#" },
      { name: "Status", href: "#" }
    ],
    company: [
      { name: "About Us", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Press Kit", href: "#" }
    ],
    legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Cookie Policy", href: "#" },
      { name: "GDPR", href: "#" }
    ]
  };

  const socialLinks = [
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "Instagram", icon: Instagram, href: "#" },
    { name: "YouTube", icon: Youtube, href: "#" }
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Section */}
        <div className="py-16 border-b border-white/10">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Stay Updated with Study Tips & Features
            </h3>
            <p className="text-background/70 mb-8">
              Get weekly study tips, feature updates, and success stories delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/50"
              />
              <Button variant="accent" className="group">
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="gradient-primary p-2 rounded-lg">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                <span className="text-xl font-bold">GrowTogether</span>
              </div>
              <p className="text-background/70 mb-6 max-w-md">
                Empowering students worldwide to achieve their academic goals through 
                collaborative learning and intelligent study tools.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <Button 
                    key={social.name}
                    variant="ghost" 
                    size="icon"
                    className="text-background/70 hover:text-white hover:bg-white/10"
                  >
                    <social.icon className="h-5 w-5" />
                  </Button>
                ))}
              </div>
            </div>

            {/* Navigation Links */}
            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <ul className="space-y-3">
                {navigation.platform.map((item) => (
                  <li key={item.name}>
                    <a 
                      href={item.href}
                      className="text-background/70 hover:text-white transition-smooth"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-3">
                {navigation.support.map((item) => (
                  <li key={item.name}>
                    <a 
                      href={item.href}
                      className="text-background/70 hover:text-white transition-smooth"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-3">
                {navigation.company.map((item) => (
                  <li key={item.name}>
                    <a 
                      href={item.href}
                      className="text-background/70 hover:text-white transition-smooth"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-3">
                {navigation.legal.map((item) => (
                  <li key={item.name}>
                    <a 
                      href={item.href}
                      className="text-background/70 hover:text-white transition-smooth"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-background/70 text-sm">
              © 2024 StudyTogether. All rights reserved.
            </p>
            <div className="flex items-center space-x-2 mt-4 md:mt-0">
              <Mail className="h-4 w-4 text-background/70" />
              <span className="text-background/70 text-sm">hello@studytogether.com</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;