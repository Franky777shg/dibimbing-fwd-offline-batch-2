const { CustomResponse } = require('../utils/customResponse')
const { pool } = require('../utils/db')

const getAllProducts = async (req, res) => {
    try {
        const [data] = await pool.query('SELECT * FROM products')
        res.status(200).json(new CustomResponse("Success get all products", data))
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}

const getProductById = async (req, res) => {
    try {
        const { id } = req.params
        const [data] = await pool.query('select * from products where id_product = ?', [id])
        res.status(200).json(new CustomResponse("Success get product by id", data))
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
        const [data] = await pool.query('select * from products where name = ? or price = ?', [name, price])
        res.status(200).json(new CustomResponse("Success get product by name or price", data[0]))
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}

const createProduct = async (req, res) => {
    try {
        const { name, price } = req.body

        if (!name || !price) {
            throw new Error("Name dan price harus diisi")
        }

        const [result] = await pool.query('insert into products (name, price) values (?, ?)', [name, price])
        res.status(201).json(new CustomResponse("Success create product", { id_product: result.insertId, name, price }))
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}

// Daftar kolom yang boleh diubah, supaya key asing dari body tidak ikut masuk ke query
const PRODUCT_COLUMNS = ['name', 'price']

const editProduct = async (req, res) => {
    try {
        const { id } = req.params

        // Ambil hanya kolom yang dikirim user DAN terdaftar di PRODUCT_COLUMNS
        const columns = PRODUCT_COLUMNS.filter((column) => req.body[column] !== undefined)

        if (columns.length === 0) {
            throw new Error(`Minimal satu kolom harus diisi: ${PRODUCT_COLUMNS.join(', ')}`)
        }

        // Bentuk "name = ?, price = ?" secara dinamis, nilainya tetap lewat parameter (aman dari SQL injection)
        const setClause = columns.map((column) => `${column} = ?`).join(', ')
        const values = columns.map((column) => req.body[column])

        const [result] = await pool.query(
            `update products set ${setClause} where id_product = ?`,
            [...values, id]
        )

        if (result.affectedRows === 0) {
            throw new Error(`Product dengan id ${id} tidak ditemukan`)
        }

        const updatedData = { id_product: id }
        columns.forEach((column, index) => {
            updatedData[column] = values[index]
        })

        res.status(200).json(new CustomResponse("Success update product", updatedData))
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}

const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params

        const [result] = await pool.query('delete from products where id_product = ?', [id])

        if (result.affectedRows === 0) {
            throw new Error(`Product dengan id ${id} tidak ditemukan`)
        }

        res.status(200).json(new CustomResponse("Success delete product", { id_product: id }))
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}

module.exports = {
    getAllProducts,
    getProductById,
    getProductByNameOrPrice,
    createProduct,
    editProduct,
    deleteProduct
}