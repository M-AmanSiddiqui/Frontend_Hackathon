import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { motion } from "framer-motion";

// Importing images correctly
import Dinner from '../assets/images/dinner.jpeg'; // Replace with actual path
import Jahez from "../assets/images/furniture.jpeg"

const WeddingLoan = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <header className="bg-[#8EC741]  text-white text-center mt-44 py-6">
        <h1 className="text-3xl font-semibold">Saylani Wedding Loan</h1>
        <p className="mt-2">Aapki shaadi ki tayari ke liye financial support</p>
      </header>

      {/* First Section: Content and Image */}
      <div className='w-full py-16 text-white'>
        <div className="container mx-auto flex flex-col md:flex-row px-6 md:px-12 lg:px-16 space-y-12 md:space-y-0 md:space-x-8 pt-0">
          {/* Text Content */}
          <div className="flex-1 md:text-left space-y-6 order-2 md:order-1 mt-0">
            <motion.div
              initial={{ x: -40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
             <h2 className="text-2xl sm:text-3xl lg:text-3xl text-[#8EC741] font-serif font-bold">
  Furniture
</h2>
<p className="text-sm sm:text-base text-[#0066B3] lg:text-lg leading-relaxed">
  Furnishing your wedding home has never been easier with Saylani Wedding Loans. This loan category offers financial support for purchasing essential furniture, including beds, sofas, dining tables, wardrobes, and other household items needed for your new life together. Whether you're looking for stylish, durable furniture or need a budget-friendly option, our loan ensures you can create the perfect living space without the financial strain. 
  <span className="font-bold">Saylani Microfinance</span> is here to provide you with the means to begin your marital journey with the comforts and necessities you deserve. Apply now for a Furniture loan and start planning your dream home today.
</p>

            </motion.div>
          </div>

          {/* Image Section */}
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
                src={Jahez}  // Updated image import
                alt="jahez"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Second Section: Content and Image */}
      <div className=" text-white py-16">
        <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-center px-6 space-y-12 md:space-y-0 md:space-x-12">
          {/* Image Section */}
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
                src={Dinner}  // Updated image import
                alt="Dinner"
              />
            </motion.div>
          </div>

          {/* Text Content */}
          <div className="flex-1 text-center md:text-left">
            <motion.div
              initial={{ x: 40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 text-[#8EC741]">
  Dinner
</h2>
<p className="text-sm sm:text-base lg:text-lg leading-relaxed text-[#0066B3]">
  A wedding dinner is one of the most cherished parts of the celebration, and Saylani Wedding Loans ensures that you don’t have to compromise on quality or style. This loan category provides financial assistance to help cover the costs of a grand wedding feast, whether you're hosting an intimate gathering or a lavish banquet. 
  With our Dinner Loan, you can ensure a memorable culinary experience for your guests, including catering, food services, and venue arrangements. Saylani Microfinance is here to support your special day, helping you create a seamless and joyous event. 
  <span className="font-bold">Make your wedding dinner unforgettable with the financial ease of Saylani Wedding Loans.</span>
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

export default WeddingLoan;
