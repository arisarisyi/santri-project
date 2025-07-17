// src/components/WifiqMutsallas/WifiqMutsallas.js
import React, { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { toArabicNumbers } from "../../utils/numbers"
import "./WifiqMutsallas.css"

const WifiqMutsallas = () => {
  const { miftah } = useParams()
  const navigate = useNavigate()
  const [grid, setGrid] = useState(Array(9).fill(null))
  const [animationStep, setAnimationStep] = useState(0)
  const [isAnimating, setIsAnimating] = useState(true)

  // Konversi miftah ke angka
  const numericMiftah = parseInt(miftah, 10)

  // Fungsi untuk menghitung urutan angka magic square
  const calculateMagicSquare = (start) => {
    // Magic square 3x3 dengan miftah di posisi tengah-bawah
    // Pola dasar:
    //   4 9 2
    //   3 5 7
    //   8 1 6
    // Dengan miftah di posisi 5 (tengah)

    // Urutan angka berdasarkan miftah
    return [
      start + 1, // Posisi 0 (4-1) bens
      start + 8, // Posisi 1 (9-1) benar
      start + 3, // Posisi 2 (2-1) benar
      start + 6, // Posisi 3 (3-1) benar
      start + 4, // Posisi 4 (5-1) benar
      start + 2, // Posisi 5 (7-1) benar
      start + 5, // Posisi 6 (8-1) benar
      start + 0, // Posisi 7 (1-1) - inilah miftah
      start + 7, // Posisi 8 (6-1)
    ]
  }

  // Efek untuk animasi peletakan angka
  useEffect(() => {
    if (!isAnimating) return

    const magicNumbers = calculateMagicSquare(numericMiftah)

    const timer = setTimeout(() => {
      if (animationStep < 9) {
        const newGrid = [...grid]
        newGrid[animationStep] = magicNumbers[animationStep] // sesuai index
        setGrid(newGrid)
        setAnimationStep(animationStep + 1)
      } else {
        setIsAnimating(false)
      }
    }, 500)

    return () => clearTimeout(timer)
  }, [animationStep, isAnimating, numericMiftah])

  // Fungsi untuk merender kotak grid
  const renderGrid = () => {
    return grid.map((number, index) => (
      <div
        key={index}
        className={`wifiq-cell ${number !== null ? "filled" : ""}`}
      >
        {number !== null && (
          <span className="arabic-numbers">{toArabicNumbers(number)}</span>
        )}
      </div>
    ))
  }

  return (
    <div className="wifiq-mutsallas-container">
      <div className="header">
        <button onClick={() => navigate(-1)} className="back-button">
          رجوع
        </button>
        <h2>وفق مثلث (3×3)</h2>
      </div>

      <div className="miftah-display">
        المفتاح:{" "}
        <span className="arabic-numbers">{toArabicNumbers(numericMiftah)}</span>
      </div>

      <div className="wifiq-grid">{renderGrid()}</div>

      <div className="controls">
        <button
          onClick={() => {
            setGrid(Array(9).fill(null))
            setAnimationStep(0)
            setIsAnimating(true)
          }}
          className="animate-button"
        >
          إعادة التشغيل
        </button>
      </div>
    </div>
  )
}

export default WifiqMutsallas
