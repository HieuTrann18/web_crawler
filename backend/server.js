const express = require('express')
require('dotenv').config()
const app = express()
const cors = require('cors')
const PORT = process.env.PORT || 8080
const articlesRoutes = require('./routes/articleRoutes')
const getConnection = require('./config/db')

app.use(express.json())
app.use(cors())

getConnection()

app.use('/api/articles', articlesRoutes)



app.listen(PORT, () => {
      console.log(`server is running on http://localhost:${PORT}`)
})