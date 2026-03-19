const router = require('express').Router()
const { getProfile } = require('../controllers/githubController')

router.get('/:username', getProfile)

module.exports = router