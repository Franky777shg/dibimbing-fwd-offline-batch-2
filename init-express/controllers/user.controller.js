const { CustomResponse } = require('../utils/customResponse')
const { pool } = require('../utils/db')
const { validationResult } = require('express-validator')

const register = async (req, res) => {
    try {
        const { username, email, password } = req.body

        const errorFromValidator = validationResult(req)

        if(!errorFromValidator.isEmpty()) {
            return res.status(400).json({
                message: "Error dari express validator",
                data: errorFromValidator
            })
        }

        await pool.query(`insert into member (nama, email, password) values (?,?,?)`, [username, email, password])

        res.status(200).json(new CustomResponse("Berhasil register!", req.body))
    } catch(err) {
        res.status(400).json(new CustomResponse(err.message || "Internal server error", null))
    }
}

module.exports = {
    register
}