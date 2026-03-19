import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Home.css'

export default function Home() {
  const [username, setUsername] = useState('')
  const navigate = useNavigate()

  const handleSearch = () => {
    if (username.trim()) navigate(`/dashboard/${username}`)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleSearch()
  }

  return (
    <div className="home">
      <div className="grid-bg"></div>
      <div className="glow-1"></div>
      <div className="glow-2"></div>

      <div className="home-content">
        <div className="badge">🚀 Internship Season 2026</div>

        <h1>
          Analyze Your
          <br />
          <span className="gradient-text">GitHub Profile</span>
        </h1>

        <p className="subtitle">
          Get your internship readiness score, language breakdown,
          <br />and AI-powered recruiter summary in seconds.
        </p>

        <div className="search-box">
          <div className="search-icon">⌕</div>
          <input
            type="text"
            placeholder="Enter GitHub username..."
            value={username}
            onChange={e => setUsername(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button onClick={handleSearch}>
            Analyze <span>→</span>
          </button>
        </div>

        <p className="hint">Try: torvalds · gaearon · addyosmani</p>

        <div className="features">
          <div className="feature">
            <div className="feature-icon">🏆</div>
            <div className="feature-text">
              <strong>Readiness Score</strong>
              <span>0-100 internship rating</span>
            </div>
          </div>
          <div className="feature">
            <div className="feature-icon">📊</div>
            <div className="feature-text">
              <strong>Language Stats</strong>
              <span>Your tech stack breakdown</span>
            </div>
          </div>
          <div className="feature">
            <div className="feature-icon">🤖</div>
            <div className="feature-text">
              <strong>AI Summary</strong>
              <span>Recruiter-ready bio</span>
            </div>
          </div>
          <div className="feature">
            <div className="feature-icon">⭐</div>
            <div className="feature-text">
              <strong>Top Repos</strong>
              <span>Best projects highlighted</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
