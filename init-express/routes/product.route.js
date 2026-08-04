const express = require('express')
const router = express.Router()
const productController = require('../controllers/product.controller')
const { createProductValidator } = require('../middlewares/productValidators')

router.get('/get-all', productController.getAllProducts)
router.get('/get-by-id/:id', productController.getProductById)
router.get('/get-by-name-or-price', productController.getProductByNameOrPrice)
router.post('/create-product', createProductValidator, productController.createProduct)
router.put('/edit-product/:id', productController.editProduct)
router.delete('/delete-product/:id', productController.deleteProduct)

// untuk mengexport router di atas yang sudah dibuat
module.exports = router