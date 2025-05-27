const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors({ origin: '*' }));
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

const productsRouter = require('./routes/products');
const categoriesRouter = require('./routes/categories');

app.get('/', (req, res) => {
  res.send('API is running');
});

app.use('/api/products', productsRouter);
app.use('/api/categories', categoriesRouter);

module.exports = app; 