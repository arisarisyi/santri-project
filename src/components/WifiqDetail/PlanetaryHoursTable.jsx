// src/components/WifiqDetail/PlanetaryHoursTable.js
import React from "react"
import "./WifiqDetail.css"

const PlanetaryHoursTable = ({ title, type, currentType, isNight }) => {
  // Data untuk tabel jam planet
  const headers = [
    "السبت",
    "الجمعة",
    "الخميس",
    "الربعاء",
    "الثلاثاء",
    "الاثنين",
    "الأحد",
    "الساعة",
  ]

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

  // Tentukan indeks kolom berdasarkan hari
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

  return (
    <div className="planetary-table-container">
      <h3>{title}</h3>
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              {headers.map((header, index) => (
                <th key={index}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) => {
                  // Tentukan apakah sel ini harus di-highlight
                  const isHighlighted =
                    cellIndex === targetDayIndex && cell === currentType.planet

                  return (
                    <td
                      key={cellIndex}
                      className={isHighlighted ? "highlight-cell" : ""}
                      style={
                        isHighlighted
                          ? { backgroundColor: currentType.color }
                          : {}
                      }
                    >
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
