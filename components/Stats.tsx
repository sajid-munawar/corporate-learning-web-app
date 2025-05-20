"use client";
import { useEffect, useState } from "react";

import { Card, CardContent } from "@/components/ui/card";
type StatsType = {
  totalScore: number;
  totalTime: number;
  quizzesAttempted: number;
};
export const Stats = () => {
  const [stats, setStats] = useState<StatsType>({
    totalScore: 0,
    totalTime: 0,
    quizzesAttempted: 0,
  });

  useEffect(() => {
    const savedStats = JSON.parse(localStorage.getItem("quizStats") || "{}");
    setStats({
      totalScore: savedStats.totalScore || 0,
      totalTime: savedStats.totalTime || 0,
      quizzesAttempted: savedStats.attempts || 0,
    });
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center justify-between">
            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-800">
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M9 12l2 2 4-4" />
                <circle cx="12" cy="12" r="10" />
              </svg>
            </div>
            <div>
              <p className="text-gray-500 mb-1">Quizzes Completed</p>
              <p className="text-3xl font-bold text-blue-900">
                {stats?.quizzesAttempted || 0}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center justify-between">
            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-800">
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="#193cb8"
                stroke="currentColor"
                strokeWidth="2"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            </div>
            <div>
              <p className="text-gray-500 mb-1">Total Points</p>
              <p className="text-3xl font-bold text-blue-900">
                {stats?.totalScore || 0}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center justify-between">
            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-800">
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </div>
            <div>
              <p className="text-gray-500 mb-1">Hours Learned</p>
              <p className="text-3xl font-bold text-blue-900">
                {stats?.totalTime || 0}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center justify-between">
            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-800">
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                <path d="m19 9-2-2c-1.5-1-3-1.5-5-1.5s-3.6.5-5 1.5L5 9c-.7.5-1 1.4-1 2v2c0 .6.3 1.5 1 2l2 2c1.5 1 3 1.5 5 1.5s3.5-.5 5-1.5l2-2c.7-.5 1-1.4 1-2v-2c0-.6-.3-1.5-1-2Z" />
              </svg>
            </div>
            <div>
              <p className="text-gray-500 mb-1">Badges Earned</p>
              <p className="text-3xl font-bold text-blue-900">0</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
