import './RepoList.css'

export default function RepoList({ repos }) {
  const topRepos = [...repos]
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
    .slice(0, 6)

  return (
    <div className="repo-list">
      <h3>Top Repositories</h3>
      <div className="repo-grid">
        {topRepos.map(repo => (
          <a>
            key={repo.id}
            href={repo.html_url}
            target="_blank"
            rel="noreferrer"
            className="repo-card"
          
            <div className="repo-top">
              <span className="repo-name">{repo.name}</span>
              <span className="repo-stars">⭐ {repo.stargazers_count}</span>
            </div>
            <p className="repo-desc">
              {repo.description || 'No description'}
            </p>
            <div className="repo-bottom">
              <span className="repo-lang">{repo.language || 'Unknown'}</span>
              <span className="repo-forks">🍴 {repo.forks_count}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}