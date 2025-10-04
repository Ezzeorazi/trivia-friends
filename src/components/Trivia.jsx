import { useState } from "react"
import questionsData from "../data/questions"
import ProgressBar from "./ProgressBar"
import Question from "./Question"
import GameFinished from "./GameFinished"

function shuffle(array) {
  return [...array].sort(() => Math.random() - 0.5)
}

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
    setQuestions(prepareQuestions(questionsData))
    setCurrent(0)
    setScore(0)
    setFinished(false)
    setSelected(null)
    setIsCorrect(null)
  }

  const progress = Math.min(((current + 1) / questions.length) * 100, 100)

  return (
    <div className="bg-white rounded-2xl shadow-xl p-4 w-full max-w-md mx-auto text-center sm:p-8 sm:max-w-lg animate-fade-in" style={{ minHeight: "400px" }}>
      <ProgressBar current={current} total={questions.length} progress={progress} />
      {!finished ? (
        <Question
          question={questions[current].question}
          options={questions[current].options}
          selected={selected}
          isCorrect={isCorrect}
          handleAnswer={handleAnswer}
        />
      ) : (
        <GameFinished score={score} total={questions.length} onRestart={restartGame} />
      )}
    </div>
  )
}

export default Trivia