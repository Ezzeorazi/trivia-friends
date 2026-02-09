function Footer() {
  return (
    <footer className="bg-purple-700 text-white py-4 mt-8 text-center">
      <p>
        © {new Date().getFullYear()} Friends Trivia | ✨ | 
      </p>
      <span>
            Desarrollado por{" "}
            <a
              href="https://ezequiel-orazi.online"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-accent-hover transition font-medium"
            >
              Ezequiel Orazi
            </a>
          </span>
    </footer>
  )
}

export default Footer
