

import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { motion } from "framer-motion";

// Importing images correctly
import ShopStall from '../assets/images/ShopStall.avif'; 
import ShopRent from '../assets/images/ShopRent.avif';
import ShopAssets from '../assets/images/ShopAssets.jpg';
import ShopMachinery from '../assets/images/ShopMachinery.avif';

const HomeConstruction = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <header className="bg-[#8EC741] text-white py-6 mt-44 text-center">
         <h1 className="text-3xl font-semibold">Business Startup Loan</h1>
         <p className="mt-2">Empowering your entrepreneurial dreams</p>
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
  SHOP STALL
</h2>
<p className="text-sm sm:text-base text-[#0066B3] lg:text-lg leading-relaxed">
  Starting a new business requires the right space, and with our **Shop Stall Loan**, Saylani Microfinance can help you establish your storefront with ease. Whether you're opening a small kiosk, shop, or retail space, this loan category offers the financial assistance you need to secure or renovate a shop stall. From basic setup to advanced fittings, we ensure you have the right resources to kickstart your business journey. 
  <span className="font-bold">Saylani Microfinance</span> is dedicated to helping entrepreneurs build their dream businesses. Apply now for a Shop Stall Loan and get your business off the ground with confidence.
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
                src={ShopStall}  // Updated image import
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
                src={ShopRent}  // Updated image import
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
<h2 className="text-2xl sm:text-3xl lg:text-3xl text-[#8EC741] font-serif font-bold">
  SHOP RENT
</h2>
<p className="text-sm sm:text-base text-[#0066B3] lg:text-lg leading-relaxed">
  One of the major expenses for a new business is securing a location, and our **Shop Rent Loan** is designed to help you cover the costs of renting the perfect shop space. Whether it's a prime retail location or an affordable space to start your business, this loan ensures you can focus on growing your business without the stress of upfront rent payments. 
  <span className="font-bold">Saylani Microfinance</span> supports your entrepreneurial journey by offering flexible loans tailored to meet your business rental needs. Apply now for a Shop Rent Loan and start your venture today.
</p>


            </motion.div>
          </div>
        </div>
      </div>


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
  SHOP ASSETS
</h2>
<p className="text-sm sm:text-base text-[#0066B3] lg:text-lg leading-relaxed">
  The right equipment and assets are essential to running a successful business. Our **Shop Assets Loan** provides financial support for purchasing or leasing the assets you need, including display racks, furniture, signage, and more. Whether you’re setting up a boutique, café, or a service-oriented business, this loan will help you get the necessary equipment to create a functional and attractive space for your customers. 
  <span className="font-bold">Saylani Microfinance</span> is committed to helping entrepreneurs furnish and equip their businesses with ease. Apply for the Shop Assets Loan and invest in the tools you need to succeed.
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
                src={ShopAssets}  // Updated image import
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
                src={ShopMachinery}  // Updated image import
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
<h2 className="text-2xl sm:text-3xl lg:text-3xl text-[#8EC741] font-serif font-bold">
  SHOP MACHINERY
</h2>
<p className="text-sm sm:text-base text-[#0066B3] lg:text-lg leading-relaxed">
  Some businesses require specialized machinery or equipment to operate effectively. The **Shop Machinery Loan** from Saylani Microfinance provides the funds necessary for purchasing machinery such as refrigerators, ovens, printing machines, or other heavy-duty equipment specific to your business needs. This loan will enable you to scale your operations and increase productivity from day one. 
  <span className="font-bold">Saylani Microfinance</span> is here to support your business with the financial resources required to acquire the machinery you need to succeed. Apply now for a Shop Machinery Loan and give your business the boost it needs to thrive.
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
