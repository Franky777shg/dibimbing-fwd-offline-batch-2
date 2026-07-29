const express = require('express')
const router = express.Router()
const userController = require('../controllers/product.controller')

router.get('/get-all', userController.getAllProducts)
router.get('/get-by-id/:id', userController.getProductById)
router.get('/get-by-name-or-price', userController.getProductByNameOrPrice)

module.exports = router