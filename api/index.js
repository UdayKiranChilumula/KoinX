const express = require('express');
const mongoose = require('mongoose');
const fetchCryptoData = require('./utils/cronJob');

const statsRoute = require('./routes/stats');
const deviationRoute = require('./routes/deviation');

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb+srv://udaykiranchilumula80:NvJ62Jja3KHV56Cw@koinx.a4755.mongodb.net/?retryWrites=true&w=majority&appName=KoinX', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Use Routes
app.use('/api', statsRoute);
app.use('/api', deviationRoute);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
