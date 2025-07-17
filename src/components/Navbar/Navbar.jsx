// src/components/Navbar/Navbar.js
import { useState } from "react"
import "./Navbar.css"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">حاسبة أبجد</div>

        <div className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
          <a href="#calculator" className="nav-link">
            الحاسبة
          </a>
          <a href="#about" className="nav-link">
            عن النظام
          </a>
          <a href="#contact" className="nav-link">
            تواصل معنا
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
