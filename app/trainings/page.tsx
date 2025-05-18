import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Progress } from "@/components/ui/progress";
import { Bell } from "lucide-react";
import Link from "next/link";

export default function RequiredTrainings() {
  // Training course data
  const trainingCourses = [
    {
      id: 1,
      title: "Fire Safety Training",
      description:
        "Annual workplace fire safety and emergency procedures training",
      image: "/1.png",
      dueDate: "May 30, 2025",
      progress: 25,
      priority: "High Priority",
      isPriorityHigh: true,
      isRequired: false,
    },
    {
      id: 2,
      title: "Sexual Harassment Prevention",
      description: "Mandatory training on workplace harassment prevention",
      image: "/2.png",
      dueDate: "June 15, 2025",
      progress: 75,
      priority: "",
      isPriorityHigh: false,
      isRequired: true,
    },
    {
      id: 3,
      title: "Anti-Bullying Training",
      description: "Creating a respectful workplace environment",
      image: "/3.png",
      dueDate: "July 1, 2025",
      progress: 50,
      priority: "",
      isPriorityHigh: false,
      isRequired: true,
    },
    {
      id: 4,
      title: "Annual Compliance",
      description: "Essential regulatory compliance and ethics training",
      image: "/4.png",
      dueDate: "May 15, 2025",
      progress: 0,
      priority: "High Priority",
      isPriorityHigh: true,
      isRequired: false,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="flex justify-between items-center p-4 bg-slate-100 border-b lg:mx-8">
         <div className="flex items-center space-x-2 lg:ml-12 relative">
          <div className="w-10 h-10 bg-blue-800 rounded flex items-center justify-center">
            <Link href="/" className="text-white text-xs font-medium">
              <span className="absolute inset-0 cursor-pointer"></span>GS
            </Link>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Bell className="w-6 h-6 text-blue-900" />
            <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
              3
            </span>
          </div>
            <Popover>
              <PopoverTrigger>
                <Avatar className="w-10 h-10 border-2 border-gray-300">
                  <AvatarImage
                    src="https://i.pravatar.cc/40"
                    alt="User avatar"
                  />
                  <AvatarFallback>US</AvatarFallback>
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="w-32 p-0 py-2 mt-3 relative">
                <Link
                  href="/login"
                  className="underline text-blue-800"
                >
                  <span className="absolute inset-0 cursor-pointer"></span>
                  Login
                </Link>
              </PopoverContent>
            </Popover>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-8 px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-blue-900 mb-2">
            Required Trainings
          </h1>
          <p className="text-gray-600 font-semibold text-lg">
            Complete your mandatory corporate training modules
          </p>
        </div>

        {/* Training Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trainingCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100"
            >
              {/* Image Section with Badge */}
              <div className="relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4">
                  {course.isPriorityHigh ? (
                    <Badge className="bg-red-100 text-red-600 hover:bg-red-100 px-3 py-1 font-medium rounded-full">
                      {course.priority}
                    </Badge>
                  ) : course.isRequired ? (
                    <Badge className="bg-amber-100 text-amber-600 hover:bg-amber-100 px-3 py-1 font-medium rounded-full">
                      Required
                    </Badge>
                  ) : null}
                </div>
              </div>

              {/* Content Section */}
              <div className="p-5">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">
                  {course.title}
                </h3>
                <p className="text-gray-600 mb-4">{course.description}</p>

                {/* Due Date and Progress */}
                <div className="flex items-center justify-between mt-4 mb-2">
                  <span className="text-sm text-blue-900">
                    Due: {course.dueDate}
                  </span>
                  <span className="text-sm font-medium text-blue-900">
                    {course.progress}%
                  </span>
                </div>

                <Progress value={course.progress} className="h-2 bg-blue-100" />
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
