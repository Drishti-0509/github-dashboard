const mongoose = require('mongoose')

const GitHubCacheSchema = new mongoose.Schema({
  username: { type: String, unique: true },
  profile: Object,
  repos: Array,
  events: Array,
  aiSummary: String,
  readinessScore: Number,
  cachedAt: { type: Date, default: Date.now, expires: 3600 }
})

module.exports = mongoose.model('GitHubCache', GitHubCacheSchema)