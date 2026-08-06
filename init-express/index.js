require('dotenv').config({ quiet: true })
const express = require('express')
const cookieParser = require('cookie-parser')
const app = express()
const PORT = process.env.PORT_SERVER || 3000

// Import Router nya yang sudah di pisah
const productRouter = require('./routes/product.route')
const cookieRouter = require('./routes/cookie.route')
const authRouter = require('./routes/auth.route')

// Import config
const { getPool } = require('./utils/db')
const { CustomResponse } = require('./utils/customResponse')
const { connectRedis } = require('./utils/redis')

// cookie secret
const COOKIE_SECRET = 'frengky12345'

// Ini untuk membuat express app kita bisa membaca data dari body
app.use(express.json())
// Middleware
app.use(cookieParser(COOKIE_SECRET))

app.get('/', (req, res) => {
    res.status(200).json({ status: "Healthcheck route: Safe" })
})

app.use('/products', productRouter)
app.use('/cookie', cookieRouter)
app.use('/auth', authRouter)

app.use((req, res) => {
    res.status(404).json(new CustomResponse("Route tidak ditemukan", null))
})

app.use((err, req, res, next) => {
    const statusErr = err.statusCode || 500
    console.log(err)
    res.status(statusErr).json(new CustomResponse(err.message || "Internal server error"))
})

Promise.all([getPool(), connectRedis()])
.then(() => {
    app.listen(PORT, () => {
        console.log(`Yahoo API Running at PORT: ${PORT}!`)
    })
})
.catch((err) => {
    console.log("Gagal connect ke MySQL / Redis: ", err.message)
})