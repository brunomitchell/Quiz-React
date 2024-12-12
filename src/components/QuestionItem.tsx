import { Question } from "@/types/Question";
import { useState } from "react";

type Props = {
  question: Question;
  count: number;
  onAnswer: (answer: number) => void;
}

export const QuestionItem = ({ question, count, onAnswer }: Props) => {

  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  const checkQuestion = (key: number) => {
    if (selectedAnswer === null) {
      setSelectedAnswer(key);

      setTimeout(() => {
        onAnswer(key);
        setSelectedAnswer(null);
      }, 1500)

    }
  }

  return (
    <div>
      <div className="text-2xl font-bold mb-5">{count}. {question.question}</div>
      <div>
        {question.options.map((item, key) => (
          <div key={key}
            onClick={() => checkQuestion(key)}
            className={`border px-3 py-2 rounded-md text-base mb-4 bg-blue-100 border-blue-300 hover:opacity-60 
            
            ${selectedAnswer !== null ? 'cursor-auto hover:opacity-100' : 'cursor-pointer hover:opacity-60'}
            ${selectedAnswer !== null && selectedAnswer === question.answer && selectedAnswer === key && 'bg-green-200 border-green-400'}
            ${selectedAnswer !== null && selectedAnswer !== question.answer && selectedAnswer === key && 'bg-red-100 border-red-300'}
            `}>

            {item}
          </div>
        )

        )}
      </div>
    </div>
  )
}