const shortid = require('shortid')
const express = require('express')
const jwt = require('jsonwebtoken')
const md5 = require('md5')

const secret = '@VeryH@rdS3cr3t3'

const findUser = (email, password, db) =>
  db.get('users')
    .find({ email, password })
    .value()

const isAuthorized = (req) => {
  try {
    const token = (req.headers.authorization || '').substr('Bearer '.length)
    jwt.verify(token, secret);
    return true
  } catch (err) {
    return false
  }
}

const login = db => (req, res) => {
  const { email, password } = req.body
  const user = findUser(email, md5(password), db)
  if (user) {
    const payload = { id: user.id, email }
    const token = jwt.sign(payload, secret, { expiresIn: '1h' });
    res.jsonp(token);
  } else {
    res.sendStatus(401)
  }
}

const signup = db => (req, res) => {
  const { email, fullname, password } = req.body
  const user = db.get('users').find({ email }).value()
  let status = 200
  let resBody = {}
  if (user) {
    status = 400
    resBody = { error: 'USER_EXISTS' }
  } else {
    const newUsr = {
      id: shortid.generate(), email, fullname, password: md5(password), colleagues: [],
    }
    db.get('users').push(newUsr).write()
    delete newUsr.password
    resBody = newUsr
  }
  res.status(status).jsonp(resBody)
}

const secureEndpoints = (req, res, next) => {
  if (isAuthorized(req)) {
    next()
  } else {
    res.sendStatus(401)
  }
}

const authorization = (db) => {
  const router = express.Router()
  router.post('/login', login(db))
  router.post('/signup', signup(db))
  router.use(secureEndpoints)
  return router
}

module.exports = authorization
