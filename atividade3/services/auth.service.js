import user from '../models/userModel.js'
const jwt = require('jsonwebtoken')

const loginService = (email) => user.findOne({ email })

const generateToken = (user) => jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' })

module.exports = { loginService, generateToken }