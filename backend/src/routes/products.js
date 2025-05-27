const express = require('express');
const Product = require('../models/Product');
const router = express.Router();

// GET /api/products - list all products
router.get('/', async (req, res) => {
  try {
    const filter = {};
    if (req.query.isNew === 'true') filter.isNew = true;
    if (req.query.isTopSelling === 'true') filter.isTopSelling = true;
    const products = await Product.find(filter);
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /api/products/:id - get product by id
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ error: 'Product not found' });
    res.json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /api/products/by-custom-id/:customId - get product by custom id (for frontend compatibility)
router.get('/by-custom-id/:customId', async (req, res) => {
  try {
    const product = await Product.findOne({ _id: req.params.customId });
    if (!product) return res.status(404).json({ error: 'Product not found' });
    res.json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router; 