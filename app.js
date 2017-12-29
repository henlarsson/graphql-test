const express = require('express')
var bodyParser = require('body-parser')
const routes = require('./controller')

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/', routes)

const server = app.listen(3000, () => {
  const { port } = server.address()
  console.info(`\n\nExpress listen at http://localhost:${port} \n`)
})