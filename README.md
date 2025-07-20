
Ran tool
Here’s a professional README template for your project, ready to post on GitHub:

---

# GrowTogether

**GrowTogether** is a collaborative learning platform that empowers students to connect, form study groups, track progress, and unlock their full learning potential through modern, intelligent study tools.

## Features

- **Smart Group Matching**: AI-powered algorithm matches you with compatible study partners based on subjects, goals, and learning styles.
- **Real-time Collaboration**: Instant messaging, video calls, and shared whiteboards for seamless group study sessions.
- **Progress Analytics**: Detailed insights into your learning patterns, study habits, and achievement milestones.
- **Study Scheduling**: Coordinate group sessions with smart calendar integration and automatic reminders.
- **Goal Setting**: Set personal and group learning objectives with milestone tracking and celebration.
- **Adaptive Learning**: Personalized study recommendations based on your performance and learning preferences.
- **Time Management**: Pomodoro timers, focus sessions, and productivity tracking to maximize study efficiency.
- **Achievement System**: Earn badges, compete in leaderboards, and celebrate learning milestones with your peers.
- **Quick Actions**: One-click study room creation, instant group invites, and rapid resource sharing.

## Tech Stack

- **Frontend**: React, TypeScript, Vite, Tailwind CSS, Radix UI, Lucide Icons
- **Backend/Database**: [Supabase](https://supabase.com/) (Auth, Database, Realtime)
- **State Management**: React Query
- **Other**: Shadcn UI, Sonner, React Feather, and more

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/growtogether.git
   cd growtogether/learn-together-bright
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   - Create a `.env` file if needed for your Supabase keys (currently hardcoded in `src/lib/supabaseClient.ts`).

4. **Start the development server:**
   ```bash
   npm run dev
   ```
   The app will be available at [http://localhost:8080](http://localhost:8080) (or the next available port).

## Project Structure

```
learn-together-bright/
  ├── public/
  ├── src/
  │   ├── components/
  │   ├── hooks/
  │   ├── lib/
  │   ├── pages/
  │   ├── assets/
  │   └── main.tsx
  ├── index.html
  ├── package.json
  └── ...
```
