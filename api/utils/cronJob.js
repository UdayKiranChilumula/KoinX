const cron = require('node-cron');
const axios = require('axios');
const Crypto = require('../models/Crypto');

const fetchCryptoData = async () => {
  const coins = ['bitcoin', 'matic-network', 'ethereum'];
  try {
    const response = await axios.get(
      `https://api.coingecko.com/api/v3/simple/price?ids=${coins.join(',')}&vs_currencies=usd&include_market_cap=true&include_24hr_change=true`
    );
    const data = response.data;

    coins.forEach(async (coin) => {
      await Crypto.create({
        coin,
        price: data[coin].usd,
        marketCap: data[coin].usd_market_cap,
        change24h: data[coin].usd_24h_change
      });
    });
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

// Schedule the job to run every 2 hours
cron.schedule('0 */2 * * *', fetchCryptoData);

module.exports = fetchCryptoData;
