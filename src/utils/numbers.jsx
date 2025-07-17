// src/utils/numbers.js
export const toArabicNumbers = (num) => {
  if (num === "-" || num === null || num === undefined) return "-"
  if (typeof num !== "number") return num

  const arabicNumbers = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"]
  return num
    .toString()
    .split("")
    .map((digit) => arabicNumbers[parseInt(digit)] || digit)
    .join("")
}

export const calculateWifiq = (total, type) => {
  let result

  switch (type) {
    case "mutsalas":
      result = total / 3 - 4
      break
    case "murabba":
      result = (total - 3) / 4
      break
    case "mukhamas":
      result = total / 5 - 12
      break
    case "musaddas":
      result = (total - 105) / 6
      break
    case "musabba":
      result = total / 7 - 24
      break
    case "musamman":
      result = (total - 252) / 8
      break
    case "mutassa":
      result = total / 9 - 40
      break
    case "muassyar":
      result = (total - 495) / 10
      break
    default:
      return "-"
  }

  // Periksa apakah hasilnya bilangan bulat non-negatif
  const isInteger = Number.isInteger(result)
  const isNonNegative = result >= 0

  return isInteger && isNonNegative ? result : "-"
}

// Fungsi untuk mendapatkan properti wifiq berdasarkan jenis
export const getWifiqProperties = (type) => {
  switch (type) {
    case "mutsalas":
      return { size: 3, shakl: 3, name: "مُثَلَّث (3x3)" }
    case "murabba":
      return { size: 4, shakl: 4, name: "مُرَبَّع (4x4)" }
    case "mukhamas":
      return { size: 5, shakl: 5, name: "مُخَمَّس (5x5)" }
    case "musaddas":
      return { size: 6, shakl: 6, name: "مُسَدَّس (6x6)" }
    case "musabba":
      return { size: 7, shakl: 7, name: "مُسَبَّع (7x7)" }
    case "musamman":
      return { size: 8, shakl: 8, name: "مُثَمَّن (8x8)" }
    case "mutassa":
      return { size: 9, shakl: 9, name: "مُتسع (9x9)" }
    case "muassyar":
      return { size: 10, shakl: 10, name: "مُعَشَّر (10x10)" }
    default:
      return { size: 0, shakl: 0, name: "" }
  }
}
