import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { BookOpen, File, FileText, Link2 as LinkIcon, Youtube } from "react-feather";

const mockRecommendations = {
  youtube: [
    { name: "Organic Chemistry Tutor", url: "https://www.youtube.com/c/TheOrganicChemistryTutor" },
    { name: "CrashCourse", url: "https://www.youtube.com/user/crashcourse" },
    { name: "Khan Academy", url: "https://www.youtube.com/user/khanacademy" },
  ],
  notion: [
    { name: "Ultimate Study Planner", url: "https://www.notion.so/Ultimate-Study-Planner" },
    { name: "Exam Revision Dashboard", url: "https://www.notion.so/Exam-Revision-Dashboard" },
    { name: "Assignment Tracker", url: "https://www.notion.so/Assignment-Tracker" },
  ],
  mockTests: [
    { name: "SAT Practice", url: "https://collegereadiness.collegeboard.org/sat/practice/full-length-practice-tests" },
    { name: "AP Calculus Mock", url: "https://www.varsitytutors.com/ap_calculus_ab-practice-tests" },
    { name: "IELTS Sample Tests", url: "https://www.ielts.org/about-the-test/sample-test-questions" },
  ],
  books: [
    { name: "Atomic Habits (PDF)", url: "https://drive.google.com/file/d/1-atomic-habits-pdf" },
    { name: "Deep Work (PDF)", url: "https://drive.google.com/file/d/1-deep-work-pdf" },
    { name: "How to Study Smart (PDF)", url: "https://drive.google.com/file/d/1-study-smart-pdf" },
  ],
};

export default function StudyKitRecommendations() {
  const [subject, setSubject] = useState("");

  // In a real app, recommendations would be filtered by subject/goals

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-10 px-4">
      <Navbar />
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 flex items-center gap-2 text-indigo-700">
          <BookOpen className="inline-block" /> StudyKit Recommendations
        </h1>
        <div className="mb-8">
          <Input
            placeholder="Enter your subject or goal (e.g. Calculus, IELTS, Productivity)"
            value={subject}
            onChange={e => setSubject(e.target.value)}
            className="w-full max-w-lg"
          />
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {/* YouTube Channels */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-red-600">
                <Youtube className="inline-block" /> Top YouTube Channels
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {mockRecommendations.youtube.map((item, i) => (
                  <li key={i}>
                    <a href={item.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-700 hover:underline">
                      <LinkIcon size={16} /> {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Notion Templates */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-indigo-600">
                <FileText className="inline-block" /> Notion Templates
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {mockRecommendations.notion.map((item, i) => (
                  <li key={i}>
                    <a href={item.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-700 hover:underline">
                      <LinkIcon size={16} /> {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Mock Test Links */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-600">
                <File className="inline-block" /> Mock Test Links
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {mockRecommendations.mockTests.map((item, i) => (
                  <li key={i}>
                    <a href={item.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-700 hover:underline">
                      <LinkIcon size={16} /> {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Books/PDFs */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-purple-600">
                <BookOpen className="inline-block" /> Books & PDFs
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {mockRecommendations.books.map((item, i) => (
                  <li key={i}>
                    <a href={item.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-700 hover:underline">
                      <LinkIcon size={16} /> {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}