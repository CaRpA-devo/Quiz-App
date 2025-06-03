import { Button } from "../UI/button/button.comp";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export function QuestionInput({ state }) {
  const [question, setQuestion] = useState(null);
  const [shuffledAnswers, setShuffledAnswers] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
const location = useLocation();
  const { category, difficulty } = location.state || {};

  const fetchQuestion = async () => {
    try {
      const res = await fetch("http://localhost:3001/questions");
      const data = await res.json();

      const filteredQuestion = data.filter(
        (questions) =>
          questions.category &&
          questions.difficulty &&
          questions.answer &&
          questions.options?.length === 4
      );

      const randomQuestion =
        filteredQuestion[Math.floor(Math.random() * filteredQuestion.length)];

      setQuestion(randomQuestion);

      const shuffled = [...randomQuestion.options].sort(() => Math.random() - 0.5);
      setShuffledAnswers(shuffled);

      setSelectedAnswer(null);
    } catch (error) {
      console.error("Fehler beim Laden der Fragen:", error);
    }
  };

  useEffect(() => {
    fetchQuestion();
 }, [category, difficulty]);

  useEffect(() => {
    if (selectedAnswer !== null) {
      const timer = setTimeout(() => {
        fetchQuestion();
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [selectedAnswer]);

  if (!question) return <p>Lade Frage...</p>;

  const handleAnswerClick = (answer) => {
    if (selectedAnswer === null) {
      setSelectedAnswer(answer);
    }
  };

  // Hilfsfunktion, um Klasse je Button dynamisch zu bestimmen, basierend auf Auswahl
  const getButtonClass = (answer) => {
    // Grundklasse exakt wie bei dir
    const baseClass = `
      py-3 px-5 w-60 text-2xl rounded-full 
      text-[#5190c5] bg-[#0b0d17c4] 
      shadow-[0_0_10px_#f1cf34,0_0_20px_#f1cf34,0_0_40px_#f1cf34]
      transition-all duration-300 ease-in-out 
      hover:bg-[#3d7ab1]  hover:text-white hover:shadow-[inset_0_0_10px_#5190c5,0_0_20px_#5190c5,0_0_40px_#5190c5]
    `;

    if (selectedAnswer === null) {
      // noch keine Auswahl: normaler Button
      return baseClass;
    }

    if (answer === question.answer) {
      // richtige Antwort: grün markieren (Quit-Button Stil + grüner Hintergrund)
      return baseClass + " bg-green-600 text-white shadow-[0_0_15px_#22c55e,0_0_30px_#22c55e]";
    }

    if (answer === selectedAnswer && answer !== question.answer) {
      // falsche Auswahl: rot markieren
      return baseClass + " bg-red-600 text-white shadow-[0_0_15px_#ef4444,0_0_30px_#ef4444]";
    }

    // andere falsche Antworten bleiben normal
    return baseClass;
  };

  return (
    <div className="p-4 mt-15 flex flex-col gap-10">
      <div
        className="
          text-2xl font-semibold px-10 py-4 rounded-full
          text-[#f8f8f8;] bg-[#0b0d17c4] 
          shadow-[0_0_5px_#4fc3f7,0_0_10px_#4fc3f7,0_0_20px_#4fc3f7,0_0_40px_#4fc3f7]
          inline-block mb-6
        "
      >
        <h2>{question.question}</h2>
      </div>

      <div className="grid grid-cols-2 gap-30 max-w-md mx-auto text-sm font-bold">
        {shuffledAnswers.map((answer, idx) => (
          <Button
            key={idx}
            text={`${String.fromCharCode(65 + idx)}: ${answer}`}
            className={getButtonClass(answer)}
            onClickHandler={() => handleAnswerClick(answer)}
          />
          
        ))}
        
      </div>

      {/* Anzeige der richtigen Antwort nach Auswahl */}
      {selectedAnswer !== null && (
        <p className="mt-4 text-center text-lg font-semibold text-green-500">
          Richtige Antwort: {question.answer}
        </p>
      )}
    </div>
  )
}
