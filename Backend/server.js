const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/users');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;


app.use(express.json());
app.use(cors());
app.use('/api/users', userRoutes);


mongoose.connect('mongodb://localhost:27017/Food-corner')
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
