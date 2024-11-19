// utils/routes/index.js
const express = require('express');
const router = express.Router();
const { exampleFunction } = require('../controllers/exampleController');

router.get('/', exampleFunction);

module.exports = router;
