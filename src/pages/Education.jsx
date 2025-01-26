import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { motion } from "framer-motion";

// Importing images for Education and Child Fee Loans
import EducationLoan from '../assets/images/education-loans.png'; 
import ChildFee from "../assets/images/child loan.jpg";

const LoanPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <header className="bg-[#8EC741] text-white py-6 mt-44 text-center">
        <h1 className="text-3xl font-semibold">Education Loan</h1>
        <p className="mt-2">Supporting your educational journey with Saylani Microfinance</p>
      </header>

      {/* First Section: Education Loan */}
      <div className='w-full py-16 text-white'>
        <div className="container mx-auto flex flex-col md:flex-row px-6 md:px-12 lg:px-16 space-y-12 md:space-y-0 md:space-x-8 pt-0">
          <div className="flex-1 md:text-left space-y-6 order-2 md:order-1 mt-0">
            <motion.div
              initial={{ x: -40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-2xl sm:text-3xl lg:text-3xl text-[#8EC741] font-serif font-bold">
                Education Loan for Your Future
              </h2>
              <p className="text-sm sm:text-base text-[#0066B3] lg:text-lg leading-relaxed">
                Saylani Microfinance offers educational loans to help you pay for university fees, school tuition, and other education-related expenses. With flexible terms and easy repayment options, we ensure that you have the financial support to achieve your educational goals. Apply today and start your journey towards a brighter future.
              </p>
            </motion.div>
          </div>

          <div className="flex-1 flex justify-center order-1 md:order-2 mt-0">
            <motion.div
              initial={{ x: 40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              style={{ originX: 0.5, originY: 0.5 }}
              transition={{ duration: 1 }}
            >
              <img
                className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl h-auto rounded-lg shadow-md"
                src={EducationLoan}  
                alt="EducationLoan"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Second Section: Child Fee Loan */}
      <div className="text-white py-16">
        <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-center px-6 space-y-12 md:space-y-0 md:space-x-12">
          <div className="flex justify-center md:justify-end flex-1">
            <motion.div
              initial={{ x: -40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              style={{ originX: 0.5, originY: 0.5 }}
              transition={{ duration: 1 }}
            >
              <img
                className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto"
                src={ChildFee}  
                alt="ChildFee"
              />
            </motion.div>
          </div>

          <div className="flex-1 text-center md:text-left">
            <motion.div
              initial={{ x: 40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 text-[#8EC741]">
                Child Fee Loan for Your Family's Education
              </h2>
              <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-[#0066B3]">
                Our Child Fee Loan is designed to help parents manage the cost of their children's education. Whether it's school fees or additional learning materials, Saylani Microfinance is here to provide support. Apply now to secure the funds needed for your child's educational needs.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LoanPage;
