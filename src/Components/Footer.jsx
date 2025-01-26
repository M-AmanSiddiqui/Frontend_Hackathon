import React from "react";
import logo from "../assets/images/logo.png"
import {
    FaFacebookF,
    FaTwitter,
    FaYoutube,
    FaWhatsapp,
  } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-700 text-white py-10">
      {/* Wrapper */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 gap-12 md:grid-cols-4">
        {/* Logo and Social Icons */}
        <div>
          <img
            src={logo} // Replace with your logo path
            alt="Saylani Logo"
            className="mb-4 w-36"
          />
          <div className="flex space-x-3">
            <a
              href="#"
              aria-label="Facebook"
              className="p-2 bg-blue-600 rounded-full hover:bg-blue-700 transition transform hover:scale-110"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="p-2 bg-black rounded-full hover:bg-gray-900 transition transform hover:scale-110"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              aria-label="YouTube"
              className="p-2 bg-red-600 rounded-full hover:bg-red-700 transition transform hover:scale-110"
            >
              <FaYoutube />
            </a>
            <a
              href="#"
              aria-label="WhatsApp"
              className="p-2 bg-green-500 rounded-full hover:bg-green-600 transition transform hover:scale-110"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* About Section */}
        <div>
          <h3 className="font-bold text-lg mb-4">About</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Introduction
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Chairman Message
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Annual Report
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Bank Details
              </a>
            </li>
          </ul>
        </div>

        {/* Explore Section */}
        <div>
          <h3 className="font-bold text-lg mb-4">Explore</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                News
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Media
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Donations
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="font-bold text-lg mb-4">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li>A-25, Bahadurabad Chowrangi Karachi, Pakistan</li>
            <li>UAN: 111-729-526 (+0092-213)4130786-90</li>
            <li>Cell: 92-311-1729526</li>
            <li>USA NO: +1(716)941 7792</li>
            <li>UK NO: (+44)115 970 6256</li>
            
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-600 pt-4 text-center text-sm text-gray-400">
        <p>IP address data powered by IPinfo</p>
        <p className="mt-2">
          Copyright © {new Date().getFullYear()} by Saylani Welfare Int Trust
        </p>
      </div>
    </footer>
  );
};

export default Footer;
