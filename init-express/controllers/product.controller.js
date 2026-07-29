const products = [
    { id: 1, name: 'Laptop', price: 12000000 },
    { id: 2, name: 'Mouse', price: 250000 },
    { id: 3, name: 'Keyboard', price: 450000 },     
    { id: 4, name: 'Monitor', price: 1500000 },
    { id: 5, name: 'Headset', price: 350000 }
]

const getAllProducts = (req, res) => {
    res.status(200).json({
        success: true,
        data: products
    })
}

const getProductById = (req, res) => {
    const { id } = req.params
    const filtered = products.filter(item => item.id == id)
    res.status(200).json({
        success: true,
        data: filtered[0]
    })
}

const getProductByNameOrPrice = (req, res) => {
    const { name, price } = req.query
    const filtered = products.filter(item => item.name.toLowerCase() === name || item.price === +price)
    res.status(200).json({
        success: true,
        data: filtered[0]
    })
}

module.exports = {
    getAllProducts,
    getProductById,
    getProductByNameOrPrice
}