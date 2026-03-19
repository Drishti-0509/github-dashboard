const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

const app = express()

// middleware
app.use(cors())
app.use(express.json())

// test route
app.get('/', (req, res) => {
  res.json({ message: 'Server is running!' })
})

// routes
app.use('/api/github', require('./routes/github'))

// connect MongoDB then start server
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('MongoDB connected!')
    app.listen(5001, () => {
      console.log('Server running on port 5001')
    })
  })
  .catch(err => console.log('Error:', err))