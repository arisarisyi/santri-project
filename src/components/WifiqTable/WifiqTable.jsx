import {
  toArabicNumbers,
  calculateWifiq,
  getWifiqProperties,
} from "../../utils/numbers"
import "./WifiqTable.css"
import { useNavigate } from "react-router-dom"

const WifiqTable = ({ total }) => {
  const navigate = useNavigate()
  const calculateMaghlaq = (miftah, type) => {
    if (miftah === "-" || typeof miftah !== "number" || miftah < 0) return "-"
    let result
    switch (type) {
      case "mutsalas":
        result = miftah + 8
        break
      case "murabba":
        result = miftah + 15
        break
      case "mukhamas":
        result = miftah + 24
        break
      case "musaddas":
        result = miftah + 35
        break
      case "musabba":
        result = miftah + 48
        break
      case "musamman":
        result = miftah + 63
        break
      case "mutassa":
        result = miftah + 80
        break
      case "muassyar":
        result = miftah + 99
        break
      default:
        return "-"
    }

    return result >= 0 ? result : "-"
  }

  // Fungsi untuk menghitung عدل
  const calculateAdl = (miftah, maghlaq) => {
    if (miftah === "-" || maghlaq === "-") return "-"
    return miftah + maghlaq
  }

  // Fungsi untuk menghitung طرح
  const calculateTarh = (miftah, type) => {
    if (miftah === "-") return "-"

    let size, shakl
    switch (type) {
      case "mutsalas":
        size = 3
        shakl = 3
        break
      case "murabba":
        size = 4
        shakl = 4
        break
      case "mukhamas":
        size = 5
        shakl = 5
        break
      case "musaddas":
        size = 6
        shakl = 6
        break
      case "musabba":
        size = 7
        shakl = 7
        break
      case "musamman":
        size = 8
        shakl = 8
        break
      case "mutassa":
        size = 9
        shakl = 9
        break
      case "muassyar":
        size = 10
        shakl = 10
        break
      default:
        return "-"
    }

    const jumlahBait = size * size
    const setengahShakl = 0.5 * shakl
    const tarh = (jumlahBait - 1) * setengahShakl

    return Math.round(tarh)
  }

  const calculateWafaq = (miftah, type) => {
    if (miftah === "-") return "-"
    const { size, shakl } = getWifiqProperties(type)
    if (size === 0) return "-"

    const jumlahBait = size * size
    const setengahShakl = 0.5 * shakl
    const wafaq = (jumlahBait + 1) * setengahShakl

    return wafaq >= 0 && Number.isInteger(wafaq) ? wafaq : "-"
  }

  const calculateMasaha = (type, wafaq) => {
    if (wafaq === "-") return "-"

    const { shakl } = getWifiqProperties(type)
    const masaha = wafaq * shakl

    return masaha >= 0 ? masaha : "-"
  }

  const calculateDabit = (wafaq, masaha) => {
    if (wafaq === "-" || masaha === "-") return "-"
    return wafaq + masaha
  }

  const calculateGhayah = (wafaq, type) => {
    let result
    switch (type) {
      case "mutsalas":
        result = wafaq * (3 * 2 + 2)
        break
      case "murabba":
        result = wafaq * (4 * 2 + 2)
        break
      case "mukhamas":
        result = wafaq * (5 * 2 + 2)
        break
      case "musaddas":
        result = wafaq * (6 * 2 + 2)
        break
      case "musabba":
        result = wafaq * (7 * 2 + 2)
        break
      case "musamman":
        result = wafaq * (8 * 2 + 2)
        break
      case "mutassa":
        result = wafaq * (9 * 2 + 2)
        break
      case "muassyar":
        result = wafaq * (10 * 2 + 2)
        break
      default:
        return "-"
    }

    return result >= 0 ? result : "-"
  }

  // Data untuk semua jenis wifiq
  const wifiqData = [
    { id: 1, name: "مُثَلَّث", type: "mutsalas" },
    { id: 2, name: "مُرَبَّع", type: "murabba" },
    { id: 3, name: "مُخَمَّس", type: "mukhamas" },
    { id: 4, name: "مُسَدَّس", type: "musaddas" },
    { id: 5, name: "مُسَبَّع", type: "musabba" },
    { id: 6, name: "مُثَمَّن", type: "musamman" },
    { id: 7, name: "مُتسع", type: "mutassa" },
    { id: 8, name: "مُعَشَّر", type: "muassyar" },
  ]

  return (
    <div className="wifiq-table-container">
      <h2>جدول الوفق والمفتاح</h2>

      <table className="wifiq-table">
        <thead>
          <tr>
            <th>#</th>
            <th>الوفق</th>
            <th>المفتاح</th>
            <th>المغلاق</th>
            <th>العدل</th>
            <th>الطرح</th>
            <th>الوفق</th>
            <th>مساحة</th>
            <th>ضابط</th>
            <th>غاية</th>
          </tr>
        </thead>
        <tbody>
          {wifiqData.map((wifiq) => {
            const miftah = calculateWifiq(total, wifiq.type)
            const maghlaq = calculateMaghlaq(miftah, wifiq.type)
            const adl = calculateAdl(miftah, maghlaq)
            const tarh = calculateTarh(miftah, wifiq.type)
            const wafaq = calculateWafaq(miftah, wifiq.type)
            const masaha = calculateMasaha(wifiq.type, wafaq)
            const dabit = calculateDabit(wafaq, masaha)
            const ghayah = calculateGhayah(wafaq, wifiq.type)

            const isClickable = miftah !== "-"
            return (
              <tr
                key={wifiq.id}
                onClick={() =>
                  isClickable &&
                  navigate(`/wifiq/${wifiq.type}`, {
                    state: {
                      miftah,
                      maghlaq: calculateMaghlaq(miftah, wifiq.type),
                      adl: calculateAdl(miftah, maghlaq),
                      tarh: calculateTarh(miftah, wifiq.type),
                      wafaq: calculateWafaq(miftah, wifiq.type),
                      masaha: calculateMasaha(wifiq.type, wafaq),
                      dabit: calculateDabit(wafaq, masaha),
                      ghayah: calculateGhayah(wafaq, wifiq.type),
                    },
                  })
                }
                style={{
                  cursor: isClickable ? "pointer" : "default",
                  backgroundColor: isClickable ? "#f9f9f9" : "inherit",
                }}
              >
                <td className="arabic-numbers">{toArabicNumbers(wifiq.id)}</td>
                <td>{wifiq.name}</td>
                <td className="arabic-numbers">
                  {miftah === "-" ? "-" : toArabicNumbers(miftah)}
                </td>
                <td className="arabic-numbers">
                  {maghlaq === "-" ? "-" : toArabicNumbers(maghlaq)}
                </td>
                <td className="arabic-numbers">
                  {adl === "-" ? "-" : toArabicNumbers(adl)}
                </td>
                <td className="arabic-numbers">
                  {tarh === "-" ? "-" : toArabicNumbers(tarh)}
                </td>
                <td className="arabic-numbers">
                  {tarh === "-" ? "-" : toArabicNumbers(wafaq)}
                </td>
                <td className="arabic-numbers">
                  {tarh === "-" ? "-" : toArabicNumbers(masaha)}
                </td>
                <td className="arabic-numbers">
                  {tarh === "-" ? "-" : toArabicNumbers(dabit)}
                </td>
                <td className="arabic-numbers">
                  {tarh === "-" ? "-" : toArabicNumbers(ghayah)}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default WifiqTable
