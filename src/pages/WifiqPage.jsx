// src/pages/WifiqPage.js
import React from "react"
import { useParams } from "react-router-dom"
import WifiqMutsallas from "../components/WifiqMustsallas/WifiqMutsallas"

const WifiqPage = () => {
  const { type, _ } = useParams()

  // Di sini kita bisa menambahkan logika untuk jenis wifiq lainnya
  // Untuk sekarang hanya mendukung mutsalas (3x3)
  return (
    <div className="wifiq-page">
      {type === "mutsalas" && <WifiqMutsallas />}

      {/* Di masa depan kita bisa tambahkan: */}
      {/* {type === 'murabba' && <WifiqMurabba />} */}
      {/* {type === 'mukhamas' && <WifiqMukhamas />} */}
    </div>
  )
}

export default WifiqPage
