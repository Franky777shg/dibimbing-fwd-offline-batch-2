const express = require('express')
const app = express()
const PORT = 3000

// Import Router nya yang sudah di pisah
const productRouter = require('./routes/product.route')

// Ini untuk membuat express app kita bisa membaca data dari body
app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).json({ status: "Healthcheck route: Safe" })
})

app.use('/products', productRouter)

app.listen(PORT, () => {
    console.log(`Yahoo API Running at PORT: ${PORT}!`)
})