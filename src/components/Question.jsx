function Question({ question, options, selected, isCorrect, handleAnswer }) {
  return (
    <>
      <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-purple-700">
        {question}
      </h2>
      <div className="grid gap-3">
        {options.map((option, index) => {
          let btnClass =
            "px-4 py-2 rounded-xl font-semibold transition shadow-md w-full sm:w-auto cursor-pointer duration-300 "

          if (selected === option) {
            btnClass += isCorrect
              ? "bg-green-400 text-white scale-105"
              : "bg-red-400 text-white scale-105"
          } else {
            btnClass += "bg-pink-200 hover:bg-purple-200 text-black"
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
    </>
  )
}

export default Question