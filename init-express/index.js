const express = require('express')
const app = express()
const PORT = 3000

// Ini untuk membuat express app kita bisa membaca data dari body
app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).json({ status: "Healthcheck route: Safe" })
})

// app.get('/users', (req, res) => {
//     res.status(200).json({ user: { name: "Budi", age: 20 } })
// })

// app.post('/users/create-user', (req, res) => {
//     res.status(200).json({ message: "Success create user", user: req.body })
// })

// app.get('/products/:nama', (req, res) => {
//     const { nama } = req.params
//     res.status(200).json({ message: "Success", nama })
// })

// app.get('/example', (req, res) => {
//     const { barang, tahun } = req.query
//     res.status(200).json({ message: "Success", barang: barang, tahun: tahun })
// })

const users = [
    { name: 'Budi', age: 20 },
    { name: 'Sari', age: 22 },
    { name: 'Andi', age: 25 },
    { name: 'Dina', age: 19 },
    { name: 'Raka', age: 30 }
]

// Buat endpoint untuk ambil semua data user
app.get('/users/get-all', (req, res) =>{
    res.status(200).json({ users })
})

// Buat endpoint bisa filter by urutan, memakai params
app.get('/users/get-by-id/:urutan', (req, res) => {
    const { urutan } = req.params
    res.status(200).json({ user: users[Number(urutan)] })
})

// Buat endpoint untuk menambahkan data user
app.post('/users/create-user', (req, res) => {
    users.push(req.body)
    res.status(200).json({ users })
})

// 1. Buat endpoint untuk get data user berdasarkan name atau age yang dikirim dari query params
// 2. Buat endpoint untuk edit salah satu data user, index nya dikirim lewat params, data yang mau diedit dikirim lewat body
// 3. Buat endpoint untuk delete salah satu user memakai index yang dikirim dari params

app.listen(PORT, () => {
    console.log(`Yohoo API Running at PORT: ${PORT}!`)
})