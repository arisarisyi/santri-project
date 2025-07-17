import "./ResultDisplay.css"

const ResultDisplay = ({ result, details }) => {
  return (
    <div className="result-container">
      {result && (
        <div className="result-value">
          النتيجة: <span className="arabic-numbers">{result}</span>
        </div>
      )}

      {details && <div className="result-details">{details}</div>}
    </div>
  )
}

export default ResultDisplay
