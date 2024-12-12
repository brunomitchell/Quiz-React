"use client";

import { QuestionItem } from "@/components/QuestionItem";
import { Results } from "@/components/Results";
import { questions } from "@/data/questions";
import { useState } from "react";

const Page = () => {
  const [answers, setAnswers] = useState<number[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const title = 'React Quiz';
  const [showResult, setShowResult] = useState(false);

  const loadNextQuestion = () => {
    if (questions[currentQuestion + 1]) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleAnswered = (answer: number) => {
    setAnswers([...answers, answer]);
    loadNextQuestion();
  };

  const handleRestartButton = () => {
    setAnswers([]);
    setCurrentQuestion(0);
    setShowResult(false);
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-blue-600">
      <div className="w-full max-w-xl rounded-md bg-white text-black shadow shadow-black overflow-hidden">
        <div className="p-5 font-bold text-3xl border-b border-gray-300 flex justify-center">{title}</div>
        <div className="p-5 overflow-y-auto max-h-[70vh]">
          {!showResult && (
            <QuestionItem
              question={questions[currentQuestion]}
              count={currentQuestion + 1}
              onAnswer={handleAnswered}
            />
          )}
          {showResult && <Results questions={questions} answers={answers} />}
        </div>
        <div className="p-5 text-center border border-gray-300">
          {!showResult && `${currentQuestion + 1} de ${questions.length} question${questions.length === 1 ? '' : 's'}`}
        </div>
      </div>
    </div>
  );
};

export default Page;

