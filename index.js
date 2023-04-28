const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000

const categories = require('./data/categories.json')

app.use(cors())

app.get('/', (req, res) => {
  res.send('The Dragon News Portal')
})
app.get('/categories', (req, res) => {
  res.send(categories)
})

app.listen(port, () => {
  console.log(`The Dragon News Portal is Running on port: ${port}`)
})