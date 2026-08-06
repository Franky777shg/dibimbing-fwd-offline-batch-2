const redis = require('ioredis')

// Satuan detik
const CACHE_TTL = 300

const redisConn = new redis({
    host: 'localhost',
    port: 6379
})

redisConn.on('error', (err) => console.log("Redis error: ", err.message))

const connectRedis = async () => {
    // Ping ke redis server sekali, bukan ke setiap kali request (singleton)
    await redisConn.ping()
    console.log("connected to Redis!")
    return redisConn
}

// Ambil data dari cache
const getCache = async (key) => {
    const data = await redisConn.get(key)
    return data ? JSON.parse(data) : null
}

// Simpan data dari cache
const setCache = async (key, value) => {
    await redisConn.set(key, JSON.stringify(value), 'EX', CACHE_TTL)
}

// Hapus data dari cache
const deleteCache = async (...key) => {
    await redisConn.del(key)
}

module.exports = { connectRedis, redisConn, getCache, setCache, deleteCache }