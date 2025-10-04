import Trivia from "../components/Trivia"
import { useNavigate } from "react-router-dom" // Importa el hook

function Home() {
    const navigate = useNavigate() // Inicializa el hook

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-4xl font-bold text-purple-800 mb-2">Bienvenido 👋</h2>
      <p className="text-lg text-gray-700">
        Prepárate para demostrar cuánto sabes de Friends.
      </p>
      <button
        className="mt-5 px-6 py-3 bg-pink-400 text-white font-semibold rounded-xl shadow-lg hover:bg-pink-500 transition cursor-pointer"
        onClick={() => navigate("/trivia")}
      >
        ¡Jugar!
      </button>
    </div>
  )
}

export default Home
