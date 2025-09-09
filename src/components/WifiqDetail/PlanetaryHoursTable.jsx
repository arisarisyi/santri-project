// src/components/WifiqDetail/PlanetaryHoursTable.js
import React from "react"
import "./WifiqDetail.css"

const PlanetaryHoursTable = ({ title, currentType, isNight }) => {
  const headers = [
    "السبت",
    "الجمعة",
    "الخميس",
    "الربعاء", // catatan: konsisten dengan data kamu
    "الثلاثاء",
    "الاثنين",
    "الأحد",
    "الساعة",
  ]

  // helper: warna transparan untuk highlight muda
  const hexToRgba = (hex, alpha) => {
    const h = hex.replace("#", "")
    const full =
      h.length === 3
        ? h
            .split("")
            .map((c) => c + c)
            .join("")
        : h
    const n = parseInt(full, 16)
    const r = (n >> 16) & 255,
      g = (n >> 8) & 255,
      b = n & 255
    return `rgba(${r}, ${g}, ${b}, ${alpha})`
  }

  const rows = isNight
    ? [
        [
          "المريح",
          "القمر",
          "الشمس",
          "الزحل",
          "الزحرة",
          "المشترى",
          "العطارد",
          "٦-٧",
        ],
        [
          "الشمس",
          "الزحل",
          "الزحرة",
          "المشترى",
          "العطارد",
          "المريح",
          "القمر",
          "٧-٨",
        ],
        [
          "الزحرة",
          "المشترى",
          "العطارد",
          "المريح",
          "القمر",
          "الشمس",
          "الزحل",
          "٨-٩",
        ],
        [
          "العطارد",
          "المريح",
          "القمر",
          "الشمس",
          "الزحل",
          "الزحرة",
          "المشترى",
          "٩-١٠",
        ],
        [
          "القمر",
          "الشمس",
          "الزحل",
          "الزحرة",
          "المشترى",
          "العطارد",
          "المريح",
          "١٠-١١",
        ],
        [
          "الزحل",
          "الزحرة",
          "المشترى",
          "العطارد",
          "المريح",
          "القمر",
          "الشمس",
          "١١-١٢",
        ],
        [
          "المشترى",
          "العطارد",
          "المريح",
          "القمر",
          "الشمس",
          "الزحل",
          "الزحرة",
          "١٢-١",
        ],
        [
          "المريح",
          "القمر",
          "الشمس",
          "الزحل",
          "الزحرة",
          "المشترى",
          "العطارد",
          "١-٢",
        ],
        [
          "الشمس",
          "الزحل",
          "الزحرة",
          "المشترى",
          "العطارد",
          "المريح",
          "القمر",
          "٢-٣",
        ],
        [
          "الزحرة",
          "المشترى",
          "العطارد",
          "المريح",
          "القمر",
          "الشمس",
          "الزحل",
          "٣-٤",
        ],
        [
          "العطارد",
          "المريح",
          "القمر",
          "الشمس",
          "الزحل",
          "الزحرة",
          "المشترى",
          "٤-٥",
        ],
        [
          "القمر",
          "الشمس",
          "الزحل",
          "الزحرة",
          "المشترى",
          "العطارد",
          "المريح",
          "٥-٦",
        ],
      ]
    : [
        [
          "الزحل",
          "الزحرة",
          "القمر",
          "العطارد",
          "المريح",
          "القمر",
          "الشمس",
          "٦-٧",
        ],
        [
          "المشترى",
          "العطارد",
          "الزحل",
          "القمر",
          "الشمس",
          "الزحل",
          "الزحرة",
          "٧-٨",
        ],
        [
          "المريح",
          "القمر",
          "الشمس",
          "الزحل",
          "الزحرة",
          "المشترى",
          "العطارد",
          "٨-٩",
        ],
        [
          "الشمس",
          "الزحل",
          "الزحرة",
          "المشترى",
          "العطارد",
          "المريح",
          "القمر",
          "٩-١٠",
        ],
        [
          "الزحرة",
          "المشترى",
          "العطارد",
          "المريح",
          "القمر",
          "الشمس",
          "الزحل",
          "١٠-١١",
        ],
        [
          "العطارد",
          "المريح",
          "القمر",
          "الشمس",
          "الزحل",
          "الزحرة",
          "المشترى",
          "١١-١٢",
        ],
        [
          "القمر",
          "الشمس",
          "الزحل",
          "الزحرة",
          "المشترى",
          "العطارد",
          "المريح",
          "١٢-١",
        ],
        [
          "الزحل",
          "الزحرة",
          "المشترى",
          "العطارد",
          "المريح",
          "القمر",
          "الشمس",
          "١-٢",
        ],
        [
          "المشترى",
          "العطارد",
          "المريح",
          "القمر",
          "الشمس",
          "الزحل",
          "الزحرة",
          "٢-٣",
        ],
        [
          "المريح",
          "القمر",
          "الشمس",
          "الزحل",
          "الزحرة",
          "المشترى",
          "العطارد",
          "٣-٤",
        ],
        [
          "الشمس",
          "الزحل",
          "الزحرة",
          "المشترى",
          "العطارد",
          "المريح",
          "القمر",
          "٤-٥",
        ],
        [
          "الزحرة",
          "المشترى",
          "العطارد",
          "المريح",
          "القمر",
          "الشمس",
          "الزحل",
          "٥-٦",
        ],
      ]

  const dayIndexMap = {
    السبت: 0,
    الجمعة: 1,
    الخميس: 2,
    الربعاء: 3,
    الثلاثاء: 4,
    الاثنين: 5,
    الأحد: 6,
  }

  const targetDayIndex = dayIndexMap[currentType.day]
  const timeColIndex = headers.length - 1

  return (
    <div className="planetary-table-container">
      <h3>{title}</h3>
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              {headers.map((h, i) => (
                <th key={i}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rIdx) => (
              <tr key={rIdx}>
                {row.map((cell, cIdx) => {
                  if (cIdx === timeColIndex) return <td key={cIdx}>{cell}</td>

                  const isPlanet = cell === currentType.planet
                  const isPrimary = isPlanet && cIdx === targetDayIndex

                  let style = {}
                  let className = ""
                  if (isPrimary) {
                    style = {
                      backgroundColor: currentType.color,
                      color: "#fff",
                    }
                    className = "highlight-cell primary"
                  } else if (isPlanet) {
                    style = {
                      backgroundColor: hexToRgba(currentType.color, 0.18),
                    }
                    className = "highlight-cell planet-only"
                  }

                  return (
                    <td key={cIdx} className={className} style={style}>
                      {cell}
                    </td>
                  )
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default PlanetaryHoursTable
