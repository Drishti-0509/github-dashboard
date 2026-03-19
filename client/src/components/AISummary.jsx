export default function AISummary({ summary }) {
  return (
    <div style={{
      background: '#161b22',
      border: '1px solid #30363d',
      borderRadius: '10px',
      padding: '1.5rem',
      marginBottom: '1.5rem'
    }}>
      <h3 style={{ color: '#58a6ff', marginBottom: '10px' }}>AI Summary</h3>
      <p style={{ color: '#c9d1d9', lineHeight: '1.6' }}>{summary}</p>
    </div>
  )
}