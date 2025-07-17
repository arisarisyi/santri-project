import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import AbajadCalculator from "./components/AbajadCalculator/AbajadCalculator"
import "./App.css"
import WifiqPage from "./pages/WifiqPage"

function App() {
  return (
    <Router>
      <div className="app" dir="rtl">
        <Navbar />
        <div className="app-container">
          <Routes>
            <Route path="/" element={<AbajadCalculator />} />
            <Route path="/wifiq/:type/:miftah" element={<WifiqPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
