const express = require('express')
const router = express.Router()
const { register } = require('../controllers/user.controller')
const { registerValidator } = require('../middlewares/validator/userValidator')

router.post('/register', registerValidator, register)

module.exports = router