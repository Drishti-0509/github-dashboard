const axios = require('axios')

const GH = axios.create({
  baseURL: 'https://api.github.com'
})

exports.fetchProfile = (username) =>
  GH.get(`/users/${username}`)

exports.fetchRepos = (username) =>
  GH.get(`/users/${username}/repos?per_page=100&sort=updated`)

exports.fetchEvents = (username) =>
  GH.get(`/users/${username}/events/public?per_page=100`)