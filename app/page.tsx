import { Stats } from "@/components/Stats";
import AuthHeader from "@/components/ui/AuthHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Bell } from "lucide-react";

export default function LearningDashboard() {
  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* Sidebar */}
      <div className="w-64 border-r bg-white">
        <div className="p-4 border-b">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-800 rounded flex items-center justify-center">
              <span className="text-white text-xs font-medium">GS</span>
            </div>
            <h1 className="text-blue-800 text-xl font-semibold">Learning</h1>
          </div>
        </div>

        <nav className="p-2">
          <ul className="space-y-1">
            <li>
              <a
                href="#"
                className="flex items-center px-4 py-2 text-blue-800 bg-blue-50 rounded-md"
              >
                <svg
                  className="w-5 h-5 mr-3"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="3" y="3" width="7" height="7" />
                  <rect x="14" y="3" width="7" height="7" />
                  <rect x="3" y="14" width="7" height="7" />
                  <rect x="14" y="14" width="7" height="7" />
                </svg>
                Dashboard
              </a>
            </li>
            <li>
              <a
                href="/leaderboard"
                className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md"
              >
                <svg
                  className="w-5 h-5 mr-3"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                  <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
                Leaderboard
              </a>
            </li>
            <li>
              <a
                href="/trainings"
                className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md"
              >
                <svg
                  className="w-5 h-5 mr-3"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
                Trainings
              </a>
            </li>
            <li>
              <a
                href="/quizzes"
                className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md"
              >
                <svg
                  className="w-5 h-5 mr-3"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
                Quizzes
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        {/* Header */}
        <header className="flex justify-between items-center p-4 border-b bg-white">
          <h2 className="text-2xl font-bold text-blue-900">
            Welcome back, Michael
          </h2>
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-500 hover:text-blue-800">
              <Bell className="w-6 h-6" />
            </button>
           <AuthHeader />
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-6">
          {/* Stats Section */}
         <Stats />

          {/* Continue Learning Section */}
          <div className="mb-10">
            <h3 className="text-xl font-bold text-blue-900 mb-4">
              Continue Learning
            </h3>
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col">
                  <div className="flex justify-between mb-2">
                    <h4 className="font-semibold text-lg">
                      Risk Management Fundamentals
                    </h4>
                    <span className="text-blue-800">4/8 Modules</span>
                  </div>
                  <Progress value={50} className="h-2 bg-blue-100" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Upcoming Trainings */}
          <div>
            <h3 className="text-xl font-bold text-blue-900 mb-4">
              Upcoming Trainings
            </h3>
            <div className="space-y-4">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center text-blue-800 mr-4">
                        <svg
                          className="w-4 h-4"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M19 21V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v16m14-16H5m14 0v16M9 7h1m-1 4h1m4-4h1m-1 4h1" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold">
                          Compliance Training 2025
                        </h4>
                        <p className="text-gray-500">Mandatory</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-red-500">Due in 5 days</p>
                      <p className="text-gray-500">May 15, 2025</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-blue-900 rounded flex items-center justify-center text-white mr-4">
                        <svg
                          className="w-4 h-4"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold">
                          Cybersecurity Essentials
                        </h4>
                        <p className="text-gray-500">Required</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-gray-600">Due in 12 days</p>
                      <p className="text-gray-500">May 22, 2025</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
