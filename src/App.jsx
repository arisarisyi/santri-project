import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import AbajadCalculator from "./components/AbajadCalculator/AbajadCalculator"
import "./App.css"
import WifiqDetailPage from "./pages/WifiqDetailPage"
import TaukilSamples from "./components/Taukil/TaukilTemplate"

function App() {
  return (
    <Router>
      <div className="app" dir="rtl">
        <Navbar />
        <div className="app-container">
          <Routes>
            <Route path="/" element={<AbajadCalculator />} />
            <Route path="/wifiq/:type" element={<WifiqDetailPage />} />
            <Route path="/taukil" element={<TaukilSamples />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
