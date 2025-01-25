// src/components/LoanCalculator.jsx
import React, { useState } from "react";

const LoanCalculator = () => {
  const [amount, setAmount] = useState("");
  const [years, setYears] = useState("");
  const [result, setResult] = useState(null);

  const calculateLoan = () => {
    const rate = 0.05; // Interest rate
    const total = amount * Math.pow(1 + rate, years);
    setResult(total.toFixed(2));
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Loan Calculator</h1>
      <div className="mt-4">
        <label>Loan Amount:</label>
        <input
          type="number"
          className="block w-full p-2 border mt-2"
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <div className="mt-4">
        <label>Loan Period (Years):</label>
        <input
          type="number"
          className="block w-full p-2 border mt-2"
          onChange={(e) => setYears(e.target.value)}
        />
      </div>
      <button
        onClick={calculateLoan}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Calculate
      </button>
      {result && (
        <div className="mt-4 text-lg">
          Total Payable Amount: <strong>{result}</strong>
        </div>
      )}
    </div>
  );
};

export default LoanCalculator;
