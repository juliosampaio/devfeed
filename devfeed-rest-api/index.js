const jsonServer = require('json-server')
const authorization = require('./authorization')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(jsonServer.bodyParser)
server.use(authorization())
server.use(router)
server.listen(3000, () => {
  console.log('JSON Server is running')
})
