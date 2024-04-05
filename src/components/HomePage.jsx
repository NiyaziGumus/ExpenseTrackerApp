import React from 'react';

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">Persönliche Kostenüberwachung</h1>
      <p className="text-lg mb-8">Verfolgen Sie Ihre Einnahmen und Ausgaben und behalten Sie Ihre finanzielle Situation unter Kontrolle.</p>
      <div className="flex gap-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Einnahmen hinzufügen
        </button>
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          Ausgaben hinzufügen
        </button>
      </div>
    </div>
  );
};

export default HomePage;