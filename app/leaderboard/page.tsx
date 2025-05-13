import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Bell, GraduationCap, Star, Users } from "lucide-react";

export default function LearningLeaderboard() {
  // Mock data for the leaderboard
  const leaderboardData = [
    {
      rank: 1,
      name: "Sarah Chen",
      avatar: "https://i.pravatar.cc/40",
      department: "Investment Banking",
      points: 15420,
      medal: "🥇"
    },
    {
      rank: 2,
      name: "Michael Smith",
      avatar: "https://i.pravatar.cc/40",
      department: "Risk Management",
      points: 14890,
      medal: "🥈"
    },
    {
      rank: 3,
      name: "Emma Wilson",
      avatar: "https://i.pravatar.cc/40",
      department: "Asset Management",
      points: 13750,
      medal: "🥉"
    },
    {
      rank: 4,
      name: "David Brown",
      avatar: "https://i.pravatar.cc/40",
      department: "Securities",
      points: 12980,
      medal: ""
    },
    {
      rank: 5,
      name: "Lisa Zhang",
      avatar: "https://i.pravatar.cc/40",
      department: "Consumer Banking",
      points: 12450,
      medal: ""
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="flex justify-between items-center p-4 bg-slate-100 border-b">
        <div className="flex items-center space-x-2 ml-12">
          <div className="w-10 h-10 bg-blue-800 rounded flex items-center justify-center">
            <span className="text-white text-xs font-medium">GS</span>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button className="p-2 text-gray-500 hover:text-blue-800">
            <Bell className="w-6 h-6" />
          </button>
          <Avatar className="w-10 h-10 border-2 border-gray-300">
            <AvatarImage src="https://i.pravatar.cc/40" alt="User avatar" />
            <AvatarFallback>US</AvatarFallback>
          </Avatar>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-8 px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-blue-900 mb-2">Learning Leaderboard</h1>
          <p className="text-gray-600 text-lg">Top performers in corporate learning initiatives</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <Card className="shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 mb-2">Total Participants</p>
                  <p className="text-4xl font-bold text-blue-900">2,547</p>
                </div>
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-800">
                  <Users className="w-6 h-6" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 mb-2">Courses Completed</p>
                  <p className="text-4xl font-bold text-blue-900">12,890</p>
                </div>
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-800">
                  <GraduationCap className="w-6 h-6" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 mb-2">Total Points</p>
                  <p className="text-4xl font-bold text-blue-900">458,720</p>
                </div>
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-800">
                  <Star className="w-6 h-6" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Leaderboard Table */}
        <Card className="shadow-sm">
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow className="bg-white hover:bg-white">
                  <TableHead className="w-24 text-blue-800">Rank</TableHead>
                  <TableHead className="text-blue-800">Employee</TableHead>
                  <TableHead className="text-blue-800">Department</TableHead>
                  <TableHead className="text-right text-blue-800">Points</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {leaderboardData.map((person) => (
                  <TableRow key={person.rank} className="hover:bg-gray-50">
                    <TableCell className="font-medium">
                      <div className="flex items-center">
                        {person.rank <= 3 ? (
                          <span className="text-xl mr-2">{person.medal}</span>
                        ) : (
                          <span className="ml-2 text-gray-500">{person.rank}</span>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center">
                        <Avatar className="h-10 w-10 mr-3">
                          <AvatarImage src={person.avatar} alt={person.name} />
                          <AvatarFallback>{person.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <span className="font-medium">{person.name}</span>
                      </div>
                    </TableCell>
                    <TableCell>{person.department}</TableCell>
                    <TableCell className="text-right font-medium text-blue-800">{person.points.toLocaleString()}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}