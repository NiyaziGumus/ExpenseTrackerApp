import React, { createContext, useState } from 'react';

export const IncomeContext = createContext();

const IncomeProvider = ({ children }) => {
  const [incomes, setIncomes] = useState([
    { source: 'Gehalt', amount: 5000, date: '2023-05-01' },
    { source: 'Freelance-Arbeit', amount: 2000, date: '2023-05-15' },
  ]);

  const addIncome = (newIncome) => {
    setIncomes([...incomes, newIncome]);
  };

  return (
    <IncomeContext.Provider value={{ incomes, addIncome }}>
      {children}
    </IncomeContext.Provider>
  );
};

export default IncomeProvider;