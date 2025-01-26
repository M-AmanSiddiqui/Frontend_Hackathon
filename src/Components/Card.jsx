import React from "react";
import WeddingLoans from "../assets/images/WeddingLoans.png";
import HomeLoan from "../assets/images/HomeLoan.jpg";
import BusinessLoan from "../assets/images/BusinessLoan.jpg";
import EducationLoan from "../assets/images/E.L.jpg";
import { Link } from "react-router-dom"; // Correct Link import from react-router-dom

const Cards = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* Card 1 */}
      <div className="bg-white shadow-lg rounded-2xl overflow-hidden transform hover:scale-105 transition duration-300">
        <img
          src={WeddingLoans}
          alt="Wedding Loans"
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-lg font-bold text-gray-800">Wedding Loans</h3>
          <p className="text-sm text-gray-600 mt-2">
            Saylani Microfinance offers financial assistance for weddings, ensuring a smooth start for couples by covering essential wedding expenses.
          </p>
          <Link to="/WeddingLoan">
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
              Explore Now
            </button>
          </Link>
        </div>
      </div>

      {/* Card 2 */}
      <div className="bg-white shadow-lg rounded-2xl overflow-hidden transform hover:scale-105 transition duration-300">
        <img
          src={HomeLoan}
          alt="Home Construction Loans"
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-lg font-bold text-gray-800">Home Construction Loans</h3>
          <p className="text-sm text-gray-600 mt-2">
            Build your dream home with our Home Construction Loans, designed to support low-income families in achieving housing stability.
          </p>
          <Link to="/HomeConstruction">
          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
            Explore Now
          </button></Link>
        </div>
      </div>

      {/* Card 3 */}
      <div className="bg-white shadow-lg rounded-2xl overflow-hidden transform hover:scale-105 transition duration-300">
        <img
          src={BusinessLoan}
          alt="Business Startup Loans"
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-lg font-bold text-gray-800">Business Startup Loans</h3>
          <p className="text-sm text-gray-600 mt-2">
            Empowering entrepreneurs with interest-free loans to start or grow their small businesses, fostering financial independence.
          </p>
          <Link to="/Business">
          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
            Explore Now
          </button></Link>
        </div>
      </div>

      {/* Card 4 */}
      <div className="bg-white shadow-lg rounded-2xl overflow-hidden transform hover:scale-105 transition duration-300">
        <img
          src={EducationLoan}
          alt="Education Loans"
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-lg font-bold text-gray-800">Education Loans</h3>
          <p className="text-sm text-gray-600 mt-2">
            Our Education Loans provide support to students pursuing higher education, ensuring that financial constraints don't hinder their dreams.
          </p>
          <Link to="/Education">
          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
            Explore Now
          </button></Link>
        </div>
        </div>
      </div>
   
  );
};

export default Cards;
