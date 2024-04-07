import React, { useContext } from 'react';
import { IncomeContext } from '../../contexts/IncomeContext';

const IncomeList = () => {
  const { incomes } = useContext(IncomeContext);

  return (
    <div>
      <h2>Einnahmenliste</h2>
      <ul>
        {incomes.map((income, index) => (
          <li key={index}>
            <div>
              <span>Quelle: {income.source}</span>
              <span>Betrag: {income.amount}</span>
            </div>
            <div>Datum: {income.date}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IncomeList;