import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { CheckCircle, Download, Loader, Play, Share2, Video } from "react-feather";

const mockSummary = `
This week, you studied for 12 hours across 3 subjects (Calculus, Physics, Chemistry), completed 9 tasks, and maintained a 5-day streak! Great job staying consistent and making progress toward your exam goals.`;

export default function StudyRecap() {
  const [loading, setLoading] = useState(false);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);

  const handleGenerate = () => {
    setLoading(true);
    setVideoUrl(null);
    // Simulate API call
    setTimeout(() => {
      setVideoUrl("https://www.w3schools.com/html/mov_bbb.mp4"); // Placeholder video
      setLoading(false);
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-10 px-4 pt-16">
      <Navbar />
      <div className="max-w-2xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-indigo-700">
              <Video className="inline-block" /> Weekly Study Recap Video
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex flex-col items-center gap-4">
              <Button
                onClick={handleGenerate}
                disabled={loading}
                className="flex items-center gap-2 px-6 py-3 text-lg"
                variant="hero"
              >
                {loading ? <Loader className="animate-spin" /> : <Play />}
                {loading ? "Generating..." : "Generate Recap"}
              </Button>
              {videoUrl && (
                <div className="w-full flex flex-col items-center gap-2">
                  <video controls className="rounded-lg shadow-lg w-full max-w-md">
                    <source src={videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="flex gap-2 mt-2">
                    <Button variant="outline" size="sm" className="flex items-center gap-1">
                      <Share2 size={16} /> Share
                    </Button>
                    <Button variant="outline" size="sm" className="flex items-center gap-1">
                      <Download size={16} /> Download
                    </Button>
                  </div>
                  <div className="flex items-center gap-2 text-green-600 mt-2">
                    <CheckCircle size={18} /> Recap generated successfully!
                  </div>
                </div>
              )}
            </div>
            <div className="bg-white/80 rounded-lg p-4 shadow-inner mt-6">
              <h2 className="text-lg font-semibold mb-2 flex items-center gap-2 text-indigo-600">
                <Video size={18} /> This Week's Summary
              </h2>
              <p className="text-gray-700 text-base">{mockSummary}</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}