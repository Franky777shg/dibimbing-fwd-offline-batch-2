const mysql = require('mysql2/promise')

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
})

async function getPool() {
    const connection = await pool.getConnection()
    connection.release()
    console.log("Connected to MySQL!")
    return pool
}

module.exports = {
    pool,
    getPool
}