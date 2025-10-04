import { useState } from "react"

function GameFinished({ score, total, onRestart }) {
  const [shared, setShared] = useState(false)

  const shareResult = () => {
    const text = `¡Jugué Friends Trivia y obtuve ${score} de ${total} puntos! ¿Puedes superarme?`
    if (navigator.share) {
      navigator.share({
        title: "Friends Trivia",
        text,
        url: window.location.href,
      }).then(() => setShared(true))
    } else {
      navigator.clipboard.writeText(text)
      setShared(true)
    }
    setTimeout(() => setShared(false), 2000)
  }

  return (
    <div>
      <h2 className="text-3xl font-bold text-green-600 animate-bounce">¡Juego terminado!</h2>
      <p className="mt-4 text-lg text-gray-700">
        Tu puntaje: <span className="font-bold text-purple-700">{score}</span> / {total}
      </p>
      <button
        onClick={onRestart}
        className="mt-6 px-6 py-2 bg-blue-300 hover:bg-green-300 rounded-xl text-black font-semibold transition cursor-pointer shadow-lg animate-fade-in"
      >
        Jugar de nuevo
      </button>
      <div className="mt-6 flex flex-col items-center">
        <button
          onClick={shareResult}
          className="px-4 py-2 bg-pink-400 hover:bg-pink-500 text-white rounded-xl font-semibold transition cursor-pointer"
        >
          Compartir resultado
        </button>
        {shared && (
          <span className="mt-2 text-green-600 text-sm">¡Resultado compartido!</span>
        )}
      </div>
    </div>
  )
}

export default GameFinished