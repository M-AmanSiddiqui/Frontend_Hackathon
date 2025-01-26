
import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Card from "../Components/Card"
const Home = () => {
  return (
    <div>
      <Navbar />
    <section className="relative bg-white overflow-hidden py-48 px-4 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Text Content */}
        <div className="space-y-6">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight text-gray-800">
            Welcome to the <span className="text-green-500">Saylani</span> Welfare Non Governmental Organization in Pakistan
          </h1>
          <p className="text-lg md:text-xl font-semibold text-gray-700">
            The largest NGO offering free <span className="text-blue-500">clean</span>
          </p>
          <p className="text-gray-600">
            Saylani Welfare is on the ground and already working with local
            communities to assess how best to support underprivileged families
            in more than 63 areas of day-to-day lives.
          </p>
          <button className="px-6 py-3 bg-transparent border-2 border-gray-800 rounded-lg text-gray-800 font-medium hover:bg-gray-800 hover:text-white transition">
            Explore More →
          </button>
        </div>

        {/* Circular Images */}
        <div className="relative grid grid-cols-2 gap-4">
          <div className="relative col-span-2 flex justify-end">
            <div
              className="w-32 h-32 md:w-40 md:h-40 bg-cover bg-center rounded-full shadow-lg border-2 border-gray-100"
              style={{
                backgroundImage: "url('https://via.placeholder.com/200')",
              }}
            ></div>
            <div
              className="absolute -bottom-12 -left-8 w-20 h-20 md:w-28 md:h-28 bg-cover bg-center rounded-full shadow-lg border-2 border-gray-100"
              style={{
                backgroundImage: "url('https://via.placeholder.com/200')",
              }}
            ></div>
          </div>
          <div className="relative">
            <div
              className="w-24 h-24 md:w-28 md:h-28 bg-cover bg-center rounded-full shadow-lg border-2 border-gray-100"
              style={{
                backgroundImage: "url('https://via.placeholder.com/200')",
              }}
            ></div>
            <div
              className="absolute -bottom-12 -right-8 w-16 h-16 md:w-20 md:h-20 bg-cover bg-center rounded-full shadow-lg border-2 border-gray-100"
              style={{
                backgroundImage: "url('https://via.placeholder.com/200')",
              }}
            ></div>
          </div>
        </div>
      </div>
    </section>
    <Card />
    <Footer />
    </div>
  );
};

export default Home;
