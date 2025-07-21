import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Users, BookOpen, Target, TrendingUp } from "lucide-react";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
            StudySprint
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
            Your AI-powered study companion for collaborative learning, smart planning, and academic success
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              onClick={() => navigate("/signup-supabase")}
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Get Started Free
            </Button>
            <Button 
              onClick={() => navigate("/signin-supabase")}
              variant="outline"
              size="lg"
              className="border-2 border-purple-300 text-purple-700 hover:bg-purple-50 px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Login
            </Button>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Study Groups</h3>
              <p className="text-gray-600 text-sm">Connect with peers and form collaborative study groups</p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">AI Flashcards</h3>
              <p className="text-gray-600 text-sm">Generate smart flashcards powered by AI technology</p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-orange-500 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Target className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Smart Planning</h3>
              <p className="text-gray-600 text-sm">AI-powered exam planning and study schedules</p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Progress Tracking</h3>
              <p className="text-gray-600 text-sm">Visual progress walls and achievement tracking</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;