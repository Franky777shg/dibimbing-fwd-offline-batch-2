const mysql = require('mysql2/promise')

const pool = mysql.createPool({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root777!',
    database: 'toko_online'
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