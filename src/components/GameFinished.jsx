function GameFinished({ score, total, onRestart }) {
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
    </div>
  )
}

export default GameFinished