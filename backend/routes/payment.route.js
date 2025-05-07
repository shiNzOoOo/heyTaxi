const express = require('express');
const { createOrder, verifyPayment } = require('../controllers/payment.controller');
const router = express.Router();

// Create payment order
router.post('/orders', createOrder);

// Verify payment
router.post('/verify', verifyPayment);

module.exports = router;