const GitHubCache = require('../models/GitHubCache')
const { fetchProfile, fetchRepos, fetchEvents } = require('../services/githubService')
const { calcScore } = require('../services/scoreService')
const { generateSummary } = require('../services/aiService')

exports.getProfile = async (req, res) => {
  try {
    const { username } = req.params

    const cached = await GitHubCache.findOne({ username })
    if (cached) return res.json(cached)

    const [profile, repos, events] = await Promise.all([
      fetchProfile(username),
      fetchRepos(username),
      fetchEvents(username)
    ])

    const readinessScore = calcScore(profile.data, repos.data, events.data)
    const aiSummary = await generateSummary(profile.data, repos.data, readinessScore)

    const result = await GitHubCache.create({
      username,
      profile: profile.data,
      repos: repos.data,
      events: events.data,
      aiSummary,
      readinessScore
    })

    res.json(result)

  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}