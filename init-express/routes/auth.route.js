const express = require('express')
const router = express.Router()
const { register, login, exampleForGetToken, getAllMembers } = require('../controllers/auth.controllers')
const { requireAuth, requireRoleAdmin } = require('../middlewares/jwtValidator')

router.post('/register', register)
router.post('/login', login)
router.get('/me', requireAuth, exampleForGetToken)
router.get('/get-all-member', requireAuth, requireRoleAdmin, getAllMembers)

module.exports = router