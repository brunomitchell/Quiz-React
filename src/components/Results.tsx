import { Question } from "@/types/Question";

type Props = {
  questions: Question[];
  answers: number[];
};

export const Results = ({ questions, answers }: Props) => {
  return (
    <div className="w-full h-auto max-w-xl mx-auto p-5">
      {questions.map((item, key) => (
        <div key={key} className="mb-3">
          <div className="font-bold">{key + 1}. {item.question}</div>
          <div
            className={`p-3 rounded-md ${
              item.answer === answers[key] ? 'bg-green-200' : 'bg-red-200'
            } max-w-full break-words`}
          >
            <span>({item.answer === answers[key] ? 'Correta' : 'Errada'}) - </span>
            {item.options[item.answer]}
          </div>
        </div>
      ))}
      <div className="p-5 text-center border border-gray-300">
        <button
          onClick={() => window.location.reload()} // Recarregar a página para reiniciar
          className="px-3 py-2 rounded-md bg-blue-800 text-white w-full max-w-xs mx-auto"
        >
          Reiniciar Quiz
        </button>
      </div>
    </div>
  );
};




