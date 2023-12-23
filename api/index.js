const express = require('express');
const cors = require('cors');
require('dotenv').config();
const Transaction = require('./models/Transaction.js');
const mongoose = require("mongoose");
const app = express();

mongoose.set('strictQuery', true);


const port = 5000;

app.use(cors());
app.use(express.json());

app.get('/api/test', (req, res) => {
  res.json({ body: 'test 88ok' });
});

// Optionally, add `async` if you plan to use asynchronous operations inside the handler
app.post('/api/transaction', async (req, res) => {
  
 await mongoose.connect(process.env.MONGO_URL);
  const {name, description, datetime, price}=req.body;
  const transaction = await Transaction.create({name,description, datetime, price});
  res.json(transaction);
});

app.listen(port);
//Q9HQoDssdacusXsO