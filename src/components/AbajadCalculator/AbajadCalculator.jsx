// src/components/AbajadCalculator/AbajadCalculator.js
import React, { useState } from "react"
import ResultDisplay from "../ResultDisplay/ResultDisplay"
import "./AbajadCalculator.css"
import WifiqTable from "../WifiqTable/WifiqTable"

// Kamus nilai Abajadun
const abajadValues = {
  ا: 1,
  ٱ: 1,
  أ: 1,
  إ: 1,
  آ: 1,
  ب: 2,
  ج: 3,
  د: 4,
  ه: 5,
  ة: 5,
  و: 6,
  ز: 7,
  ح: 8,
  ط: 9,
  ي: 10,
  یَ: 10,
  ى: 10,
  ی: 10,
  ك: 20,
  ل: 30,
  م: 40,
  ن: 50,
  س: 60,
  ع: 70,
  ف: 80,
  ص: 90,
  ق: 100,
  ر: 200,
  ش: 300,
  ت: 400,
  ث: 500,
  خ: 600,
  ذ: 700,
  ض: 800,
  ظ: 900,
  غ: 1000,
}

// Fungsi untuk mengubah angka Latin ke Arab
const toArabicNumbers = (num) => {
  const arabicNumbers = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"]
  return num
    .toString()
    .split("")
    .map((digit) => arabicNumbers[parseInt(digit)])
    .join("")
}

const AbajadCalculator = () => {
  const [text, setText] = useState("")
  const [result, setResult] = useState("")
  const [calculationDetails, setCalculationDetails] = useState("")

  const [numericTotal, setNumericTotal] = useState(0)

  const calculateAbajad = () => {
    if (!text.trim()) {
      setResult("Masukkan katanya Bolo")
      setCalculationDetails("")
      return
    }

    let total = 0
    let calculationParts = []
    let lettersUsed = []

    for (let i = 0; i < text.length; i++) {
      const char = text[i]
      if (Object.prototype.hasOwnProperty.call(abajadValues, char)) {
        const value = abajadValues[char]
        total += value
        lettersUsed.push(char)
        calculationParts.push(`${char} (${toArabicNumbers(value)})`)
      }
    }

    if (calculationParts.length > 0) {
      const calculationString = calculationParts.join(" + ")
      setResult(toArabicNumbers(total))
      setCalculationDetails(`${calculationString} = ${toArabicNumbers(total)}`)
      setNumericTotal(total)
    } else {
      setResult("")
      setCalculationDetails("لم يتم إدخال حروف عربية صالحة")
      setNumericTotal(0)
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      calculateAbajad()
    }
  }

  return (
    <div className="calculator-container" id="calculator">
      <h1>حاسبة حساب الجمل</h1>
      <div className="input-group">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="اكتب النص العربي هنا..."
          className="arabic-input"
          onKeyPress={handleKeyPress}
        />
      </div>
      <button onClick={calculateAbajad} className="calculate-btn">
        حساب
      </button>

      <ResultDisplay result={result} details={calculationDetails} />
      {numericTotal > 0 && <WifiqTable total={numericTotal} />}
    </div>
  )
}

export default AbajadCalculator
