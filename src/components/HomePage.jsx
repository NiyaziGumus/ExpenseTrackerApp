import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">Persönliche Kostenüberwachung</h1>
      <p className="text-lg mb-8">Verfolgen Sie Ihre Einnahmen und Ausgaben und behalten Sie Ihre finanzielle Situation unter Kontrolle.</p>
      <div className="flex gap-4">
        <Link to="/einnahmen-hinzufugen" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Einnahmen hinzufügen
        </Link>
        <Link to="/ausgaben-hinzufugen" className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          Ausgaben hinzufugen
        </Link>
      </div>
    </div>
  );
};

export default HomePage;