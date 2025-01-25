// src/pages/Home.jsx
import React from "react";
import LoanCalculator from "../Components/LoanCalculator";

const Home = () => {
  return (
    <div>
      <header className="bg-blue-500 text-white p-8 text-center">
        <h1 className="text-3xl font-bold">Welcome to Microfinance App</h1>
        <p className="mt-2">Effortlessly manage your finances and loans.</p>
      </header>
      <LoanCalculator />
    </div>
  );
};

export default Home;
