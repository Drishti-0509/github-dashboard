exports.calcScore = (profile, repos, events) => {
  let score = 0

  // consistency - commits in last 30 days
  const recentEvents = events.filter(e => {
    const days = (Date.now() - new Date(e.created_at)) / 86400000
    return days <= 30 && e.type === 'PushEvent'
  })
  score += Math.min(recentEvents.length * 2, 25)

  // project variety - different languages
  const langs = [...new Set(repos.map(r => r.language).filter(Boolean))]
  score += Math.min(langs.length * 5, 20)

  // readme quality - repos with descriptions
  const withDesc = repos.filter(r => r.description).length
  score += Math.min(withDesc * 3, 15)

  // repo count
  score += Math.min(profile.public_repos * 2, 20)

  // stars received
  const totalStars = repos.reduce((a, r) => a + r.stargazers_count, 0)
  score += Math.min(totalStars * 2, 20)

  return Math.min(score, 100)
}