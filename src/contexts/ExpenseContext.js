import React, { createContext, useState } from 'react';

export const ExpenseContext = createContext();

const ExpenseProvider = ({ children }) => {
  const [expenses, setExpenses] = useState([
    { category: 'Miete', amount: 1000, date: '2023-05-01' },
    { category: 'Lebensmittel', amount: 500, date: '2023-05-10' },
  ]);

  const addExpense = (newExpense) => {
    setExpenses([...expenses, newExpense]);
  };

  return (
    <ExpenseContext.Provider value={{ expenses, addExpense }}>
      {children}
    </ExpenseContext.Provider>
  );
};

export default ExpenseProvider;