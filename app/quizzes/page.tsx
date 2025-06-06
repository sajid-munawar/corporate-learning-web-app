"use client";
import { Alert, AlertDescription } from "@/components/ui/alert";
import AuthHeader from "@/components/ui/AuthHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useEffect, useRef } from "react";

import { fireSafetyQuiz } from "@/lib/data";
import {
  AlertTriangle,
  ArrowLeft,
  Bell,
  ChevronRight,
  Clock,
  Flame,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function FireSafetyCertification() {
  const [current, setCurrent] = useState(0);
  const [elapsed, setElapsed] = useState(0); // in seconds
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const [totalElapsed, setTotalElapsed] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const [answers, setAnswers] = useState<(number | null)[]>(
    Array(fireSafetyQuiz.length).fill(null)
  );

  const question = fireSafetyQuiz[current];
  const selectedOption = answers[current];

  const updateStatsInLocalStorage = (newScore: number, newTime: number) => {
    const stats = JSON.parse(localStorage.getItem("quizStats") || "{}");

    const updatedStats = {
      totalScore: (stats.totalScore || 0) + newScore,
      totalTime: parseFloat(((stats.totalTime || 0) + newTime / 3600).toFixed(2)),
      quizzesAttempted: (stats.quizzesAttempted || 0) + 1,
    };

    localStorage.setItem("quizStats", JSON.stringify(updatedStats));
  };

  const handleSelect = (index: number) => {
    const updated = [...answers];
    updated[current] = index;
    setAnswers(updated);
  };

  const handleNext = () => {
    if (current === fireSafetyQuiz.length - 1) {
      setShowResults(true);
      if (timerRef.current) clearInterval(timerRef.current);
      const score = answers.filter(
        (a, i) => a !== null && fireSafetyQuiz[i].options[a]?.correct
      ).length;

      // Save total elapsed including current question time
      const totalTimeUsed = totalElapsed + elapsed;
      updateStatsInLocalStorage(score, totalTimeUsed);

      return;
    }
    if (selectedOption === null) return;
    if (current < fireSafetyQuiz.length - 1) {
      setCurrent((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (current > 0) {
      setCurrent((prev) => prev - 1);
    }
  };

  useEffect(() => {
    setTotalElapsed((prev) => prev + elapsed); // Save current elapsed before switching
    setElapsed(0);

    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setElapsed((prev) => prev + 1);
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current]);

  const formatTime = (totalSeconds: number) => {
    const minutes = Math.floor(totalSeconds / 60)
      .toString()
      .padStart(1, "0");
    const seconds = (totalSeconds % 60).toString().padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  const progress = Math.round(((current + 1) / fireSafetyQuiz.length) * 100);
  // const totalTimeFormatted = formatTime(totalElapsed + elapsed); // add current elapsed too
  const score = answers.filter((selected, i) => {
    const correctOptionIndex = fireSafetyQuiz[i].options.findIndex(
      (opt) => opt.correct
    );
    return selected === correctOptionIndex;
  }).length;

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white shadow p-4 mx-8">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2 relative">
            <div className="w-10 h-10 bg-blue-800 rounded flex items-center justify-center">
              <Link href="/" className="text-white text-xs font-medium">
                <span className="absolute inset-0 cursor-pointer"></span>GS
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Bell className="w-6 h-6 text-blue-600" />
            <AuthHeader />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-8 px-4">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-blue-900">
            Fire Safety Certification
          </h1>
          <h2 className="text-gray-600">Module 2: Emergency Procedures</h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Question Area */}

          {!showResults ? (
            // 💡 Render quiz question here
            <div className="lg:w-2/3">
              <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
                <div className="flex items-center gap-2 text-blue-900 mb-6">
                  <Clock size={20} />
                  <span className="font-medium">
                    Question {current + 1} of {fireSafetyQuiz.length}
                  </span>
                </div>

                <div className="w-full h-[70px] flex justify-between">
                  {selectedOption === null ? (
                    <Alert className="mb-6 w-8/12 bg-red-50 border-red-200 text-red-600">
                      <AlertTriangle className="h-4 w-4" />
                      <AlertDescription className="text-red-600">
                        Please select an answer to continue.
                      </AlertDescription>
                    </Alert>
                  ) : (
                    <div></div>
                  )}
                  <div className="flex items-center gap-2 text-blue-900 mb-6">
                    <Clock size={20} />
                    <span className="font-medium">
                      {formatTime(elapsed)} elapsed
                    </span>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-4">
                    {question.question}
                  </h3>

                  <div className="space-y-4">
                    {question.options.map((option, idx) => (
                      <div
                        key={idx}
                        className={`border rounded-lg p-4 cursor-pointer hover:border-blue-900 transition-colors ${
                          selectedOption === idx
                            ? "border-blue-800 bg-blue-50"
                            : "border-gray-200"
                        }`}
                        onClick={() => handleSelect(idx)}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-6 h-6 rounded-full border ${
                              selectedOption === idx
                                ? "border-blue-800"
                                : "border-gray-400"
                            } flex items-center justify-center`}
                          >
                            {selectedOption === idx && (
                              <div className="w-3 h-3 rounded-full bg-blue-800"></div>
                            )}
                          </div>
                          <span>{option.text}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between mt-8">
                  <Button
                    variant="outline"
                    className="flex text-blue-900 items-center gap-2"
                    onClick={handlePrevious}
                    disabled={current === 0}
                  >
                    <ArrowLeft size={16} />
                    Previous
                  </Button>
                  <Button
                    className="bg-blue-800 hover:bg-blue-900 text-white flex items-center gap-2"
                    onClick={handleNext}
                    disabled={selectedOption === null}
                  >
                    {current === fireSafetyQuiz.length - 1 ? "Finish" : "Next"}
                    <ChevronRight size={16} />
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            // 🎉 Show result summary
            <div className="lg:w-2/3">
              <Card className="bg-white shadow-sm border border-gray-100">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4 text-blue-800">
                    <Flame size={24} />
                    <h2 className="text-xl font-bold">Your Quiz Summary</h2>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 rounded-lg bg-blue-50 border border-blue-100">
                      <h3 className="text-sm text-gray-600">Score</h3>
                      <p className="text-2xl font-semibold text-blue-900">
                        {score} / {fireSafetyQuiz.length}
                      </p>
                    </div>

                    <div className="p-4 rounded-lg bg-green-50 border border-green-100">
                      <h3 className="text-sm text-gray-600">Percentage</h3>
                      <p className="text-2xl font-semibold text-green-700">
                        {((score / fireSafetyQuiz.length) * 100).toFixed(0)}%
                      </p>
                    </div>

                    <div className="p-4 rounded-lg bg-yellow-50 border border-yellow-100">
                      <h3 className="text-sm text-gray-600">Time Taken</h3>
                      <p className="text-2xl font-semibold text-yellow-700">
                        {formatTime(totalElapsed + elapsed)}
                      </p>
                    </div>

                    <div className="p-4 rounded-lg bg-purple-50 border border-purple-100">
                      <h3 className="text-sm text-gray-600">Correct Answers</h3>
                      <p className="text-2xl font-semibold text-purple-800">
                        {score} of {fireSafetyQuiz.length}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
          {/* Sidebar */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100 mb-6">
              <h3 className="font-semibold mb-4">Your Progress</h3>
              <Progress value={progress} className="h-2 mb-2" />
              <div className="flex justify-between text-sm text-gray-600">
                <span>
                  {answers.filter((a) => a !== null).length} of{" "}
                  {fireSafetyQuiz.length} fireSafetyQuiz
                </span>
                <span>{progress}% complete</span>
              </div>
            </div>

            <Card className="bg-blue-800 text-white">
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-4">
                  <Flame size={24} />
                  <h3 className="text-xl font-bold">Keep Going!</h3>
                </div>
                <p className="mb-4">
                  You&apos;re making great progress. Just{" "}
                  {fireSafetyQuiz.length - (current + 1)} more fireSafetyQuiz to
                  complete your certification!
                </p>
                <div className="flex items-center gap-2 text-sm">
                  <Clock size={16} />
                  <p>Average completion time: 5 minutes remaining</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
