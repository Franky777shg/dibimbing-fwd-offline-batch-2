const jwt = require('jsonwebtoken')

// Middleware untuk memverify token
const requireAuth = (req, res, next) => {
    try {
        // Ambil token dari cookies
        const token = req.signedCookies.token

        // Cek apakah ada tokennya
        if (!token) {
            throw new Error("Token tidak ada!")
        }

        // Mengubah token menjadi data awal
        const dataFromToken = jwt.verify(token, process.env.JWT_SECRET)

        req.member = dataFromToken
        next()
    } catch (err) {
        next(err)
    }
}

const requireRoleAdmin = (req, res, next) => {
    try {
        const { name, role } = req.member

        if(role !== 'admin') {
            throw new Error("Selain admin tidak bisa akses!")
        }

        next()
    } catch (err) {
        next(err)
    }
}

module.exports = {
    requireAuth,
    requireRoleAdmin
}