import { useState } from "react"
import questionsData from "../data/questions"

// 🔹 Función para mezclar un array
function shuffle(array) {
  return [...array].sort(() => Math.random() - 0.5)
}

// 🔹 Mezcla las preguntas y también las opciones de cada una
function prepareQuestions(data) {
  return shuffle(
    data.map((q) => ({
      ...q,
      options: shuffle(q.options),
    }))
  )
}

function Trivia() {
  const [questions, setQuestions] = useState(prepareQuestions(questionsData))
  const [current, setCurrent] = useState(0)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)
  const [selected, setSelected] = useState(null)
  const [isCorrect, setIsCorrect] = useState(null)

  const handleAnswer = (option) => {
    setSelected(option)
    const correct = option === questions[current].answer
    setIsCorrect(correct)

    if (correct) setScore(score + 1)

    setTimeout(() => {
      if (current + 1 < questions.length) {
        setCurrent(current + 1)
        setSelected(null)
        setIsCorrect(null)
      } else {
        setFinished(true)
      }
    }, 700)
  }

  const restartGame = () => {
    setQuestions(prepareQuestions(questionsData)) // 🔹 vuelve a mezclar todo
    setCurrent(0)
    setScore(0)
    setFinished(false)
    setSelected(null)
    setIsCorrect(null)
  }

  const progress = Math.min(((current + 1) / questions.length) * 100, 100)

  return (
    <div className="bg-white rounded-2xl shadow-xl p-4 w-full max-w-md mx-auto text-center
      sm:p-8 sm:max-w-lg
      animate-fade-in"
      style={{ minHeight: "400px" }}
    >
      {/* Barra de progreso */}
      <div className="w-full bg-gray-200 rounded-full h-4 mb-6">
        <div
          className="bg-blue-400 h-4 rounded-full transition-all duration-500"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      {!finished ? (
        <>
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-purple-700 animate-fade-in">
            {questions[current].question}
          </h2>

          <div className="grid gap-3">
            {questions[current].options.map((option, index) => {
              let btnClass =
                "px-4 py-2 rounded-xl font-semibold transition shadow-md w-full sm:w-auto cursor-pointer duration-300 "

              if (selected === option) {
                btnClass += isCorrect
                  ? "bg-green-400 text-white scale-105"
                  : "bg-red-400 text-white scale-105"
              } else {
                btnClass +=
                  "bg-pink-200 hover:bg-purple-200 text-black"
              }

              return (
                <button
                  key={index}
                  onClick={() => !selected && handleAnswer(option)}
                  className={btnClass}
                  disabled={!!selected}
                  style={{
                    opacity: selected && selected !== option ? 0.7 : 1,
                  }}
                >
                  {option}
                </button>
              )
            })}
          </div>

          <p className="mt-4 text-gray-600 text-sm sm:text-base">
            Pregunta <span className="font-bold">{current + 1}</span> de <span className="font-bold">{questions.length}</span>
          </p>
        </>
      ) : (
        <>
          <h2 className="text-3xl font-bold text-green-600 animate-bounce">¡Juego terminado!</h2>
          <p className="mt-4 text-lg text-gray-700">
            Tu puntaje: <span className="font-bold text-purple-700">{score}</span> / {questions.length}
          </p>
          <button
            onClick={restartGame}
            className="mt-6 px-6 py-2 bg-blue-300 hover:bg-green-300 rounded-xl text-black font-semibold transition cursor-pointer shadow-lg animate-fade-in"
          >
            Jugar de nuevo
          </button>
        </>
      )}
    </div>
  )
}

export default Trivia