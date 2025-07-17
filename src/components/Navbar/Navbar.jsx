// src/components/Navbar/Navbar.js
import { useState } from "react"
import "./Navbar.css"
import { useNavigate } from "react-router-dom"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navigate = useNavigate()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">Al-Aufaq Al-Muhsinin</div>

        <div className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
          <a className="nav-link" onClick={() => navigate(`/`)}>
            Hisab Abajadun
          </a>
          <a href="#about" className="nav-link">
            Taukil
          </a>
          <a href="#contact" className="nav-link">
            Penulis
          </a>
        </div>

        <button className="navbar-toggle" onClick={toggleMenu}>
          <span className="toggle-icon"></span>
          <span className="toggle-icon"></span>
          <span className="toggle-icon"></span>
        </button>
      </div>
    </nav>
  )
}

export default Navbar
