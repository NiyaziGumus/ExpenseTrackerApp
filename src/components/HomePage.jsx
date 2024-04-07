import React from 'react';
import { Link } from 'react-router-dom';
import IncomeList from './income/IncomeList';
import ExpenseList from './expense/ExpenseList';

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-3xl w-full px-4 py-8 bg-white rounded-lg shadow-md">
        <h1 className="text-4xl font-bold mb-4 text-center">Persönliche Kostenüberwachung</h1>
        <p className="text-lg mb-8 text-center">
          Verfolgen Sie Ihre Einnahmen und Ausgaben und behalten Sie Ihre finanzielle Situation unter Kontrolle.
        </p>
        <div className="flex justify-center gap-4 mb-8">
          <Link
            to="/einnahmen-hinzufugen"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Einnahmen hinzufügen
          </Link>
          <Link
            to="/ausgaben-hinzufugen"
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Ausgaben hinzufügen
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Einnahmenliste</h2>
            <IncomeList />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Ausgabenliste</h2>
            <ExpenseList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;