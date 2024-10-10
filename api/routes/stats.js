const express = require('express');
const router = express.Router();
const Crypto = require('../models/Crypto');

// Get latest stats for a given coin
router.get('/stats', async (req, res) => {
  const { coin } = req.query;

  try {
    const latestData = await Crypto.findOne({ coin }).sort({ timestamp: -1 });

    if (!latestData) {
      return res.status(404).json({ message: 'No data found' });
    }

    res.json({
      price: latestData.price,
      marketCap: latestData.marketCap,
      '24hChange': latestData.change24h
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
