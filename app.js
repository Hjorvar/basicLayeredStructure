// app.js
const express = require('express');
const app = express();
require('dotenv').config(); // Þetta þarf að vera efst til að lesa umhverfisbreytur
const userRoutes = require('./src/routes/userRoutes');
const { db } = require('./src/models/user');

app.set('view engine', 'ejs');
app.set('views', './src/views'); // Stilltu slóðina að views möppunni
app.use(express.json());
app.use(express.static('public'));
app.use('/api', userRoutes);

app.get('/', (req, res) => {
  res.redirect('/api/users');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
