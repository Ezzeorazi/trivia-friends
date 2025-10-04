function ProgressBar({ current, total, progress }) {
  return (
    <div className="relative w-full mb-6">
      <div className="w-full bg-gray-200 rounded-full h-4">
        <div
          className="bg-blue-400 h-4 rounded-full transition-all duration-500"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <p className="absolute inset-0 flex items-center justify-center text-gray-600 text-sm font-semibold pointer-events-none">
        Pregunta {current + 1} de {total}
      </p>
    </div>
  )
}

export default ProgressBar