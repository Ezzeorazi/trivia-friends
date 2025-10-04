import { useState, useRef, useEffect } from "react"
import { Link } from "react-router-dom"
import { Menu, X } from "lucide-react"

function Navbar() {
  const [open, setOpen] = useState(false)
  const sidebarRef = useRef(null)

  // Cierra el menú si se hace clic fuera del sidebar
  useEffect(() => {
    function handleClickOutside(event) {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setOpen(false)
      }
    }
    if (open) {
      document.addEventListener("mousedown", handleClickOutside)
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [open])

  return (
    <nav className="bg-purple-700 text-white p-4 shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="flex justify-between items-center">
        <Link
        to="/"
         >
        <h1 className="text-2xl font-bold select-none">Friends Trivia 🎬</h1>
        </Link>
        <button
          onClick={() => setOpen(true)}
          className="cursor-pointer p-2 rounded-full hover:bg-purple-600 transition"
          aria-label="Abrir menú"
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Overlay animado */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-40 transition-opacity duration-500 z-40 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
      />

      {/* Sidebar animado */}
      <div
        ref={sidebarRef}
        className={`fixed top-0 left-0 h-full w-72 bg-gradient-to-br from-purple-800 to-pink-500 shadow-xl z-50 transform transition-transform duration-500 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b border-purple-600">
          <h2 className="text-xl font-bold">Menú</h2>
          <button
            onClick={() => setOpen(false)}
            className="cursor-pointer p-2 rounded-full hover:bg-pink-400 transition"
            aria-label="Cerrar menú"
          >
            <X size={28} />
          </button>
        </div>
        <ul className="flex flex-col gap-4 p-6">
          <li>
            <Link
              to="/"
              className="hover:text-yellow-300 transition cursor-pointer text-lg font-medium"
              onClick={() => setOpen(false)}
            >
              Inicio
            </Link>
          </li>
          <li>
            <Link
              to="/trivia"
              className="hover:text-yellow-300 transition cursor-pointer text-lg font-medium"
              onClick={() => setOpen(false)}
            >
              Trivia
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:text-yellow-300 transition cursor-pointer text-lg font-medium"
              onClick={() => setOpen(false)}
            >
              Sobre el proyecto
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar