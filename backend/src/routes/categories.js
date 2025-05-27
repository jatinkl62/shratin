const express = require('express');
const Category = require('../models/Category');
const router = express.Router();

// GET /api/categories - list all categories
router.get('/', async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router; 