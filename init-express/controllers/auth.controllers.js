const { pool } = require('../utils/db')
const { CustomResponse } = require('../utils/customResponse')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const register = async (req, res, next) => {
    try {
        const { name, email, password } = req.body
    
        const [data] = await pool.query("select * from member where email = ?", [email])
    
        // Cek apakah data dengan email ini pernah register atau tidak
        if (!data) {
            throw new Error("Data ini sudah terpakai")
        }

        // hash password nya dulu
        const hashedPass = await bcrypt.hash(password, 10)

        // simpan di database dengan password yang sudah dihash
        await pool.query(`insert into member (nama, email, password, role) values (?,?,?, 'member')`, [name, email, hashedPass])

        res.status(200).json(new CustomResponse("Berhasil register!", req.body))
    } catch (err) {
        next(err)
    }
}

const login = async (req, res, next) => {
    try {
        const { email, password } = req.body
        
        const [data] = await pool.query("select * from member where email = ?", [email])
        
        // Cek apakah ada data user yang email nya sama dengan yang dikirim di body
        if(!data.length) {
            throw new Error("Email atau passowrd salah!")
        }
        
        const comparePass = await bcrypt.compare(password, data[0].password)
        
        // Cek apakah password nya benar
        if(!comparePass) {
            throw new Error("Email atau passowrd salah!")
        }

        // Merubah data yang kita inginkan menjadi token
        const token = jwt.sign(
            { name: data[0].nama, role: data[0].role },
            process.env.JWT_SECRET,
            { expiresIn: process.env.JWT_EXPIRES_IN }
        )

        res.cookie('token', token, {
            httpOnly: true,
            signed: true,
            secure: true,
            sameSite: 'lax',
            maxAge: 60 * 60 * 1000
        })

        res.status(200).json(new CustomResponse("Berhasil login", {
            name: data[0].nama,
            email,
            role: data[0].role
        }))
    } catch (err) {
        next(err)
    }
}

const exampleForGetToken = async (req, res, next) => {
    try {
        // Misal ada code untuk memanfaatkan data dari token
        res.status(200).json(new CustomResponse("Berhasil get data from token", req.member))
    } catch (err) {
        next(err)
    }
}

const getAllMembers = async (req, res, next) => {
    try {
        // Ambil SEMUA data member, yang boleh dilakukan hanya jika dia admin
        const [data] = await pool.query(`select * from member`)
        
        res.status(200).json(new CustomResponse("Berhasil mengambil semua data member", data))
    } catch (err) {
        next(err)
    }
}

module.exports = {
    register,
    login,
    exampleForGetToken,
    getAllMembers
}