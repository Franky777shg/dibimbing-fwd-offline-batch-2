const { body } = require('express-validator')

const createProductValidator = [
            body('name').notEmpty().withMessage("Nama tidak boleh kosong"),
            body('name').isLength({ min: 6 }).withMessage("Nama tidak boleh kurang dari 6 character"),
            body('price').notEmpty().withMessage("Harga tidak boleh kosong"),
        ]

module.exports = {
    createProductValidator
}