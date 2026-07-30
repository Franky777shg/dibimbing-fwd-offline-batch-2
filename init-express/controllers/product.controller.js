const { SuccessResponse } = require('../utils/customResponse')
const { pool } = require('../utils/db')

const products = [
    { id: 1, name: 'Laptop', price: 12000000 },
    { id: 2, name: 'Mouse', price: 250000 },
    { id: 3, name: 'Keyboard', price: 450000 },     
    { id: 4, name: 'Monitor', price: 1500000 },
    { id: 5, name: 'Headset', price: 350000 }
]

const getAllProducts = async (req, res) => {
    try {
        const [ data ] = await pool.query('SELECT * FROM products')
        res.status(200).json(new SuccessResponse("Success get all products", data))
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}

const getProductById = async (req, res) => {
    try {
        const { id } = req.params
        const [ data ] = await pool.query('select * from products where id_product = ?', [id])
        res.status(200).json(new SuccessResponse("Success get product by id", data[0]))
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}

const getProductByNameOrPrice = (req, res) => {
    try {
        const { name, price } = req.query

        // Contoh penerapan error handling
        // if (!name) {
        //     throw new Error("Name harus ada di query")
        // }
        const filtered = products.filter(item => item.name.toLowerCase() === name || item.price === +price)
        res.status(200).json(new SuccessResponse("Success get product by name or price", filtered[0]))
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}

const setCookie = (req, res) => {
    try {
        res.cookie('session', req.body, {
            httpOnly: true,
            signed: true,
            secure: true,
            sameSite: 'lax',
            maxAge: 60 * 60 * 1000
        })
        res.status(200).json(new SuccessResponse("Set cookie success", req.body))
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}

const getCookie = (req, res) => {
    try {
        const cookie = req.signedCookies.session
        res.status(200).json(new SuccessResponse("Get cooki success", cookie))
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}

module.exports = {
    getAllProducts,
    getProductById,
    getProductByNameOrPrice,
    setCookie,
    getCookie
}