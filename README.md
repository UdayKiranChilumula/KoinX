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
   git clone https://github.com/UdayKiranChilumula/KoinX
   cd api
   ```
## Install dependencies:
   ```bash
   npm install
   ```
## Run the Server:
   ```bash
   npm start
   ```

API Endpoints
GET /api/stats: Returns the latest data for a cryptocurrency.
Query Params: coin=bitcoin | matic-network | ethereum
GET /api/deviation: Returns the standard deviation of the last 100 prices for a cryptocurrency.
Query Params: coin=bitcoin | matic-network | ethereum

### Final Steps:

- **Testing:** Ensure your APIs and background job are working properly.
- **Version Control:** Use meaningful commit messages like:
  - "Initial commit: Set up Node.js project"
  - "Added background job for fetching crypto data"
  - "Implemented stats API"
  - "Implemented deviation API"
  
Let me know if you need any help or further clarification!




