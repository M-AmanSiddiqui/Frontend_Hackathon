import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { motion } from "framer-motion";

// Importing images correctly
import Structure from '../assets/images/Structure.jpg'; 
import Fininshing from "../assets/images/finishing.jpg"

const HomeConstruction = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <header className="bg-[#8EC741] text-white py-6 text-center mt-44">
       <h1 className="text-3xl font-semibold">Home Construction Loan</h1>
         <p className="mt-2">Building your dream home made affordable</p>
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
  STRUCTURE
</h2>
<p className="text-sm sm:text-base text-[#0066B3] lg:text-lg leading-relaxed">
  Building your dream home starts with a solid foundation. With the Saylani Home Construction Loan, the **Structure Loan** category helps you finance the construction of your home’s essential structure, including the foundation, walls, roof, and other primary components. Whether you are starting from scratch or upgrading an existing structure, this loan ensures that you have the financial support you need to build a strong, safe, and durable home. 
  <span className="font-bold">Saylani Microfinance</span> is committed to making homeownership affordable, providing you with the resources to create a secure and comfortable living space for you and your family. Apply for the Structure Loan today and take the first step towards constructing your dream home.
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
                src={Structure}  // Updated image import
                alt="Structure"
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
                src={Fininshing}  // Updated image import
                alt="Finishing"
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
  FINISHING
</h2>
<p className="text-sm sm:text-base lg:text-lg leading-relaxed text-[#0066B3]">
  The final touches of your dream home are just as important as the foundation, and the **Finishing Loan** is here to support those crucial last steps. This loan category provides the financial assistance needed to complete your home’s interior and exterior, including flooring, painting, decorative work, and other finishing touches. Whether you're looking for elegant designs or practical finishes, this loan allows you to bring your vision to life. 
  <span className="font-bold">Saylani Microfinance</span> is committed to helping you build a beautiful, ready-to-live-in home that reflects your style and comfort. Apply now for a Finishing Loan and give your home the perfect finishing touches.
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

export default HomeConstruction;
