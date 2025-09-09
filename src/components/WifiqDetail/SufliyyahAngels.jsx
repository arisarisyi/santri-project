import React from "react"
import { toArabicNumbers } from "../../utils/numbers"
import "./WifiqDetail.css"

const SufliyyahAngels = ({
  miftah,
  maghlaq,
  adl,
  wafaq,
  masaha,
  dabit,
  ghayah,
}) => {
  // Fungsi untuk menghitung nilai malaikat hajat buruk
  const calculateEvilAngelValue = (value) => {
    if (value === "-" || value === undefined) return null

    // Jika nilai kurang dari 51, tambahkan 319
    let adjustedValue = value
    if (value < 51) {
      adjustedValue = value + 319
    }

    // Kurangi dengan 51
    return adjustedValue - 51
  }

  // Fungsi untuk mengonversi angka menjadi huruf Abajad (dari besar ke kecil)
  const convertToAbajadLetters = (number) => {
    const abajadMap = {
      1000: "غ",
      900: "ظ",
      800: "ض",
      700: "ذ",
      600: "خ",
      500: "ث",
      400: "ت",
      300: "ش",
      200: "ر",
      100: "ق",
      90: "ص",
      80: "ف",
      70: "ع",
      60: "س",
      50: "ن",
      40: "م",
      30: "ل",
      20: "ك",
      10: "ي",
      9: "ط",
      8: "ح",
      7: "ز",
      6: "و",
      5: "ه",
      4: "د",
      3: "ج",
      2: "ب",
      1: "ا",
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

    return letters.join("")
  }

  // Fungsi untuk menghasilkan nama malaikat hajat buruk
  const generateEvilAngelName = (value) => {
    if (value === null || value === undefined) return "-"

    const angelValue = calculateEvilAngelValue(value)
    if (angelValue === null) return "-"

    const abajadLetters = convertToAbajadLetters(angelValue)
    return abajadLetters + "طيش"
  }

  // Data untuk 7 malaikat hajat buruk
  const evilAngels = [
    {
      name: "الملاك الأول",
      source: "المفتاح",
      value: miftah,
      angelName: generateEvilAngelName(miftah),
    },
    {
      name: "الملاك الثاني",
      source: "المغلاق",
      value: maghlaq,
      angelName: generateEvilAngelName(maghlaq),
    },
    {
      name: "الملاك الثالث",
      source: "العدل",
      value: adl,
      angelName: generateEvilAngelName(adl),
    },
    {
      name: "الملاك الرابع",
      source: "الوفق",
      value: wafaq,
      angelName: generateEvilAngelName(wafaq),
    },
    {
      name: "الملاك الخامس",
      source: "المساحة",
      value: masaha,
      angelName: generateEvilAngelName(masaha),
    },
    {
      name: "الملاك السادس",
      source: "الضابط",
      value: dabit,
      angelName: generateEvilAngelName(dabit),
    },
    {
      name: "الملاك السابع",
      source: "الغاية",
      value: ghayah,
      angelName: generateEvilAngelName(ghayah),
    },
  ]

  return (
    <div className="evil-angels-section">
      <h2>أسماء الملائكة للحاجات غير الطيبة</h2>
      <p className="warning">
        <strong>تحذير:</strong> هذه الأسماء للعلم فقط ولا ينصح باستخدامها لأغراض
        سيئة
      </p>

      <div className="angels-grid">
        {evilAngels.map((angel, index) => (
          <div key={index} className="angel-card evil">
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

export default SufliyyahAngels
