import './LangChart.css'

export default function LangChart({ repos }) {
  if (!repos || !Array.isArray(repos)) return null

  const langCount = {}
  repos.forEach(repo => {
    if (repo.language) {
      langCount[repo.language] = (langCount[repo.language] || 0) + 1
    }
  })

  const data = Object.entries(langCount)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 6)

  return (
    <div className="lang-card">
      <h3>Languages Used</h3>
      {data.map(([lang, count]) => (
        <div key={lang} style={{ marginBottom: '8px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', color: '#c9d1d9', fontSize: '13px' }}>
            <span>{lang}</span>
            <span>{count} repos</span>
          </div>
          <div style={{ height: '6px', background: '#21262d', borderRadius: '3px', marginTop: '4px' }}>
            <div style={{ height: '100%', width: `${(count / repos.length) * 100}%`, background: '#58a6ff', borderRadius: '3px' }}></div>
          </div>
        </div>
      ))}
    </div>
  )
}