const express = require('express');
const router = express.Router();

// controllers
const { newsletter } = require('../controllers/newsletter');

// route
router.post('/', newsletter);

module.exports = router;
