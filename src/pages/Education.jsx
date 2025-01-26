import React from "react";
import { Link } from "react-router-dom"; // For navigation
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Education = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <header className="bg-blue-600 text-white py-6 mt-44 text-center">
        <h1 className="text-3xl font-semibold">Education Loan</h1>
        <p className="mt-2">Supporting your educational journey</p>
      </header>

      <div className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-center">Available Loan Categories</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
          {/* University Fee Loan */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <img
              src="path_to_university_fee_image.jpg" // Replace with your image
              alt="University Fee Loan"
              className="w-full h-48 object-cover rounded-lg"
            />
            <h3 className="text-xl font-semibold mt-4">University Fee</h3>
            <p className="text-sm text-gray-600 mt-2">
              Get assistance with paying your university fees. This loan helps you cover tuition costs, admission fees, and other academic expenses.
            </p>
            <p className="mt-4 font-medium">Loan Amount: Rs. [Amount]</p>
            <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition">
              <Link to="/UniversityFeeLoan">Explore Now</Link>
            </button>
          </div>

          {/* Child Fee Loan */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <img
              src="path_to_child_fee_image.jpg" // Replace with your image
              alt="Child Fee Loan"
              className="w-full h-48 object-cover rounded-lg"
            />
            <h3 className="text-xl font-semibold mt-4">Child Fee</h3>
            <p className="text-sm text-gray-600 mt-2">
              Support your child's education with this loan. Cover school fees, tuition, and other educational expenses to ensure a bright future.
            </p>
            <p className="mt-4 font-medium">Loan Amount: Rs. [Amount]</p>
            <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition">
              <Link to="/ChildFeeLoan">Explore Now</Link>
            </button>
          </div>
        </div>

     
      </div>
      <Footer />
    </div>
  );
};

export default Education;
