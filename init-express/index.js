const express = require('express')
const cookieParser = require('cookie-parser')
const app = express()
const PORT = 3000

// Import Router nya yang sudah di pisah
const productRouter = require('./routes/product.route')

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

app.listen(PORT, () => {
    console.log(`Yahoo API Running at PORT: ${PORT}!`)
})