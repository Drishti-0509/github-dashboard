exports.generateSummary = async (profile, repos, score) => {
  try {
    const topLangs = [...new Set(repos.map(r => r.language).filter(Boolean))].slice(0, 3)
    const topRepos = repos
      .sort((a, b) => b.stargazers_count - a.stargazers_count)
      .slice(0, 2)
      .map(r => r.name)

    const level = score >= 75 ? 'strong' : score >= 50 ? 'promising' : 'developing'
    const langStr = topLangs.length > 0 ? topLangs.join(', ') : 'various technologies'
    const repoStr = topRepos.length > 0 ? topRepos.join(' and ') : 'multiple projects'
    const name = profile.name || profile.login

    return `${name} is a ${level} developer with ${profile.public_repos} public repositories and ${profile.followers} followers on GitHub. They primarily work with ${langStr}, and their standout projects include ${repoStr}. With an internship readiness score of ${score}/100, ${name} demonstrates ${score >= 75 ? 'excellent coding consistency and project diversity' : score >= 50 ? 'good potential and growing technical skills' : 'early-stage development with room to grow'}.`

  } catch (err) {
    return 'AI summary unavailable at this time.'
  }
}