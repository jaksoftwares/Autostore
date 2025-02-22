import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaCcVisa, FaCcMastercard, FaCcPaypal } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/about" className="hover:underline">About Us</a></li>
            <li><a href="/careers" className="hover:underline">Careers</a></li>
            <li><a href="/blog" className="hover:underline">Blog</a></li>
            <li><a href="/sell" className="hover:underline">Sell on AutoStore</a></li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Customer Service</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/help" className="hover:underline">Help Center</a></li>
            <li><a href="/shipping" className="hover:underline">Shipping Info</a></li>
            <li><a href="/returns" className="hover:underline">Returns & Refunds</a></li>
            <li><a href="/contact" className="hover:underline">Contact Us</a></li>
          </ul>
        </div>

        {/* Legal & Policies */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Legal</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/privacy" className="hover:underline">Privacy Policy</a></li>
            <li><a href="/terms" className="hover:underline">Terms of Service</a></li>
            <li><a href="/refund-policy" className="hover:underline">Refund Policy</a></li>
          </ul>
        </div>

        {/* Newsletter & Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Stay Connected</h3>
          <p className="text-sm mb-3">Subscribe to our newsletter for the latest deals & updates.</p>
          <form className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-3 py-2 rounded-l-md text-black w-full focus:outline-none"
            />
            <button className="bg-red-600 px-4 py-2 rounded-r-md hover:bg-red-700">
              Subscribe
            </button>
          </form>
          <div className="flex space-x-4 mt-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-400">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-400">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-400">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-400">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright & Payment Methods */}
      <div className="mt-8 border-t border-gray-700 pt-6 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} AutoStore. All rights reserved.</p>
        <p className="mt-2 text-gray-400">We accept:</p>
        <div className="flex justify-center space-x-6 mt-2 text-3xl">
          <FaCcVisa className="text-blue-600" />
          <FaCcMastercard className="text-red-600" />
          <FaCcPaypal className="text-blue-500" />
          <FaMobileAlt className="text-green-600" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
