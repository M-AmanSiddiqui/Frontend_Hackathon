import React from "react";
import logo from "../assets/images/logo.png"
import { Link } from "react-router-dom";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube } from "react-icons/fa";



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
          <Link to="https://www.facebook.com/saylani.smit/" target="_blank">
            <FaFacebookF className="text-blue-700" />
          </Link>
          <Link to="https://www.youtube.com/@SaylaniWelfareTrustOfficial" target="_blank">
            <FaYoutube className="text-red-600" />
          </Link>
          <Link to="https://pk.linkedin.com/company/saylanimasstraining" target="_blank">
            <FaLinkedinIn className="text-blue-500" />
          </Link>
          <Link to="https://www.instagram.com/officialswit/?hl=en" target="_blank">
            <FaInstagram className="text-pink-600" />
          </Link>
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
