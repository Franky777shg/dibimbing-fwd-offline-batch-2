const { CustomResponse } = require('../utils/customResponse')
const { pool } = require('../utils/db')
const { validationResult } = require('express-validator')
const { getCache, setCache, deleteCache } = require('../utils/redis')

const KEY_ALL_BOOK = 'book:all'

const getAllProducts = async (req, res, next) => {
    try {
        // kita check dulu ke dalam redis
        const dataCache = await getCache(KEY_ALL_BOOK)

        // kalau hit di redis
        if (dataCache) {
            return res.status(200).json(new CustomResponse(
                "Berhasil get all book from redis",
                dataCache
            ))
        }

        // kalau miss dari redis, maka ambil datanya dari database
        const [dataSql] = await pool.query('SELECT * FROM products')

        // simpan data dari db ke redis agar request berikutnya data get all book sudah ada di redis
        await setCache(KEY_ALL_BOOK, dataSql)

        res.status(200).json(new CustomResponse("Success get all products", dataSql))
    } catch (err) {
        next(err)
    }
}

const getProductById = async (req, res, next) => {
    try {
        const { id } = req.params
        const [data] = await pool.query('select * from products where id_product = ?', [id])
        res.status(200).json(new CustomResponse("Success get product by id", data))
    } catch (err) {
        next(err)
    }
}

const getProductByNameOrPrice = async (req, res, next) => {
    try {
        const { name, price } = req.query

        // Contoh penerapan error handling
        if (!name) {
            throw new Error("Name harus ada di query")
        }
        const [data] = await pool.query('select * from products where name = ? or price = ?', [name, price])
        res.status(200).json(new CustomResponse("Success get product by name or price", data[0]))
    } catch (err) {
        next(err)
    }
}

const createProduct = async (req, res, next) => {
    try {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }

        const { name, price } = req.body

        const [result] = await pool.query('insert into products (name, price) values (?, ?)', [name, price])

        // // delete data di cache, karena sekarang data di db tidak sync dengan redis
        await deleteCache(KEY_ALL_BOOK)

        res.status(201).json(new CustomResponse("Success create product", { id_product: result.insertId, name, price }))
    } catch (err) {
        next(err)
    }
}

// Daftar kolom yang boleh diubah, supaya key asing dari body tidak ikut masuk ke query

const editProduct = async (req, res, next) => {
    try {
        const PRODUCT_COLUMNS = ['name', 'price']
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
        next(err)
    }
}

const deleteProduct = async (req, res, next) => {
    try {
        const { id } = req.params

        const [result] = await pool.query('delete from products where id_product = ?', [id])

        if (result.affectedRows === 0) {
            throw new Error(`Product dengan id ${id} tidak ditemukan`)
        }

        res.status(200).json(new CustomResponse("Success delete product", { id_product: id }))
    } catch (err) {
        next(err)
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