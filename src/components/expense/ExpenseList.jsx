import React, { useContext } from 'react';
import { ExpenseContext } from '../../contexts/ExpenseContext';

const ExpenseList = () => {
  const { expenses } = useContext(ExpenseContext);

  return (
    <div>
      <h2>Ausgabenliste</h2>
      <ul>
        {expenses.map((expense, index) => (
          <li key={index}>
            <div>
              <span>Kategorie: {expense.category}</span>
              <span>Betrag: {expense.amount}</span>
            </div>
            <div>Datum: {expense.date}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;