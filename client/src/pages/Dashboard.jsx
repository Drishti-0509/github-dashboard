import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import ScoreCard from '../components/ScoreCard'
import LangChart from '../components/LangChart'
import RepoList from '../components/RepoList'
import './Dashboard.css'

export default function Dashboard() {
  const { username } = useParams()
  const navigate = useNavigate()
  const [profile, setProfile] = useState(null)
  const [repos, setRepos] = useState([])
  const [score, setScore] = useState(0)
  const [summary, setSummary] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    axios.get(`http://localhost:5001/api/github/${username}`)
      .then(res => {
        const data = res.data
        setProfile(data.profile)
        setRepos(data.repos || [])
        setScore(data.readinessScore || 0)
        setSummary(data.aiSummary || '')
        setLoading(false)
      })
      .catch(err => {
        setError('User not found or API error')
        setLoading(false)
      })
  }, [username])

  if (loading) return (
    <div className="loading">
      <p>Analyzing {username}...</p>
      <p className="sub">Fetching repos, calculating score...</p>
    </div>
  )

  if (error) return (
    <div className="loading">
      <p>{error}</p>
      <button onClick={() => navigate('/')}>Go Back</button>
    </div>
  )

  if (!profile) return (
    <div className="loading">
      <p>No data found</p>
    </div>
  )

  return (
    <div className="dashboard">
      <div className="dash-header">
        <img src={profile.avatar_url} alt="avatar" className="avatar" />
        <div>
          <h1>{profile.name || profile.login}</h1>
          <p>{profile.bio || 'No bio available'}</p>
          <div className="stats">
            <span>Followers: {profile.followers}</span>
            <span>Repos: {profile.public_repos}</span>
          </div>
        </div>
        <button className="back-btn" onClick={() => navigate('/')}>← Back</button>
      </div>

      <div className="ai-summary">
        <h3>AI Summary</h3>
        <p>{summary}</p>
      </div>

      <div className="dash-grid">
        <ScoreCard score={score} />
        {repos.length > 0 && <LangChart repos={repos} />}
      </div>

      {repos.length > 0 && <RepoList repos={repos} />}
    </div>
  )
}