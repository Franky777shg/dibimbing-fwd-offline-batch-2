const { body } = require('express-validator')

const registerValidator = [
    body('username')
    .trim()
    .notEmpty().withMessage("Username tidak boleh kosong")
    .matches(/^[a-zA-Z0-9]+$/).withMessage("Username tidak boleh ada symbol")
    .isLength({ min: 6 }).withMessage("Username minimal 6 karakter"),

    body('email')
    .trim()
    .isEmail().withMessage("Email tidak valid")
    .notEmpty().withMessage("Email tidak boleh kosong"),

    body('password')
    .trim()
    .notEmpty().withMessage("Password tidak boleh kosong")
    .isLength({ min: 8 }).withMessage("Password minimal 8 karakter")
    .matches(/[a-z]/).withMessage("Password harus mengandung huruf kecil")
    .matches(/[A-Z]/).withMessage("Password harus mengandung huruf besar")
    .matches(/[!@#$%^&()_+={}]/).withMessage("Password harus mengandung symbol")
    .matches(/[0-9]/).withMessage("Password harus mengandung angka")
]

module.exports = {
    registerValidator
}