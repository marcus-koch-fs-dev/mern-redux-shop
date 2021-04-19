const Products = require('../models/Product')

const getAllProducts = async (req, res) => {
  try {
    const products = await Products.find({})
    res.json(products)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Server Error' })
  }
}

const getProductById = async (req, res) => {
  try {
    const product = await Products.findById(req.params.id)
    res.json(product)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Server Error' })
  }
}

module.exports = {
  getAllProducts,
  getProductById,
}
