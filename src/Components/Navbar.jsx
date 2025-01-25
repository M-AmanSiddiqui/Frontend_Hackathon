// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-500 text-white p-4">
      <div className="container mx-auto flex justify-between">
        <Link to="/" className="font-bold text-lg">
          Microfinance App
        </Link>
        <div>
          <Link to="/login" className="mx-2 hover:underline">
            Login
          </Link>
          <Link to="/register" className="mx-2 hover:underline">
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
