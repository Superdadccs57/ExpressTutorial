const Product = require('../models/Product')
const { statusCodes } = require('http-status-codes')

const createProduct = async (req, res) => {
    res.send('create Product')
}

const getAllProducts = async (req, res) => {
    res.send('GET list of products')
}

module.exports = {
    createProduct,
    getAllProducts
}