const express = require('express')
const jwt = require('jsonwebtoken')
const db = require('./db.json')
const secret = '@VeryH@rdS3cr3t3'

const findUser = (email, password) => db.users.find(user => user.email === email && user.password === password)

const isAuthorized = req => {
  try {
    const token = (req.headers.authorization || '').substr('Bearer '.length)
    jwt.verify(token, secret);
    return true
  } catch (err) {
    return false
  }
}

const login = (req, res, next) => {
  const { email, password } = req.body
  const user = findUser(email, password)
  if (user) {
    const payload = { id: user.id, email }
    const token = jwt.sign(payload, secret, { expiresIn: '1h' });
    res.jsonp(token);
  } else {
    res.sendStatus(401)
  }
}

const secureEndpoints = (req, res, next) => {
  if (isAuthorized(req)) {
    next()
  } else {
    res.sendStatus(401)
  }
}

const authorization = () => {
  const router = express.Router()
  router.post('/login', login)
  router.use(secureEndpoints)
  return router
}

module.exports = authorization
