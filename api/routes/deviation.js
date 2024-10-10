const express = require('express');
const router = express.Router();
const Crypto = require('../models/Crypto');

// Calculate standard deviation for the last 100 prices
router.get('/deviation', async (req, res) => {
  const { coin } = req.query;

  try {
    const data = await Crypto.find({ coin }).sort({ timestamp: -1 }).limit(100);

    if (data.length === 0) {
      return res.status(404).json({ message: 'No data found' });
    }

    const prices = data.map(item => item.price);
    const mean = prices.reduce((a, b) => a + b, 0) / prices.length;
    const variance = prices.reduce((a, b) => a + Math.pow(b - mean, 2), 0) / prices.length;
    const standardDeviation = Math.sqrt(variance);

    res.json({ deviation: standardDeviation });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
