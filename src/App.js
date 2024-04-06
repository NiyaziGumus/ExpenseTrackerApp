import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import LoginPage from './components/auth/LoginPage';
import IncomeForm from './components/IncomeForm';
import ExpenseForm from './components/ExpenseForm';
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/einnahmen-hinzufugen" element={<IncomeForm />} />
          <Route path="/ausgaben-hinzufugen" element={<ExpenseForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;