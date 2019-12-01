var express = require('express')
var app = express()
const { parse } = require('url')
const PI = require('pi')

const api = express.Router()
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  next()
})
api.get(['/pi', '/pie', '/p'], (req, res) => {
  const { query } = parse(req.url, true)
  const { n = 9 } = query
  res.end(PI(n))
})
api.get(['/hello', '/hi', '/hoi'], (req, res) => {
  res.send('hi')
})
api.get(['/ping', '/pong', '/up'], (req, res) => {
  res.send('pong')
})
api.get('/', (req, res) => {
  res.send(
    `
    This is the Pi as a Service (PaaS) API\n\n
    Send a GET request to /api/p\n
    To get x decimals of pi do this: /api/p?n=x\n

    e.g. GET pi.now.sh/p?n=50
    `
  )
})
app.use('/api', api)
app.listen(3000, () => {
  //console.log('Server running on port 3000')
})
