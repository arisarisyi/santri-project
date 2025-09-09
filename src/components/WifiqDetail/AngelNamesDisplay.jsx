// src/components/WifiqDetail/AngelNamesDisplay.js
import React from "react"
import { toArabicNumbers } from "../../utils/numbers"
import "./WifiqDetail.css"

const AngelNamesDisplay = ({
  miftah,
  maghlaq,
  adl,
  wafaq,
  masaha,
  dabit,
  ghayah,
}) => {
  // Fungsi untuk menghitung nilai malaikat
  const calculateAngelValue = (value) => {
    if (value === "-" || value === undefined) return null

    // Jika nilai kurang dari 51, tambahkan 360
    let adjustedValue = value
    if (value < 51) {
      adjustedValue = value + 360
    }

    // Kurangi dengan 51
    return adjustedValue - 51
  }

  // Fungsi untuk mengonversi angka menjadi huruf Abajad
  const convertToAbajadLetters = (number) => {
    const abajadMap = {
      1: "ا",
      2: "ب",
      3: "ج",
      4: "د",
      5: "ه",
      6: "و",
      7: "ز",
      8: "ح",
      9: "ط",
      10: "ي",
      20: "ك",
      30: "ل",
      40: "م",
      50: "ن",
      60: "س",
      70: "ع",
      80: "ف",
      90: "ص",
      100: "ق",
      200: "ر",
      300: "ش",
      400: "ت",
      500: "ث",
      600: "خ",
      700: "ذ",
      800: "ض",
      900: "ظ",
      1000: "غ",
    }

    // Urutkan kunci dari besar ke kecil
    const keys = Object.keys(abajadMap)
      .map(Number)
      .sort((a, b) => b - a)
    let remaining = number
    let letters = []

    for (const key of keys) {
      if (remaining >= key) {
        const count = Math.floor(remaining / key)
        for (let i = 0; i < count; i++) {
          letters.push(abajadMap[key])
        }
        remaining %= key
      }
    }

    // Balik urutan untuk penulisan dari kanan ke kiri
    return letters.reverse().join("")
  }

  // Fungsi untuk menghasilkan nama malaikat
  const generateAngelName = (value) => {
    if (value === null || value === undefined) return "-"

    const angelValue = calculateAngelValue(value)
    if (angelValue === null) return "-"

    const abajadLetters = convertToAbajadLetters(angelValue)
    return abajadLetters + "اييل"
  }

  // Data untuk 7 malaikat
  const angels = [
    {
      name: "الملاك الأول",
      source: "المفتاح",
      value: miftah,
      angelName: generateAngelName(miftah),
    },
    {
      name: "الملاك الثاني",
      source: "المغلاق",
      value: maghlaq,
      angelName: generateAngelName(maghlaq),
    },
    {
      name: "الملاك الثالث",
      source: "العدل",
      value: adl,
      angelName: generateAngelName(adl),
    },
    {
      name: "الملاك الرابع",
      source: "الوفق",
      value: wafaq,
      angelName: generateAngelName(wafaq),
    },
    {
      name: "الملاك الخامس",
      source: "المساحة",
      value: masaha,
      angelName: generateAngelName(masaha),
    },
    {
      name: "الملاك السادس",
      source: "الضابط",
      value: dabit,
      angelName: generateAngelName(dabit),
    },
    {
      name: "الملاك السابع",
      source: "الغاية",
      value: ghayah,
      angelName: generateAngelName(ghayah),
    },
  ]

  return (
    <div className="angels-section">
      <h2>أسماء الملائكة الروحانية</h2>
      <p className="explanation">
        الأسماء التالية للخدام الروحانية المستخرجة من قيم الوفق، تستخدم في
        الحاجات الطيبة
      </p>

      <div className="angels-grid">
        {angels.map((angel, index) => (
          <div key={index} className="angel-card">
            <div className="angel-header">
              <h3>{angel.name}</h3>
              <div className="angel-source">
                من {angel.source}:{" "}
                <span className="arabic-numbers">
                  {toArabicNumbers(angel.value)}
                </span>
              </div>
            </div>

            <div className="angel-name">{angel.angelName}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AngelNamesDisplay
