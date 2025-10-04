import { useNavigate } from "react-router-dom"

function Home() {
  const navigate = useNavigate()

  return (
    <div className="flex flex-col items-center justify-start min-h-[80vh] pt-16 px-4">
      <img
        src="friends-seeklogo.png"
        alt="Logo Friends"
        className="mx-auto mb-6 w-62 sm:w-100"
      />      
      <h2 className="text-3xl sm:text-4xl font-bold text-purple-800 mb-4 text-center">
        Bienvenido 👋
      </h2>
      <p className="text-base sm:text-lg text-gray-700 max-w-md text-center mb-2">
        Prepárate para demostrar cuánto sabes de Friends.
      </p>
      <button
        className="mt-6 px-6 py-3 bg-pink-400 text-white font-semibold rounded-xl shadow-lg hover:bg-pink-500 transition cursor-pointer w-full max-w-xs sm:max-w-sm"
        onClick={() => navigate("/trivia")}
      >
        ¡Jugar!
      </button>
    </div>
  )
}

export default Home