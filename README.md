# Cryptocurrency Assignment

## Overview

This Node.js server-side application fetches cryptocurrency data (Bitcoin, Matic, Ethereum) every 2 hours and stores it in a MongoDB database. It also provides APIs to retrieve the latest stats and calculate the standard deviation of the price for the last 100 records.

## Features

1. **Background Job**: Fetches cryptocurrency data from the CoinGecko API every 2 hours.
2. **/stats API**: Returns the latest price, market cap, and 24-hour price change for a requested cryptocurrency.
3. **/deviation API**: Returns the standard deviation of the price for the last 100 records of a requested cryptocurrency.

## Setup

1. Clone the repository:
   ```bash
   git clone <repository_url>
   cd KoinX
