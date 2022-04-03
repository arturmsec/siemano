const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

// HTTP methods: get, post, put, patch, delete

app.get('/', (req, res) => { // try opening localhost:8081/
  res.send({
    message: 'hello Home!'
  })
})
app.get('/status', (req, res) => { // try opening localhost:8081/status
  res.send({
    message: 'hello world!'
  })
})

app.post('/register', (req, res) => {
  res.send({
    message: `Hello ${req.body.email} ! Your user was registered!`
  })
})

app.listen(process.env.PORT || 8081)
