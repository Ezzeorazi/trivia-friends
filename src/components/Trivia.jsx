import { useState } from "react"
import questions from "../data/questions"

function Trivia() {
  const [current, setCurrent] = useState(0)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)
  const [selected, setSelected] = useState(null) // opción elegida
  const [isCorrect, setIsCorrect] = useState(null) // true / false

  const handleAnswer = (option) => {
    setSelected(option)
    const correct = option === questions[current].answer
    setIsCorrect(correct)

    if (correct) {
      setScore(score + 1)
    }

    // Espera 1 segundo para mostrar colores antes de pasar
    setTimeout(() => {
      if (current + 1 < questions.length) {
        setCurrent(current + 1)
        setSelected(null)
        setIsCorrect(null)
      } else {
        setFinished(true)
      }
    }, 500)
  }

  const restartGame = () => {
    setCurrent(0)
    setScore(0)
    setFinished(false)
    setSelected(null)
    setIsCorrect(null)
  }

  // cálculo de progreso entre 0 y 100
  const progress = Math.min(((current + 1) / questions.length) * 100, 100)

  return (
    <div className="bg-white rounded-2xl shadow-xl p-4 w-full max-w-md text-center">
      {/* Barra de progreso */}
      <div className="w-full bg-gray-200 rounded-full h-4 mb-6">
        <div
          className="bg-blue-400 h-4 rounded-full transition-all duration-500"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      {!finished ? (
        <>
          <h2 className="text-2xl font-bold mb-4 text-purple-700">
            {questions[current].question}
          </h2>

          <div className="grid gap-3 ">
            {questions[current].options.map((option, index) => {
              let btnClass =
                "px-4 py-2 rounded-xl font-semibold transition shadow-md "

              if (selected === option) {
                btnClass += isCorrect
                  ? "bg-green-400 text-white cursor-pointer"
                  : "bg-red-400 text-white cursor-pointer"
              } else {
                btnClass +=
                  "bg-pastelPink hover:bg-pastelPurple text-black cursor-pointer"
              }

              return (
                <button
                  key={index}
                  onClick={() => !selected && handleAnswer(option)}
                  className={btnClass}
                  disabled={!!selected} // desactiva mientras se muestra el feedback
                >
                  {option}
                </button>
              )
            })}
          </div>

          <p className="mt-4 text-gray-600">
            Pregunta {current + 1} de {questions.length}
          </p>
        </>
      ) : (
        <>
          <h2 className="text-3xl font-bold text-green-600">¡Juego terminado!</h2>
          <p className="mt-4 text-lg text-gray-700">
            Tu puntaje: {score} / {questions.length}
          </p>
          <button
            onClick={restartGame}
            className="mt-6 px-6 py-2 bg-pastelBlue hover:bg-pastelGreen rounded-xl text-black font-semibold transition cursor-pointer"
          >
            Jugar de nuevo
          </button>
        </>
      )}
    </div>
  )
}

export default Trivia
