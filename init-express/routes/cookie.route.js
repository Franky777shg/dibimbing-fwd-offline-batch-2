const express = require('express')
const router = express.Router()
const cookieController = require('../controllers/cookie.controller')

router.post('/set', cookieController.setCookie)
router.get('/get', cookieController.getCookie)

// untuk mengexport router di atas yang sudah dibuat
module.exports = router