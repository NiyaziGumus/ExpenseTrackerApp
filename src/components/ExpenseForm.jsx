import React, { useState } from 'react';

const ExpenseForm = () => {
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Kategorie:', category);
    console.log('Betrag:', amount);
    console.log('Datum:', date);
    // Formu sıfırla
    setCategory('');
    setAmount('');
    setDate('');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">Ausgaben hinzufügen</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-sm">
        <div className="mb-4">
          <label htmlFor="category" className="block text-gray-700 font-bold mb-2">
            Kategorie
          </label>
          <input
            type="text"
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Geben Sie die Kategorie ein"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="amount" className="block text-gray-700 font-bold mb-2">
            Betrag
          </label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Geben Sie den Betrag ein"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="date" className="block text-gray-700 font-bold mb-2">
            Datum
          </label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <button
          type="submit"
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Ausgabe hinzufügen
        </button>
      </form>
    </div>
  );
};

export default ExpenseForm;