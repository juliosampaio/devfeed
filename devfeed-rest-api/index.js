require('dotenv').config()

const jsonServer = require('json-server')
const authorization = require('./authorization')
const customResponses = require('./customResponses')

const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()
const port = 3000


router.render = customResponses
server.use(middlewares)
server.use(jsonServer.bodyParser)
server.use(authorization(router.db))
server.use(router)
server.listen(port, () => {
  console.log(`DevFeed API is running on port: ${port}`)
})
