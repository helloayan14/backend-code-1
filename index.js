// index.js
require('dotenv').config()

const express = require('express')
const app = express()
const port = process.env.PORT || 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/backend', (req, res) => {
  res.send('Hello Backend!')})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})