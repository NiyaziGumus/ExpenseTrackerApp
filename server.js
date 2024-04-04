const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

// MongoDB bağlantısı
mongoose.connect('mongodb://localhost/expenseTracker', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Bağlantısı Başarılı'))
  .catch(err => console.error('MongoDB Bağlantı Hatası:', err));

// Basit bir model oluşturma
const ExpenseSchema = new mongoose.Schema({
  name: String,
  amount: Number,
  date: { type: Date, default: Date.now }
});

const Expense = mongoose.model('Expense', ExpenseSchema);

// JSON verileri için middleware
app.use(express.json());

// Yeni masraf eklemek için bir rota
app.post('/expenses', async (req, res) => {
  try {
    const newExpense = new Expense(req.body);
    const savedExpense = await newExpense.save();
    res.status(200).json(savedExpense);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Tüm masrafları getirmek için bir rota
app.get('/expenses', async (req, res) => {
  try {
    const expenses = await Expense.find();
    res.status(200).json(expenses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server http://localhost:${port} adresinde çalışıyor`);
});
