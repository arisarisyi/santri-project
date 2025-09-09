// src/components/WifiqDetail/WifiqDetail.js
import React from "react"
import { useParams, useLocation } from "react-router-dom"
import PlanetaryHoursTable from "./PlanetaryHoursTable"
import { toArabicNumbers } from "../../utils/numbers"
import "./WifiqDetail.css"
import AngelNamesDisplay from "./AngelNamesDisplay"
import SufliyyahAngels from "./SufliyyahAngels"

const WifiqDetail = () => {
  const { type } = useParams()
  const location = useLocation()
  const { miftah, maghlaq, adl, tarh, wafaq, masaha, dabit, ghayah } =
    location.state || {}

  // Data untuk setiap jenis wifiq
  const wifiqTypes = {
    mutsalas: {
      name: "مُثَلَّث",
      size: "3×3",
      day: "السبت",
      planet: "الزحل",
      color: "#3498db",
    },
    murabba: {
      name: "مُرَبَّع",
      size: "4×4",
      day: "الربعاء",
      planet: "العطارد",
      color: "#2ecc71",
    },
    mukhamas: {
      name: "مُخَمَّس",
      size: "5×5",
      day: "الثلاثاء",
      planet: "المريح",
      color: "#e74c3c",
    },
    musaddas: {
      name: "مُسَدَّس",
      size: "6×6",
      day: "الأحد",
      planet: "الشمس",
      color: "#f39c12",
    },
    musabba: {
      name: "مُسَبَّع",
      size: "7×7",
      day: "الجمعة",
      planet: "الزحرة",
      color: "#9b59b6",
    },
    musamman: {
      name: "مُثَمَّن",
      size: "8×8",
      day: "الخميس",
      planet: "المشترى",
      color: "#1abc9c",
    },
    mutassa: {
      name: "مُتسع",
      size: "9×9",
      day: "الاثنين",
      planet: "القمر",
      color: "#6970bbff",
    },
  }

  const currentType = wifiqTypes[type] || wifiqTypes.mutsalas

  return (
    <div className="wifiq-detail-container">
      <div
        className="wifiq-header"
        style={{ backgroundColor: currentType.color }}
      >
        <h1>
          وفق {currentType.name} ({currentType.size})
        </h1>
        <p>
          يوم {currentType.day} - كوكب {currentType.planet}
        </p>
      </div>

      <div className="wifiq-values">
        <h2>القيم المحسوبة</h2>
        <div className="values-grid">
          <div className="value-card">
            <div className="value-title">المفتاح</div>
            <div className="value-number arabic-numbers">
              {toArabicNumbers(miftah)}
            </div>
          </div>
          <div className="value-card">
            <div className="value-title">المغلاق</div>
            <div className="value-number arabic-numbers">
              {toArabicNumbers(maghlaq)}
            </div>
          </div>
          <div className="value-card">
            <div className="value-title">العدل</div>
            <div className="value-number arabic-numbers">
              {toArabicNumbers(adl)}
            </div>
          </div>
          <div className="value-card">
            <div className="value-title">الطرح</div>
            <div className="value-number arabic-numbers">
              {toArabicNumbers(tarh)}
            </div>
          </div>
          <div className="value-card">
            <div className="value-title">الوفق</div>
            <div className="value-number arabic-numbers">
              {toArabicNumbers(wafaq)}
            </div>
          </div>
          <div className="value-card">
            <div className="value-title">المساحة</div>
            <div className="value-number arabic-numbers">
              {toArabicNumbers(masaha)}
            </div>
          </div>
          <div className="value-card">
            <div className="value-title">الضابط</div>
            <div className="value-number arabic-numbers">
              {toArabicNumbers(dabit)}
            </div>
          </div>
          <div className="value-card">
            <div className="value-title">الغاية</div>
            <div className="value-number arabic-numbers">
              {toArabicNumbers(ghayah)}
            </div>
          </div>
        </div>
      </div>

      <AngelNamesDisplay
        miftah={miftah}
        maghlaq={maghlaq}
        adl={adl}
        wafaq={wafaq}
        masaha={masaha}
        dabit={dabit}
        ghayah={ghayah}
      />

      <SufliyyahAngels
        miftah={miftah}
        maghlaq={maghlaq}
        adl={adl}
        wafaq={wafaq}
        masaha={masaha}
        dabit={dabit}
        ghayah={ghayah}
      />

      <div className="planetary-section">
        <h2>ساعات الكواكب</h2>
        <p className="explanation">
          الجدول التالي يظهر ساعات الكواكب الليلية والنهارية. الخلايا المميزة
          باللون تمثل الساعة المخصصة لهذا الوفق.
        </p>

        <div className="tables-container">
          <PlanetaryHoursTable
            title="الليل"
            type={type}
            currentType={currentType}
            isNight={true}
          />

          <PlanetaryHoursTable
            title="النهار"
            type={type}
            currentType={currentType}
            isNight={false}
          />
        </div>
      </div>
    </div>
  )
}

export default WifiqDetail
