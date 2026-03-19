import './ScoreCard.css'

export default function ScoreCard({ score }) {
  const getColor = (score) => {
    if (score >= 75) return '#2ea043'
    if (score >= 50) return '#d29922'
    return '#f85149'
  }
  const circumference = 2 * Math.PI * 54
  const offset = circumference - (score / 100) * circumference

  return (
    <div className="score-card">
      <h3>Internship Readiness</h3>
      <div className="ring-container">
        <svg width="130" height="130" viewBox="0 0 130 130">
          <circle cx="65" cy="65" r="54" fill="none" stroke="#21262d" strokeWidth="10"/>
          <circle cx="65" cy="65" r="54" fill="none" stroke={getColor(score)} strokeWidth="10" strokeDasharray={circumference} strokeDashoffset={offset} strokeLinecap="round" transform="rotate(-90 65 65)"/>
        </svg>
        <div className="score-number" style={{ color: getColor(score) }}>{score}</div>
      </div>
      <p className="score-label">out of 100</p>
      <p className="score-msg">{score >= 75 ? 'Strong profile!' : score >= 50 ? 'Getting there!' : 'Needs improvement'}</p>
    </div>
  )
}