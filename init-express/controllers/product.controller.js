const { SuccessResponse } = require('../utils/customResponse')
const { pool } = require('../utils/db')

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

const getProductByNameOrPrice = async (req, res) => {
    try {
        const { name, price } = req.query

        // Contoh penerapan error handling
        // if (!name) {
        //     throw new Error("Name harus ada di query")
        // }
        const [ data ] = await pool.query('select * from products where name = ? or price = ?', [name, price])
        res.status(200).json(new SuccessResponse("Success get product by name or price", data[0]))
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}

const addProduct = async (req, res) => {
 try {
    // Buat code
 } catch (err) {
    // Buat code
 }
}

module.exports = {
    getAllProducts,
    getProductById,
    getProductByNameOrPrice,
    addProduct
}